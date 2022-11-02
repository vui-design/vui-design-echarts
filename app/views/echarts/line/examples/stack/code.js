const code =
`<template>
  <vui-echarts-line
    v-bind:data="data"
    v-bind:dimension="dimension"
    v-bind:metrics="metrics"
    v-bind:stack="stack"
  />
</template>

<script>
  export default {
    data() {
      const data = [
        { weekday: "Mon", email: 120, unionAds: 220, videoAds: 150, direct: 320, searchEngine: 820 },
        { weekday: "Tue", email: 132, unionAds: 182, videoAds: 232, direct: 332, searchEngine: 932 },
        { weekday: "Wed", email: 101, unionAds: 191, videoAds: 201, direct: 301, searchEngine: 901 },
        { weekday: "Thu", email: 134, unionAds: 234, videoAds: 154, direct: 334, searchEngine: 934 },
        { weekday: "Fri", email: 90, unionAds: 290, videoAds: 190, direct: 390, searchEngine: 1290 },
        { weekday: "Sat", email: 230, unionAds: 330, videoAds: 330, direct: 330, searchEngine: 1330 },
        { weekday: "Sun", email: 210, unionAds: 310, videoAds: 410, direct: 320, searchEngine: 1320 }
      ];

      return {
        data: data,
        dimension: "weekday",
        metrics: [
          { key: "email", name: "Email" },
          { key: "unionAds", name: "Union Ads" },
          { key: "videoAds", name: "Video Ads" },
          { key: "direct", name: "Direct" },
          { key: "searchEngine", name: "Search Engine" }
        ],
        stack: "total"
      };
    }
  };
</script>
`;

export default code;