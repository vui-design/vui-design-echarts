const code =
`<template>
  <vui-echarts-bar
    v-bind:data="data"
    v-bind:dimension="dimension"
    v-bind:metrics="metrics"
    v-bind:xAxis="xAxis"
    v-bind:yAxis="yAxis"
    v-bind:animationEasing="animationEasing"
    v-bind:animationEasingUpdate="animationEasingUpdate"
    v-bind:animationDuration="animationDuration"
    v-bind:animationDurationUpdate="animationDurationUpdate"
    v-bind:realtimeSort="realtimeSort"
    v-bind:label="label"
  />
</template>

<script>
  export default {
    data() {
      const categories = ["A", "B", "C", "D", "E"];
      const data = [];

      for (let i = 0; i < 5; ++i) {
        data.push({
          category: categories[i],
          value: Math.round(Math.random() * 200)
        });
      }

      return {
        data: data,
        dimension: "category",
        metrics: "value",
        xAxis: {
          type: "value",
          max: "dataMax"
        },
        yAxis: {
          type: "category",
          inverse: true,
          max: 2,
          animationDuration: 300,
          animationDurationUpdate: 300
        },
        animationEasing: "linear",
        animationEasingUpdate: "linear",
        animationDuration: 0,
        animationDurationUpdate: 3000,
        realtimeSort: true,
        label: {
          show: true,
          position: "right",
          valueAnimation: true
        }
      };
    },
    methods: {
      run() {
        for (var i = 0; i < this.data.length; ++i) {
          if (Math.random() > 0.9) {
            this.data.splice(i, 1, {
              ...this.data[i],
              value: this.data[i].value + Math.round(Math.random() * 2000)
            });
          }
          else {
            this.data.splice(i, 1, {
              ...this.data[i],
              value: this.data[i].value + Math.round(Math.random() * 200)
            });
          }
        }
      }
    },
    mounted() {
      this.timeout = setTimeout(() => this.run(), 0);
      this.interval = setInterval(() => this.run(), 3000);
    },
    beforeDestroy() {
      clearInterval(this.timeout);
      this.timeout = null;
      clearInterval(this.interval);
      this.interval = null;
    }
  };
</script>
`;

export default code;