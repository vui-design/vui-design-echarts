<template>
  <div>
    <h1>介绍</h1>
    <p>Vui Design ECharts 是基于 Vue2.x 与 ECharts5.x 构建封装的组件库，用以解决繁杂的 ECharts 配置项以及数据转化带来的烦恼。Vui Design ECharts 生成一个 ECharts 图表时，用户只需关心<b>数据源</b>、<b>维度</b>、<b>指标</b>，以及一些<b>少量配置项</b>，甚至无需配置项，即可生成一个默认的图表，使用 Vui Design ECharts 助你快捷、高效地构建图表。</p>
    <h2 id="example-introduce-example">示例</h2>
    <iframe width="100%" height="480" frameborder="0" allowfullscreen="allowfullscreen" style="border: 1px solid #ebebeb; border-radius: 2px;" src="//jsfiddle.net/vuidesign/yLsc4o5f/18/embedded/result,html,js/?bodyColor=fff"></iframe>
  </div>
</template>

<script>
  import Anchors from "app/mixins/anchors";

  export default {
    mixins: [
      Anchors
    ]
  };
</script>