const code =
`<template>
  <vui-echarts-bar
    v-bind:data="data"
    v-bind:dimension="dimension"
    v-bind:metrics="metrics"
    v-bind:grid="grid"
    v-bind:xAxis="xAxis"
    v-bind:yAxis="yAxis"
  />
</template>

<script>
  export default {
    data() {
      const data = [
        { "country": "Brazil", "2011": 18203, "2012": 19325 },
        { "country": "Indonesia", "2011": 23489, "2012": 23438 },
        { "country": "USA", "2011": 29034, "2012": 31000 },
        { "country": "India", "2011": 104970, "2012": 121594 },
        { "country": "China", "2011": 131744, "2012": 134141 },
        { "country": "World", "2011": 630230, "2012": 681807 }
      ];

      return {
        data: data,
        dimension: "country",
        metrics: ["2011", "2012"],
        grid: {
          bottom: 32
        },
        xAxis: {
          type: "value"
        },
        yAxis: {
          type: "category"
        }
      };
    }
  };
</script>
`;

export default code;