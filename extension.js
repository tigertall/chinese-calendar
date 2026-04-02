// Chinese Calendar GNOME Shell Extension
// Main extension module for GNOME Shell 48
// Displays Chinese lunar calendar in panel and calendar popup

import Clutter from 'gi://Clutter';
import GObject from 'gi://GObject';
import St from 'gi://St';

import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import {Extension, InjectionManager} from 'resource:///org/gnome/shell/extensions/extension.js';

import * as ChineseCalendar from './chineseCalendar.js';
import {HolidayManager} from './holidayManager.js';


// 农历详情面板组件
const LunarInfoSection = GObject.registerClass(
class LunarInfoSection extends St.Bin {
    constructor() {
        super({
            style_class: 'message-view',
        });

        this._box = new St.BoxLayout({
            style_class: 'lunar-info-box',
            vertical: true,
            x_expand: true,
        });

        // 农历日期
        this._lunarDateLabel = new St.Label({
            style_class: 'lunar-detail-date',
            x_align: Clutter.ActorAlign.START,
        });

        // 干支年和生肖
        this._ganZhiLabel = new St.Label({
            style_class: 'lunar-detail-ganzhi',
            x_align: Clutter.ActorAlign.START,
        });

        this._box.add_child(this._lunarDateLabel);
        this._box.add_child(this._ganZhiLabel);

        this.set_child(this._box);
    }

    setDate(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        const info = ChineseCalendar.solarToLunar(year, month, day);
        if (!info) {
            this._lunarDateLabel.text = '';
            this._ganZhiLabel.text = '';
            return;
        }

        // 农历日期
        this._lunarDateLabel.text = `农历 ${info.fullDate}`;

        // 干支年 + 生肖
        this._ganZhiLabel.text = `${info.ganZhiYear}年 【${info.zodiac}年】`;
    }
});

export default class ChineseCalendarExtension extends Extension {
    constructor(metadata) {
        super(metadata);
        this._replacementFunc = {};
    }

    enable() {
        this._settings = this.getSettings();
        this._injectionManager = new InjectionManager();
        this._holidayManager = new HolidayManager(this._settings);

        const dm = Main.panel.statusArea.dateMenu;
        const cal = dm._calendar;
        const ml = dm._messageList;

        // === 1. 面板时钟旁添加农历日期 ===
        this._setupPanelLabel(dm);

        // === 2. 日历弹窗中添加农历信息区域 ===
        this._setupLunarInfoSection(ml);

        // === 3. 日历网格中添加农历日期和法定假日标记 ===
        this._setupCalendarGrid(cal, dm);

        // === 4. 监听设置变更 ===
        this._settingsChangedId = this._settings.connect('changed', (settings, key) => {
            //log('Settings changed:', key);
            this._onSettingsChanged(dm, cal, ml);
        });

        // 初次更新
        cal._rebuildCalendar();
    }

    disable() {
        const dm = Main.panel.statusArea.dateMenu;

        // 清除注入
        if (this._injectionManager) {
            this._injectionManager.clear();
            this._injectionManager = null;
        }

        // 移除面板标签
        if (this._panelLabel) {
            this._panelLabel.destroy();
            this._panelLabel = null;
        }

        // 恢复时钟绑定
        if (this._replacementFunc.clockId) {
            dm._clock.disconnect(this._replacementFunc.clockId);
            delete this._replacementFunc.clockId;
        }

        // 立即刷新显示为纯公历，不等待下一次分钟变化
        if (dm._clockDisplay) {
            dm._clockDisplay.text = dm._clock.clock;
        }

        // 移除农历信息区域
        if (dm._messageList._lunarInfoSection) {
            dm._messageList._lunarInfoSection.destroy();
            delete dm._messageList._lunarInfoSection;
        }

        // 移除菜单打开监听
        if (this._replacementFunc.openMenuId) {
            dm.menu.disconnect(this._replacementFunc.openMenuId);
            delete this._replacementFunc.openMenuId;
        }

        // 断开设置监听
        if (this._settingsChangedId) {
            this._settings.disconnect(this._settingsChangedId);
            this._settingsChangedId = null;
        }

        // 清理节假日管理器
        if (this._holidayManager) {
            this._holidayManager.destroy();
            this._holidayManager = null;
        }

        // 恢复日历样式并重建日历
        if (dm._calendar) {
            const styleClasses = dm._calendar.style_class.split(' ')
                .filter(e => e.length && !e.startsWith('lunar-'));
            dm._calendar.style_class = styleClasses.join(' ');
            // 重建日历以清除农历信息
            dm._calendar._rebuildCalendar();
        }

        this._settings = null;
        this._replacementFunc = {};
    }

