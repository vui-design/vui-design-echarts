<template>
  <div>
    <h1>安装</h1>
    <h2 id="example-install-npm">NPM 安装</h2>
    <p>推荐使用 <code>npm</code> 来安装，享受生态圈和工具带来的便利，更好地和 <code>webpack</code> 配合使用。</p>
    <example-npm />
    <p>如果您使用了 <code>npm</code> 安装，并使用 <code>webpack</code> 作为构建工具，请继续阅读<router-link to="/guide/getting-started">快速上手</router-link>章节。</p>
    <h2 id="example-install-cdn">CDN 引入</h2>
    <p>通过 <a href="https://unpkg.com/vui-design-echarts/" target="_blank">https://unpkg.com/vui-design-echarts/</a> 可以看到 <code>Vui Design ECharts</code> 最新版本的资源，也可以切换版本选择需要的资源，在页面上引入 <code>js</code> 文件即可开始使用：</p>
    <example-cdn />
    <p>通过 <code>CDN</code> 可以快速使用 <code>Vui Design ECharts</code> 写出一个示例：</p>
    <example-cdn-demo />
  </div>
</template>

<script>
  import Anchors from "app/mixins/anchors";
  import ExampleNpm from "./examples/npm";
  import ExampleCdn from "./examples/cdn";
  import ExampleCdnDemo from "./examples/cdn-demo";

  export default {
    mixins: [
      Anchors
    ],
    components: {
      ExampleNpm,
      ExampleCdn,
      ExampleCdnDemo
    }
  };
</script>