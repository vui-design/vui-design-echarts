const code =
`<template>
  <vui-echarts-bar
    v-bind:data="data"
    v-bind:dimension="dimension"
    v-bind:metrics="metrics"
    v-bind:grid="grid"
    v-bind:xAxis="xAxis"
    v-bind:yAxis="yAxis"
    v-bind:yAxisIndex="yAxisIndex"
    v-bind:tooltip="tooltip"
    v-bind:serie="serie"
  />
</template>

<script>
  export default {
    data() {
      const data = [
        { weekday: "Mon", evaporation: 2.0, precipitation: 2.6, temperature: 2.0 },
        { weekday: "Tue", evaporation: 4.9, precipitation: 5.9, temperature: 2.2 },
        { weekday: "Wed", evaporation: 7.0, precipitation: 9.0, temperature: 3.3 },
        { weekday: "Thu", evaporation: 23.2, precipitation: 26.4, temperature: 4.5 },
        { weekday: "Fri", evaporation: 25.6, precipitation: 28.7, temperature: 6.3 },
        { weekday: "Sat", evaporation: 76.7, precipitation: 70.7, temperature: 10.2 },
        { weekday: "Sun", evaporation: 135.6, precipitation: 175.6, temperature: 20.3 }
      ];

      return {
        data: data,
        dimension: "weekday",
        metrics: [
          { key: "evaporation", name: "Evaporation" },
          { key: "precipitation", name: "Precipitation" },
          { key: "temperature", name: "Temperature" }
        ],
        grid: {
          bottom: 32
        },
        xAxis: {
          axisPointer: {
            type: "shadow"
          }
        },
        yAxis: [
          {
            type: "value",
            name: "Precipitation",
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: "{value} ml"
            }
          },
          {
            type: "value",
            name: "Temperature",
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: "{value} °C"
            }
          }
        ],
        yAxisIndex: function(metric, metricIndex) {
          return metric.key === "temperature" ? 1 : 0;
        },
        tooltip: {
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
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
`;

export default code;