import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 导入tyme.js中的SolarTerm
import tyme from './tyme.cjs';

// ESM 中获取 __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 生成2000-2099年的节气数据
function generateSolarTerms() {
    const startYear = 2000;
    const endYear = 2099;
    const solarTermsData = {};

    for (let year = startYear; year <= endYear; year++) {
        solarTermsData[year] = [];
        for (let index = 1; index < 25; index++) {
            const termIndex = index;
            const term = tyme.SolarTerm.fromIndex(year, termIndex);
            const solarDay = term.getSolarDay();
            const julianDay = term.getJulianDay();
            const solarTime = julianDay.getSolarTime();
            
            // 返回的日期为北京时间，格式化日期时间为YYYY-MM-DD HH:MM:SS
            const yearStr = solarDay.getYear();
            const monthStr = solarDay.getMonth().toString().padStart(2, '0');
            const dayStr = solarDay.getDay().toString().padStart(2, '0');
            const hourStr = solarTime.getHour().toString().padStart(2, '0');
            const minuteStr = solarTime.getMinute().toString().padStart(2, '0');
            const secondStr = solarTime.getSecond().toString().padStart(2, '0');
            const datetimeStr = `${yearStr}-${monthStr}-${dayStr} ${hourStr}:${minuteStr}:${secondStr}`;
            
            solarTermsData[year].push(datetimeStr);
        }
    }

    return solarTermsData;
}

// 写入到solartrm_std.json
function writeToFile(data) {
    const filePath = path.join(__dirname, 'solarterms_std.json');
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Solar terms data written to ${filePath}`);
}

// 主函数
function main() {
    console.log('Generating solar terms data for 2000-2099...');
    const data = generateSolarTerms();
    writeToFile(data);
    console.log('Generation completed!');
}

// 运行
main();
