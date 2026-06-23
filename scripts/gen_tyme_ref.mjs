/**
 * 用 tyme.cjs 生成 2000-2053 年每日干支、农历日期、节气基准数据
 * 输出 JSON 到 stdout
 */
import {createRequire} from 'module';
const require = createRequire(import.meta.url);
const tyme = require('./tyme.cjs');

const START = 2000, END = 2053;
const result = {};

for (let y = START; y <= END; y++) {
    for (let m = 1; m <= 12; m++) {
        const daysInMonth = new Date(y, m, 0).getDate();
        for (let d = 1; d <= daysInMonth; d++) {
            const solarDay = tyme.SolarDay.fromYmd(y, m, d);
            const scd = tyme.SixtyCycleDay.fromSolarDay(solarDay);
            const lunarDay = solarDay.getLunarDay();
            const termDay = solarDay.getTermDay();
            const key = `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
            result[key] = {
                yearGz: lunarDay.getLunarMonth().getLunarYear().getSixtyCycle().getName(), // 年初一为界（GB/T 33661-2017）
                monthGz: scd.getMonth().getName(),
                dayGz: scd.getSixtyCycle().getName(),
                lunarYear: lunarDay.getYear(),
                lunarMonth: lunarDay.getMonth(),     // 负数表示闰月
                lunarDay: lunarDay.getDay(),
                lunarName: lunarDay.getName(),        // 农历日名（初一、初二...）
                solarTerm: termDay.getDayIndex() === 0 ? termDay.getSolarTerm().getName() : null,
            };
        }
    }
}

process.stdout.write(JSON.stringify(result));
