// 台湾政府办公日历数据抓取脚本
// 数据源：https://data.gov.tw/dataset/14718

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import iconv from 'iconv-lite';
import { fetchFromGitHubPages, writeIfNeeded, getGeneratedTime, hasNextYearData } from './utils.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const USER_AGENT = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

async function httpFetch(url) {
    const response = await globalThis.fetch(url, {
        headers: {
            'User-Agent': USER_AGENT,
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
        }
    });
    return await response.text();
}

async function downloadFile(url, filepath) {
    const response = await globalThis.fetch(url, {
        headers: {
            'User-Agent': USER_AGENT
        }
    });
    const buffer = await response.arrayBuffer();
    fs.writeFileSync(filepath, Buffer.from(buffer));
}

function parseCSVLinks(html) {
    const links = [];

    // 匹配 title="CSV下載檔案" 的 <a> 标签及其后面的 <span> 中的标题
    const regex = /<a[^>]*href="([^"]*\.csv[^"]*)"[^>]*title="CSV下載檔案"[^>]*>[\s\S]*?<\/a>[\s\S]*?<span[^>]*>([^<]+)<\/span>/g;
    let match;

    while ((match = regex.exec(html)) !== null) {
        const url = match[1];
        const title = match[2].trim();
        if (title.includes('Google行事曆專用') || title === '114年中華民國政府行政機關辦公日曆表') { 
            continue; 
        }

        links.push({
            url: url,
            title: title
        });
    }

    return links;
}

function formatDate(yyyymmdd) {
    return `${yyyymmdd.slice(0, 4)}-${yyyymmdd.slice(4, 6)}-${yyyymmdd.slice(6, 8)}`;
}

function isConsecutive(prevDate, nextDate) {
    const d1 = new Date(prevDate + 'T00:00:00+08:00');
    const d2 = new Date(nextDate + 'T00:00:00+08:00');
    return d1.getTime() + 86400000 === d2.getTime();
}

function parseCSV(csvContent) {
    const lines = csvContent.split('\n');
    const rows = [];

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        const fields = [];
        let currentField = '';
        let inQuotes = false;

        for (let j = 0; j < line.length; j++) {
            const char = line[j];
            if (char === '"' && inQuotes && line[j + 1] === '"') {
                currentField += '"';
                j++;
            } else if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                fields.push(currentField);
                currentField = '';
            } else {
                currentField += char;
            }
        }
        fields.push(currentField);

        if (fields.length < 4) continue;

        const [dateStr, weekday, isHoliday, remark] = fields;
        if (!remark || remark.trim() === '') continue;

        rows.push({
            date: formatDate(dateStr),
            isHoliday: parseInt(isHoliday) === 2,
            remark: remark.trim()
        });
    }

    const groups = [];
    let currentGroup = null;

    for (const row of rows) {
        if (row.isHoliday) {
            if (!currentGroup) {
                currentGroup = {
                    start: row.date,
                    end: row.date,
                    names: [],
                    compDays: []
                };
            } else if (isConsecutive(currentGroup.end, row.date)) {
                currentGroup.end = row.date;
            } else {
                groups.push(finalizeGroup(currentGroup));
                currentGroup = {
                    start: row.date,
                    end: row.date,
                    names: [],
                    compDays: []
                };
            }
            if (row.remark !== '補假') {
                if (!currentGroup.names.includes(row.remark)) {
                    currentGroup.names.push(row.remark);
                }
            }
        } else {
            if (row.remark === '補行上班') {
                if (currentGroup) {
                    currentGroup.compDays.push(row.date);
                }
            }
            if (currentGroup) {
                groups.push(finalizeGroup(currentGroup));
                currentGroup = null;
            }
        }
    }

    if (currentGroup) {
        groups.push(finalizeGroup(currentGroup));
    }

    function finalizeGroup(group) {
        return {
            Name: group.names.join('、'),
            StartDate: group.start,
            EndDate: group.end,
            CompDays: group.compDays
        };
    }

    return groups;
}

function rocToWestern(rocYear) {
    return String(parseInt(rocYear) + 1911);
}

async function main() {
    console.log('开始获取台湾政府办公日历数据...');

    try {
        const existingData = await fetchFromGitHubPages('holidays_tw.json');
        
        if (hasNextYearData(existingData)) {
            console.log("明年数据已存在，无需更新。");
            return;
        }

        console.log('正在访问数据源页面...');
        const html = await httpFetch('https://data.gov.tw/dataset/14718');
        console.log('正在解析CSV下载链接...');
        let csvLinks = parseCSVLinks(html);

        if (csvLinks.length === 0) {
            console.log('未找到CSV下载链接');
            return;
        }

        console.log(`找到 ${csvLinks.length} 个CSV文件:`);
        csvLinks.forEach(link => console.log(`  - ${link.title}`));

        // 只生成最近三年的数据就可以
        if (csvLinks.length > 3) {
            csvLinks = csvLinks.slice(-3);
        }

        const outputDir = path.join(__dirname, '../data');
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        const yearsData = {};

        for (const link of csvLinks) {
            const rocYear = link.title.match(/(\d+)年/);
            if (!rocYear) {
                console.log(`跳过: ${link.title} (无法识别年份)`);
                continue;
            }
            const westernYear = rocToWestern(rocYear[1]);

            console.log(`正在下载: ${link.title}`);
            const csvPath = path.join(outputDir, link.title + '.csv');

            try {
                await downloadFile(link.url, csvPath);
                console.log(`正在解析: ${link.title}`);

                let csvContent;
                if (link.title === '114年中華民國政府行政機關辦公日曆表(1141020更新)') {
                    const buf = fs.readFileSync(csvPath);
                    csvContent = iconv.decode(buf, 'big5');
                } else {
                    csvContent = fs.readFileSync(csvPath, 'utf-8');
                }
                const holidays = parseCSV(csvContent);
                yearsData[westernYear] = holidays;

                console.log(`  -> 西元 ${westernYear} 年，${holidays.length} 条数据`);
                fs.unlinkSync(csvPath);
            } catch (error) {
                console.log(`处理 ${link.title} 失败: ${error.message}`);
            }
        }

        // 合并输出到单个 JSON 文件
        if (Object.keys(yearsData).length === 0) {
            console.log('未能获取到任何年份数据，跳过写入以避免覆盖已有文件。');
            return;
        }

        const holidays = {
            Version: '1.0',
            Generated: getGeneratedTime(),
            Region: 'TW',
            Years: yearsData
        };

        const updated = await writeIfNeeded(holidays, existingData, 'holidays_tw.json');
        
        if (updated) {
            console.log('已触发更新');
        }

    } catch (error) {
        console.error('获取数据失败:', error.message);
        process.exit(1);
    }
}

main();