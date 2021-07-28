// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
// 配置路由
import router from "./router";
import store from "./store";
import "./mock/mockServer"; // 加载mockServer即可
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router, // 使用vue-router
  store // 使用vuex
});
