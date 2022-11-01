import config from "app/config";
import is from "./is";

/**
* 路由导航完成后根据当前路由对象的 meta.title 属性设置文档标题。若无 meta.title 属性，则设置成默认值
* @param {Object} route 路由对象
*/
export const setPageTitle = route => {
  let title;

  if (route.meta && route.meta.title) {
    title = route.meta.title + " - " + config.title;
  }
  else {
    title = config.title;
  }

  window.document.title = title;
};

/**
* 用于获取默认语言
*/
export const getLanguage = () => {
  return localStorage.getItem("language") || window.navigator.language || "zh-CN";
};

/**
* 根据文档正文中具有 id 属性的元素获取锚点数据
* @param {HTMLElement} containter 文档正文所在的 html 根元素
*/
 export const getAnchors = containter => {
  let anchors = [];

  if (!containter) {
    return anchors;
  }

  const nodeList = containter.querySelectorAll("[id]");

  nodeList.forEach(node => {
    const id = node.getAttribute("id");

    if (id.includes("example-api-") || id.includes("vui-watermark-")) {
      return;
    }

    anchors.push(id);
  });

  return anchors;
};

/**
* 用于获取经过阉割后的路由对象，只提取需要的属性
* @param {Object} route 路由对象
*/
export const getRoute = route => {
  let target = {
    path: route.path,
    name: route.name,
    meta: {
      ...route.meta
    }
  };

  if (route.children) {
    target.children = route.children.map(child => getRoute(child));
  }

  return target;
};

/**
* 根据 path 属性查找路由列表中的指定路由对象
* @param {Array} routes 路由列表
* @param {String} path 路由对象的 path 或 name 属性
*/
export const getRouteByPath = (routes, path) => {
  let i = 0;
  let length = routes.length;
  let target = {};

  while (i < length) {
    let route = routes[i];

    if (route.path === path || route.name === path) {
      target = getRoute(route);
      break;
    }
    else if (route.children && route.children.length > 0) {
      route = getRouteByPath(route.children, path);

      if (route.path) {
        target = getRoute(route);
        break;
      }
    }

    i++;
  }

  return target;
};


/**
* 根据用户权限过滤可访问页面路由（允许传递额外的谓词函数进行过滤）
* @param {Array} routes 路由列表
* @param {Function} predicate 谓词函数
*/
export const getRegisterRoutes = (routes, predicate) => {
  return routes.filter(route => {
    if (is.function(predicate) && !predicate(route)) {
      return false;
    }

    if (route.children) {
      route.children = getRegisterRoutes(route.children, predicate);

      if (route.children.length === 0) {
        return false;
      }

      const target = route.children[0];

      if (target) {
        route.redirect = target.path;
      }
    }

    return true;
  });
};

/**
* 用于从路由配置中获取菜单数据
* @param {Array} routes 路由列表
* @param {Array} path 待解析的菜单列表所处的根路由路径
*/
export function getMenuByRoutes(routes, path) {
  const route = getRouteByPath(routes, path);

  if (route && route.children) {
    const predicate = target => {
      return target.meta && target.meta.addToMenu;
    };

    return getRegisterRoutes(route.children, predicate);
  }

  return [];
};

// 以默认导出的形式导出所有谓词函数
/* ---------------------------------------------------------------------------------------------------- */
export default {
  // 应用相关函数
  setPageTitle,
  getLanguage,
  getAnchors,
  // 路由操作函数
  getRegisterRoutes,
  getRoute,
  getRouteByPath,
  getMenuByRoutes
};