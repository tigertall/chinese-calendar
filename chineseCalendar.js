// Chinese Calendar calculation module for GNOME Shell Extension
// GNOME Shell 48 ESM Module

import { REGION_LOCALES, REGION_FESTIVALS, getRegion } from './locale.js';

/**
 * 农历数据表 (1900-2100)
 * 每个数值表示该年的农历信息，通过位运算提取：
 * - 第1-4位：闰月月份，0表示没有闰月
 * - 第5-16位：1-12月大小月信息，1表示大月(30天)，0表示小月(29天)
 * - 第17-20位：闰月大小，1表示大月(30天)，0表示小月(29天)
 */
const LUNAR_INFO = [
    0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, // 1900-1909
    0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, // 1910-1919
    0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, // 1920-1929
    0x06566, 0x0d4a0, 0x0ea50, 0x16a95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, // 1930-1939
    0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, // 1940-1949
    0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0, // 1950-1959
    0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, // 1960-1969
    0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6, // 1970-1979
    0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, // 1980-1989
    0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0, // 1990-1999
    0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, // 2000-2009
    0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, // 2010-2019
    0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, // 2020-2029
    0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, // 2030-2039
    0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0, // 2040-2049
    0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06aa0, 0x1a6c4, 0x0aae0, // 2050-2059
    0x092e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4, // 2060-2069
    0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0, // 2070-2079
    0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160, // 2080-2089
    0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252, // 2090-2099
    0x0d520 // 2100
];

// 地区化常量（模块内部通过 _ensureConfig 延迟初始化）
let _config = null;

function _loadConfig(settings) {
    const region = getRegion(settings);
    const locale = REGION_LOCALES[region];
    const festivals = REGION_FESTIVALS[region];
    _config = Object.freeze({
        region,
        tianGan: locale.tianGan,
        diZhi: locale.diZhi,
        shengXiao: locale.shengXiao,
        lunarMonthNames: locale.lunarMonthNames,
        lunarDayNames: locale.lunarDayNames,
        solarTerms: locale.solarTerms,
        lunarCalendarLabel: locale.lunarCalendarLabel,
        traditionalFestivals: festivals.traditional,
        gregorianFestivals: festivals.gregorian,
        dynamicFestivals: festivals.dynamic,
        fixedDateFestivals: festivals.fixedDate,
    });
}

function _ensureConfig() {
    if (!_config) {
        _loadConfig(null);
    }
}

export function setHolidayRegion(settings) {
    _loadConfig(settings);
}

export function clearConfig() {
    _config = null;
}

// 计算农历的基准日期：1900年1月31日（农历1900年正月初一）
const BASE_DATE = new Date("1900-01-31T00:00:00+08:00");

// 节气数据表 - 每年24节气对应的分钟偏移量基准，目前能用到 2053年，2054年冲突不可避免。
const TROPICAL_YEAR = 365.24219878;  // 回归年长度 (天)
const YEAR_BASE = 2000; // 计算基准年
// 节气基准日期：2000年1月1日0时0分0秒（北京时间），这个日期是为了配合节气数据表的分钟偏移量计算的。
const TERM_BASE_DATE = new Date(`${YEAR_BASE}-01-01T00:00:00+08:00`);
// 数组每一项代表在2000年该节气距离北京时间2000年1月1日0时0分0秒的总分钟数
// 节气时间： https://dijizhou.100xgj.com/jieqibiao/2026 或者使用 tyme.js库来计算
// 紫金山天文台 pdf https://pmo.cas.cn/xwdt2019/kpdt2019/202203/t20220309_6386774.html
const SOLAR_TERM_INFO = [ 7740, 28943, 50200, 71553, 93042, 114695,
    136531, 158559, 180770, 203149, 225658, 248267, 
    270913, 293562, 316142, 338628, 360959, 383127, 
    405098, 426887, 448488, 469939, 491257, 512497,
];

// 有些年份计算后发生跨日偏移，需要修正，数据计算过程参考 solarterm_fix文件夹
const TERM_FIX_INFO = [10, 14, 8, 0, 17, -12, 0, -24, -27, -19, -50, -58, -13, -50, -39, -48, -36, 0, 0, 0, 0, 6, 30, 0];

