<template>
  <example v-bind:code="code" id="example-bar-tick-align">
    <template slot="demo">
      <vui-echarts-bar
        v-bind:data="data"
        v-bind:dimension="dimension"
        v-bind:metrics="metrics"
        v-bind:xAxis="xAxis"
      />
    </template>
    <template slot="title">坐标轴刻度与标签对齐</template>
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
        { weekday: "Mon", count: 10 },
        { weekday: "Tue", count: 52 },
        { weekday: "Wed", count: 200 },
        { weekday: "Thu", count: 334 },
        { weekday: "Fri", count: 390 },
        { weekday: "Sat", count: 330 },
        { weekday: "Sun", count: 220 }
      ];

      return {
        code,
        data: data,
        dimension: "weekday",
        metrics: "count",
        xAxis: {
          axisTick: {
            alignWithLabel: true
          }
        }
      };
    }
  };
</script>