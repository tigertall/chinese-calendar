# Chinese Calendar GNOME Shell Extension

在 GNOME 时钟面板和日历卡片中显示中国农历日期、节气、传统节日和法定节假日调休信息。

Display Chinese lunar dates, solar terms, traditional festivals, and statutory holidays in the GNOME top bar clock and dropdown calendar card area.

<img width="800" alt="calendar" src="https://github.com/user-attachments/assets/a4b8da21-97f7-4677-b895-3730c5037dad" />

## 功能特性

- 在顶部面板时钟旁显示农历日期
- 在顶部面板时钟旁显示节日信息
- 在日历弹窗中显示农历日期和节日信息
- 在日历网格中显示法定节假日的休/班标记
- 显示二十四节气（在2000年到2053年内准确）
- 显示传统节日（春节、元宵节、龙抬头、上巳节、端午节、七夕节、中元节、中秋节、重阳节、腊八节、小年、除夕）
- 显示公历节日（元旦、情人节、妇女节、植树节、愚人节、劳动节、青年节、儿童节、建党节、七七事变、建军节、日本投降、抗战胜利、教师节、国庆节、公祭日、平安夜、圣诞节）
- 显示动态节日（母亲节、父亲节、感恩节）

## 安装方法

### 手动安装

提交到 gnome-extensions 的插件还在审核，所以目前可以手工安装。

1. 下载扩展文件压缩包
2. `gnome-extensions install chinese-calendar.zip`
3. 退出当前的 GNOME 会话，重新登录，这样才能在 GNOME 扩展管理中显示
4. 在 GNOME 扩展管理中启用和设置扩展
5. 如果要显示法定节假日调休信息，记得在设置中操作一次【更新数据】

## 设置选项

<img width="400" alt="settings" src="https://github.com/user-attachments/assets/0b76b967-a315-4ab1-ae3d-64de518589c2" />

### 面板显示

- **面板显示农历**：在顶部面板时钟旁显示农历日期
- **面板显示节日**：在顶部面板时钟旁显示节日信息

### 法定节假日

- **显示法定假日**：在日历中标记法定节假日的"休"和"班"
- **数据源**：选择法定节假日数据的来源（ShuYZ 镜像或 GitHub 源）
- **更新数据**：手动更新法定节假日数据，第一次使用需要更新手动一次；后续可在每年年底接口更新了下一年调休数据后手动更新

## 感谢

- 感谢 [china-holiday-calender](https://github.com/lanceliao/china-holiday-calender) 项目提供的节假日调休数据 API

