const code =
`import Vue from "vue";
import { Line, Bar } from "vui-design-echarts";
import App from "./App";

Vue.config.productionTip = false;
Vue.use(Line);
Vue.use(Bar);

new Vue({
  el: "#app",
  render: h => h(App)
});`;

export default code;