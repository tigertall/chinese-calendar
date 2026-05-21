// Chinese Calendar Extension Preferences
// GNOME Shell 48 - Uses libadwaita preferences

import Gio from 'gi://Gio';
import Gtk from 'gi://Gtk';
import Gdk from 'gi://Gdk';
import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import Soup from 'gi://Soup?version=3.0';

import {ExtensionPreferences} from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

// 国际化支持
import {gettext as _} from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

export default class ChineseCalendarPreferences extends ExtensionPreferences {
    fillPreferencesWindow(window) {
        const settings = this.getSettings();
        window._settings = settings;
        window._timeoutId = 0;

        // === 通用设置页 ===
        const generalPage = new Adw.PreferencesPage({
            title: _('General Settings'),
            icon_name: 'preferences-system-symbolic',
        });
        window.add(generalPage);

        // -- 日历卡片和时钟面板 --
        const panelGroup = new Adw.PreferencesGroup({
            title: _('Clock Panel'),
        });
        generalPage.add(panelGroup);

        const showInPanelRow = new Adw.SwitchRow({
            title: _('Show Lunar Date in Panel'),
            subtitle: _('Display lunar date in top bar'),
        });
        settings.bind('show-lunar-in-panel', showInPanelRow, 'active',
            Gio.SettingsBindFlags.DEFAULT);
        panelGroup.add(showInPanelRow);

        const showFestivalsInPanelRow = new Adw.SwitchRow({
            title: _('Show Festivals in Panel'),
            subtitle: _('Display festival information in top bar when available'),   
        });
        settings.bind('show-festivals-in-panel', showFestivalsInPanelRow, 'active',
            Gio.SettingsBindFlags.DEFAULT);
        panelGroup.add(showFestivalsInPanelRow);

        const regionModel = new Gtk.StringList();
        [_('Auto'), _('Chinese Mainland'), _('Hong Kong'), _('Taiwan')]
            .forEach(label => regionModel.append(label));

        const regionValues = ['auto', 'CN', 'HK', 'TW'];
        const currentRegion = settings.get_string('festival-region');
        const regionIndex = regionValues.indexOf(currentRegion);

        const regionRow = new Adw.ComboRow({
            title: _('Festival Region'),
            subtitle: _('Regional information used for festivals'),
            model: regionModel,
            selected: regionIndex >= 0 ? regionIndex : 0,
        });
        regionRow.connect('notify::selected', () => {
            settings.set_string('festival-region', regionValues[regionRow.selected] || 'auto');
        });
        panelGroup.add(regionRow);

        const showLunarDetailRow = new Adw.SwitchRow({
            title: _('Show Lunar Detail'),
            subtitle: _('Display lunar date and Ganzhi information in the calendar popup notification area'),
        });
        settings.bind('show-lunar-detail-in-calendar', showLunarDetailRow, 'active',
            Gio.SettingsBindFlags.DEFAULT);
        panelGroup.add(showLunarDetailRow);

        // -- 法定假日设置 --
        const statutoryGroup = new Adw.PreferencesGroup({
            title: _('Statutory Holidays'),
        });
        generalPage.add(statutoryGroup);

        const showStatutoryRow = new Adw.SwitchRow({
            title: _('Show Statutory Holidays'),
            subtitle: _('Mark statutory holidays ("休" for rest, "班" for work) in calendar'),
        });
        settings.bind('show-statutory-holidays', showStatutoryRow, 'active',
            Gio.SettingsBindFlags.DEFAULT);
        statutoryGroup.add(showStatutoryRow);

        // 上次更新时间和手动更新按钮
        const lastUpdate = settings.get_string('holiday-data-last-update');
        const lastUpdateText = lastUpdate
            ? new Date(lastUpdate).toLocaleString()
            : _('Never updated');

        const updateButton = new Gtk.Button({
            label: _('Update Now'),
            valign: Gtk.Align.CENTER,
            css_classes: ['suggested-action'],
        });

        const updateRow = new Adw.ActionRow({
            title: _('Update Data'),
            subtitle: `${_('Last update')}: ${lastUpdateText}`,
        });
        updateRow.add_suffix(updateButton);
        updateRow.activatable_widget = updateButton;
        statutoryGroup.add(updateRow);

        updateButton.connect('clicked', () => {
            updateButton.sensitive = false;
            updateButton.label = _('Updating...');

            this._fetchHolidayData(settings).then(success => {
                updateButton.sensitive = true;
                if (success) {
                    updateButton.label = _('Updated successfully!');
                    const now = new Date().toLocaleString();
                    updateRow.subtitle = `${_('Last update')}: ${now}`;
                } else {
                    updateButton.label = _('Update failed');
                }
                // 3秒后恢复按钮文本
                if (window._timeoutId) {
                    GLib.source_remove(window._timeoutId);
                    window._timeoutId = 0;
                }
                window._timeoutId = GLib.timeout_add(GLib.PRIORITY_DEFAULT, 3000, () => {
                    window._timeoutId = 0;
                    if (updateButton && !updateButton.is_destroyed?.()) {
                        updateButton.label = _('Update Now');
                    }
                    return GLib.SOURCE_REMOVE;
                });
            });
        });

        // -- 关于 --
        const aboutGroup = new Adw.PreferencesGroup({
            title: _('About'),
            description: `${_('Version')} ${this.metadata['version-name']}`,
        });
        generalPage.add(aboutGroup);

        const githubRow = new Adw.ActionRow({
            title: _('GitHub Repository'),
            subtitle: 'https://github.com/tigertall/chinese-calendar',
        });
        const githubButton = new Gtk.Button({
            label: _('Visit'),
            valign: Gtk.Align.CENTER,
        });
        githubButton.connect('clicked', () => {
            Gtk.show_uri(null, 'https://github.com/tigertall/chinese-calendar', Gdk.CURRENT_TIME);
        });
        githubRow.add_suffix(githubButton);
        githubRow.activatable_widget = githubButton;
        aboutGroup.add(githubRow);

        window.connect('close-request', () => {
            if (window._timeoutId) {
                GLib.source_remove(window._timeoutId);
                window._timeoutId = 0;
            }
        });
    }

