<template>
  <example v-bind:code="code" id="example-bar-basic-usage">
    <template slot="demo">
      <vui-echarts-bar
        v-bind:data="data"
        v-bind:dimension="dimension"
        v-bind:metrics="metrics"
      />
    </template>
    <template slot="title">基础柱状图</template>
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
        metrics: "count"
      };
    }
  };
</script>