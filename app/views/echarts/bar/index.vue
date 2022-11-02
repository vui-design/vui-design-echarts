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
        <example-waterfall />
      </vui-col>
      <vui-col v-bind:span="12">
        <example-negative2 />
      </vui-col>
    </vui-row>
    <h2 id="example-api">API</h2>
    <h3>Bar 属性</h3>
    <p>注意，以下属性中，<code>label</code>、<code>itemStyle</code>、<code>backgroundStyle</code>、<code>markPoint</code>、<code>markLine</code> 以及 <code>markArea</code> 等被设为 <code>Function</code> 类型时，接收 <code>echarts</code>、<code>metric</code>、<code>metricIndex</code> 作为参数，一般用于在双柱状（或以上）图表中根据 <code>metric</code> 指标返回不同系列的对应配置。</p>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th>说明</th>
          <th width="240">类型</th>
          <th width="140">默认值</th>
        </tr>
      </thead>
      <tbody>
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
          <td>"name"</td>
        </tr>
        <tr>
          <td>metrics</td>
          <td>数据指标</td>
          <td>String | Object | Array</td>
          <td>"value"</td>
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
          <td>axis</td>
          <td>设为 <code>reverse</code> 时，直角坐标系 grid 中的 x 轴与 y 轴将进行位置交换，默认为 normal 不交换</td>
          <td>String</td>
          <td>"normal"</td>
        </tr>
        <tr>
          <td>xAxis</td>
          <td>直角坐标系 grid 中的 x 轴，详情请参考 <a href="https://echarts.apache.org/zh/option.html#xAxis" target="_blank">xAxis</a> 配置项</td>
          <td>Object</td>
          <td>--</td>
        </tr>
        <tr>
          <td>yAxis</td>
          <td>直角坐标系 grid 中的 y 轴，详情请参考 <a href="https://echarts.apache.org/zh/option.html#yAxis" target="_blank">yAxis</a> 配置项</td>
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
          <td>legend</td>
          <td>图例组件，详情请参考 <a href="https://echarts.apache.org/zh/option.html#legend" target="_blank">legend</a> 配置项</td>
          <td>Object</td>
          <td>--</td>
        </tr>
        <tr>
          <td>vm</td>
          <td>用于进行视觉编码，也就是将数据映射到视觉元素（视觉通道），详情请参考 <a href="https://echarts.apache.org/zh/option.html#visualMap" target="_blank">visualMap</a> 配置项</td>
          <td>Object | Array</td>
          <td>--</td>
        </tr>
        <tr>
          <td>zoom</td>
          <td>用于区域缩放，从而能自由关注细节的数据信息，或者概览数据整体，或者去除离群点的影响，详情请参考 <a href="https://echarts.apache.org/zh/option.html#dataZoom" target="_blank">dataZoom</a> 配置项</td>
          <td>Object</td>
          <td>--</td>
        </tr>
        <tr>
          <td>stack</td>
          <td>数据堆叠，详情请参考 <a href="https://echarts.apache.org/zh/option.html#series-bar.stack" target="_blank">series-bar.stack</a> 配置项</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>stackStrategy</td>
          <td>堆积数值的策略，前提是 <code>stack</code> 属性已被设置，详情请参考 <a href="https://echarts.apache.org/zh/option.html#series-bar.stackStrategy" target="_blank">series-bar.stackStrategy</a> 配置项</td>
          <td>String</td>
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
          <td>dataFormatter</td>
          <td>用于返回单个数据项的扩展配置，如 groupId、label 等，详情请参考 <a href="https://echarts.apache.org/zh/option.html#series-bar.data" target="_blank">series-bar.data</a> 配置项</td>
          <td>Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>options</td>
          <td>ECharts 原生配置项，如果以上 API 属性无法满足你的需求，你可以使用此属性完全自主定义图表配置，详情请参考 <a href="https://echarts.apache.org/zh/option.html" target="_blank">官方文档</a></td>
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
  import ExampleWaterfall from "./examples/waterfall";
  import ExampleNegative2 from "./examples/negative2";

  export default {
    mixins: [
      Anchors
    ],
    components: {
      ExampleBasicUsage,
      ExampleBackground,
      ExampleTickAlign,
      ExampleDataColor,
      ExampleWaterfall,
      ExampleNegative2,
    }
  };
</script>