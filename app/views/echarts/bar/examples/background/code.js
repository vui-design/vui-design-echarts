const code =
`<template>
  <vui-echarts-bar
    v-bind:data="data"
    v-bind:dimension="dimension"
    v-bind:metrics="metrics"
    v-bind:backgroundStyle="backgroundStyle"
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
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)"
        }
      };
    }
  };
</script>
`;

export default code;