<template>
  <example v-bind:code="code" id="example-line-sections">
    <template slot="demo">
      <vui-echarts-line
        v-bind:dimension="dimension"
        v-bind:metrics="metrics"
        v-bind:smooth="smooth"
        v-bind:markArea="markArea"
        v-bind:yAxis="yAxis"
        v-bind:visualMap="visualMap"
        v-bind:data="data"
      />
    </template>
    <template slot="title">一天用电量分布</template>
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
        dimension: "time",
        metrics: {
          key: "electricity",
          label: "Electricity"
        },
        smooth: true,
        markArea: {
          itemStyle: {
            color: "rgba(255, 173, 177, 0.4)"
          },
          data: [
            [
              { xAxis: "07:30", name: "Morning Peak" },
              { xAxis: "10:00" }
            ],
            [
              { xAxis: "17:30", name: "Evening Peak" },
              { xAxis: "21:15" }
            ]
          ]
        },
        yAxis: {
          axisLabel: {
            formatter: "{value} W"
          }
        },
        visualMap: {
          show: false,
          dimension: 0,
          pieces: [
            { lte: 6, color: "green" },
            { gt: 6, lte: 8, color: "red" },
            { gt: 8, lte: 14, color: "green" },
            { gt: 14, lte: 17, color: "red" },
            { gt: 17, color: "green" }
          ]
        },
        data: [
          { time: "00:00", electricity: 300 },
          { time: "01:15", electricity: 280 },
          { time: "02:30", electricity: 250 },
          { time: "03:45", electricity: 260 },
          { time: "05:00", electricity: 270 },
          { time: "06:15", electricity: 300 },
          { time: "07:30", electricity: 550 },
          { time: "08:45", electricity: 500 },
          { time: "10:00", electricity: 400 },
          { time: "11:15", electricity: 390 },
          { time: "12:30", electricity: 380 },
          { time: "13:45", electricity: 390 },
          { time: "15:00", electricity: 400 },
          { time: "16:15", electricity: 500 },
          { time: "17:30", electricity: 600 },
          { time: "18:45", electricity: 750 },
          { time: "20:00", electricity: 800 },
          { time: "21:15", electricity: 700 },
          { time: "22:30", electricity: 600 },
          { time: "23:45", electricity: 400 }
        ]
      };
    }
  };
</script>