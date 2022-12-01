<template>
  <example v-bind:code="code" id="example-bar-stack">
    <template slot="demo">
      <vui-echarts-bar
        v-bind:data="data"
        v-bind:dimension="dimension"
        v-bind:metrics="metrics"
        v-bind:grid="grid"
        v-bind:stack="stack"
        v-bind:emphasis="emphasis"
        v-bind:markLine="markLine"
      />
    </template>
    <template slot="title">堆叠柱状图</template>
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
        { weekday: "Mon", direct: 320, email: 120, unionAds: 220, videoAds: 150, searchEngine: 862, baidu: 620, google: 120, bing: 60, others: 62 },
        { weekday: "Tue", direct: 332, email: 132, unionAds: 182, videoAds: 232, searchEngine: 1018, baidu: 732, google: 132, bing: 72, others: 82 },
        { weekday: "Wed", direct: 301, email: 101, unionAds: 191, videoAds: 201, searchEngine: 964, baidu: 701, google: 101, bing: 71, others: 91 },
        { weekday: "Thu", direct: 334, email: 134, unionAds: 234, videoAds: 154, searchEngine: 1026, baidu: 734, google: 134, bing: 74, others: 84 },
        { weekday: "Fri", direct: 390, email: 90, unionAds: 290, videoAds: 190, searchEngine: 1679, baidu: 1090, google: 290, bing: 190, others: 109 },
        { weekday: "Sat", direct: 330, email: 230, unionAds: 330, videoAds: 330, searchEngine: 1600, baidu: 1130, google: 230, bing: 130, others: 110 },
        { weekday: "Sun", direct: 320, email: 210, unionAds: 310, videoAds: 410, searchEngine: 1570, baidu: 1120, google: 220, bing: 110, others: 120 }
      ];

      return {
        code,
        data: data,
        dimension: "weekday",
        metrics: [
          { key: "direct", name: "Direct" },
          { key: "email", name: "Email" },
          { key: "unionAds", name: "Union Ads" },
          { key: "videoAds", name: "Video Ads" },
          { key: "searchEngine", name: "Search Engine" },
          { key: "baidu", name: "Baidu" },
          { key: "google", name: "Google" },
          { key: "bing", name: "Bing" },
          { key: "others", name: "Others" }
        ],
        grid: {
          bottom: 32
        },
        stack: function(echarts, metric, metricIndex) {
          if (["email", "unionAds", "videoAds"].includes(metric.key)) {
            return "Ad";
          }
          else if (["baidu", "google", "bing", "others"].includes(metric.key)) {
            return "Search Engine";
          }
        },
        emphasis: {
          focus: "series"
        },
        markLine: function(echarts, metric, metricIndex) {
          if (metric.key === "searchEngine") {
            return {
              lineStyle: {
                type: "dashed"
              },
              data: [[{ type: "min" }, { type: "max" }]]
            };
          }
        }
      };
    }
  };
</script>