// Chinese Calendar Extension Preferences
// GNOME Shell 48 - Uses libadwaita preferences

import Gio from 'gi://Gio';
import Gtk from 'gi://Gtk';
import Gdk from 'gi://Gdk';
import Adw from 'gi://Adw';
import GLib from 'gi://GLib';
import Soup from 'gi://Soup?version=3.0';

import {ExtensionPreferences} from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

export default class ChineseCalendarPreferences extends ExtensionPreferences {
    fillPreferencesWindow(window) {
        const settings = this.getSettings();
        window._settings = settings;

        // === 通用设置页 ===
        const generalPage = new Adw.PreferencesPage({
            title: '通用设置',
            icon_name: 'preferences-system-symbolic',
        });
        window.add(generalPage);

        // -- 顶栏时钟设置 --
        const panelGroup = new Adw.PreferencesGroup({
            title: '顶栏时钟',
            description: '控制在顶栏时钟旁的显示内容',
        });
        generalPage.add(panelGroup);

        const showInPanelRow = new Adw.SwitchRow({
            title: '顶栏显示农历',
            subtitle: '在顶栏时钟旁显示农历日期',
        });
        settings.bind('show-lunar-in-panel', showInPanelRow, 'active',
            Gio.SettingsBindFlags.DEFAULT);
        panelGroup.add(showInPanelRow);

        const showFestivalsInPanelRow = new Adw.SwitchRow({
            title: '顶栏显示节日',
            subtitle: '有节日时在顶栏时钟旁显示节日信息',   
        });
        settings.bind('show-festivals-in-panel', showFestivalsInPanelRow, 'active',
            Gio.SettingsBindFlags.DEFAULT);
        panelGroup.add(showFestivalsInPanelRow);

        // -- 法定假日设置 --
        const statutoryGroup = new Adw.PreferencesGroup({
            title: '法定假日',
            description: '管理法定节假日数据和显示',
        });
        generalPage.add(statutoryGroup);

        const showStatutoryRow = new Adw.SwitchRow({
            title: '显示法定假日',
            subtitle: '在日历中标记法定假日的"休"和"班"',
        });
        settings.bind('show-statutory-holidays', showStatutoryRow, 'active',
            Gio.SettingsBindFlags.DEFAULT);
        statutoryGroup.add(showStatutoryRow);

        // 数据URL选择
        const urlModel = new Gtk.StringList();
        const urls = [
            'https://www.shuyz.com/githubfiles/china-holiday-calender/master/holidayAPI.json',
            'https://raw.githubusercontent.com/lanceliao/china-holiday-calender/master/holidayAPI.json'
        ];
        const urlLabels = ['ShuYZ 镜像', 'GitHub 源'];
        urlLabels.forEach(label => urlModel.append(label));

        const urlRow = new Adw.ComboRow({
            title: '数据源',
            subtitle: settings.get_string('holiday-data-url'),
            model: urlModel,
        });

        // 设置当前选中的URL
        const currentUrl = settings.get_string('holiday-data-url');
        const urlIndex = urls.indexOf(currentUrl);
        urlRow.selected = urlIndex >= 0 ? urlIndex : 0;

        urlRow.connect('notify::selected', () => {
            const selectedUrl = urls[urlRow.selected] || urls[0];
            settings.set_string('holiday-data-url', selectedUrl);
            urlRow.subtitle = selectedUrl;
        });
        statutoryGroup.add(urlRow);

        // 上次更新时间和手动更新按钮
        const lastUpdate = settings.get_string('holiday-data-last-update');
        const lastUpdateText = lastUpdate
            ? new Date(lastUpdate).toLocaleString('zh-CN')
            : '从未更新';

        const updateButton = new Gtk.Button({
            label: '立即更新',
            valign: Gtk.Align.CENTER,
            css_classes: ['suggested-action'],
        });

        const updateRow = new Adw.ActionRow({
            title: '更新数据',
            subtitle: `上次更新: ${lastUpdateText}`,
        });
        updateRow.add_suffix(updateButton);
        updateRow.activatable_widget = updateButton;
        statutoryGroup.add(updateRow);

        updateButton.connect('clicked', () => {
            updateButton.sensitive = false;
            updateButton.label = '更新中...';

            this._fetchHolidayData(settings).then(success => {
                updateButton.sensitive = true;
                if (success) {
                    updateButton.label = '更新成功!';
                    const now = new Date().toLocaleString('zh-CN');
                    updateRow.subtitle = `上次更新: ${now}`;
                } else {
                    updateButton.label = '更新失败';
                }
                // 3秒后恢复按钮文本
                GLib.timeout_add(GLib.PRIORITY_DEFAULT, 3000, () => {
                    if (updateButton && !updateButton.is_destroyed?.()) {
                        updateButton.label = '立即更新';
                    }
                    return GLib.SOURCE_REMOVE;
                });
            });
        });

        // -- 关于 --
        const aboutGroup = new Adw.PreferencesGroup({
            title: '关于',
        });
        generalPage.add(aboutGroup);

        const versionRow = new Adw.ActionRow({
            title: '版本',
            subtitle: '1.0',
        });
        aboutGroup.add(versionRow);

        const githubRow = new Adw.ActionRow({
            title: 'GitHub 仓库',
            subtitle: 'https://github.com/tigertall/chinese-calendar',
        });
        const githubButton = new Gtk.Button({
            label: '访问',
            valign: Gtk.Align.CENTER,
        });
        githubButton.connect('clicked', () => {
            Gtk.show_uri(null, 'https://github.com/tigertall/chinese-calendar', Gdk.CURRENT_TIME);
        });
        githubRow.add_suffix(githubButton);
        githubRow.activatable_widget = githubButton;
        aboutGroup.add(githubRow);

        const apiRow = new Adw.ActionRow({
            title: '节假日数据 API',
            subtitle: '感谢 china-holiday-calender 项目提供数据',
        });
        const apiButton = new Gtk.Button({
            label: '访问',
            valign: Gtk.Align.CENTER,
        });
        apiButton.connect('clicked', () => {
            Gtk.show_uri(null, 'https://github.com/lanceliao/china-holiday-calender', Gdk.CURRENT_TIME);
        });
        apiRow.add_suffix(apiButton);
        apiRow.activatable_widget = apiButton;
        aboutGroup.add(apiRow);
    }

    _fetchHolidayData(settings) {
        return new Promise((resolve) => {
            const url = settings.get_string('holiday-data-url');
            if (!url) {
                resolve(false);
                return;
            }

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
                                
                                // 验证JSON格式
                                try {
                                    JSON.parse(text);
                                    settings.set_string('holiday-data-cache', text);
                                    settings.set_string('holiday-data-last-update',
                                        new Date().toISOString());
                                    
                                    resolve(true);
                                } catch (e) {
                                    console.error('JSON parse error:', e);
                                    resolve(false);
                                }
                            } else {
                                console.error('HTTP Error:', status);
                                resolve(false);
                            }
                        } catch (e) {
                            console.error('Error fetching data:', e);
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
}
