const code =
`<template>
  <vui-echarts-bar
    v-bind:data="data"
    v-bind:dimension="dimension"
    v-bind:metrics="metrics"
    v-bind:animationEasing="animationEasing"
    v-bind:grid="grid"
    v-bind:emphasis="emphasis"
    v-bind:serie="serie"
  />
</template>

<script>
  export default {
    data() {
      let data = [];

      for (let i = 0; i < 100; i++) {
        data.push({
          category: "A" + i,
          bar1: (Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5,
          bar2: (Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5
        });
      }

      return {
        data: data,
        dimension: "category",
        metrics: [
          { key: "bar1", name: "Bar 1" },
          { key: "bar2", name: "Bar 2" }
        ],
        animationEasing: "elasticOut",
        grid: {
          bottom: 32
        },
        emphasis: {
          focus: "series"
        },
        serie: function(metric, metricIndex) {
          if (metric.key === "bar1") {
            return {
              animationDelay: function(index) {
                return index * 10;
              }
            };
          }
          else if (metric.key === "bar2") {
            return {
              animationDelay: function(index) {
                return index * 10 + 100;
              }
            };
          }
        }
      };
    }
  };
</script>
`;

export default code;