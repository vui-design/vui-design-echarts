const code =
`<template>
  <vui-echarts-bar
    v-bind:data="data"
    v-bind:dimension="dimension"
    v-bind:metrics="metrics"
    v-bind:grid="grid"
    v-bind:markPoint="markPoint"
    v-bind:markLine="markLine"
  />
</template>

<script>
  export default {
    data() {
      const data = [
        { month: "Jan", rainfall: 2.0, evaporation: 2.6 },
        { month: "Feb", rainfall: 4.9, evaporation: 5.9 },
        { month: "Mar", rainfall: 7.0, evaporation: 9.0 },
        { month: "Apr", rainfall: 23.2, evaporation: 26.4 },
        { month: "May", rainfall: 25.6, evaporation: 28.7 },
        { month: "Jun", rainfall: 76.7, evaporation: 70.7 },
        { month: "Jul", rainfall: 135.6, evaporation: 175.6 },
        { month: "Aug", rainfall: 162.2, evaporation: 182.2 },
        { month: "Sep", rainfall: 32.6, evaporation: 48.7 },
        { month: "Oct", rainfall: 20.0, evaporation: 18.8 },
        { month: "Nov", rainfall: 6.4, evaporation: 6.0 },
        { month: "Dec", rainfall: 3.3, evaporation: 2.3 },
      ];

      return {
        data: data,
        dimension: "month",
        metrics: [
          { key: "rainfall", name: "Rainfall" },
          { key: "evaporation", name: "Evaporation" }
        ],
        grid: {
          bottom: 32,
          right: 40
        },
        markPoint: function(echarts, metric, metricIndex) {
          if (metric.key === "rainfall") {
            return {
              data: [
                { type: "max", name: "Max" },
                { type: "min", name: "Min" }
              ]
            };
          }
          else if (metric.key === "evaporation") {
            return {
              data: [
                { value: 182.2, xAxis: 7, yAxis: 183, name: "Max" },
                { value: 2.3, xAxis: 11, yAxis: 3, name: "Min" }
              ]
            };
          }
        },
        markLine: {
          data: [
            { type: "average", name: "Avg" }
          ]
        }
      };
    }
  };
</script>
`;

export default code;