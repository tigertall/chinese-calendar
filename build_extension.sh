#!/bin/bash

rm -f chinese-calendar.zip

# 编译翻译文件到 locale 目录（支持 zh_CN、zh_HK、zh_TW）
mkdir -p locale/zh_CN/LC_MESSAGES
mkdir -p locale/zh_HK/LC_MESSAGES
mkdir -p locale/zh_TW/LC_MESSAGES

if command -v msgfmt &> /dev/null; then
    # 简体中文：zh_CN
    msgfmt -o locale/zh_CN/LC_MESSAGES/chinese-calendar.mo po/zh_CN.po
    
    # 繁体中文：zh_HK
    msgfmt -o locale/zh_HK/LC_MESSAGES/chinese-calendar.mo po/zh_HK.po
    
    # 繁体中文：zh_TW
    msgfmt -o locale/zh_TW/LC_MESSAGES/chinese-calendar.mo po/zh_TW.po
    
    echo "Translation files compiled successfully."
else
    echo "msgfmt not found, skipping translation compilation."
fi

# 打包扩展（不包含 po/ 源文件，只包含编译后的 locale/）
zip -r chinese-calendar.zip chineseCalendar.js extension.js holidayManager.js \
 locale.js LICENSE metadata.json prefs.js README.md stylesheet.css schemas/ locale/

echo "Extension package 'chinese-calendar.zip' has been created."
