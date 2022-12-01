// This file is not used if use https://github.com/ant-design/babel-plugin-import
if (typeof console !== "undefined" && console.warn && typeof window !== "undefined") {
  console.warn("You are using a whole package of Vui Design ECharts, please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.");
}

// Package
import pkg from "../package.json";

// Language
import locale from "./locale";

// Library
import echarts from "./libs/echarts";

// Components
import Echarts from "./components/echarts";
import Line from "./components/line";
import Bar from "./components/bar";

const components = [
  Echarts,
  Line,
  Bar
];

const install = function(Vue, options = {}) {
  if (install.installed) {
    return;
  }

  locale.use(options.locale);
  locale.i18n(options.i18n);

  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export {
  echarts,
  Echarts,
  Line,
  Bar
};

export default {
  version: pkg.version,
  install,
  locale: locale.use,
  i18n: locale.i18n
};