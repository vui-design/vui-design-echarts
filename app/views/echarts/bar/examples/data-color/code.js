const code =
`<template>
  <vui-echarts-bar
    v-bind:data="data"
    v-bind:dimension="dimension"
    v-bind:metrics="metrics"
    v-bind:itemStyle="itemStyle"
  />
</template>

<script>
  export default {
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
`;

export default code;