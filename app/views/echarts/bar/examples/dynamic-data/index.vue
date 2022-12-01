<template>
  <example v-bind:code="code" id="example-bar-dynamic-data">
    <template slot="demo">
      <vui-echarts-bar
        v-bind:data="data"
        v-bind:metrics="metrics"
        v-bind:grid="grid"
        v-bind:xAxis="xAxis"
        v-bind:yAxis="yAxis"
        v-bind:tooltip="tooltip"
        v-bind:serie="serie"
      />
    </template>
    <template slot="title">动态数据</template>
  </example>
</template>

<script>
  import Example from "app/components/example";
  import code from "./code";

  export default {
    components: {
      Example
    },
    data() {
      let now = new Date(new Date().getTime() - 2000 * 10);
      let data = [];

      for (let i = 0; i < 10; i++) {
        data.push({
          time: now.toLocaleTimeString().replace(/^\D*/, ""),
          index: i + 1,
          dynamicBar: Math.round(Math.random() * 1000),
          dynamicLine: +(Math.random() * 10 + 5).toFixed(1)
        });

        now = new Date(now.getTime() + 2000);
      }

      return {
        code,
        data: data,
        metrics: [
          { key: "dynamicBar", name: "Dynamic Bar" },
          { key: "dynamicLine", name: "Dynamic Line" }
        ],
        grid: {
          bottom: 32
        },
        xAxis: [
          {
            type: "category",
            data: data.map(item => item.time)
          },
          {
            type: "category",
            data: data.map(item => item.index)
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "Price",
            scale: true,
            min: 0,
            max: 30,
            boundaryGap: [0.2, 0.2]
          },
          {
            type: "value",
            scale: true,
            name: "Order",
            min: 0,
            max: 1200,
            boundaryGap: [0.2, 0.2]
          }
        ],
        tooltip: {
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        serie: function(metric, metricIndex) {
          if (metric.key === "dynamicBar") {
            return {
              type: "bar",
              name: "Dynamic Bar",
              xAxisIndex: 1,
              yAxisIndex: 1
            };
          }
          else if (metric.key === "dynamicLine") {
            return {
              type: "line",
              name: "Dynamic Line",
              xAxisIndex: 0,
              yAxisIndex: 0
            };
          }
        }
      };
    },
    methods: {
      run() {
        const last = this.data[this.data.length - 1];
        const target = {
          time: new Date().toLocaleTimeString().replace(/^\D*/, ""),
          index: last.index + 1,
          dynamicBar: Math.round(Math.random() * 1000),
          dynamicLine: +(Math.random() * 10 + 5).toFixed(1)
        };

        this.data.shift();
        this.data.push(target);
        this.xAxis = [
          {
            type: "category",
            data: this.data.map(item => item.time)
          },
          {
            type: "category",
            data: this.data.map(item => item.index)
          }
        ];
      }
    },
    mounted() {
      this.interval = setInterval(() => this.run(), 2000);
    },
    beforeDestroy() {
      clearInterval(this.interval);
      this.interval = null;
    }
  };
</script>