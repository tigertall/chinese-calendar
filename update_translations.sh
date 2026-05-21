#!/bin/bash

set -e

# 从源码提取可翻译字符串到 .pot 模板
PKG_NAME=$(jq -r '.uuid' metadata.json)
PKG_VERSION=$(jq -r '.["version-name"]' metadata.json)
PKG_COPYRIGHT=$(sed -n 's/^Copyright (c) [0-9]* //p' LICENSE)
PKG_EMAIL="tigertall@126.com"
xgettext --from-code=UTF-8 --output=po/chinese-calendar.pot \
    --language=JavaScript \
    --package-name="$PKG_NAME" \
    --package-version="$PKG_VERSION" \
    --msgid-bugs-address="$PKG_EMAIL" \
    --copyright-holder="$PKG_COPYRIGHT" \
    *.js

# 修复剩余占位元信息
sed -i \
    -e '1s/SOME DESCRIPTIVE TITLE\./Chinese Calendar/' \
    -e 's/Copyright (C) YEAR/Copyright (C) 2026/' \
    -e "s/^# FIRST AUTHOR.*/# $PKG_COPYRIGHT <$PKG_EMAIL>, 2026./" \
    -e "s/\"Report-Msgid-Bugs-To: $PKG_EMAIL\\\\n\"/\"Report-Msgid-Bugs-To: $PKG_COPYRIGHT <$PKG_EMAIL>\\\\n\"/" \
    -e "s/\"Last-Translator: FULL NAME <EMAIL@ADDRESS>\\\\n\"/\"Last-Translator: $PKG_COPYRIGHT <$PKG_EMAIL>\\\\n\"/" \
    po/chinese-calendar.pot

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
