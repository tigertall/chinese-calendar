import * as LC from './chineseCalendar.js';

let passed = 0;
let failed = 0;

function assert(condition, message) {
    if (condition) {
        passed++;
        print(`  PASS: ${message}`);
    } else {
        failed++;
        print(`  FAIL: ${message}`);
    }
}

function assertEqual(actual, expected, label) {
    const ok = actual === expected;
    if (ok) {
        passed++;
        print(`  PASS: ${label}`);
    } else {
        failed++;
        print(`  FAIL: ${label}\n        expected: ${JSON.stringify(expected)}\n        actual:   ${JSON.stringify(actual)}`);
    }
}

function print(msg) {
    console.log(msg);
}

function regionTestSet(name, mockRegion) {
    const mockSettings = {
        get_string: (key) => {
            if (key === 'festival-region') return mockRegion;
            return '';
        }
    };
    LC.setHolidayRegion(mockSettings);
    return mockSettings;
}

regionTestSet('中国大陆', 'CN');

print('\n=== 中国大陆 农历计算测试 ===\n');

const cnTests = [
    { year: 2022, month: 9, day: 7, expected: '白露-八月十二' },
    { year: 2023, month: 11, day: 8, expected: '立冬-九月廿五' },
    { year: 2023, month: 11, day: 22, expected: '小雪-十月初十' },
    { year: 2024, month: 2, day: 10, expected: '春节-正月初一' },
    { year: 2024, month: 1, day: 1, expected: '元旦-十一月二十' },
    { year: 2025, month: 1, day: 29, expected: '春节-正月初一' },
    { year: 2026, month: 2, day: 16, expected: '除夕-腊月廿九' },
    { year: 2026, month: 3, day: 26, expected: '初八-二月初八' },
    { year: 2026, month: 6, day: 5, expected: '芒种-四月二十' },
    { year: 2024, month: 9, day: 17, expected: '中秋节-八月十五' },
    { year: 2024, month: 6, day: 10, expected: '端午节-五月初五' },
    { year: 2045, month: 1, day: 20, expected: '大寒-腊月初三' },
    { year: 2048, month: 1, day: 6, expected: '小寒-十一月廿一' },
    { year: 2026, month: 4, day: 22, expected: '初六-三月初六' },
    { year: 2023, month: 3, day: 22, expected: '闰二月-闰二月初一' },
    { year: 2023, month: 3, day: 23, expected: '初二-闰二月初二' },
    { year: 1900, month: 1, day: 31, expected: '春节-正月初一' },
    { year: 2100, month: 12, day: 31, expected: '腊月-腊月初一' },
];

for (const tc of cnTests) {
    const info = LC.solarToLunar(tc.year, tc.month, tc.day);
    assert(info !== null, `${tc.year}-${tc.month}-${tc.day} 计算成功`);
    if (info) {
        const checkText = LC.getDisplayText(info) + '-' + info.fullDate;
        assertEqual(checkText, tc.expected, `${tc.year}-${tc.month}-${tc.day}: "${tc.expected}"`);
    }
}

print('\n=== 中国大陆 节日识别测试 ===\n');

const cnFestivalTests = [
    { year: 2026, month: 2, day: 17, expected: '春节' },
    { year: 2026, month: 9, day: 25, expected: '中秋节' },
    { year: 2026, month: 10, day: 1, expected: '国庆节' },
    { year: 2026, month: 1, day: 1, expected: '元旦' },
    { year: 2026, month: 6, day: 1, expected: '儿童节' },
    { year: 2026, month: 5, day: 4, expected: '青年节' },
    { year: 2026, month: 5, day: 1, expected: '劳动节' },
    { year: 2026, month: 12, day: 13, expected: '公祭日' },
];

for (const tc of cnFestivalTests) {
    const info = LC.solarToLunar(tc.year, tc.month, tc.day);
    if (info) {
        const display = LC.getDisplayText(info);
        assertEqual(display, tc.expected, `${tc.year}-${tc.month}-${tc.day} 节日: "${tc.expected}"`);
    }
}

