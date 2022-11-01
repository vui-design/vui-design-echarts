import "vui-design/dist/style/vui-design.css";
import "app/assets/styles/highlightjs.css";
import Vue from "vue";
import VuiDesign from "vui-design";
import VuiDesignEcharts from "../src";
import VueHighlightJS from "vue-highlightjs";
import App from "app/App";
import i18n from "app/locale";
import router from "app/router";
import store from "app/store";

Vue.config.productionTip = false;
Vue.use(VuiDesign);
Vue.use(VuiDesignEcharts);
Vue.use(VueHighlightJS);

new Vue({
  el: "#root",
  i18n,
  router,
  store,
  render: h => h(App)
});