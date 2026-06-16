/**
 * 用 tyme.cjs 生成 2000-2053 年每日干支基准数据
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
            const key = `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
            result[key] = {
                yearGz: scd.getYear().getName(),
                monthGz: scd.getMonth().getName(),
                dayGz: scd.getSixtyCycle().getName(),
            };
        }
    }
}

process.stdout.write(JSON.stringify(result));
