<template>
  <vui-layout class="vui-layout-docs">
    <vui-header theme="light" class="vui-layout-docs-header">
      <h1 class="logo">
        <router-link to="/">
          <img src="~app/assets/images/logo.svg" />Vui Design ECharts
        </router-link>
      </h1>
      <vui-space style="float: right; display: flex;">
        <!--
        <vui-button size="small" style="display: block;" v-on:click="handleChangeLanguage">{{language === "zh-CN" ? "English" : "中文"}}</vui-button>
        -->
        <a href="https://npmjs.org/package/vui-design" target="_blank" class="npm">
          <img src="https://camo.githubusercontent.com/5e58706616d56949dacf3deadaa10179a06bbc69aace9baf79133a22dbd5637e/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f7675692d64657369676e2e7376673f7374796c653d666c61742d737175617265" />
        </a>
        <div class="github">
          <a href="https://github.com/vui-design/vui-design" target="_blank" class="github-repository">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1">
              <path d="M0 524.714667c0 223.36 143.146667 413.269333 342.656 482.986666 26.88 6.826667 22.784-12.373333 22.784-25.344v-88.618666c-155.136 18.176-161.322667-84.48-171.818667-101.589334-21.077333-35.968-70.741333-45.141333-55.936-62.250666 35.328-18.176 71.338667 4.608 112.981334 66.261333 30.165333 44.672 89.002667 37.12 118.912 29.653333a144.64 144.64 0 0 1 39.68-69.546666c-160.682667-28.757333-227.712-126.848-227.712-243.541334 0-56.576 18.688-108.586667 55.253333-150.570666-23.296-69.205333 2.176-128.384 5.546667-137.173334 66.474667-5.973333 135.424 47.573333 140.8 51.754667 37.76-10.197333 80.810667-15.573333 128.981333-15.573333 48.426667 0 91.733333 5.546667 129.706667 15.872 12.8-9.813333 76.885333-55.765333 138.666666-50.133334 3.285333 8.789333 28.16 66.602667 6.272 134.826667 37.077333 42.069333 55.936 94.549333 55.936 151.296 0 116.864-67.413333 215.04-228.565333 243.456a145.92 145.92 0 0 1 43.52 104.106667v128.64c0.896 10.282667 0 20.48 17.194667 20.48 202.410667-68.224 348.16-259.541333 348.16-484.906667C1023.018667 242.176 793.941333 13.312 511.573333 13.312 228.864 13.184 0 242.090667 0 524.714667z" fill="#000000"></path>
            </svg>
          </a>
          <a href="https://github.com/vui-design/vui-design/stargazers" target="_blank" class="github-stargazers">7</a>
        </div>
      </vui-space>
    </vui-header>
    <vui-layout class="vui-layout-docs-body">
      <vui-sider class="vui-layout-docs-body-sider" v-bind:width="240">
        <a href="https://github.com/vui-design/vui-design-pro" target="_blank" class="ad">
          <img src="~app/assets/images/vui-design-pro.png" />
        </a>
        <div class="menu">
          <vui-menu mode="vertical" color="light" v-bind:selectedName="$route.path">
            <template v-for="first in menu">
              <vui-menu-item-group v-if="first.children && first.children.length > 0" v-bind:key="first.path" v-bind:title="first.meta && first.meta.title">
                <template v-for="second in first.children">
                  <vui-submenu v-if="second.children && second.children.length > 0" v-bind:key="second.path" v-bind:name="second.path" v-bind:icon="second.meta && second.meta.icon" v-bind:title="second.meta && second.meta.title">
                    <template v-for="third in second.children">
                      <vui-menu-item v-bind:key="third.path" v-bind:to="third.path" v-bind:name="third.path" v-bind:icon="third.meta && third.meta.icon" v-bind:title="third.meta && third.meta.title" />
                    </template>
                  </vui-submenu>
                  <vui-menu-item v-else v-bind:key="second.path" v-bind:to="second.path" v-bind:name="second.path" v-bind:icon="second.meta && second.meta.icon" v-bind:title="second.meta && second.meta.title" />
                </template>
              </vui-menu-item-group>
              <vui-menu-item v-else v-bind:key="first.path" v-bind:to="first.path" v-bind:name="first.path" v-bind:icon="first.meta && first.meta.icon" v-bind:title="first.meta && first.meta.title" />
            </template>
          </vui-menu>
        </div>
      </vui-sider>
      <vui-layout class="vui-layout-docs-body-content">
        <vui-content class="vui-layout-docs-body-content-body">
          <div class="article">
            <div class="article-content">
              <router-view v-bind:key="$route.fullPath" />
            </div>
            <div class="article-anchors">
              <vui-anchor v-bind:offset="96" v-bind:offsetTop="96" v-on:click="handleClickAnchor">
                <vui-anchor-link v-for="anchor in anchors" v-bind:key="anchor" v-bind:href="'#' + anchor" v-bind:title="getAnchorTitle(anchor)" />
              </vui-anchor>
            </div>
          </div>
        </vui-content>
        <vui-footer class="vui-layout-docs-body-content-footer">
          <p>© 2018-{{year}} Coded By Dingwei</p>
        </vui-footer>
      </vui-layout>
    </vui-layout>
    <vui-backtop />
  </vui-layout>
