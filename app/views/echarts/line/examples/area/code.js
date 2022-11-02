const code =
`<template>
  <vui-echarts-line
    v-bind:data="data"
    v-bind:dimension="dimension"
    v-bind:metrics="metrics"
    v-bind:areaStyle="areaStyle"
  />
</template>

<script>
  export default {
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
`;

export default code;