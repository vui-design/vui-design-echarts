import utils from "app/libs/utils";

export default {
  namespaced: true,
  state: {
    language: utils.getLanguage(),
    menu: [],
    anchors: []
  },
  mutations: {
    setLanguage(state, language) {
      localStorage.setItem("language", language);
      state.language = language;
    },
    setMenu(state, routes) {
      state.menu = utils.getMenuByRoutes(routes);
    },
    setAnchors(state, container) {
      state.anchors = utils.getAnchors(container);
    }
  }
};