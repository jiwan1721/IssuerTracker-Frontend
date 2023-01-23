import Vue from "vue";
import VueRouter from "vue-router";
import Default from "../components/DashboardVue.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../components/login.vue"),
  },
  {
    path: "/showUser",
    name: "showUser",
    component: () => import("../components/showUser"),
  },
  {
    path: "/AuthenticatedVue",
    name: "AuthenticatedVue",
    component: () => import("../components/AuthenticatedComponent.vue"),
  },
  {
    path: "/create-issue",
    name: "create-issue",
    component: () => import("../components/User/CreatIssue.vue"),
  },
  {
    path: "/my-issue",
    name: "my-issue",
    component: () => import("../components/User/MyIssue.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: Default,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
