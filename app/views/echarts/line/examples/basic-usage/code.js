const code =
`<template>
  <vui-echarts-line
    v-bind:dimension="dimension"
    v-bind:metrics="metrics"
    v-bind:data="data"
  />
</template>

<script>
  export default {
    data() {
      return {
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
`;

export default code;