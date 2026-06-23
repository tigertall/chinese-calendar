#!/usr/bin/env -S gjs -m
/**
 * 加载 tyme 基准数据，与 ChineseCalendar.js 逐日对比干支、农历日期、节气
 */
import GLib from 'gi://GLib';
import {solarToLunar} from '../chineseCalendar.js';

const refPath = '/tmp/tyme_ref.json';

const [ok, content] = GLib.file_get_contents(refPath);
if (!ok) {
    printerr(`无法读取 ${refPath}`);
    imports.system.exit(1);
}

const decoder = new TextDecoder('utf-8');
const ref = JSON.parse(decoder.decode(content));

const START_YEAR = 2000;
const END_YEAR = 2053;
let total = 0;
const diffDay = [];
const diffMonth = [];
const diffYear = [];
const diffLunarMonth = [];
const diffLunarDay = [];
const diffLunarYear = [];
const diffSolarTerm = [];

for (let y = START_YEAR; y <= END_YEAR; y++) {
    for (let m = 1; m <= 12; m++) {
        const daysInMonth = new Date(y, m, 0).getDate();
        for (let d = 1; d <= daysInMonth; d++) {
            total++;
            const key = `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
            const tymeRef = ref[key];
            if (!tymeRef) {
                print(`缺少 tyme 数据: ${key}`);
                continue;
            }

            const our = solarToLunar(y, m, d);
            if (!our) continue;

            // 干支比较
            if (our.dayGanZhi !== tymeRef.dayGz) {
                diffDay.push(`${key} | 我们:${our.dayGanZhi} tyme:${tymeRef.dayGz}`);
            }
            if (our.monthGanZhi !== tymeRef.monthGz) {
                diffMonth.push(`${key} | 我们:${our.monthGanZhi} tyme:${tymeRef.monthGz}`);
            }
            if (our.ganZhiYear !== tymeRef.yearGz) {
                diffYear.push(`${key} | 我们:${our.ganZhiYear} tyme:${tymeRef.yearGz}`);
            }

            // 农历日期比较
            // tyme: lunarMonth 负值 = 闰月，our: lunarMonth 1-12 + isLeap
            const tymeIsLeap = tymeRef.lunarMonth < 0;
            const tymeLunarMonth = Math.abs(tymeRef.lunarMonth);

            if (our.lunarYear !== tymeRef.lunarYear) {
                diffLunarYear.push(`${key} | 我们:${our.lunarYear} tyme:${tymeRef.lunarYear}`);
            }
            if (our.lunarMonth !== tymeLunarMonth || our.isLeap !== tymeIsLeap) {
                const ourLabel = (our.isLeap ? '闰' : '') + our.lunarMonth;
                const tymeLabel = (tymeIsLeap ? '闰' : '') + tymeLunarMonth;
                diffLunarMonth.push(`${key} | 我们:${ourLabel}月 tyme:${tymeLabel}月`);
            }
            if (our.lunarDay !== tymeRef.lunarDay) {
                diffLunarDay.push(`${key} | 我们:${our.lunarDay}(${our.dayName}) tyme:${tymeRef.lunarDay}(${tymeRef.lunarName})`);
            }

            // 节气比较
            const ourTerm = our.solarTerm || null;
            const tymeTerm = tymeRef.solarTerm || null;
            if (ourTerm !== tymeTerm) {
                diffSolarTerm.push(`${key} | 我们:${ourTerm || '无'} tyme:${tymeTerm || '无'}`);
            }
        }
    }
    if (y % 10 === 0) print(`进度: ${y}`);
}

print(`\n========== 比较完成: ${total} 天 ==========`);

// 干支
if (diffDay.length === 0) {
    print('\n✅ 日干支: 全部一致');
} else {
    print(`\n❌ 日干支差异: ${diffDay.length} 处`);
    diffDay.slice(0, 30).forEach(d => print('  ' + d));
    if (diffDay.length > 30) print(`  ... 共 ${diffDay.length} 处`);
}

if (diffMonth.length === 0) {
    print('\n✅ 月干支: 全部一致');
} else {
    print(`\n❌ 月干支差异: ${diffMonth.length} 处`);
    diffMonth.slice(0, 30).forEach(d => print('  ' + d));
    if (diffMonth.length > 30) print(`  ... 共 ${diffMonth.length} 处`);
}

if (diffYear.length === 0) {
    print('\n✅ 年干支: 全部一致');
} else {
    print(`\n❌ 年干支差异: ${diffYear.length} 处`);
    diffYear.slice(0, 30).forEach(d => print('  ' + d));
    if (diffYear.length > 30) print(`  ... 共 ${diffYear.length} 处`);
}

// 农历
if (diffLunarYear.length === 0) {
    print('\n✅ 农历年份: 全部一致');
} else {
    print(`\n❌ 农历年份差异: ${diffLunarYear.length} 处`);
    diffLunarYear.slice(0, 30).forEach(d => print('  ' + d));
    if (diffLunarYear.length > 30) print(`  ... 共 ${diffLunarYear.length} 处`);
}

if (diffLunarMonth.length === 0) {
    print('\n✅ 农历月份(含闰月): 全部一致');
} else {
    print(`\n❌ 农历月份差异: ${diffLunarMonth.length} 处`);
    diffLunarMonth.slice(0, 30).forEach(d => print('  ' + d));
    if (diffLunarMonth.length > 30) print(`  ... 共 ${diffLunarMonth.length} 处`);
}

if (diffLunarDay.length === 0) {
    print('\n✅ 农历日期: 全部一致');
} else {
    print(`\n❌ 农历日期差异: ${diffLunarDay.length} 处`);
    diffLunarDay.slice(0, 30).forEach(d => print('  ' + d));
    if (diffLunarDay.length > 30) print(`  ... 共 ${diffLunarDay.length} 处`);
}

// 节气
if (diffSolarTerm.length === 0) {
    print('\n✅ 节气: 全部一致');
} else {
    print(`\n❌ 节气差异: ${diffSolarTerm.length} 处`);
    diffSolarTerm.slice(0, 30).forEach(d => print('  ' + d));
    if (diffSolarTerm.length > 30) print(`  ... 共 ${diffSolarTerm.length} 处`);
}
