const code =
`<template>
  <vui-echarts-line
    v-bind:data="data"
    v-bind:dimension="dimension"
    v-bind:metrics="metrics"
    v-bind:smooth="smooth"
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
        smooth: true
      };
    }
  };
</script>
`;

export default code;