</template>

<script>
  import { createNamespacedHelpers } from "vuex";
  import Locale from "app/mixins/locale";

  const { mapState, mapMutations } = createNamespacedHelpers("app");

  export default {
    mixins: [
      Locale
    ],
    data() {
      return {
        year: new Date().getFullYear()
      };
    },
    computed: {
      ...mapState({
        language: state => state.language,
        menu: state => state.menu,
        anchors: state => state.anchors
      })
    },
    methods: {
      ...mapMutations([
        "setLanguage",
        "setMenu"
      ]),
      getAnchorTitle(anchor) {
        return this.translate("anchors." + anchor);
      },
      handleChangeLanguage() {
        const language = this.language === "zh-CN" ? "en-US" : "zh-CN";

        this.$i18n.locale = language;
        this.setLanguage(language);
      },
      handleClickAnchor(e, link) {
        e.preventDefault();
      }
    },
    created() {
      this.setMenu(this.$router.options.routes);
    }
  };
</script>

<style>
  .vui-layout-docs { position:relative; z-index:1; min-height:100vh; background-color:#fff; padding-top:64px; }

  .vui-layout-docs-header { position:fixed; top:0; left:0; right:0; z-index:100; border-bottom:1px solid #f0f0f0; padding:0 20px; }
  .vui-layout-docs-header .logo { float:left; display:block; padding:16px 0; }
  .vui-layout-docs-header .logo a { display:block; color:rgba(0,0,0,0.85); font-size:18px; font-weight:600; line-height:32px; }
  .vui-layout-docs-header .logo img { float:left; display:block; width:32px; height:32px; margin-right:16px; }
  .vui-layout-docs-header .npm { float:left; display:block; height:20px; }
  .vui-layout-docs-header .npm img { display:block; max-height:100%; }
  .vui-layout-docs-header .github { float:left; display:block; }
  .vui-layout-docs-header .github .github-repository { float:left; display:block; width:20px; height:20px; margin:2px 0; }
  .vui-layout-docs-header .github .github-repository svg { display:block; width:100%; height:100%; }
  .vui-layout-docs-header .github .github-stargazers { float:left; position:relative; display:block; border:1px solid #e0e0e0; border-radius:2px; background-color:#fff; margin-left:12px; padding:4px 8px; color:rgba(0,0,0,0.85); font-size:14px; line-height:1; }
  .vui-layout-docs-header .github .github-stargazers:before { content:""; position:absolute; top:50%; left:0; width:8px; height:8px; border-width:1px; border-style:solid; border-color:#e0e0e0 transparent transparent #e0e0e0; border-radius:2px; background-color:#fff; margin-top:-4px; margin-left:-4px; transform:rotate(-45deg); }
  .vui-layout-docs-header .vui-space { padding:20px 0; }

  .vui-layout-docs-body { background-color:#fff; }
  .vui-layout-docs-body-sider { position:fixed; left:0; top:0; bottom:0; border-right:1px solid #f0f0f0; background-color:#fff; padding-top:64px; }
  .vui-layout-docs-body-sider .ad { display:block; height:84px; border-radius:2px; background-color:#fafafa; margin:16px 16px 0 16px; overflow:hidden; opacity:0.9; transition:all 0.2s; }
  .vui-layout-docs-body-sider .ad img { display:block; width:100%; }
  .vui-layout-docs-body-sider .ad:hover { opacity:1; }
  .vui-layout-docs-body-sider .menu { padding:16px 0; }
  .vui-layout-docs-body-content { background-color:#fff; padding-left:241px; }
  .vui-layout-docs-body-content .vui-layout-docs-body-content-body { padding:24px; }
  .vui-layout-docs-body-content .vui-layout-docs-body-content-footer { border-top:1px solid #f0f0f0; padding:24px; text-align:center; }
  .vui-layout-docs-body-content .article { display:flex; align-items:stretch; }
  .vui-layout-docs-body-content .article-content { flex:1; overflow:hidden; color:rgba(0,0,0,0.85); font-size:14px; line-height:2; }
  .vui-layout-docs-body-content .article-content h1 { margin:24px 0; color:rgba(0,0,0,0.85); font-size:28px; font-weight:600; }
  .vui-layout-docs-body-content .article-content h1:first-child { margin-top:0; }
  .vui-layout-docs-body-content .article-content h2 { margin:16px 0; color:rgba(0,0,0,0.85); font-size:24px; font-weight:600; }
  .vui-layout-docs-body-content .article-content h3 { margin:16px 0; color:rgba(0,0,0,0.85); font-size:16px; font-weight:600; }
  .vui-layout-docs-body-content .article-content h4 { margin:16px 0; color:rgba(0,0,0,0.85); font-size:14px; font-weight:600; }
  .vui-layout-docs-body-content .article-content p { margin:16px 0; color:rgba(0,0,0,0.85); font-size:14px; }
  .vui-layout-docs-body-content .article-content blockquote { border-left:4px solid #e6e6e6; margin:16px 0; padding-left:12px; }
  .vui-layout-docs-body-content .article-content blockquote p { margin-bottom:0; color:rgba(0,0,0,0.45); }
  .vui-layout-docs-body-content .article-content table { width:100%; margin:16px 0; }
  .vui-layout-docs-body-content .article-content table th { border:1px solid #f0f0f0; background-color:#fafafa; padding:8px 16px; font-size:13px; text-align:left; vertical-align:top; }
  .vui-layout-docs-body-content .article-content table td { border:1px solid #f0f0f0; padding:8px 16px; font-size:13px; text-align:left; vertical-align:top; }
  .vui-layout-docs-body-content .article-content table.example-api-props th:nth-child(1) { white-space:nowrap; }
  .vui-layout-docs-body-content .article-content table.example-api-props th:nth-child(2) {  }
  .vui-layout-docs-body-content .article-content table.example-api-props th:nth-child(3) {  }
  .vui-layout-docs-body-content .article-content table.example-api-props th:nth-child(4) { white-space:nowrap; }
  .vui-layout-docs-body-content .article-content table.example-api-props td:nth-child(1) { font-family:Lucida Console, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace; white-space:nowrap; }
  .vui-layout-docs-body-content .article-content table.example-api-props td:nth-child(2) {  }
  .vui-layout-docs-body-content .article-content table.example-api-props td:nth-child(3) { color:#ff4d4f; font-family:Lucida Console, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace; }
  .vui-layout-docs-body-content .article-content table.example-api-props td:nth-child(4) { font-family:Lucida Console, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace; white-space:nowrap; }
  .vui-layout-docs-body-content .article-content table.example-api-events th:nth-child(1) { white-space:nowrap; }
  .vui-layout-docs-body-content .article-content table.example-api-events th:nth-child(2) {  }
  .vui-layout-docs-body-content .article-content table.example-api-events th:nth-child(3) {  }
  .vui-layout-docs-body-content .article-content table.example-api-events th:nth-child(4) { white-space:nowrap; }
  .vui-layout-docs-body-content .article-content table.example-api-events td:nth-child(1) { font-family:Lucida Console, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace; white-space:nowrap; }
  .vui-layout-docs-body-content .article-content table.example-api-events td:nth-child(2) {  }
  .vui-layout-docs-body-content .article-content table.example-api-events td:nth-child(3) { color:#ff4d4f; font-family:Lucida Console, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace; }
  .vui-layout-docs-body-content .article-content table.example-api-events td:nth-child(4) { font-family:Lucida Console, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace; white-space:nowrap; }
  .vui-layout-docs-body-content .article-content ul { list-style:circle; margin-bottom:16px; padding-left:18px; }
  .vui-layout-docs-body-content .article-content ul li p { margin-bottom:0; }
  .vui-layout-docs-body-content .article-content ol { list-style:circle; margin-bottom:16px; padding-left:18px; }
  .vui-layout-docs-body-content .article-content ol li { margin-bottom:5px; }
  .vui-layout-docs-body-content .article-content ol li p { margin-bottom:0; }
  .vui-layout-docs-body-content .article-content pre { margin:16px 0; }
  .vui-layout-docs-body-content .article-content code { border-radius:2px; border:1px solid #f0f0f0; background-color:#fafafa; margin:0; padding:2px 4px; color:rgba(0,0,0,0.65); font-size:13px; font-family:Lucida Console, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace; }
  .vui-layout-docs-body-content .article-content pre code { padding:12px 16px; }
  .vui-layout-docs-body-content .article-content b { font-weight:600; }
  .vui-layout-docs-body-content .article-content .vui-row + .vui-row { margin-top:16px; }
  .vui-layout-docs-body-content .article-anchors { width:120px; margin-left:24px; }
  .vui-layout-docs-body-content .article-anchors .vui-anchor { font-size:12px; }
</style>