const code =
`<template>
  <vui-echarts-bar
    v-bind:data="data"
    v-bind:dimension="dimension"
    v-bind:metrics="metrics"
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
        metrics: "count"
      };
    }
  };
</script>
`;

export default code;