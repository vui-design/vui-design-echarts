const code =
`<template>
  <vui-echarts-line
    v-bind:data="data"
    v-bind:dimension="dimension"
    v-bind:metrics="metrics"
  />
</template>

<script>
  export default {
    data() {
      const data = [
        { weekday: "Mon", count: 150 },
        { weekday: "Tue", count: 230 },
        { weekday: "Wed", count: 224 },
        { weekday: "Thu", count: 218 },
        { weekday: "Fri", count: 135 },
        { weekday: "Sat", count: 147 },
        { weekday: "Sun", count: 260 }
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