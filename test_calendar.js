// Chinese Calendar calculation module test
import * as LC from './chineseCalendar.js';

// 测试几个已知日期
const testCases = [
    { year: 2022, month: 9, day: 7, expected: '白露' },
    { year: 2023, month: 11, day: 8, expected: '立冬' },
    { year: 2023, month: 11, day: 22, expected: '小雪' },
    { year: 2024, month: 2, day: 10, expected: '春节' },
    { year: 2024, month: 1, day: 1, expected: '元旦' },
    { year: 2025, month: 1, day: 29, expected: '春节' },
    { year: 2026, month: 3, day: 26, expected: null },  // 今天
    { year: 2026, month: 6, day: 5, expected: '芒种' },
    { year: 2024, month: 9, day: 17, expected: '中秋节' },
    { year: 2024, month: 6, day: 10, expected: '端午节' },
    { year: 2045, month: 1, day: 20, expected: '大寒' },
    { year: 2048, month: 1, day: 6, expected: '小寒' },
];

console.log('=== 农历计算模块测试 ===\n');

for (const tc of testCases) {
    const info = LC.solarToLunar(tc.year, tc.month, tc.day);
    if (info) {
        /*
        console.log(`${tc.year}-${tc.month}-${tc.day}:`);
        console.log(`  农历: ${info.fullDate}`);
        console.log(`  干支: ${info.ganZhiYear}年 生肖: ${info.zodiac}`);
        console.log(`  传统节日: ${info.festival || '无'}`);
        console.log(`  公历节日: ${info.gregorianFestival || '无'}`);
        console.log(`  节气: ${info.solarTerm || '无'}`);
        console.log(`  显示(节日优先): ${LC.getDisplayText(info)}`);
        console.log(`  完整: ${info.ganZhiYear}年 ${info.monthName}${info.dayName} 【${info.zodiac}年】`);
        */
        if (tc.expected) {
            const festivals = [];
            if (info.festival) festivals.push(info.festival);
            if (info.gregorianFestival) festivals.push(info.gregorianFestival);
            if (info.solarTerm) festivals.push(info.solarTerm);
            const found = festivals.includes(tc.expected);
            console.log(`  验证${tc.year}-${tc.month}-${tc.day}: "${tc.expected}": ${found ? 'PASS' : 'FAIL'} (got: ${festivals.join(', ')})`);
        }
        // console.log('');
    } else {
        console.log(`${tc.year}-${tc.month}-${tc.day}: 无法计算`);
    }
}

// 测试今天
const now = new Date();
const today = LC.solarToLunar(now.getFullYear(), now.getMonth() + 1, now.getDate());
console.log(`今天 (${now.toLocaleDateString('zh-CN')}):`);
console.log(`  ${today.ganZhiYear}年 ${today.monthName}${today.dayName} 【${today.zodiac}年】`);

// 测试节气
console.log('\n=== 2026年节气测试 ===');
for (let m = 1; m <= 12; m++) {
    for (let d = 1; d <= 31; d++) {
        const term = LC.getSolarTerm(2026, m, d);
        if (term) {
            console.log(`  ${2026}-${m}-${d}: ${term}`);
        }
    }
}

// 输出未来节气日期列表
/*
for (let year = 2000; year <= 2059; year++) {
    let holiday= []; 
    for (let m = 1; m <= 12; m++) {
        for (let d = 1; d <= 31; d++) {
            const term = LC.getSolarTerm(year, m, d);
            if (term) {
                holiday.push(`${m.toString().padStart(2, '0')}${d.toString().padStart(2, '0')}`);
            }
        }
    }
    console.log(`${year}: ` + holiday.join(','));
}
*/