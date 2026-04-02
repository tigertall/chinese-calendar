// Holiday Manager module for GNOME Shell Extension
// Manages statutory holiday data fetching and caching
// GNOME Shell 48 ESM Module


/**
 * 法定节假日管理器
 * 负责从远程URL获取节假日数据，缓存到GSettings中
 */
export class HolidayManager {
    constructor(settings) {
        this._settings = settings;
        this._holidayData = new Map(); // date (YYYY-MM-DD) -> {isHoliday, isWorkday, name}
        this._loadCachedData();
    }

    /**
     * 从缓存加载节假日数据
     */
    _loadCachedData() {
        try {
            const cachedJson = this._settings.get_string('holiday-data-cache');
            if (cachedJson) {
                const data = JSON.parse(cachedJson);
                this._parseHolidayData(data);
            }
        } catch (e) {
            log(`[ChineseCalendar] Failed to load cached holiday data: ${e.message}`);
        }
    }

    /**
     * 重新从缓存加载数据
     */
    reloadData() {
        this._loadCachedData();
    }

    /**
     * 解析节假日API数据
     * API格式: { "Years": { "2026": [{ "Name": "元旦", "StartDate": "2026-01-01", "EndDate": "2026-01-03", "CompDays": [...] }, ...], ... } }
     */
    _parseHolidayData(data) {
        this._holidayData.clear();
        if (!data || !data.Years) return;

        for (const yearStr of Object.keys(data.Years)) {
            const holidays = data.Years[yearStr];
            if (!Array.isArray(holidays)) continue;

            for (const holiday of holidays) {
                if (!holiday.StartDate || !holiday.EndDate || !holiday.Name) continue;

                // 处理放假日期范围，按照北京时间处理
                const startDate = new Date(holiday.StartDate + 'T00:00:00+08:00');
                const endDate = new Date(holiday.EndDate + 'T00:00:00+08:00');
                
                // 遍历从开始日期到结束日期的每一天
                for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
                    const dateKey = `${d.getFullYear()}-` +
                                  `${String(d.getMonth() + 1).padStart(2, '0')}-` +
                                  `${String(d.getDate()).padStart(2, '0')}`;

                    this._holidayData.set(dateKey, {
                        isHoliday: true,
                        isWorkday: false,
                        name: holiday.Name,
                    });
                }

                // 处理调休补班日期
                if (Array.isArray(holiday.CompDays)) {
                    for (const compDay of holiday.CompDays) {
                        const dateKey = compDay;

                        this._holidayData.set(dateKey, {
                            isHoliday: false,
                            isWorkday: true,
                            name: holiday.Name + '（调休）',
                        });
                    }
                }
            }
        }
    }

    /**
     * 获取指定日期的法定节假日信息
     * @param year 公历年
     * @param month 公历月 (1-12)
     * @param day 公历日
     * @returns {Object|null} { isHoliday, isWorkDay, name }
     */
    getStatutoryHoliday(year, month, day) {
        const dateKey = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const entry = this._holidayData.get(dateKey);
        if (!entry) return null;

        return {
            isHoliday: entry.isHoliday,
            isWorkDay: entry.isWorkday, // 调休补班
            name: entry.name || '',
        };
    }

    /**
     * 销毁管理器
     */
    destroy() {
        this._holidayData.clear();
    }
}
