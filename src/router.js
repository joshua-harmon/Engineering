import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/electronics",
      name: "Electronics",
      component: () =>
          import(/* webpackChunkName: "Electronics" */ "./views/Electronics"),
    },
    {
      path: "/circuits",
      name: "Circuits",
      component: () =>
          import(/* webpackChunkName: "Circuits" */ "./views/Circuits"),
    },
    {
      path: "/processes",
      name: "Processes",
      component: () =>
          import(/* webpackChunkName: "Processes" */ "./views/Processes"),
    },
    {
      path: "/serialControl",
      name: "SerialControl",
      component: () =>
          import(/* webpackChunkName: "SerialControl" */ "./views/SerialControl"),
    },
    {
      path: "/bench",
      name: "Bench",
      component: () =>
          import(/* webpackChunkName: "Bench" */ "./views/Bench"),
    },
    {
      path: "/batteries",
      name: "Batteries",
      component: () =>
          import(/* webpackChunkName: "Batteries" */ "./views/Batteries"),
    },
    {
      path: "/lines",
      name: "Lines",
      component: () =>
          import(/* webpackChunkName: "Lines" */ "./views/Lines"),
    },
    {
      path: "/materials",
      name: "Materials",
      component: () =>
          import(/* webpackChunkName: "Materials" */ "./views/Materials"),
    },
    {
      path: "/more",
      name: "More",
      component: () =>
          import(/* webpackChunkName: "More" */ "./views/More"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () =>
          import(/* webpackChunkName: "Contact" */ "./views/Contact"),
    },
    {
      path: "/success",
      name: "Success",
      component: () =>
          import(/* webpackChunkName: "Success" */ "./views/Success"),
    },
    {
      path: "/404",
      alias: "*",
      name: "NotFound",
      component: () =>
          import(/* webpackChunkName: "NotFound" */ "./views/NotFound"),
    }
  ]
});

export default router;