    // ===== 面板时钟旁显示农历 =====
    _setupPanelLabel(dm) {
        this._replacementFunc.clockId = dm._clock.connect('notify::clock', () => {
            this._updatePanelClock(dm);
        });

        this._updatePanelClock(dm);
    }

    _updatePanelClock(dm) {
        const showInPanel = this._settings.get_boolean('show-lunar-in-panel');
        const showFestivalsInPanel = this._settings.get_boolean('show-festivals-in-panel');

        if (!showInPanel && !showFestivalsInPanel) {
            dm._clockDisplay.text = dm._clock.clock;
            return;
        }

        const now = new Date();
        const info = ChineseCalendar.solarToLunar(
            now.getFullYear(), now.getMonth() + 1, now.getDate());

        if (!info) {
            dm._clockDisplay.text = dm._clock.clock;
            return;
        }

        const parts = [];

        // 显示农历信息（如果启用）
        if (showInPanel) {
            parts.push(info.monthName + info.dayName);
        }

        // 显示节日信息（如果启用）
        if (showFestivalsInPanel) {
            const festivals = [];
            if (info.festival) festivals.push(info.festival);
            if (info.gregorianFestival) festivals.push(info.gregorianFestival);
            if (info.solarTerm) festivals.push(info.solarTerm);

            if (festivals.length > 0) {
                parts.push(festivals[0]);
            }
        }

        dm._clockDisplay.text = parts.length > 0
            ? dm._clock.clock + '\u2001' + parts.join('\u2001')
            : dm._clock.clock;
    }

    // ===== 日历弹窗农历详情区域 =====
    _setupLunarInfoSection(ml) {
        ml._lunarInfoSection = new LunarInfoSection();
        const mlBox = ml._scrollView.get_parent();
        mlBox.insert_child_at_index(ml._lunarInfoSection, 0);
    }

