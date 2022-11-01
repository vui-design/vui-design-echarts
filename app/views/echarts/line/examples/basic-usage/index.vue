<template>
  <example v-bind:code="code" id="example-line-basic-usage">
    <template slot="demo">
      <vui-echarts-line
        v-bind:dimension="dimension"
        v-bind:metrics="metrics"
        v-bind:data="data"
      />
    </template>
    <template slot="title">基础折线图</template>
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
        dimension: "weekday",
        metrics: "count",
        data: [
          { weekday: "Mon", count: 150 },
          { weekday: "Tue", count: 230 },
          { weekday: "Wed", count: 224 },
          { weekday: "Thu", count: 218 },
          { weekday: "Fri", count: 135 },
          { weekday: "Sat", count: 147 },
          { weekday: "Sun", count: 260 }
        ]
      };
    }
  };
</script>