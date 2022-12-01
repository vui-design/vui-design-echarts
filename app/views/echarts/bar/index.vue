<template>
  <div>
    <h1>柱状图 Bar</h1>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-basic-usage />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-background />
      </vui-col>
    </vui-row>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-tick-align />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-data-color />
      </vui-col>
    </vui-row>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-data-colors />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-waterfall />
      </vui-col>
    </vui-row>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-waterfall2 />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-negative />
      </vui-col>
    </vui-row>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-negative2 />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-yaxis-category />
      </vui-col>
    </vui-row>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-gradient />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-label-rotation />
      </vui-col>
    </vui-row>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-stack />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-yaxis-category-stack />
      </vui-col>
    </vui-row>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-rainfall-vs-evaporation />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-mix-line-bar />
      </vui-col>
    </vui-row>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-mix-zoom-on-value />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-multiple-yaxis />
      </vui-col>
    </vui-row>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-animation-delay />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-large />
      </vui-col>
    </vui-row>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <example-race />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-dynamic-data />
      </vui-col>
    </vui-row>
    <h2 id="example-api">API</h2>
    <h3>Bar 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th>说明</th>
          <th width="180">类型</th>
          <th width="140">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="4">注：以下属性为图表全局性配置</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>设置图表为加载状态</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>width</td>
          <td>图表宽度</td>
          <td>String | Number</td>
          <td>"auto"</td>
        </tr>
        <tr>
          <td>height</td>
          <td>图表高度</td>
          <td>String | Number</td>
          <td>"320px"</td>
        </tr>
        <tr>
          <td>data</td>
          <td>图表数据源</td>
          <td>Array</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>dimension</td>
          <td>数据维度</td>
          <td>String | Object</td>
          <td>--</td>
        </tr>
        <tr>
          <td>metrics</td>
          <td>数据指标</td>
          <td>String | Object | Array</td>
          <td>--</td>
        </tr>
        <tr>
          <td>title</td>
          <td>图表标题</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>titleStyle</td>
          <td>图表标题样式，详情请参考 <a href="https://echarts.apache.org/zh/option.html#title.textStyle" target="_blank">title.textStyle</a> 配置项</td>
          <td>Object</td>
          <td>--</td>
        </tr>
        <tr>
          <td>subTitle</td>
          <td>图表副标题</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>subTitleStyle</td>
          <td>图表副标题样式，详情请参考 <a href="https://echarts.apache.org/zh/option.html#title.subtextStyle" target="_blank">title.subtextStyle</a> 配置项</td>
          <td>Object</td>
          <td>--</td>
        </tr>
        <tr>
          <td>color</td>
          <td>图表配色，详情请参考 <a href="https://echarts.apache.org/zh/option.html#color" target="_blank">color</a> 配置项</td>
          <td>Array</td>
          <td>--</td>
        </tr>
        <tr>
          <td>grid</td>
          <td>直角坐标系内绘图网格，详情请参考 <a href="https://echarts.apache.org/zh/option.html#grid" target="_blank">grid</a> 配置项</td>
          <td>Object</td>
          <td>--</td>
        </tr>
        <tr>
          <td>xAxis</td>
          <td>直角坐标系 grid 中的 x 轴，详情请参考 <a href="https://echarts.apache.org/zh/option.html#xAxis" target="_blank">xAxis</a> 配置项</td>
          <td>Object | Array</td>
          <td>--</td>
        </tr>
        <tr>
          <td>yAxis</td>
          <td>直角坐标系 grid 中的 y 轴，详情请参考 <a href="https://echarts.apache.org/zh/option.html#yAxis" target="_blank">yAxis</a> 配置项</td>
          <td>Object | Array</td>
          <td>--</td>
        </tr>
        <tr>
          <td>vm</td>
          <td>视觉映射组件，详情请参考 <a href="https://echarts.apache.org/zh/option.html#visualMap" target="_blank">visualMap</a> 配置项</td>
          <td>Object | Array</td>
          <td>--</td>
        </tr>
        <tr>
          <td>legend</td>
          <td>图例组件，详情请参考 <a href="https://echarts.apache.org/zh/option.html#legend" target="_blank">legend</a> 配置项</td>
          <td>Object</td>
          <td>--</td>
        </tr>
        <tr>
          <td>zoom</td>
          <td>区域缩放组件，详情请参考 <a href="https://echarts.apache.org/zh/option.html#dataZoom" target="_blank">dataZoom</a> 配置项</td>
          <td>Object</td>
          <td>--</td>
        </tr>
        <tr>
          <td>tooltip</td>
          <td>提示框组件，详情请参考 <a href="https://echarts.apache.org/zh/option.html#tooltip" target="_blank">tooltip</a> 配置项</td>
          <td>Object</td>
          <td>--</td>
        </tr>
        <tr>
          <td>toolbox</td>
          <td>工具栏，详情请参考 <a href="https://echarts.apache.org/zh/option.html#toolbox" target="_blank">toolbox</a> 配置项</td>
          <td>Object</td>
          <td>--</td>
        </tr>
        <tr>
          <td>animation</td>
          <td>是否开启动画，详情请参考 <a href="https://echarts.apache.org/zh/option.html#animation" target="_blank">animation</a> 配置项</td>
          <td>Boolean</td>
          <td>--</td>
        </tr>
        <tr>
          <td>animationThreshold</td>
          <td>是否开启动画的阈值，当单个系列显示的图形数量大于这个阈值时会关闭动画，详情请参考 <a href="https://echarts.apache.org/zh/option.html#animationThreshold" target="_blank">animationThreshold</a> 配置项</td>
          <td>Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>animationEasing</td>
          <td>初始动画的缓动效果，详情请参考 <a href="https://echarts.apache.org/zh/option.html#animationEasing" target="_blank">animationEasing</a> 配置项</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>animationEasingUpdate</td>
          <td>数据更新动画的缓动效果，详情请参考 <a href="https://echarts.apache.org/zh/option.html#animationEasingUpdate" target="_blank">animationEasingUpdate</a> 配置项</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>animationDelay</td>
          <td>初始动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的初始动画效果，详情请参考 <a href="https://echarts.apache.org/zh/option.html#animationDelay" target="_blank">animationDelay</a> 配置项</td>
          <td>Number | Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>animationDelayUpdate</td>
          <td>数据更新动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的更新动画效果，详情请参考 <a href="https://echarts.apache.org/zh/option.html#animationDelay" target="_blank">animationDelay</a> 配置项</td>
          <td>Number | Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>animationDuration</td>
          <td>初始动画的时长，支持回调函数，可以通过每个数据返回不同的时长实现更戏剧的初始动画效果，详情请参考 <a href="https://echarts.apache.org/zh/option.html#animationDuration" target="_blank">animationDuration</a> 配置项</td>
          <td>Number | Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>animationDurationUpdate</td>
          <td>数据更新动画的时长，支持回调函数，可以通过每个数据返回不同的时长实现更戏剧的更新动画效果，详情请参考 <a href="https://echarts.apache.org/zh/option.html#animationDurationUpdate" target="_blank">animationDurationUpdate</a> 配置项</td>
          <td>Number | Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td colspan="4">注：以下属性为 serie 系列数据配置，当被设为 Function 类型时，接收 echarts、metric、metricIndex 作为参数，一般用于在双柱状（或以上）图表中根据 metric 指标返回不同系列数据的特定配置。</td>
        </tr>
        <tr>
          <td>xAxisIndex</td>
          <td>用于指定单个 metric 系列数据使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用，详情请参考 <a href="https://echarts.apache.org/zh/option.html#series-bar.xAxisIndex" target="_blank">series-bar.xAxisIndex</a> 配置项</td>
          <td>Number | Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>yAxisIndex</td>
          <td>用于指定单个 metric 系列数据使用的 y 轴的 index，在单个图表实例中存在多个 y 轴的时候有用，详情请参考 <a href="https://echarts.apache.org/zh/option.html#series-bar.yAxisIndex" target="_blank">series-bar.yAxisIndex</a> 配置项</td>
          <td>Number | Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>stack</td>
          <td>数据堆叠，详情请参考 <a href="https://echarts.apache.org/zh/option.html#series-bar.stack" target="_blank">series-bar.stack</a> 配置项</td>
          <td>String | Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>stackStrategy</td>
          <td>堆积数值的策略，前提是 <code>stack</code> 属性已被设置，详情请参考 <a href="https://echarts.apache.org/zh/option.html#series-bar.stackStrategy" target="_blank">series-bar.stackStrategy</a> 配置项</td>
          <td>String | Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>label</td>
          <td>图形上的文本标签，可用于说明图形的一些数据信息，比如值、名称等，详情请参考 <a href="https://echarts.apache.org/zh/option.html#series-bar.label" target="_blank">series-bar.label</a> 配置项</td>
          <td>Object | Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>itemStyle</td>
          <td>折线拐点标志的样式，详情请参考 <a href="https://echarts.apache.org/zh/option.html#series-bar.itemStyle" target="_blank">series-bar.itemStyle</a> 配置项</td>
          <td>Object | Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>backgroundStyle</td>
          <td>每一个柱条的背景样式，详情请参考 <a href="https://echarts.apache.org/zh/option.html#series-bar.backgroundStyle" target="_blank">series-bar.backgroundStyle</a> 配置项</td>
          <td>Object | Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>emphasis</td>
          <td>高亮的图形样式和标签样式，详情请参考 <a href="https://echarts.apache.org/zh/option.html#series-bar.emphasis" target="_blank">series-bar.emphasis</a> 配置项</td>
          <td>Object | Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>markPoint</td>
          <td>图表标注，详情请参考 <a href="https://echarts.apache.org/zh/option.html#series-bar.markPoint" target="_blank">series-bar.markPoint</a> 配置项</td>
          <td>Object | Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>markLine</td>
          <td>图表标线，详情请参考 <a href="https://echarts.apache.org/zh/option.html#series-bar.markLine" target="_blank">series-bar.markLine</a> 配置项</td>
          <td>Object | Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>markArea</td>
          <td>图表标域，常用于标记图表中某个范围的数据，例如标出某段时间投放了广告，详情请参考 <a href="https://echarts.apache.org/zh/option.html#series-bar.markArea" target="_blank">series-bar.markArea</a> 配置项</td>
          <td>Object | Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>serieType</td>
          <td>单个 serie 系列的类型，可定义为 Function 类型用于实现折柱混合等图表，详情请参考 <a href="https://echarts.apache.org/zh/option.html#series-bar.type" target="_blank">series-bar.type</a> 配置项</td>
          <td>String | Function</td>
          <td>"bar"</td>
        </tr>
        <tr>
          <td>serie</td>
          <td>单个 serie 系列的其它扩展配置，如 tooltip 等，详情请参考 <a href="https://echarts.apache.org/zh/option.html#series-bar" target="_blank">series-bar</a> 配置项</td>
          <td>Object | Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>dataFormatter</td>
          <td>用于返回单个数据项的扩展配置，如 groupId、label 等，详情请参考 <a href="https://echarts.apache.org/zh/option.html#series-bar.data" target="_blank">series-bar.data</a> 配置项</td>
          <td>Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td colspan="4">注：以下属性为 ECharts 原生配置项</td>
        </tr>
        <tr>
          <td>options</td>
          <td>ECharts 原生配置项，如果以上 API 属性无法满足你的需求，你可以单独使用此属性来自主定义图表配置，详情请参考 <a href="https://echarts.apache.org/zh/option.html" target="_blank">官方文档</a></td>
          <td>Object</td>
          <td>--</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import Anchors from "app/mixins/anchors";
  import ExampleBasicUsage from "./examples/basic-usage";
  import ExampleBackground from "./examples/background";
  import ExampleTickAlign from "./examples/tick-align";
  import ExampleDataColor from "./examples/data-color";
  import ExampleDataColors from "./examples/data-colors";
  import ExampleWaterfall from "./examples/waterfall";
  import ExampleWaterfall2 from "./examples/waterfall2";
  import ExampleNegative from "./examples/negative";
  import ExampleNegative2 from "./examples/negative2";
  import ExampleYaxisCategory from "./examples/yaxis-category";
  import ExampleGradient from "./examples/gradient";
  import ExampleLabelRotation from "./examples/label-rotation";
  import ExampleStack from "./examples/stack";
  import ExampleYaxisCategoryStack from "./examples/yaxis-category-stack";
  import ExampleRainfallVsEvaporation from "./examples/rainfall-vs-evaporation";
  import ExampleMixLineBar from "./examples/mix-line-bar";
  import ExampleMixZoomOnValue from "./examples/mix-zoom-on-value";
  import ExampleMultipleYaxis from "./examples/multiple-yaxis";
  import ExampleAnimationDelay from "./examples/animation-delay";
  import ExampleLarge from "./examples/large";
  import ExampleRace from "./examples/race";
  import ExampleDynamicData from "./examples/dynamic-data";

  export default {
    mixins: [
      Anchors
    ],
    components: {
      ExampleBasicUsage,
      ExampleBackground,
      ExampleTickAlign,
      ExampleDataColor,
      ExampleDataColors,
      ExampleWaterfall,
      ExampleWaterfall2,
      ExampleNegative,
      ExampleNegative2,
      ExampleYaxisCategory,
      ExampleGradient,
      ExampleLabelRotation,
      ExampleStack,
      ExampleYaxisCategoryStack,
      ExampleRainfallVsEvaporation,
      ExampleMixLineBar,
      ExampleMixZoomOnValue,
      ExampleMultipleYaxis,
      ExampleAnimationDelay,
      ExampleLarge,
      ExampleRace,
      ExampleDynamicData
    }
  };
</script>