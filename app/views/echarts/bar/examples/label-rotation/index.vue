<template>
  <example v-bind:code="code" id="example-bar-label-rotation">
    <template slot="demo">
      <vui-echarts-bar
        v-bind:data="data"
        v-bind:dimension="dimension"
        v-bind:metrics="metrics"
        v-bind:grid="grid"
        v-bind:label="label"
        v-bind:emphasis="emphasis"
      />
    </template>
    <template slot="title">柱状图标签旋转</template>
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
        { year: 2012, forest: 320, steppe: 220, desert: 150, wetland: 98 },
        { year: 2013, forest: 332, steppe: 182, desert: 232, wetland: 77 },
        { year: 2014, forest: 301, steppe: 191, desert: 201, wetland: 101 },
        { year: 2015, forest: 334, steppe: 234, desert: 154, wetland: 99 },
        { year: 2016, forest: 390, steppe: 290, desert: 190, wetland: 40 }
      ];

      return {
        code,
        data: data,
        dimension: "year",
        metrics: [
          { key: "forest", name: "Forest" },
          { key: "steppe", name: "Steppe" },
          { key: "desert", name: "Desert" },
          { key: "wetland", name: "Wetland" }
        ],
        grid: {
          bottom: 32
        },
        label: {
          show: true,
          position: "insideBottom",
          align: "left",
          verticalAlign: "middle",
          distance: 15,
          rotate: 90,
          formatter: "{c} {name|{a}}",
          color: "#fff",
          fontSize: 10,
          rich: {
            name: {}
          }
        },
        emphasis: {
          focus: "series"
        }
      };
    }
  };
</script>