#!/bin/bash

set -e

# 从源码提取可翻译字符串到 .pot 模板
xgettext --from-code=UTF-8 --output=po/chinese-calendar.pot \
    --language=JavaScript *.js

echo "POT template generated: po/chinese-calendar.pot"

# 合并 .pot 到各 .po 文件
for po in po/*.po; do
    [ -f "$po" ] || continue
    msgmerge --update "$po" po/chinese-calendar.pot
    echo "Merged: $po"
done

# 编译 .mo
mkdir -p locale/zh_CN/LC_MESSAGES locale/zh_HK/LC_MESSAGES locale/zh_TW/LC_MESSAGES

for po in po/*.po; do
    [ -f "$po" ] || continue
    lang=$(basename "$po" .po)
    msgfmt -o "locale/$lang/LC_MESSAGES/chinese-calendar.mo" "$po"
done

echo "Translation files compiled successfully."
