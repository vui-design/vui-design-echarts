const code =
`<template>
  <vui-echarts-bar
    v-bind:data="data"
    v-bind:dimension="dimension"
    v-bind:metrics="metrics"
    v-bind:grid="grid"
    v-bind:legend="legend"
    v-bind:tooltip="tooltip"
    v-bind:stack="stack"
    v-bind:label="label"
    v-bind:itemStyle="itemStyle"
    v-bind:emphasis="emphasis"
  />
</template>

<script>
  export default {
    data() {
      const data = [
        { category: "Nov 1", income: 900, expenses: null, placeholder: 0 },
        { category: "Nov 2", income: 345, expenses: null, placeholder: 900 },
        { category: "Nov 3", income: 393, expenses: null, placeholder: 1245 },
        { category: "Nov 4", income: null, expenses: 108, placeholder: 1530 },
        { category: "Nov 5", income: null, expenses: 154, placeholder: 1376 },
        { category: "Nov 6", income: 135, expenses: null, placeholder: 1376 },
        { category: "Nov 7", income: 178, expenses: null, placeholder: 1511 },
        { category: "Nov 8", income: 286, expenses: null, placeholder: 1689 },
        { category: "Nov 9", income: null, expenses: 119, placeholder: 1856 },
        { category: "Nov 10", income: null, expenses: 361, placeholder: 1495 },
        { category: "Nov 11", income: null, expenses: 203, placeholder: 1292 }
      ];

      return {
        data: data,
        dimension: "category",
        metrics: [
          { key: "placeholder", name: "Placeholder" },
          { key: "income", name: "Income" },
          { key: "expenses", name: "Expenses" }
        ],
        grid: {
          bottom: 32
        },
        legend: {
          data: ["Expenses", "Income"]
        },
        tooltip: {
          formatter: function(params) {
            let target;

            if (params[1].value !== null) {
              target = params[1];
            }
            else {
              target = params[0];
            }

            return target.name + "<br />" + target.seriesName + ": " + target.value;
          }
        },
        stack: "Total",
        label: function(echarts, metric, metricIndex) {
          if (metric.key === "income") {
            return {
              show: true,
              position: "top"
            };
          }
          else if (metric.key === "expenses") {
            return {
              show: true,
              position: "bottom"
            };
          }
        },
        itemStyle: function(echarts, metric, metricIndex) {
          if (metric.key === "placeholder") {
            return {
              borderColor: "transparent",
              color: "transparent"
            };
          }
        },
        emphasis: function(echarts, metric, metricIndex) {
          if (metric.key === "placeholder") {
            return {
              itemStyle: {
                borderColor: "transparent",
                color: "transparent"
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