const _solarTermFormatter = new Intl.DateTimeFormat('zh-CN', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
});

/**
 * 获取指定节气的北京时间日期（返回 UTC 时间戳，用于比较先后）
 */
function getJieTimestamp(year, termIndex) {
    const offDate = new Date(((year - YEAR_BASE) * TROPICAL_YEAR * 24 * 60 + 
        SOLAR_TERM_INFO[termIndex] + TERM_FIX_INFO[termIndex]) * 60000 + TERM_BASE_DATE.getTime());
    const parts = _solarTermFormatter.formatToParts(offDate);
    const y = parseInt(parts.find(p => p.type === 'year').value);
    const m = parseInt(parts.find(p => p.type === 'month').value);
    const d = parseInt(parts.find(p => p.type === 'day').value);
    // 节气日期北京时间 00:00:00 对应 UTC 时间戳
    return new Date(`${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}T00:00:00+08:00`).getTime();
}

/**
 * 获取公历日期的干支月信息（基于节气而非农历月）
 * 返回 { termYear, monthIndex }
 *   termYear: 节气年（立春为界），专用于五虎遁推算月天干
 *   monthIndex: 1=寅月...12=丑月
 */
function getGanzhiMonthInfo(year, month, day) {
    const targetTs = new Date(`${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}T00:00:00+08:00`).getTime();

    // 十二「节」索引及其对应的干支月：
    // [termIndex, monthNumber(1=寅)]
    // 按时间顺序：小寒(0)→丑月, 立春(2)→寅月, ..., 大雪(22)→子月
    const JIE_MAP = [
        [0, 12], [2, 1], [4, 2], [6, 3], [8, 4], [10, 5],
        [12, 6], [14, 7], [16, 8], [18, 9], [20, 10], [22, 11],
    ];

    // 立春决定干支年分界
    const lichunTs = getJieTimestamp(year, 2);

    if (targetTs < lichunTs) {
        // 立春之前，干支年仍属上一年（年柱以立春为界）
        const prevGanZhiYear = year - 1;
        const xiaohanTs = getJieTimestamp(year, 0); // 本年小寒（约1月6日）
        if (targetTs >= xiaohanTs) {
            return { termYear: prevGanZhiYear, monthIndex: 12 }; // 丑月
        }
        // 大雪之后、小寒之前
        return { termYear: prevGanZhiYear, monthIndex: 11 }; // 子月
    }

    // 立春及之后，遍历节气确定月份
    for (let i = 1; i < JIE_MAP.length; i++) {
        const [termIdx] = JIE_MAP[i];
        const jieTs = getJieTimestamp(year, termIdx);
        if (targetTs < jieTs) {
            return { termYear: year, monthIndex: JIE_MAP[i - 1][1] };
        }
    }

    // 大雪之后，检查下一年小寒
    const nextXiaohanTs = getJieTimestamp(year + 1, 0);
    if (targetTs < nextXiaohanTs) {
        return { termYear: year, monthIndex: 11 }; // 子月
    }
    return { termYear: year + 1, monthIndex: 12 }; // 下年小寒之后，丑月
}

/**
 * 计算动态节日
 * @param year 公历年
 * @param month 公历月 (1-12)
 * @param day 公历日 (1-31)
 * @returns 动态节日名称，无则返回null
 */
function getDynamicFestivals(year, month, day) {
    _ensureConfig();
    for (const [festMonth, weekNum, weekday, name] of _config.dynamicFestivals) {
        if (month === festMonth) {
            // 计算该月第一个指定星期几
            const firstDay = new Date(year, month - 1, 1);
            const firstDayWeekday = firstDay.getDay();
            
            // 直接计算第一个目标星期几的日期
            let firstTargetDayDate = 1;
            if (firstDayWeekday <= weekday) {
                firstTargetDayDate = 1 + (weekday - firstDayWeekday);
            } else {
                firstTargetDayDate = 1 + (7 - firstDayWeekday + weekday);
            }
            
            // 计算目标日期（第weekNum个星期几）
            const targetDate = firstTargetDayDate + (weekNum - 1) * 7;
            
            if (day === targetDate) {
                return name;
            }
        }
    }
    return null;
}

/**
 * 返回农历年的总天数
 */
