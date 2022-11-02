const code =
`<template>
  <vui-echarts-line
    v-bind:data="data"
    v-bind:dimension="dimension"
    v-bind:metrics="metrics"
    v-bind:color="color"
    v-bind:tooltip="tooltip"
    v-bind:showSymbol="showSymbol"
    v-bind:smooth="smooth"
    v-bind:stack="stack"
    v-bind:lineStyle="lineStyle"
    v-bind:areaStyle="areaStyle"
  />
</template>

<script>
  export default {
    data() {
      const data = [
        { weekday: "Mon", line1: 140, line2: 120, line3: 320, line4: 220, line5: 220 },
        { weekday: "Tue", line1: 232, line2: 282, line3: 132, line4: 402, line5: 302 },
        { weekday: "Wed", line1: 101, line2: 111, line3: 201, line4: 231, line5: 181 },
        { weekday: "Thu", line1: 264, line2: 234, line3: 334, line4: 134, line5: 234 },
        { weekday: "Fri", line1: 90, line2: 220, line3: 190, line4: 190, line5: 210 },
        { weekday: "Sat", line1: 340, line2: 340, line3: 130, line4: 230, line5: 290 },
        { weekday: "Sun", line1: 250, line2: 310, line3: 220, line4: 120, line5: 150 }
      ];

      return {
        data: data,
        dimension: "weekday",
        metrics: [
          { key: "line1", name: "Line 1" },
          { key: "line2", name: "Line 2" },
          { key: "line3", name: "Line 3" },
          { key: "line4", name: "Line 4" },
          { key: "line5", name: "Line 5" }
        ],
        color: ["#80ffa5", "#00ddff", "#37a2ff", "#ff0087", "#ffbf00"],
        tooltip: {
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        showSymbol: false,
        smooth: true,
        stack: "total",
        lineStyle: {
          width: 0
        },
        areaStyle: (echarts, metric, metricIndex) => {
          const colors = [
            ["#80ffa5", "#01bfec"],
            ["#00ddff", "#4d77ff"],
            ["#37a2ff", "#7415db"],
            ["#ff0087", "#87009d"],
            ["#ffbf00", "#e03e4c"]
          ];
          const color = colors[metricIndex];

          return {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: color[0] },
              { offset: 1, color: color[1] }
            ])
          };
        }
      };
    }
  };
</script>
`;

export default code;