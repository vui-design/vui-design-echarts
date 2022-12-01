const code =
`<template>
  <vui-echarts-bar
    v-bind:data="data"
    v-bind:dimension="dimension"
    v-bind:metrics="metrics"
    v-bind:xAxis="xAxis"
    v-bind:yAxis="yAxis"
    v-bind:label="label"
    v-bind:dataFormatter="dataFormatter"
  />
</template>

<script>
  export default {
    data() {
      const data = [
        { category: "Ten", cost: -0.07 },
        { category: "Nine", cost: -0.09 },
        { category: "Eight", cost: 0.2 },
        { category: "Seven", cost: 0.44 },
        { category: "Six", cost: -0.23 },
        { category: "Five", cost: 0.08 },
        { category: "Four", cost: -0.17 },
        { category: "Three", cost: 0.47 },
        { category: "Two", cost: -0.36 },
        { category: "One", cost: 0.18 }
      ];

      return {
        data: data,
        dimension: "category",
        metrics: "cost",
        xAxis: {
          type: "value",
          splitLine: {
            lineStyle: {
              type: "dashed"
            }
          }
        },
        yAxis: {
          type: "category",
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        label: {
          show: true,
          formatter: "{b}"
        },
        dataFormatter: function(row, metric) {
          const value = row[metric];

          return {
            label: {
              position: value < 0 ? "right" : "inside"
            }
          };
        }
      };
    }
  };
</script>
`;

export default code;