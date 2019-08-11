import Vue from "vue";
import Vuex from "vuex";

import app from "./modules/app";
import user from "./modules/user";

Vue.use(Vuex);

//定义store 整个项目就这一个
export default new Vuex.Store({
  modules: {
    app,
    user
  },
  state: {},
  mutations: {},
  actions: {}
});