    _getHolidayUrl(region) {
        const baseUrl = 'https://tigertall.github.io/chinese-calendar/data/holidays_';
        let suffix = 'cn.json';
        
        if (region === 'auto') {
            const lang = GLib.getenv('LANG') || '';
            if (lang.startsWith('zh_HK') || lang.startsWith('zh-Hant_HK')) {
                suffix = 'hk.json';
            } else if (lang.startsWith('zh_TW') || lang.startsWith('zh-Hant_TW')) {
                suffix = 'tw.json';
            }
        } else if (region === 'HK') {
            suffix = 'hk.json';
        } else if (region === 'TW') {
            suffix = 'tw.json';
        }
        
        return baseUrl + suffix;
    }

    _fetchHolidayData(settings) {
        return new Promise((resolve) => {
            const region = settings.get_string('festival-region');
            const url = this._getHolidayUrl(region);
            
            try {
                const session = new Soup.Session();
                session.set_timeout(30);
                const message = Soup.Message.new('GET', url);
                
                session.send_and_read_async(
                    message,
                    GLib.PRIORITY_DEFAULT,
                    null, // cancellable
                    (session, result) => {
                        try {
                            const bytes = session.send_and_read_finish(result);
                            const status = message.get_status();
                            if (status === 200) {
                                // 将 GBytes 转换为 JavaScript 字符串
                                const decoder = new TextDecoder('utf-8');
                                const text = decoder.decode(bytes.get_data());
                                
                                // 验证JSON格式并压缩存储
                                try {
                                    const data = JSON.parse(text);
                                    // 压缩数据：去掉URL和Memo字段
                                    const compressedData = this._compressHolidayData(data);
                                    // 使用压缩格式存储（无格式化）
                                    settings.set_string('holiday-data-cache', JSON.stringify(compressedData));
                                    settings.set_string('holiday-data-last-update',
                                        new Date().toISOString());
                                    
                                    resolve(true);
                                } catch (e) {
                                    console.error('[ChineseCalendar] JSON parse error:', e);
                                    resolve(false);
                                }
                            } else {
                                console.error('[ChineseCalendar] HTTP Error:', status);
                                resolve(false);
                            }
                        } catch (e) {
                            console.error('[ChineseCalendar] Error fetching data:', e);
                            resolve(false);
                        }
                    }
                );
            } catch (e) {
                console.error(`[ChineseCalendar] Failed to fetch holiday data: ${e.message}`);
                resolve(false);
            }
        });
    }

    /**
     * 压缩节假日数据，去掉不必要的字段
     * @param data 原始节假日数据
     * @returns 压缩后的数据
     */
    _compressHolidayData(data) {
        if (!data || !data.Years) return data;
        if (!data.Region) data.Region = 'CN';

        const compressed = { Version: data.Version, Region: data.Region, Years: {} };
        
        for (const yearStr of Object.keys(data.Years)) {
            const yearHolidays = data.Years[yearStr];
            if (!Array.isArray(yearHolidays)) continue;
            
            compressed.Years[yearStr] = yearHolidays.map(holiday => ({
                Name: holiday.Name,
                StartDate: holiday.StartDate,
                EndDate: holiday.EndDate,
                CompDays: holiday.CompDays || []
            }));
        }
        
        return compressed;
    }
}
