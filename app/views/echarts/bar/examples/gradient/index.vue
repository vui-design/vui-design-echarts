<template>
  <example v-bind:code="code" id="example-bar-gradient">
    <template slot="demo">
      <vui-echarts-bar
        v-bind:data="data"
        v-bind:dimension="dimension"
        v-bind:metrics="metrics"
        v-bind:xAxis="xAxis"
        v-bind:zoom="zoom"
        v-bind:itemStyle="itemStyle"
        v-bind:backgroundStyle="backgroundStyle"
        v-on:init="handleInit"
      />
    </template>
    <template slot="title">特性示例：渐变色 阴影 点击缩放</template>
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
      const data = [
        { catetory: "点", value: 220 },
        { catetory: "击", value: 182 },
        { catetory: "柱", value: 191 },
        { catetory: "子", value: 234 },
        { catetory: "或", value: 290 },
        { catetory: "者", value: 330 },
        { catetory: "两", value: 310 },
        { catetory: "指", value: 123 },
        { catetory: "在", value: 442 },
        { catetory: "触", value: 321 },
        { catetory: "屏", value: 90 },
        { catetory: "上", value: 149 },
        { catetory: "滑", value: 210 },
        { catetory: "动", value: 122 },
        { catetory: "能", value: 133 },
        { catetory: "够", value: 334 },
        { catetory: "自", value: 198 },
        { catetory: "动", value: 123 },
        { catetory: "缩", value: 125 },
        { catetory: "放", value: 220 }
      ];

      return {
        code,
        data: data,
        dimension: "catetory",
        metrics: "value",
        xAxis: {
          z: 10,
          axisLabel: {
            inside: true,
            color: "#fff"
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        zoom: [
          {
            type: "inside"
          }
        ],
        itemStyle: function(echarts, metric, metricIndex) {
          return {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#83bff6" },
              { offset: 0.5, color: "#188df0" },
              { offset: 1, color: "#188df0" }
            ])
          };
        },
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)"
        }
      };
    },
    methods: {
      handleInit(instance) {
        const zoomSize = 6;
        const data = this.data.map(item => item.catetory);

        instance.on("click", function(params) {
          instance.dispatchAction({
            type: "dataZoom",
            startValue: data[Math.max(params.dataIndex - zoomSize / 2, 0)],
            endValue: data[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
          });
        });
      }
    }
  };
</script>