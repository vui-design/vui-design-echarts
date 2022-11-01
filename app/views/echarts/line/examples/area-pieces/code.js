const code =
`<template>
  <vui-echarts-line
    v-bind:dimension="dimension"
    v-bind:metrics="metrics"
    v-bind:showSymbol="showSymbol"
    v-bind:smooth="smooth"
    v-bind:lineStyle="lineStyle"
    v-bind:areaStyle="areaStyle"
    v-bind:markLine="markLine"
    v-bind:visualMap="visualMap"
    v-bind:data="data"
  />
</template>

<script>
  export default {
    data() {
      return {
        dimension: "date",
        metrics: "value",
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
        },
        visualMap: {
          type: "piecewise",
          show: false,
          dimension: 0,
          seriesIndex: 0,
          pieces: [
            { gt: 1, lt: 3, color: "rgba(0, 0, 180, 0.4)" },
            { gt: 5, lt: 7, color: "rgba(0, 0, 180, 0.4)" }
          ]
        },
        data: [
          { date: "2019-10-10", value: 200 },
          { date: "2019-10-11", value: 560 },
          { date: "2019-10-12", value: 750 },
          { date: "2019-10-13", value: 580 },
          { date: "2019-10-14", value: 250 },
          { date: "2019-10-15", value: 300 },
          { date: "2019-10-16", value: 450 },
          { date: "2019-10-17", value: 300 },
          { date: "2019-10-18", value: 100 }
        ]
      };
    }
  };
</script>
`;

export default code;