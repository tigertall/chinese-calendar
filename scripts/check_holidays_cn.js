import axios from 'axios';
import * as cheerio from 'cheerio';
import { fetchFromGitHubPages, writeIfNeeded, getGeneratedTime, hasNextYearData, getCurrentYear } from './utils.js';

/**
 * check_holidays.js
 * 
 * Scrape gov.cn policy search results for "部分节假日" and parse holiday / workday dates.
 */

async function searchPolicy(pageNo = 1, pageSize = 10) {
    /**
     * Use the alternate gov.cn search endpoint (GET) to find policy links.
     * 
     * Builds query params similar to the curl provided by the user and returns a
     * list of results with keys: title, url, publish_time, fwzh, cwrq.
     */
    const params = {
        t: "zhengcelibrary_gw",
        q: "部分节假日",
        timetype: "timeqb",
        mintime: "",
        maxtime: "",
        sort: "pubtime",
        sortType: "1",
        searchfield: "title",
        pcodeJiguan: "国办发明电",
        p: pageNo,
        n: pageSize,
        type: "gwyzcwjk",
    };
    
    const SEARCH_ALT_URL = "https://sousuo.www.gov.cn/search-gov/data";
    const queryString = new URLSearchParams(params).toString();
    const url = `${SEARCH_ALT_URL}?${queryString}`;
    
    const response = await axios.get(url, { timeout: 20000 });
    const body = response.data;

    const items = body["searchVO"]["listVO"];
    const results = [];
    for (const item of items) {
        results.push({
            title: item.title,
            url: item.url,
        });
    }
    return results;
}

function extractTextFromHtml(html) {
    // 简单的HTML转文本函数，模拟BeautifulSoup的get_text()
    return html.replace(/<[^>]*>/g, ' ')
               .replace(/\s+/g, ' ')
               .trim();
}

function parsePolicyPage(url) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(url, { 
                timeout: 20000,
                headers: {
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                }
            });
            
            const $ = cheerio.load(response.data);
            const htmlText = $('body').text();
            const text = htmlText.replace(/\s+/g, ' ').trim();
            
            // console.log(`text:${text}`);
            
            const yearMatch = text.match(/国务院办公厅关于(\d{4})年部分节假日安排的通知/);
            if (!yearMatch) {
                resolve([null, null]);
                return;
            }
            const year = parseInt(yearMatch[1]);

            const holidays = [];
            // Extract using regex patterns
            // Match numbered format: "一、"、"二、"等
            const pattern = /[一二三四五六七]、(.*?)：(.*?)。(?=[二三四五六七]、|节假日期间)/gs;
            const matches = [...text.matchAll(pattern)];
            
            for (const m of matches) {
                const holidayNames = m[1].trim();
                let body = m[2].trim();
                if (!body) continue;
                
                let startDate = null;
                let endDate = null;
                const workdays = [];
                
                // Extract holiday date range
                const rangeMatch = body.match(
                    /(?:(\d{4})年)?(\d{1,2})月(\d{1,2})日[^至]*至(?:(\d{4})年)?(?:(\d{1,2})月)?(\d{1,2})日/
                );
                
                if (rangeMatch) {
                    const startYear = rangeMatch[1] ? parseInt(rangeMatch[1]) : year;
                    const startMonth = parseInt(rangeMatch[2]);
                    const startDay = parseInt(rangeMatch[3]);
                    const endYear = rangeMatch[4] ? parseInt(rangeMatch[4]) : startYear;
                    const endMonth = rangeMatch[5] ? parseInt(rangeMatch[5]) : startMonth;
                    const endDay = parseInt(rangeMatch[6]);
                    
                    startDate = `${String(startYear).padStart(4, '0')}-${String(startMonth).padStart(2, '0')}-${String(startDay).padStart(2, '0')}`;
                    endDate = `${String(endYear).padStart(4, '0')}-${String(endMonth).padStart(2, '0')}-${String(endDay).padStart(2, '0')}`;
                } else {
                    // Try single date format
                    const singleMatch = body.match(/(\d{1,2})月(\d{1,2})日.*?放假/);
                    if (singleMatch) {
                        startDate = `${year}-${String(parseInt(singleMatch[1])).padStart(2, '0')}-${String(parseInt(singleMatch[2])).padStart(2, '0')}`;
                        endDate = startDate;
                    }
                }
                
                // Extract workdays: dates between "放假" and "上班"
                const workdaySectionMatch = body.match(/共\d+天。(.*?)上班/);
                if (workdaySectionMatch) {
                    const workdaySection = workdaySectionMatch[1];
                    const workdayMatches = [...workdaySection.matchAll(/(\d{1,2})月(\d{1,2})日/g)];
                    for (const wm of workdayMatches) {
                        const candidate = `${year}-${String(parseInt(wm[1])).padStart(2, '0')}-${String(parseInt(wm[2])).padStart(2, '0')}`;
                        workdays.push(candidate);
                    }
                    // Remove duplicates and sort
                    const uniqueWorkdays = [...new Set(workdays)].sort();
                    workdays.length = 0;
                    workdays.push(...uniqueWorkdays);
                }
                
                if (startDate || workdays.length > 0) {
                    holidays.push({
                        Name: holidayNames,
                        StartDate: startDate,
                        EndDate: endDate,
                        CompDays: workdays
                    });
                }
            }
            
            resolve([String(year), holidays]);
        } catch (error) {
            console.error(`解析政策页面失败 ${url}:`, error.message);
            reject(error);
        }
    });
}

async function main() {
    const existingData = await fetchFromGitHubPages('holidays_cn.json');
    
    // 如果已经有明年数据，不需要执行了
    if (hasNextYearData(existingData)) {
        console.log("明年数据已存在，无需更新。");
        return;
    }

    const links = await searchPolicy(1, 4);
    
    const yearsData = {};
    for (const item of links) {
        console.log(item.title, item.url);
        const [year, yearlyData] = await parsePolicyPage(item.url);
        if (year && yearlyData) {
            yearsData[year] = yearlyData;
        }
    }
    
    const holidays = {
        Version: "1.0",
        Generated: getGeneratedTime(),
        Region: 'CN',
        Years: yearsData
    };

    const updated = await writeIfNeeded(holidays, existingData, 'holidays_cn.json');
    
    if (updated) {
        console.log('已触发更新');
    }
}

// 兼容 ES Module 的主程序入口判断
if (import.meta.url === `file://${process.argv[1]}`) {
    main().catch(console.error);
}

export { searchPolicy, parsePolicyPage, main };
