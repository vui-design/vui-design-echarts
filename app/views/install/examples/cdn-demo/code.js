const code =
`<!DOCTYPE html>
<html>
<head>
  <title>Vui Design ECharts Example</title>
  <meta charset="utf-8" />
</head>

<body>
  <div id="app">
    <vui-echarts-line v-bind:dimension="dimension" v-bind:metrics="metrics" v-bind:data="data" />
  </div>
  <script src="//vuejs.org/js/vue.min.js"></script>
  <script src="//unpkg.com/vui-design-echarts/dist/vui-design-echarts.umd.min.js"></script>
  <script>
    new Vue({
      el: "#app",
      data: {
        dimension: "weekday",
        metrics: "count",
        data: [
          { weekday: "Mon", count: 150 },
          { weekday: "Tue", count: 230 },
          { weekday: "Wed", count: 224 },
          { weekday: "Thu", count: 218 },
          { weekday: "Fri", count: 135 },
          { weekday: "Sat", count: 147 },
          { weekday: "Sun", count: 260 }
        ]
      }
    });
  </script>
</body>
</html>
`;

export default code;