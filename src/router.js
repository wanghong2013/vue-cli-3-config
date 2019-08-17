import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/user/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/user/Login.vue")
    },
    {
      path: "/user/register",
      name: "register",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/user/Register.vue")
    },
    {
      path: "/form/add",
      name: "formAdd",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/form/Add.vue")
    },
    {
      path: "/jsx/demo1",
      name: "jsxdemo1",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/jsx/JsxDemo1.vue")
    },
    {
      path: "/tpl/tpldemo01",
      name: "tpldemo0",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/tpl/Tpldemo01.vue")
    },
    {
      path: "/slot/slotdemo01",
      name: "slotdemo01",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/slot/Soltdemo01.vue")
    },
    {
      path: "/slot/slotdemo02",
      name: "slotdemo01",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/slot/Soltdemo02.vue")
    }


  ]
});
