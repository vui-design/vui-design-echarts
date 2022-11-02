const code =
`<template>
  <vui-echarts-line
    v-bind:data="data"
    v-bind:dimension="dimension"
    v-bind:metrics="metrics"
    v-bind:zoom="zoom"
    v-bind:sampling="sampling"
    v-bind:itemStyle="itemStyle"
    v-bind:areaStyle="areaStyle"
  />
</template>

<script>
  export default {
    data() {
      let startDate = new Date(1968, 9, 3).getTime();
      let day = 24 * 3600 * 1000;
      let n = Math.round(Math.random() * 300);
      let data = [];

      for (let i = 0; i < 20000; i++) {
        const now = new Date((startDate += day));
        const o = data[i - 1];

        data.push({
          date: now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate(),
          value: i === 0 ? n : (Math.round((Math.random() - 0.5) * 20 + o.value))
        });
      }

      return {
        data: data,
        dimension: "date",
        metrics: "value",
        zoom: [
          {
            type: "inside",
            start: 0,
            end: 10
          },
          {
            start: 0,
            end: 10
          }
        ],
        sampling: "lttb",
        itemStyle: {
          color: "rgb(255, 70, 131)"
        },
        areaStyle: (echarts, metric, metricIndex) => {
          return {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgb(255, 158, 68)" },
              { offset: 1, color: "rgb(255, 70, 131)" }
            ])
          };
        }
      };
    }
  };
</script>
`;

export default code;