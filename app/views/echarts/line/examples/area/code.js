const code =
`<template>
  <vui-echarts-line
    v-bind:dimension="dimension"
    v-bind:metrics="metrics"
    v-bind:areaStyle="areaStyle"
    v-bind:data="data"
  />
</template>

<script>
  export default {
    data() {
      return {
        dimension: "weekday",
        metrics: "count",
        areaStyle: {

        },
        data: [
          { weekday: "Mon", count: 820 },
          { weekday: "Tue", count: 932 },
          { weekday: "Wed", count: 901 },
          { weekday: "Thu", count: 934 },
          { weekday: "Fri", count: 1290 },
          { weekday: "Sat", count: 1330 },
          { weekday: "Sun", count: 1320 }
        ]
      };
    }
  };
</script>
`;

export default code;