import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "首页",
    component: () => import(/* vite: "Home" */ "../view/Home.vue"),
  },
  {
    path: "/about",
    name: "关于我们",
    component: () => import(/* webpackChunkName: "about" */ "../view/About.vue"),
  },
  {
    path: "/review",
    name: "用户反馈",
    component: () => import(/* webpackChunkName: "review" */ "../view/Review.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
