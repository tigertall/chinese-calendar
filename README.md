# Chinese Calendar GNOME Shell Extension

在 GNOME 时钟面板和日历卡片中显示中国农历日期、节气、传统节日和法定节假日调休信息。

Display Chinese lunar dates, solar terms, traditional festivals, and statutory holidays in the GNOME clock panel and calendar popup.

<img width="800" alt="calendar" src="https://github.com/user-attachments/assets/df39964c-eb61-4393-ada9-1d8fc080e89b" />

## 功能特性

- 在日历卡片中显示农历日期和节日信息
- 在时钟面板旁显示农历日期
- 在时钟面板旁显示节日信息
- 在日历卡片中显示法定节假日的休/班标记
- 显示二十四节气（在2000年到2053年内准确）
- 支持大陆、香港、台湾的节日习惯列表，根据系统的 LANG 环境变量自动识别区域
- 设置界面根据系统语言适配英语、简体、繁体

## 安装方法

### GNOME Extension 网站

[<img alt="" height="80" src="https://raw.githubusercontent.com/andyholmes/gnome-shell-extensions-badge/master/get-it-on-ego.svg?sanitize=true">](https://extensions.gnome.org/extension/9586/chinese-calendar/)

### 手动安装

1. 下载扩展文件压缩包
2. `gnome-extensions install --force chinese-calendar.zip`
3. 退出当前的 GNOME 会话，重新登录，这样才能在 GNOME 扩展管理中显示
4. 在 GNOME 扩展管理中启用和设置扩展
5. 如果要显示法定节假日调休信息，记得在设置中操作一次【更新数据】

## 设置选项

<img width="400" alt="settings" src="https://github.com/user-attachments/assets/88f252f6-6057-4564-9358-cba6ad4d2a8e" />

### 时钟面板

- **顶栏显示农历**：在顶栏时钟显示农历日期
- **顶栏显示节日**：如果有节日，在顶栏时钟显示节日信息
- **节日区域**：要加载的节日列表区域，选项为自动、中国大陆、中国香港、中国台湾。默认自动，根据系统的 LANG 环境变量自动识别。有特殊需求的用户（比如语言设置为英语，但是想使用中国台湾或者中国香港的节日列表表），则可以手动选择其他区域。

### 法定假日

- **显示法定假日**：在日历中标记法定假日的"休"和"班"
- **更新数据**：手动更新法定假日数据，第一次使用需要更新手动一次；后续可在每年年底接口更新了下一年调休数据后手动更新。会按照当前选择节日区域来更新数据。切换区域后，需要重新更新。

## 更新数据源

对于休/班标记支持，需要依赖每年的政府节假日数据。本插件依赖的数据api为

- 中国大陆: <https://tigertall.github.io/chinese-calendar/data/holidays_cn.json>
- 中国香港: <https://tigertall.github.io/chinese-calendar/data/holidays_hk.json>
- 中国台湾: <https://tigertall.github.io/chinese-calendar/data/holidays_tw.json>

依托 github action 会自动从政府网站更新数据，在政府数据更新后，自动生成对应的 JSON 文件。

## 节日列表

### 一般说明

- 节日列表根据区域显示
- 大陆农历以简体中文显示，香港、台湾农历以繁体中文显示
- 日历卡片中农历显示优先级为 传统节日、公历节日、节气、农历日期
- 同一天存在传统节日、公历节日、节气时，日历卡片会显示传统节日。日历卡片详情中会显示完整节日信息
- 台湾和香港部分节假日名称较长，可能会超出显示区域，对于节日名称较长的情况（如：台湾光复纪念日），完整名称会显示在日历卡片详情中

### 中国大陆

- 传统节日（春节、元宵节、龙抬头、上巳节、端午节、七夕节、中元节、中秋节、重阳节、腊八节、小年、除夕）
- 公历节日（元旦、情人节、妇女节、植树节、劳动节、青年节、儿童节、建党节、七七事变、建军节、日本投降、抗战胜利、教师节、国庆节、公祭日、平安夜、圣诞节）
- 动态节日（母亲节、父亲节、感恩节）

### 中国香港

- 传统节日（春節、元宵節、佛陀誕辰、端午節、七夕節、中元節、中秋節、重陽節、除夕）
- 公历节日（元旦、勞動節、香港特別行政區成立紀念日、國慶日、平安夜、聖誕節、節禮日、耶稣受難節、复活節）
- 动态节日（母親節、父親節）

### 中国台湾

- 传统节日（春節、元宵節、佛陀誕辰、端午節、七夕節、中元節、中秋節、重陽節、除夕）
- 公历节日（中華民國開國紀念日、消防節、和平紀念日、婦女節、國父逝世紀念日、反侵略日、民族平等紀念日、青年節、國際醫師節、兒童節、言論自由日、勞動節、國際護理師節、環境日、國家海洋日、警察節、原住民族抵抗日、漁民節、解嚴紀念日、原住民族日、父親節、終戰紀念日、八二三紀念日、軍人節、國民體育日、國家防災日、孔子誕辰紀念日、國慶日、臺灣聯合國日、臺灣光復紀念日、海巡節、國父誕辰紀念日、身心障礙者日、人權日、移民日、平安夜、行憲紀念日、全國客家日、耶穌受難節、復活節）
- 动态节日（母親節、祖父母節）

## 感谢

- 初始版本使用和参考了 [china-holiday-calender](https://github.com/lanceliao/china-holiday-calender) 项目提供的节假日数据 API，表示感谢

