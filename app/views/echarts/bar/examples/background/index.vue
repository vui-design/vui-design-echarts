<template>
  <example v-bind:code="code" id="example-bar-background">
    <template slot="demo">
      <vui-echarts-bar
        v-bind:data="data"
        v-bind:dimension="dimension"
        v-bind:metrics="metrics"
        v-bind:backgroundStyle="backgroundStyle"
      />
    </template>
    <template slot="title">带背景色的柱状图</template>
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
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)"
        }
      };
    }
  };
</script>