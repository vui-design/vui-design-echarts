<template>
  <example v-bind:code="code" id="example-bar-waterfall">
    <template slot="demo">
      <vui-echarts-bar
        v-bind:data="data"
        v-bind:dimension="dimension"
        v-bind:metrics="metrics"
        v-bind:legend="legend"
        v-bind:tooltip="tooltip"
        v-bind:stack="stack"
        v-bind:label="label"
        v-bind:itemStyle="itemStyle"
        v-bind:emphasis="emphasis"
      />
    </template>
    <template slot="title">瀑布图（柱状图模拟）</template>
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
        { category: "Total", cost: 2900, placeholder: 0 },
        { category: "Rent", cost: 1200, placeholder: 1700 },
        { category: "Utilities", cost: 300, placeholder: 1400 },
        { category: "Transportation", cost: 200, placeholder: 1200 },
        { category: "Meals", cost: 900, placeholder: 300 },
        { category: "Other", cost: 300, placeholder: 0 }
      ];

      return {
        code,
        data: data,
        dimension: "category",
        metrics: [
          { key: "placeholder", name: "Placeholder" },
          { key: "cost", name: "Life Cost" }
        ],
        legend: {
          show: false
        },
        tooltip: {
          formatter: function(params) {
            return params[1].name + "<br />" + params[1].seriesName + ": " + params[1].value;
          }
        },
        stack: "Total",
        label: function(echarts, metric, metricIndex) {
          if (metric.key === "cost") {
            return {
              show: true,
              position: "inside"
            };
          }
        },
        itemStyle: function(echarts, metric, metricIndex) {
          if (metric.key === "placeholder") {
            return {
              borderColor: "transparent",
              color: "transparent"
            };
          }
        },
        emphasis: function(echarts, metric, metricIndex) {
          if (metric.key === "placeholder") {
            return {
              itemStyle: {
                borderColor: "transparent",
                color: "transparent"
              }
            };
          }
        }
      };
    }
  };
</script>