print('\n=== 中国香港 测试 ===\n');
regionTestSet('中国香港', 'HK');

const hkTests = [
    { year: 2026, month: 7, day: 1, expected: '香港特別行政區成立紀念日' },
    { year: 2026, month: 12, day: 26, expected: '節禮日' },
    { year: 2026, month: 10, day: 18, expected: '重陽節' },
];

for (const tc of hkTests) {
    const info = LC.solarToLunar(tc.year, tc.month, tc.day);
    if (info) {
        const display = LC.getDisplayText(info);
        assertEqual(display, tc.expected, `${tc.year}-${tc.month}-${tc.day} 香港节日: "${tc.expected}"`);
    }
}

print('\n=== 中国台湾 测试 ===\n');
regionTestSet('中国台湾', 'TW');

const twTests = [
    { year: 2026, month: 1, day: 1, expected: '中華民國開國紀念日' },
    { year: 2026, month: 2, day: 28, expected: '和平紀念日' },
    { year: 2026, month: 10, day: 10, expected: '國慶日' },
    { year: 2026, month: 10, day: 25, expected: '臺灣光復' },
    { year: 2026, month: 12, day: 25, expected: '行憲紀念' },
];

for (const tc of twTests) {
    const info = LC.solarToLunar(tc.year, tc.month, tc.day);
    if (info) {
        const display = LC.getDisplayText(info);
        assertEqual(display, tc.expected, `${tc.year}-${tc.month}-${tc.day} 台湾节日: "${tc.expected}"`);
    }
}

print('\n=== 节气计算测试 (2026年) ===\n');
regionTestSet('中国大陆', 'CN');

const termTests2026 = [
    { month: 1, day: 5, expected: '小寒' },
    { month: 1, day: 20, expected: '大寒' },
    { month: 2, day: 4, expected: '立春' },
    { month: 2, day: 18, expected: '雨水' },
    { month: 3, day: 5, expected: '惊蛰' },
    { month: 3, day: 20, expected: '春分' },
    { month: 6, day: 21, expected: '夏至' },
    { month: 12, day: 22, expected: '冬至' },
    { month: 12, day: 7, expected: '大雪' },
];

for (const tc of termTests2026) {
    const term = LC.getSolarTerm(2026, tc.month, tc.day);
    assertEqual(term, tc.expected, `2026-${tc.month}-${tc.day} 节气: "${tc.expected}"`);
}

print('\n=== 动态节日测试 (母亲节/父亲节) ===\n');
regionTestSet('中国大陆', 'CN');

const dynamicFestivalTests = [
    { year: 2026, month: 5, day: 10, expected: '母亲节' },
    { year: 2026, month: 6, day: 21, expected: '父亲节' },
    { year: 2025, month: 5, day: 11, expected: '母亲节' },
    { year: 2025, month: 6, day: 15, expected: '父亲节' },
    { year: 2024, month: 5, day: 12, expected: '母亲节' },
    { year: 2024, month: 6, day: 16, expected: '父亲节' },
];

for (const tc of dynamicFestivalTests) {
    const info = LC.solarToLunar(tc.year, tc.month, tc.day);
    if (info) {
        assert(info.gregorianFestival === tc.expected,
            `${tc.year}-${tc.month}-${tc.day} 动态节日: "${tc.expected}" (got: ${info.gregorianFestival})`);
    }
}

print('\n=== 边界条件测试 ===\n');

assert(LC.solarToLunar(1899, 1, 1) === null, '1899年返回null（超出范围）');
assert(LC.solarToLunar(2101, 1, 1) === null, '2101年返回null（超出范围）');
assert(LC.getDisplayText(null) === '', 'getDisplayText(null) 返回空字符串');

print(`\n========================================`);
print(`  测试结果: ${passed} 通过, ${failed} 失败, ${passed + failed} 总计`);
print(`========================================`);

if (failed > 0) {
    throw new Error(`${failed} 个测试失败`);
}
