<template>
  <example v-bind:code="code" id="example-bar-data-color">
    <template slot="demo">
      <vui-echarts-bar
        v-bind:data="data"
        v-bind:dimension="dimension"
        v-bind:metrics="metrics"
        v-bind:itemStyle="itemStyle"
      />
    </template>
    <template slot="title">自定义单个柱子颜色</template>
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
        { weekday: "Mon", count: 120 },
        { weekday: "Tue", count: 200 },
        { weekday: "Wed", count: 150 },
        { weekday: "Thu", count: 80 },
        { weekday: "Fri", count: 70 },
        { weekday: "Sat", count: 110 },
        { weekday: "Sun", count: 130 }
      ];

      return {
        code,
        data: data,
        dimension: "weekday",
        metrics: "count",
        itemStyle: {
          color: params => params.data.name === "Tue" ? "#a90000" : params.color
        }
      };
    }
  };
</script>