    // ===== 日历网格覆盖 =====
    _setupCalendarGrid(cal, dm) {
        const self = this;
        let rebuildInProgress = false;
        let updateInProgress = false;

        const ml = dm._messageList;

        // 覆盖 _rebuildCalendar 方法
        this._injectionManager.overrideMethod(
            cal, '_rebuildCalendar', originalMethod => function () {
                if (rebuildInProgress) return;
                rebuildInProgress = true;

                const origButton = St.Button;
                const origDate = Date;
                let iterDate = new origDate();

                // 临时替换 Date 构造函数来追踪迭代日期（使用 Proxy）
                const DateProxy = new Proxy(origDate, {
                    construct(target, args) {
                        const instance = Reflect.construct(target, args);
                        // 追踪日历网格中的日期迭代
                        if (!iterDate._lunarIterFound &&
                            args.length > 0 && args[0] instanceof origDate) {
                            iterDate = instance;
                        }
                        return instance;
                    }
                });
                Date = DateProxy;

                // 临时替换 St.Button 来注入农历文本（使用 Proxy）
                const ButtonProxy = new Proxy(origButton, {
                    construct(target, args) {
                        // 判断是否需要添加农历信息（在创建按钮之前）
                        if (+args[0].label === +iterDate.getDate().toString()) {
                            iterDate._lunarIterFound = true;

                            const year = iterDate.getFullYear();
                            const month = iterDate.getMonth() + 1;
                            const day = iterDate.getDate();

                            const info = ChineseCalendar.solarToLunar(year, month, day);
                            const cellText = info ? ChineseCalendar.getDisplayText(info) : '';

                            // 添加换行使日历格子能显示两行
                            if (cellText) {
                                args[0].label += '\n';  // ← 在创建按钮前修改参数
                            }

                            // 创建原始按钮实例（此时 label 已经包含 \n）
                            const newButton = Reflect.construct(target, args);

                            // 附加农历信息到按钮对象
                            if (cellText) {
                                newButton._lunarText = cellText;
                                newButton._lunarInfo = info;
                                newButton._lunarYear = year;
                                newButton._lunarMonth = month;
                                newButton._lunarDay = day;
                            }

                            return newButton;
                        }

                        // 不需要处理的情况：直接创建
                        return Reflect.construct(target, args);
                    }
                });
                St.Button = ButtonProxy;

                // 临时覆盖 layout attach 来添加农历标签层
                const tempInjection = new InjectionManager();
                tempInjection.overrideMethod(
                    cal.layout_manager, 'attach',
                    origAttach => function (child, left, top, width, height) {
                        origAttach.apply(this, [child, left, top, width, height]);
                        if (child._lunarText) {
                            // 构造农历文本标签
                            const dayStyle = ['calendar-day', 'lunar-day',
                                ...child.style_class.split(' ')
                                    .filter(e => e === 'calendar-today')];

                            const lb = new St.Label({
                                text: '\n' + child._lunarText,
                                style_class: dayStyle.join(' '),
                            });
                            lb.clutter_text.x_align = Clutter.ActorAlign.CENTER;
                            lb.clutter_text.y_align = Clutter.ActorAlign.CENTER;
                            origAttach.apply(this, [lb, left, top, width, height]);

                            // 法定假日标记（休/班）
                            if (self._settings.get_boolean('show-statutory-holidays') &&
                                self._holidayManager && child._lunarYear) {
                                const statutory = self._holidayManager.getStatutoryHoliday(
                                    child._lunarYear, child._lunarMonth, child._lunarDay);
                                if (statutory) {
                                    let badgeText, badgeClass;
                                    if (statutory.isHoliday) {
                                        badgeText = '休';
                                        badgeClass = 'lunar-badge lunar-badge-rest';
                                    } else if (statutory.isWorkDay) {
                                        badgeText = '班';
                                        badgeClass = 'lunar-badge lunar-badge-work';
                                    }
                                    if (badgeText) {
                                        const badge = new St.Label({
                                            text: badgeText,
                                            style_class: badgeClass,
                                        });
                                        badge.clutter_text.x_align = Clutter.ActorAlign.END;
                                        badge.clutter_text.y_align = Clutter.ActorAlign.START;
                                        origAttach.apply(this, [badge, left, top, width, height]);
                                    }
                                }
                            }
                        }
                    }
                );

                originalMethod.apply(this, arguments);

                St.Button = origButton;
                Date = origDate;
                tempInjection.clear();

                // 添加农历日历样式类
                const calStyleClasses = cal.style_class.split(' ')
                    .filter(e => e.length && !e.startsWith('lunar-'));
                calStyleClasses.push('lunar-calendar');
                cal.style_class = calStyleClasses.join(' ');

                rebuildInProgress = false;
            });

        // 覆盖 _update 方法以更新农历详情面板
        this._injectionManager.overrideMethod(
            cal, '_update', originalMethod => function () {
                if (updateInProgress) return;
                updateInProgress = true;

                originalMethod.apply(this, arguments);

                // 更新农历详情区域
                if (cal._selectedDate && ml._lunarInfoSection) {
                    ml._lunarInfoSection.setDate(cal._selectedDate);
                }

                updateInProgress = false;
            });

        // 日历弹窗打开时更新日期详情顶部标签
        this._replacementFunc.openMenuId = dm.menu.connect(
            'open-state-changed', (menu, isOpen) => {
                if (isOpen && dm._date && dm._date._dateLabel) {
                    const now = new Date();
                    const info = ChineseCalendar.solarToLunar(
                        now.getFullYear(), now.getMonth() + 1, now.getDate());
                    if (info) {
                        const current = dm._date._dateLabel.text;
                        if (!current.includes(info.zodiac)) {
                            dm._date._dateLabel.text = current + '\u2001' +
                                info.ganZhiYear + info.zodiac + '年' + '\u2001' + info.fullDate;
                        }
                    }
                }
            }
        );
    }

    _onSettingsChanged(dm, cal, ml) {
        // 重新加载节假日数据
        this._holidayManager.reloadData();
        // 重建日历以反映新设置
        this._updatePanelClock(dm);
        cal._rebuildCalendar();
        if (cal._selectedDate) {
            cal._update();
        }
    }
}
