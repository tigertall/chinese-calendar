// 香港公众假期数据抓取脚本
// 数据源：https://www.gov.hk/sc/about/abouthk/holiday/

import { fetchFromGitHubPages, writeIfNeeded, getGeneratedTime, hasNextYearData } from './utils.js';

const BASE_URL = 'https://www.gov.hk';
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

function parseIndexPage(html) {
    const links = [];
    const regex = /<a[^>]*href="(\/sc\/about\/abouthk\/holiday\/(\d{4})\.htm)"[^>]*>[\s\S]*?(\d{4})年[^<]*公众假期[^<]*<\/a>/g;
    let match;

    while ((match = regex.exec(html)) !== null) {
        links.push({
            url: BASE_URL + match[1],
            year: parseInt(match[2] || match[3])
        });
    }

    // 按年份降序，取前三个
    links.sort((a, b) => b.year - a.year);
    return links.slice(0, 3);
}

function parseDate(dateStr, year) {
    const match = dateStr.trim().match(/(\d+)月(\d+)日/);
    if (!match) return null;
    const m = String(parseInt(match[1])).padStart(2, '0');
    const d = String(parseInt(match[2])).padStart(2, '0');
    return `${year}-${m}-${d}`;
}

function isConsecutive(prevDate, nextDate) {
    const d1 = new Date(prevDate + 'T00:00:00+08:00');
    const d2 = new Date(nextDate + 'T00:00:00+08:00');
    return d1.getTime() + 86400000 === d2.getTime();
}

function parseHolidayPage(html, year) {
    const holidays = [];
    const regex = /<td class="desc"[^>]*>([^<]+)<\/td>\s*<td class="date"[^>]*>([^<]+)<\/td>/g;
    let match;

    while ((match = regex.exec(html)) !== null) {
        const name = match[1].trim();
        const dateStr = match[2].trim();

        // 跳过「每个星期日」
        if (name === '每个星期日') continue;

        const date = parseDate(dateStr, year);
        if (!date) continue;

        holidays.push({ name, date });
    }

    // 合并连续日期
    const groups = [];
    let current = null;

    for (const h of holidays) {
        if (!current) {
            current = { start: h.date, end: h.date, names: [h.name] };
        } else if (isConsecutive(current.end, h.date)) {
            current.end = h.date;
            if (!current.names.includes(h.name)) {
                current.names.push(h.name);
            }
        } else {
            groups.push({
                Name: current.names.join('、'),
                StartDate: current.start,
                EndDate: current.end,
                CompDays: []
            });
            current = { start: h.date, end: h.date, names: [h.name] };
        }
    }

    if (current) {
        groups.push({
            Name: current.names.join('、'),
            StartDate: current.start,
            EndDate: current.end,
            CompDays: []
        });
    }

    return groups;
}

async function main() {
    console.log('开始获取香港公众假期数据...');

    try {
        const existingData = await fetchFromGitHubPages('holidays_hk.json');
        
        if (hasNextYearData(existingData)) {
            console.log("明年数据已存在，无需更新。");
            return;
        }

        console.log('正在访问索引页面...');
        const indexHtml = await httpFetch(BASE_URL + '/sc/about/abouthk/holiday/');

        console.log('正在解析年份链接...');
        const links = parseIndexPage(indexHtml);

        if (links.length === 0) {
            console.log('未找到年份链接');
            return;
        }

        console.log(`找到 ${links.length} 个年份链接:`);
        links.forEach(link => console.log(`  - ${link.year}年: ${link.url}`));

        const yearsData = {};

        for (const link of links) {
            console.log(`正在获取 ${link.year}年 数据...`);
            const html = await httpFetch(link.url);
            const holidays = parseHolidayPage(html, link.year);
            yearsData[String(link.year)] = holidays;
            console.log(`  -> ${holidays.length} 条记录`);
        }

        const output = {
            Version: '1.0',
            Generated: getGeneratedTime(),
            Region: 'HK',
            Years: yearsData
        };

        const updated = await writeIfNeeded(output, existingData, 'holidays_hk.json');
        
        if (updated) {
            console.log('已触发更新');
        }

    } catch (error) {
        console.error('获取数据失败:', error.message);
        process.exit(1);
    }
}

main();