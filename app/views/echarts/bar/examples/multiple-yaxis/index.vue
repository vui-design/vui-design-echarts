<template>
  <example v-bind:code="code" id="example-bar-multiple-yaxis">
    <template slot="demo">
      <vui-echarts-bar
        v-bind:data="data"
        v-bind:dimension="dimension"
        v-bind:metrics="metrics"
        v-bind:color="color"
        v-bind:grid="grid"
        v-bind:xAxis="xAxis"
        v-bind:yAxis="yAxis"
        v-bind:yAxisIndex="yAxisIndex"
        v-bind:tooltip="tooltip"
        v-bind:serie="serie"
      />
    </template>
    <template slot="title">多 Y 轴示例</template>
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
      const colors = ["#5470c6", "#91cc75", "#ee6666"];
      const data = [
        { month: "Jan", evaporation: 2.0, precipitation: 2.6, temperature: 2.0 },
        { month: "Feb", evaporation: 4.9, precipitation: 5.9, temperature: 2.2 },
        { month: "Mar", evaporation: 7.0, precipitation: 9.0, temperature: 3.3 },
        { month: "Apr", evaporation: 23.2, precipitation: 26.4, temperature: 4.5 },
        { month: "May", evaporation: 25.6, precipitation: 28.7, temperature: 6.3 },
        { month: "Jun", evaporation: 76.7, precipitation: 70.7, temperature: 10.2 },
        { month: "Jul", evaporation: 135.6, precipitation: 175.6, temperature: 20.3 },
        { month: "Aug", evaporation: 162.2, precipitation: 182.2, temperature: 23.4 },
        { month: "Sep", evaporation: 32.6, precipitation: 48.7, temperature: 23.0 },
        { month: "Oct", evaporation: 20.0, precipitation: 18.8, temperature: 16.5 },
        { month: "Nov", evaporation: 6.4, precipitation: 6.0, temperature: 12.0 },
        { month: "Dec", evaporation: 3.3, precipitation: 2.3, temperature: 6.2 }
      ];

      return {
        code,
        data: data,
        dimension: "month",
        metrics: [
          { key: "evaporation", name: "Evaporation" },
          { key: "precipitation", name: "Precipitation" },
          { key: "temperature", name: "Temperature" }
        ],
        color: colors,
        grid: {
          top: 32,
          bottom: 32,
          left: 8,
          right: 24
        },
        xAxis: {
          axisPointer: {
            type: "shadow"
          }
        },
        yAxis: [
          {
            type: "value",
            name: "蒸发量",
            position: "right",
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[0]
              }
            },
            axisLabel: {
              color: colors[0],
              formatter: "{value} ml"
            }
          },
          {
            type: "value",
            name: "降水量",
            position: "right",
            alignTicks: true,
            offset: 60,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[1]
              }
            },
            axisLabel: {
              color: colors[1],
              formatter: "{value} ml"
            }
          },
          {
            type: "value",
            name: "温度",
            position: "left",
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[2]
              }
            },
            axisLabel: {
              color: colors[2],
              formatter: "{value} °C"
            }
          }
        ],
        yAxisIndex: function(metric, metricIndex) {
          if (metric.key === "evaporation") {
            return 0;
          }
          else if (metric.key === "precipitation") {
            return 1;
          }
          else if (metric.key === "temperature") {
            return 2;
          }
        },
        tooltip: {
          axisPointer: {
            type: "cross"
          }
        },
        serie: function(metric, metricIndex) {
          if (metric.key === "evaporation" || metric.key === "precipitation") {
            return {
              type: "bar",
              tooltip: {
                valueFormatter: function (value) {
                  return value + " ml";
                }
              }
            };
          }
          else if (metric.key === "temperature") {
            return {
              type: "line",
              tooltip: {
                valueFormatter: function (value) {
                  return value + " °C";
                }
              }
            };
          }
        }
      };
    }
  };
</script>