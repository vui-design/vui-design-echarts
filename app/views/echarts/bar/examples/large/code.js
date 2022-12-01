const code =
`<template>
  <vui-echarts-bar
    v-bind:data="data"
    v-bind:dimension="dimension"
    v-bind:metrics="metrics"
    v-bind:grid="grid"
    v-bind:xAxis="xAxis"
    v-bind:zoom="zoom"
  />
</template>

<script>
  export default {
    data() {
      return {
        data: [],
        dimension: "date",
        metrics: "value",
        grid: {
          bottom: 40
        },
        xAxis: {
          axisLabel: {
            width: 68,
            align: "center",
            overflow: "break"
          }
        },
        zoom: [
          {
            type: "slider",
            height: 24,
            bottom: 8,
            handleSize: 24
          }
        ]
      };
    },
    methods: {
      padStart(value) {
        return String(value).padStart(2, "0");
      },
      getData() {
        let data = [];
        let time = new Date(2011, 0, 1).getTime();
        let baseValue = Math.random() * 1000;
        let smallBaseValue;
        let next = i => {
          smallBaseValue = i % 30 === 0 ? Math.random() * 700 : smallBaseValue + Math.random() * 500 - 250;
          baseValue += Math.random() * 20 - 10;

          return Math.max(0, Math.round(baseValue + smallBaseValue) + 3000);
        };

        for (let i = 0; i < 1e4; i++) {
          const date = new Date(time);
          const year = date.getFullYear();
          const month = this.padStart(date.getMonth() + 1);
          const day = this.padStart(date.getDate());
          const hours = this.padStart(date.getHours());
          const minutes = this.padStart(date.getMinutes());
          const seconds = this.padStart(date.getSeconds());

          data.push({
            date: year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds,
            value: next(i).toFixed(2)
          });

          time += 1000;
        }

        this.data = data;
      }
    },
    created() {
      this.getData();
    }
  };
</script>
`;

export default code;