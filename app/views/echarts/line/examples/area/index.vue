<template>
  <example v-bind:code="code" id="example-line-area">
    <template slot="demo">
      <vui-echarts-line
        v-bind:data="data"
        v-bind:dimension="dimension"
        v-bind:metrics="metrics"
        v-bind:areaStyle="areaStyle"
      />
    </template>
    <template slot="title">基础面积图</template>
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
        { weekday: "Mon", count: 820 },
        { weekday: "Tue", count: 932 },
        { weekday: "Wed", count: 901 },
        { weekday: "Thu", count: 934 },
        { weekday: "Fri", count: 1290 },
        { weekday: "Sat", count: 1330 },
        { weekday: "Sun", count: 1320 }
      ];

      return {
        code,
        data: data,
        dimension: "weekday",
        metrics: "count",
        areaStyle: {
          opacity: 0.5
        }
      };
    }
  };
</script>