/*
路由器对象模块
*/

import Vue from "vue";
import VueRouter from "vue-router";
import MSite from "../pages/MSite/MSite.vue";
import Order from "../pages/Order/Order.vue";
import Profile from "../pages/Profile/Profile.vue";
import Search from "../pages/Search/Search.vue";
import Login from "../pages/Login/Login.vue";
import Shop from "../pages/Shop/Shop.vue";
// 声明使用插件
Vue.use(VueRouter);

const router = new VueRouter({
  // mode: "history",
  // 所有路由
  routes: [
    {
      path: "/msite",
      name: "msite",
      component: MSite,
      meta: {
        showFooter: true
      }
    },
    {
      path: "/order",
      name: "order",
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: "/search",
      name: "search",
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: "/",
      redirect: "/msite"
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/shop",
      component: Shop
    }
  ]
});

export default router;
