import Vue from "vue";
import Vuex from "vuex";
import hello from "./modules/hello";

Vue.use(Vuex);

const DEBUG = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  state: () => ({}),
  getters: {},
  actions: {},
  mutations: {},
  modules: {
    hello,
  },
  strict: DEBUG,
});
