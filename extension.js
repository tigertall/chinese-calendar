// Chinese Calendar GNOME Shell Extension
// Displays Chinese lunar calendar in clock panel and calendar popup

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

        // 节日标签
        this._festivalsLabel = new St.Label({
            style_class: 'lunar-detail-festival',
            x_align: Clutter.ActorAlign.START,
        });

        this._box.add_child(this._lunarDateLabel);
        this._box.add_child(this._ganZhiLabel);
        this._box.add_child(this._festivalsLabel);

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
            this._festivalsLabel.text = '';
            return;
        }

        // 农历日期（使用本地化标签）
        this._lunarDateLabel.text = `${ChineseCalendar.getLunarCalendarLabel()} ${info.fullDate}`;

        // 干支年 + 生肖 + 月干支 + 日干支
        this._ganZhiLabel.text = `${info.ganZhiYear}${info.zodiac}年 ${info.monthGanZhi}月 ${info.dayGanZhi}日`;

        // 收集所有节日/节气
        const festivals = ChineseCalendar.getFestivals(info);

        // 只有当天有多个节日/节气，或者节日名称超过4个字符（日历卡片不能完整显示）时才显示
        if (festivals.length > 1 || (festivals.length === 1 && festivals[0].length > 4)) {
            this._festivalsLabel.text = festivals.join('\u2002');
        } else {
            this._festivalsLabel.text = '';
        }
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

        // 保存原始构造函数引用，disable 时恢复，防止异常关闭导致代理残留
        this._origDate = globalThis.Date;
        this._origStButton = St.Button;

        // 初始化地区化配置
        ChineseCalendar.setHolidayRegion(this._settings);

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

        // 恢复原始构造函数，避免代理残留影响其他扩展
        if (globalThis.Date !== this._origDate) {
            globalThis.Date = this._origDate;
        }
        if (St.Button !== this._origStButton) {
            St.Button = this._origStButton;
        }

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

        // 清理农历模块内部状态
        ChineseCalendar.clearConfig();
        
        // 立即刷新显示为纯公历，不等待下一次分钟变化
        if (dm._clockDisplay) {
            dm._clockDisplay.text = dm._clock.clock;
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
            parts.push(info.fullDate);
        }

        // 显示节日信息（如果启用）
        if (showFestivalsInPanel) {
            const festivals = ChineseCalendar.getFestivals(info);

            if (festivals.length > 0) {
                parts.push(festivals[0]);
            }
        }

        dm._clockDisplay.text = parts.length > 0
            ? dm._clock.clock + '\u2002' + parts.join('\u2002')
            : dm._clock.clock;
    }

    // ===== 日历弹窗农历详情区域 =====
    _setupLunarInfoSection(ml) {
        ml._lunarInfoSection = new LunarInfoSection();
        const mlBox = ml._scrollView.get_parent();
        mlBox.insert_child_at_index(ml._lunarInfoSection, 0);

        // 根据设置控制显示状态
        ml._lunarInfoSection.visible =
            this._settings.get_boolean('show-lunar-detail-in-calendar');

        // 初始化时设置当前日期的农历信息
        ml._lunarInfoSection.setDate(new Date());
    }

    // ===== 日历网格覆盖 =====
    _setupCalendarGrid(cal, dm) {
        const self = this;
        let rebuildInProgress = false;
        let updateInProgress = false;

        const ml = dm._messageList;

        // Proxy 状态对象：缓存 Proxy，每次 rebuild 重置 iterDate 即可复用
        const proxyState = {iterDate: null};

        // Date Proxy：追踪日历网格中的日期迭代（只创建一次）
        const DateProxy = new Proxy(this._origDate, {
            construct(target, args) {
                const instance = Reflect.construct(target, args);
                if (!proxyState.iterDate._lunarIterFound &&
                    args.length > 0 && args[0] instanceof target) {
                    proxyState.iterDate = instance;
                }
                return instance;
            }
        });

        // St.Button Proxy：注入农历文本（只创建一次）
        const ButtonProxy = new Proxy(this._origStButton, {
            construct(target, args) {
                if (+args[0].label === +proxyState.iterDate.getDate().toString()) {
                    proxyState.iterDate._lunarIterFound = true;

                    const year = proxyState.iterDate.getFullYear();
                    const month = proxyState.iterDate.getMonth() + 1;
                    const day = proxyState.iterDate.getDate();

                    const info = ChineseCalendar.solarToLunar(year, month, day);
                    const cellText = info ? ChineseCalendar.getDisplayText(info) : '';

                    if (cellText) {
                        args[0].label += '\n';
                    }

                    const newButton = Reflect.construct(target, args);

                    if (cellText) {
                        newButton._lunarText = cellText;
                        newButton._lunarInfo = info;
                        newButton._year = proxyState.iterDate.getFullYear();
                        newButton._month = proxyState.iterDate.getMonth() + 1;
                        newButton._day = proxyState.iterDate.getDate();
                    }

                    return newButton;
                }

                return Reflect.construct(target, args);
            }
        });

        // 覆盖 _rebuildCalendar 方法
        this._injectionManager.overrideMethod(
            cal, '_rebuildCalendar', originalMethod => function () {
                if (rebuildInProgress) return;
                rebuildInProgress = true;

                // 重置迭代状态，复用已缓存的 Proxy
                proxyState.iterDate = new self._origDate();

                Date = DateProxy;
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
                                self._holidayManager && child._year) {
                                const statutory = self._holidayManager.getStatutoryHoliday(
                                    child._year, child._month, child._day);
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

                try {
                    originalMethod.apply(this, arguments);
                } finally {
                    St.Button = self._origStButton;
                    Date = self._origDate;
                    tempInjection.clear();
                }

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
                            dm._date._dateLabel.text = current + '\u2002' + info.fullDate;
                        }
                    }
                }
            }
        );
    }

    _onSettingsChanged(dm, cal, ml) {
        // 更新农历详情的显示状态
        if (ml._lunarInfoSection) {
            ml._lunarInfoSection.visible =
                this._settings.get_boolean('show-lunar-detail-in-calendar');
        }

        ChineseCalendar.setHolidayRegion(this._settings);

        this._holidayManager.reloadData();

        this._updatePanelClock(dm);
        cal._rebuildCalendar();
        if (cal._selectedDate) {
            cal._update();
        }
    }
}
