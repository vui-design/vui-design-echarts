const code =
`<template>
  <vui-echarts-bar
    v-bind:data="data"
    v-bind:dimension="dimension"
    v-bind:metrics="metrics"
    v-bind:grid="grid"
    v-bind:xAxis="xAxis"
    v-bind:yAxis="yAxis"
    v-bind:stack="stack"
    v-bind:label="label"
    v-bind:emphasis="emphasis"
  />
</template>

<script>
  export default {
    data() {
      const data = [
        { weekday: "Mon", direct: 320, mailAd: 120, affiliateAd: 220, videoAd: 150, searchEngine: 820 },
        { weekday: "Tue", direct: 302, mailAd: 132, affiliateAd: 182, videoAd: 212, searchEngine: 832 },
        { weekday: "Wed", direct: 301, mailAd: 101, affiliateAd: 191, videoAd: 201, searchEngine: 901 },
        { weekday: "Thu", direct: 334, mailAd: 134, affiliateAd: 234, videoAd: 154, searchEngine: 934 },
        { weekday: "Fri", direct: 390, mailAd: 90, affiliateAd: 290, videoAd: 190, searchEngine: 1290 },
        { weekday: "Sat", direct: 330, mailAd: 230, affiliateAd: 330, videoAd: 330, searchEngine: 1330 },
        { weekday: "Sun", direct: 320, mailAd: 210, affiliateAd: 310, videoAd: 410, searchEngine: 1320 }
      ];

      return {
        data: data,
        dimension: "weekday",
        metrics: [
          { key: "direct", name: "Direct" },
          { key: "mailAd", name: "Mail Ad" },
          { key: "affiliateAd", name: "Affiliate Ad" },
          { key: "videoAd", name: "Video Ad" },
          { key: "searchEngine", name: "Search Engine" }
        ],
        grid: {
          bottom: 32
        },
        xAxis: {
          type: "value"
        },
        yAxis: {
          type: "category"
        },
        stack: "total",
        label: {
          show: true,
          color: "#fff",
          fontSize: 10
        },
        emphasis: {
          focus: "series"
        }
      };
    }
  };
</script>
`;

export default code;