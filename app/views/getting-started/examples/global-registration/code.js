const code =
`import Vue from "vue";
import VuiDesignEcharts from "vui-design-echarts";
import App from "./App";

Vue.config.productionTip = false;
Vue.use(VuiDesignEcharts);

new Vue({
  el: "#app",
  render: h => h(App)
});`;

export default code;