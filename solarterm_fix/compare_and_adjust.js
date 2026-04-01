import tyme from './tyme.cjs';

const termNames = ['小寒', '大寒', '立春', '雨水', '惊蛰', '春分',
                     '清明', '谷雨', '立夏', '小满', '芒种', '夏至',
                     '小暑', '大暑', '立秋', '处暑', '白露', '秋分',
                     '寒露', '霜降', '立冬', '小雪', '大雪', '冬至'];
                     
// 比较并调整TERM_FIX_INFO
function compareAndAdjust() {
    const startYear = 2000;
    const endYear = 2099;
    
    // 初始化新的TERM_FIX_INFO
    let termFixInfo = [];
    for (let i = 0; i < 24; i++) {
        termFixInfo.push([-14400, 14400, 0, 0]);
    }
    
    // 遍历每一年的每个节气
    for (let year = startYear; year <= endYear; year++) {
        // console.log(`处理年份: ${year}`);
        
        for (let termIndex = 0; termIndex < 24; termIndex++) {
            // 从tyme.js获取准确的节气时间
            const tymeIndex = termIndex; // 统一从小寒开始，所以索引相同
            
            const tymeTerm = tyme.SolarTerm.fromIndex(year, tymeIndex + 1); // tyme.js 索引冬至开始，索引偏移下
            const tymeSolarDay = tymeTerm.getSolarDay();
            const tymeYear = tymeSolarDay.getYear();
            const tymeMonth = tymeSolarDay.getMonth();
            const tymeDay = tymeSolarDay.getDay();
            
            // 计算线性公式时间
            const TROPICAL_YEAR = 365.24219878;
            const YEAR_BASE = 2000;
            const SOLAR_TERM_INFO = [7740, 28943, 50200, 71553, 93042, 114695, 
                136531, 158559, 180770, 203149, 225658, 248267, 
                270913, 293562, 316142, 338628, 360959, 383127, 
                405098, 426887, 448488, 469939, 491257, 512497];
            
            const baseMinutes = (year - YEAR_BASE) * TROPICAL_YEAR * 24 * 60 + SOLAR_TERM_INFO[termIndex];
            const linearDate = new Date(baseMinutes * 60000 + new Date(YEAR_BASE, 0, 1).getTime());
            
            // 计算tyme.js日期的0点0分0秒和23点59分59秒
            const tymeDateStart = new Date(tymeYear, tymeMonth - 1, tymeDay, 0, 0, 0);
            const tymeDateEnd = new Date(tymeYear, tymeMonth - 1, tymeDay, 23, 59, 59);
            // console.log(`linearDate: ${linearDate.toLocaleString()}, tymeDate: ${tymeDateStart.toLocaleDateString()}`);

            // 计算调整量范围
            const minAdjustment = Math.ceil((tymeDateStart - linearDate) / (1000 * 60));
            const maxAdjustment = Math.floor((tymeDateEnd - linearDate) / (1000 * 60));
            
            // 更新TERM_FIX_INFO的范围
            const currentFix = termFixInfo[termIndex];
            const newMin = Math.max(currentFix[0], minAdjustment);
            const newMax = Math.min(currentFix[1], maxAdjustment);
            
            // 检查冲突
            if (newMin > newMax) {
                console.error(`冲突：年份 ${year}，节气 ${termNames[termIndex]}，当前范围 [${currentFix[0]}, ${currentFix[1]}]，新范围 [${minAdjustment}, ${maxAdjustment}]`);
                break;
            }
            
            let newMinYear = currentFix[2];
            let newMaxYear = currentFix[3];
            if (newMin !== currentFix[0]) {
                newMinYear = year;
            }

            if (newMax !== currentFix[1]) {
                newMaxYear = year;  
            }
            
            termFixInfo[termIndex] = [newMin, newMax, newMinYear, newMaxYear];
        }
    }
    
    // 输出termFixInfo
    console.log('\ntermFixInfo = [');
    termFixInfo.forEach((fix, _index) => {
        console.log(`[${fix[0]}, ${fix[1]}, ${fix[2]}, ${fix[3]}]`);
    });
    console.log('];');
    
    // 输出TERM_FIX_INFO
    const adjValues = termFixInfo.map(fix => {
        // min max 符号不同，说明可以容忍0分钟调整量，不需要修正；否则按照min来调整
        return Math.sign(fix[0]) !== Math.sign(fix[1]) ? 0 : fix[0];
    });
    console.log('TERM_FIX_INFO = [' +  adjValues.join(', ') + '];');
    
    return;
}

// 主函数
function main() {
    console.log('比较getSolarTerm计算结果与tyme.js结果，并调整TERM_FIX_INFO...');
    compareAndAdjust();
}

// 运行
main();
