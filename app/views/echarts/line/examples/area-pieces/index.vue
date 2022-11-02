<template>
  <example v-bind:code="code" id="example-line-area-pieces">
    <template slot="demo">
      <vui-echarts-line
        v-bind:data="data"
        v-bind:dimension="dimension"
        v-bind:metrics="metrics"
        v-bind:vm="vm"
        v-bind:showSymbol="showSymbol"
        v-bind:smooth="smooth"
        v-bind:lineStyle="lineStyle"
        v-bind:areaStyle="areaStyle"
        v-bind:markLine="markLine"
      />
    </template>
    <template slot="title">折线图区域高亮</template>
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
      const data = [
        { date: "2019-10-10", value: 200 },
        { date: "2019-10-11", value: 560 },
        { date: "2019-10-12", value: 750 },
        { date: "2019-10-13", value: 580 },
        { date: "2019-10-14", value: 250 },
        { date: "2019-10-15", value: 300 },
        { date: "2019-10-16", value: 450 },
        { date: "2019-10-17", value: 300 },
        { date: "2019-10-18", value: 100 }
      ];

      return {
        code,
        data: data,
        dimension: "date",
        metrics: "value",
        vm: {
          type: "piecewise",
          show: false,
          dimension: 0,
          seriesIndex: 0,
          pieces: [
            { gt: 1, lt: 3, color: "rgba(0, 0, 180, 0.5)" },
            { gt: 5, lt: 7, color: "rgba(0, 0, 180, 0.5)" }
          ]
        },
        showSymbol: false,
        smooth: 0.6,
        lineStyle: {
          color: "#5470c6",
          width: 2
        },
        areaStyle: {

        },
        markLine: {
          symbol: ["none", "none"],
          label: {
            show: false
          },
          data: [
            { xAxis: 1 },
            { xAxis: 3 },
            { xAxis: 5 },
            { xAxis: 7 }
          ]
        }
      };
    }
  };
</script>