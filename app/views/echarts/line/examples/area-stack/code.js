const code =
`<template>
  <vui-echarts-line
    v-bind:dimension="dimension"
    v-bind:metrics="metrics"
    v-bind:areaStyle="areaStyle"
    v-bind:stack="stack"
    v-bind:data="data"
  />
</template>

<script>
  export default {
    data() {
      return {
        dimension: "weekday",
        metrics: [
          { key: "email", label: "Email" },
          { key: "unionAds", label: "Union Ads" },
          { key: "videoAds", label: "Video Ads" },
          { key: "direct", label: "Direct" },
          { key: "searchEngine", label: "Search Engine" }
        ],
        stack: "total",
        areaStyle: {

        },
        data: [
          { weekday: "Mon", email: 120, unionAds: 220, videoAds: 150, direct: 320, searchEngine: 820 },
          { weekday: "Tue", email: 132, unionAds: 182, videoAds: 232, direct: 332, searchEngine: 932 },
          { weekday: "Wed", email: 101, unionAds: 191, videoAds: 201, direct: 301, searchEngine: 901 },
          { weekday: "Thu", email: 134, unionAds: 234, videoAds: 154, direct: 334, searchEngine: 934 },
          { weekday: "Fri", email: 90, unionAds: 290, videoAds: 190, direct: 390, searchEngine: 1290 },
          { weekday: "Sat", email: 230, unionAds: 330, videoAds: 330, direct: 330, searchEngine: 1330 },
          { weekday: "Sun", email: 210, unionAds: 310, videoAds: 410, direct: 320, searchEngine: 1320 }
        ]
      };
    }
  };
</script>
`;

export default code;