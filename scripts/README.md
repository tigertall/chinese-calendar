插件发布和运行，不需要依赖此文件夹中的文件。

<br />

这些脚本用于生成插件的节气信息中使用的TERM\_FIX\_INFO变量，描述了计算过程。
依赖 tyme.js （<https://github.com/6tail/tyme4ts/releases>），来计算准确的节气时间。

# generate\_solar\_terms.js

`node generate_solar_terms.js`

用于生成2000年至2099年的之间的节气时间，保存到json，参考核对用。

# compare\_and\_adjust.js

由于部分节气可能得到日期不对，需要修正到正确的日期，这个脚本用于生成可修正的分钟调整量范围，是 TERM\_FIX\_INFO 的来源，同时能够找到不能完成分钟区间调整的冲突年份。

`node compare_and_adjust.js`

## 原理

- 计算出每个节气时间相对2000年1月1号的分钟偏移，这个是插件中 SOLAR\_TERM\_INFO 的来源。
- 每计算一年数据，都可以得到一个节气的保持日期正确的分钟可调整区间\[min, max]：
  tyme.js计算的日期（时间部分取0点0分0秒）- 线性公式计算的时间 的分钟差，作为 min；  tyme.js  计算的日期（时间部分取25点59分59秒）- 线性公式计算的时间 的分钟差，作为 max;
- 计算下一年的数据，与之前的 \[min, max] 区间取交集，逐渐收缩 \[min, max] 可用的分钟数范围。
- 最终得到的 \[min, max] 就是这个节气的保持日期正确的分钟可调整区间。如果触发调整后的min > max ，那就是发生了冲突。
- 可以工作到冲突年份之前，目前基于2000年来看，首次冲突会发生在2054年冬至。

# check\_holidays\_xx.js

生成节假日 json 的脚本，用于 github pages 部署，提供json api 访问。
包括 check\_holidays\_cn.js、check\_holidays\_hk.js、、check\_holidays\_tw.js、utils.js 这个供 github actions 调用。

# gen\_tyme\_ref.js

用 tyme.cjs 生成 2000-2053 年每日干支、农历日期、节气基准数据，供 compare\_with\_tyme.js 使用。

`cd chinese-calendar && node scripts/gen_tyme_ref.mjs > /tmp/tyme_ref.json 2>&1`

# compare_with_tyme.js 

加载 tyme 基准数据，与 ChineseCalendar.js 逐日对比干支、农历日期、节气。

注意因为tyme.js是按照立春切换年干支，常规日历是按照春节切换年干支，所以年干支对比会有差异。

`gjs -m compare_with_tyme.js`
