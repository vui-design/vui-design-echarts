<template>
  <div>
    <h1>快速上手</h1>
    <p>Vui Design ECharts ECharts 致力于提供给程序员愉悦的开发体验。</p>
    <blockquote>
      <p>在开始之前，推荐先学习 <a href="https://vuejs.org/" target="_blank">Vue</a> 和 <a href="http://babeljs.io/docs/learn-es2015/" target="_blank">ES2015</a>，并正确安装和配置了 <a href="https://nodejs.org/">Node.js</a> v8 或以上。该文档假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 Vue 全家桶的正确开发方式。如果你刚开始学习前端或者 Vue，将组件库作为你的第一步可能不是最好的主意。</p>
    </blockquote>
    <h2 id="example-getting-started-import">引入 Vui Design ECharts</h2>
    <h3 id="example-getting-started-import-1">1. 安装脚手架工具</h3>
    <p>使用下列命令安装 <a href="https://github.com/vuejs/vue-cli" target="_blank">vue-cli</a> 脚手架：</p>
    <example-vue-cli-install />
    <h3 id="example-getting-started-import-2">2. 创建一个项目</h3>
    <p>使用命令行进行初始化并配置项目。</p>
    <example-vue-cli-create />
    <p>若安装缓慢报错，可尝试用 <code>cnpm</code> 或别的镜像源自行安装：<code>rm -rf node_modules && cnpm install</code>。</p>
    <h3 id="example-getting-started-import-3">3. 使用组件</h3>
    <example-vui-design-echarts-install />
    <p>完整引入</p>
    <example-global-registration />
    <p>以上代码便完成了 Vui Design ECharts 的引入。</p>
    <p>局部导入组件</p>
    <example-local-registration />
    <blockquote>
      <p>你可以在左侧菜单中选用更多组件。</p>
    </blockquote>
    <p>注意，使用局部导入组件的方式依然会引入了 Vui Design ECharts 下的所有模块。如果你希望按需加载组件，请继续阅读下文。</p>
    <h3 id="example-getting-started-import-4">4. 组件列表</h3>
    <p><a href="https://github.com/vui-design/vui-design-echarts/blob/master/src/index.js" target="_blank">完整组件列表</a></p>
    <example-components />
    <h2 id="example-getting-started-babel-plugin-import">按需加载</h2>
    <p>如果你在开发环境的控制台看到下面的提示，那么你可能使用了上述引入 Vui Design ECharts 的两种方式（完整引入或局部导入组件）引入了其下的所有模块，这会影响应用的网络性能。</p>
    <p>
      <img src="~app/assets/images/warning.png" />
    </p>
    <p>可以通过以下的写法来按需加载组件：</p>
    <example-import-on-demand />
    <p>如果你使用了 <code>babel</code>，那么可以借助 <a href="https://github.com/ant-design/babel-plugin-import" target="_blank">babel-plugin-import</a> 插件来进行按需加载。加入这个插件后，你仍然可以这么写：</p>
    <example-babel-plugin-import />
    <p>插件会帮你转换成 <code>vui-design-echarts/src/components/xxx</code> 的写法。</p>
    <h2 id="example-getting-started-tips">小贴士</h2>
    <ul>
      <li>你可以享用 <code>npm</code> 生态圈里的所有模块。</li>
      <li>虽然 Vue 官方推荐使用模板语法来编写组件，不过对于复杂组件，<a href="https://github.com/vuejs/babel-plugin-transform-vue-jsx" target="">jsx</a> 未必不是一个更好的选择。</li>
    </ul>
  </div>
</template>

<script>
  import Anchors from "app/mixins/anchors";
  import ExampleVueCliInstall from "./examples/vue-cli-intall";
  import ExampleVueCliCreate from "./examples/vue-cli-create";
  import ExampleVuiDesignEchartsInstall from "./examples/vui-design-echarts-install";
  import ExampleGlobalRegistration from "./examples/global-registration";
  import ExampleLocalRegistration from "./examples/local-registration";
  import ExampleComponents from "./examples/components";
  import ExampleImportOnDemand from "./examples/import-on-demand";
  import ExampleBabelPluginImport from "./examples/babel-plugin-import";

  export default {
    mixins: [
      Anchors
    ],
    components: {
      ExampleVueCliInstall,
      ExampleVueCliCreate,
      ExampleVuiDesignEchartsInstall,
      ExampleGlobalRegistration,
      ExampleLocalRegistration,
      ExampleComponents,
      ExampleImportOnDemand,
      ExampleBabelPluginImport
    }
  };
</script>