export default [
  {
    path: "/",
    meta: {
      title: "首页",
      addToMenu: true
    },
    component: () => import("app/layout"),
    redirect: "/echarts",
    children: [
      {
        path: "/introduce",
        meta: {
          title: "介绍",
          addToMenu: true
        },
        component: () => import("app/views/introduce")
      },
      {
        path: "/install",
        meta: {
          title: "安装",
          addToMenu: true
        },
        component: () => import("app/views/install")
      },
      {
        path: "/getting-started",
        meta: {
          title: "快速上手",
          addToMenu: true
        },
        component: () => import("app/views/getting-started")
      },
      {
        path: "/echarts",
        meta: {
          title: "图表",
          addToMenu: true
        },
        component: () => import("app/views/echarts"),
        redirect: "/echarts/line",
        children: [
          {
            path: "/echarts/line",
            meta: {
              title: "折线图",
              addToMenu: true
            },
            component: () => import("app/views/echarts/line")
          },
          {
            path: "/echarts/bar",
            meta: {
              title: "柱状图",
              addToMenu: true
            },
            component: () => import("app/views/echarts/bar")
          }
        ]
      }
    ]
  }
];