function lunarYearDays(year) {
    let sum = 348;
    for (let i = 0x8000; i > 0x8; i >>= 1) {
        sum += (LUNAR_INFO[year - 1900] & i) ? 1 : 0;
    }
    return sum + leapMonthDays(year);
}

/**
 * 返回农历年闰月的天数
 */
function leapMonthDays(year) {
    if (leapMonth(year)) {
        return (LUNAR_INFO[year - 1900] & 0x10000) ? 30 : 29;
    }
    return 0;
}

/**
 * 返回农历年闰月的月份，没有闰月返回0
 */
function leapMonth(year) {
    return LUNAR_INFO[year - 1900] & 0xf;
}

/**
 * 返回农历年月份的天数
 */
function lunarMonthDays(year, month) {
    return (LUNAR_INFO[year - 1900] & (0x10000 >> month)) ? 30 : 29;
}

/**
 * 获取某天的节气，如果不是节气返回null
 */
export function getSolarTerm(year, month, day) {
    _ensureConfig();
    // 每月有两个节气，序号为 (month-1)*2 和 (month-1)*2+1
    const termIndex1 = (month - 1) * 2;
    const termIndex2 = termIndex1 + 1;
    
    for (const idx of [termIndex1, termIndex2]) {
        const offDate = new Date(((year - YEAR_BASE) * TROPICAL_YEAR * 24 * 60  + 
            SOLAR_TERM_INFO[idx] + TERM_FIX_INFO[idx]) * 60000 + TERM_BASE_DATE.getTime());

        const parts = _solarTermFormatter.formatToParts(offDate);

        const getPart = (type) => parts.find(p => p.type === type).value;
        // 本地日期的值就当成北京时间的日期来看待，不需要转换时区；农历就是直接跟着北京时间走的。
        const termDay = getPart('day');
        if (Number(termDay) === day) {
            return _config.solarTerms[idx];
        }
    }

    return null;
}

/**
 * 公历转农历
 * @param year 公历年
 * @param month 公历月 (1-12)
 * @param day 公历日
 * @returns 农历信息对象
 */
