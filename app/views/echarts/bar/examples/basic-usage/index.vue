<template>
  <example v-bind:code="code" id="example-bar-basic-usage">
    <template slot="demo">
      <vui-echarts-bar v-bind="chart" />
    </template>
    <template slot="title">基础柱状图</template>
  </example>
</template>

<script>
  import Example from "app/components/example";
  import code from "./code";

  export default {
    components: {
      Example
    },
    data() {
      return {
        code,
        chart: {
          title: "告警业务分布",
          zoomable: true,
          dimension: "label",
          metrics: {
            key: "count",
            label: "突发事件"
          },
          colors: ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452", "#9a60b4", "#ea7ccc"],
          yAxis: {
            name: "告警数量(个)",
            nameGap: 32
          },
          tooltip: {
            valueFormatter: value => `${value}个`
          },
          data: [
            { label: "梦三国", count: 3 },
            { label: "解神者", count: 6 },
            { label: "梦塔防S", count: 9 },
            { label: "公共项目", count: 5 },
            { label: "我的侠客", count: 4 },
            { label: "野蛮人大作战2", count: 2 }
          ]
        }
      };
    }
  };
</script>