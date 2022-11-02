<template>
  <example v-bind:code="code" id="example-line-marker">
    <template slot="demo">
      <vui-echarts-line
        v-bind:data="data"
        v-bind:dimension="dimension"
        v-bind:metrics="metrics"
        v-bind:yAxis="yAxis"
        v-bind:markPoint="markPoint"
        v-bind:markLine="markLine"
      />
    </template>
    <template slot="title">未来一周气温变化</template>
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
        { weekday: "Mon", highest: 10, lowest: 1 },
        { weekday: "Tue", highest: 11, lowest: -2 },
        { weekday: "Wed", highest: 13, lowest: 2 },
        { weekday: "Thu", highest: 11, lowest: 5 },
        { weekday: "Fri", highest: 12, lowest: 3 },
        { weekday: "Sat", highest: 12, lowest: 2 },
        { weekday: "Sun", highest: 9, lowest: 0 }
      ];

      return {
        code,
        data: data,
        dimension: "weekday",
        metrics: [
          { key: "highest", name: "Highest" },
          { key: "lowest", name: "Lowest" }
        ],
        yAxis: {
          axisLabel: {
            formatter: "{value} °C"
          }
        },
        markPoint: (echarts, metric, metricIndex) => {
          if (metric.key === "highest") {
            return {
              data: [
                { type: "max", name: "Max" },
                { type: "min", name: "Min" }
              ]
            };
          }
          else if (metric.key === "lowest") {
            return {
              data: [
                { value: -2, xAxis: 1, yAxis: -1.5, name: "周最低" }
              ]
            };
          }
        },
        markLine: (echarts, metric, metricIndex) => {
          if (metric.key === "highest") {
            return {
              data: [
                { type: "average", name: "Avg" }
              ]
            };
          }
          else if (metric.key === "lowest") {
            return {
              data: [
                { type: "average", name: "Avg" },
                [
                  {
                    symbol: "none",
                    x: "90%",
                    yAxis: "max"
                  },
                  {
                    symbol: "circle",
                    label: {
                      position: "start",
                      formatter: "Max"
                    },
                    type: "max",
                    name: "最高点"
                  }
                ]
              ]
            };
          }
        }
      };
    }
  };
</script>