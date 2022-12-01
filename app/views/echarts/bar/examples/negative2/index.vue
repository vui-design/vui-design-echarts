<template>
  <example v-bind:code="code" id="example-bar-negative2">
    <template slot="demo">
      <vui-echarts-bar
        v-bind:data="data"
        v-bind:dimension="dimension"
        v-bind:metrics="metrics"
        v-bind:grid="grid"
        v-bind:xAxis="xAxis"
        v-bind:yAxis="yAxis"
        v-bind:stack="stack"
        v-bind:label="label"
        v-bind:emphasis="emphasis"
      />
    </template>
    <template slot="title">正负条形图</template>
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
        { weekday: "Mon", profit: 200, income: 320, expenses: -120 },
        { weekday: "Tue", profit: 170, income: 302, expenses: -132 },
        { weekday: "Wed", profit: 240, income: 341, expenses: -101 },
        { weekday: "Thu", profit: 244, income: 374, expenses: -134 },
        { weekday: "Fri", profit: 200, income: 390, expenses: -190 },
        { weekday: "Sat", profit: 220, income: 450, expenses: -230 },
        { weekday: "Sun", profit: 210, income: 420, expenses: -210 }
      ];

      return {
        code,
        data: data,
        dimension: "weekday",
        metrics: [
          { key: "profit", name: "Profit" },
          { key: "income", name: "Income" },
          { key: "expenses", name: "Expenses" },
        ],
        grid: {
          bottom: 32
        },
        xAxis: {
          type: "value",
          splitLine: {
            lineStyle: {
              type: "dashed"
            }
          }
        },
        yAxis: {
          type: "category",
          axisTick: {
            show: false
          }
        },
        stack: function(echarts, metric, metricIndex) {
          if (metric.key === "income" || metric.key ===  "expenses") {
            return "total";
          }
        },
        label: function(echarts, metric, metricIndex) {
          if (metric.key === "profit" || metric.key === "income") {
            return {
              show: true,
              position: "inside",
              color:"#fff"
            };
          }
          else if (metric.key ===  "expenses") {
            return {
              show: true,
              position: "left"
            };
          }
        },
        emphasis: {
          focus: "series"
        }
      };
    }
  };
</script>