const code =
`<template>
  <vui-echarts-bar
    v-bind:data="data"
    v-bind:dimension="dimension"
    v-bind:metrics="metrics"
    v-bind:xAxis="xAxis"
  />
</template>

<script>
  export default {
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
`;

export default code;