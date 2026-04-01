import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 读取solartrm_std.json文件
function readSolarTermsData() {
    const filePath = path.join(__dirname, 'solarterms_std.json');
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}

// 计算2000年节气时间相对1月1号的分钟偏移，并按照正确的顺序排列
function calculateCorrectSolarTermInfo(baseYear) {
    const data = readSolarTermsData();
    const yearTerms = data[baseYear.toString()];
    const baseDate = new Date(baseYear, 0, 1, 0, 0, 0); // baseYear年1月1日0时0分0秒
    
    // 正确的节气顺序（与SOLAR_TERMS一致）
    const solarTermInfo = [];

    // 遍历正确顺序的节气
    for (let i = 0; i < 24; i++) {
        const term = yearTerms[i];
        const termDate = new Date(term + "+08:00");
        
        // 计算分钟偏移
        const offsetMinutes = Math.floor((termDate - baseDate) / (1000 * 60));
        solarTermInfo.push(offsetMinutes);
    }

    return solarTermInfo;
}

// 主函数
function main() {
    const baseYear = 2000;
    console.log(`计算${baseYear}年节气时间相对1月1号的分钟偏移...`);
    const solarTermInfo = calculateCorrectSolarTermInfo(baseYear);
    const termNames = ['小寒', '大寒', '立春', '雨水', '惊蛰', '春分',
                     '清明', '谷雨', '立夏', '小满', '芒种', '夏至',
                     '小暑', '大暑', '立秋', '处暑', '白露', '秋分',
                     '寒露', '霜降', '立冬', '小雪', '大雪', '冬至'];
    
    console.log('SOLAR_TERM_INFO = ['+ solarTermInfo.join(', ') + '];');
}

// 运行
main();
