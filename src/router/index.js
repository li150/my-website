import { createRouter, createWebHashHistory } from "vue-router";
import i18n from "../i18n";
/**
 * 在外部没有setup函数使用i18n
 */
const tips = i18n.global.t;

const routes = [
  {
    path: "/",
    name: tips(`header.${1}`),
    component: () => import(/* vite: "Home" */ "../view/Home.vue"),
  },
  {
    path: "/about",
    name: tips(`header.${4}`),
    component: () => import(/* webpackChunkName: "about" */ "../view/About.vue"),
  },
  {
    path: "/project",
    name: tips(`header.${3}`),
    component: () => import(/* webpackChunkName: "project" */ "../view/Project.vue"),
  },
  // {
  //   path: "/review",
  //   name: tips(`header.${5}`),
  //   component: () => import(/* webpackChunkName: "review" */ "../view/Review.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