export function solarToLunar(year, month, day) {
    _ensureConfig();
    if (year < 1900 || year > 2100) {
        return null;
    }

    let offset = 0;
    let temp = 0;

    // 计算从1900年1月31日(农历1900年正月初一)到目标日期的天数，统一到北京时间的UTC维度算差值
    const targetDate = new Date(`${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}T00:00:00+08:00`);
    offset = Math.floor((targetDate - BASE_DATE) / 86400000);

    // 保存总偏移量用于日干支计算（后续年月循环会消耗 offset）
    const totalOffset = offset;

    // 计算农历年
    let lunarYear = 1900;
    for (let i = 1900; i < 2101 && offset > 0; i++) {
        temp = lunarYearDays(i);
        if (offset < temp) {
            break;
        }
        offset -= temp;
        lunarYear++;
    }

    // 计算闰月
    const leap = leapMonth(lunarYear);
    let isLeap = false;

    // 计算农历月
    let lunarMonth = 1;
    for (let i = 1; i < 13; i++) {
        // 闰月
        if (leap > 0 && i === (leap + 1) && !isLeap) {
            --i;
            isLeap = true;
            temp = leapMonthDays(lunarYear);
        } else {
            temp = lunarMonthDays(lunarYear, i);
        }

        // 解除闰月
        if (isLeap && i === (leap + 1)) {
            isLeap = false;
        }

        if (offset < temp) {
            break;
        }
        offset -= temp;
        lunarMonth++;
    }

    // 修正闰月月份
    if (isLeap) {
        lunarMonth = leap;
    } else if (leap > 0 && lunarMonth > leap) {
        lunarMonth--;
    }

    const lunarDay = offset + 1;

    // 生成干支年
    const ganIndex = (lunarYear - 4) % 10;
    const zhiIndex = (lunarYear - 4) % 12;
    const ganZhiYear = _config.tianGan[ganIndex] + _config.diZhi[zhiIndex];

    // 生肖
    const zodiac = _config.shengXiao[(lunarYear - 4) % 12];

    // 月干支（基于节气：五虎遁，寅月天干由节气年天干决定）
    const {termYear, monthIndex} = getGanzhiMonthInfo(year, month, day);
    const termYearGanIndex = (termYear - 4) % 10;
    const firstMonthGanIndex = (termYearGanIndex * 2 + 2) % 10;
    const monthGanIndex = (firstMonthGanIndex + monthIndex - 1) % 10;
    const monthZhiIndex = (monthIndex + 1) % 12;
    const monthGanZhi = _config.tianGan[monthGanIndex] + _config.diZhi[monthZhiIndex];

    // 日干支（1900-01-31 = 甲辰日，在60日周期中位置为40）
    const dayCyclePos = (40 + totalOffset) % 60;
    const dayGanIndex = dayCyclePos % 10;
    const dayZhiIndex = dayCyclePos % 12;
    const dayGanZhi = _config.tianGan[dayGanIndex] + _config.diZhi[dayZhiIndex];

    // 农历月名
    const monthName = (isLeap ? '闰' : '') + _config.lunarMonthNames[lunarMonth - 1] + '月';

    // 农历日名
    const dayName = _config.lunarDayNames[lunarDay - 1];

    // 传统节日（闰月不匹配传统节日）
    let festival = null;
    if (!isLeap) {
        const festivalKey = `${lunarMonth}-${lunarDay}`;
        festival = _config.traditionalFestivals[festivalKey] || null;
    }

    // 除夕特殊处理：腊月最后一天（支持闰腊月）
    // 条件：腊月 && (没有闰腊月 || (有闰腊月且当前是闰腊月))
    if (lunarMonth === 12 && (leap !== 12 || (leap === 12 && isLeap))) {
        const lastDay = lunarMonthDays(lunarYear, 12);
        if (lunarDay === lastDay) {
            festival = '除夕';
        }
    }

    // 公历节日
    const gregorianFestivalKey = `${month}-${day}`;
    let gregorianFestival = _config.gregorianFestivals[gregorianFestivalKey] || null;
    
    // 动态节日
    if (!gregorianFestival) {
        gregorianFestival = getDynamicFestivals(year, month, day);
    }

    // 固定日期节日
    let fixedDateFestival = null;
    if (!gregorianFestival) {
        const fixedDateKey = `${year}${month.toString().padStart(2, '0')}${day.toString().padStart(2, '0')}`;
        fixedDateFestival = _config.fixedDateFestivals[fixedDateKey] || null;
    }

    // 节气
    const solarTerm = getSolarTerm(year, month, day);

    return {
        lunarYear,
        lunarMonth,
        lunarDay,
        isLeap,
        ganZhiYear,
        zodiac,
        monthGanZhi,
        dayGanZhi,
        monthName,
        dayName,
        festival,            // 农历传统节日
        gregorianFestival,   // 公历节日
        fixedDateFestival,   // 固定日期节日
        solarTerm,           // 节气
        fullDate: `${monthName}${dayName}`,
        displayText: dayName, // 默认显示日期
    };
}

/**
 * 收集所有节日/节气信息
 * @param lunarInfo 农历信息对象
 * @returns {string[]} 节日/节气名称数组
 */
export function getFestivals(lunarInfo) {
    if (!lunarInfo) return [];
    const festivals = [];
    if (lunarInfo.festival) festivals.push(lunarInfo.festival);
    if (lunarInfo.gregorianFestival) festivals.push(lunarInfo.gregorianFestival);
    if (lunarInfo.fixedDateFestival) festivals.push(lunarInfo.fixedDateFestival);
    if (lunarInfo.solarTerm) festivals.push(lunarInfo.solarTerm);
    return festivals;
}

/**
 * 获取显示文本（节日优先，初一显示月份）
 * @param lunarInfo 农历信息对象
 * @returns 显示文本
 */
export function getDisplayText(lunarInfo) {
    if (!lunarInfo) return '';

    const holidays = getFestivals(lunarInfo);

    // 节日优先
    if (holidays.length > 0) {
        return holidays[0];
    }
    
    // 初一显示月份，其他显示日期
    return lunarInfo.lunarDay === 1 ? lunarInfo.monthName : lunarInfo.dayName;
}

export function getLunarCalendarLabel() {
    _ensureConfig();
    return _config.lunarCalendarLabel;
}
