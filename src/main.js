import { createSSRApp } from "vue";
import "./style.css";
import App from "./App.vue";
// 完全引入element-plus
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
// import ElementPlus, { ID_INJECTION_KEY } from "element-plus";
import { ID_INJECTION_KEY } from "element-plus";
// import "element-plus/dist/index.css";
// import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import routers from "./router";
import i18n from "./i18n";
import { createStore } from "./store";
import { getGeoip, isSSR } from "./utils/utils";
import { createPinia } from "pinia";
import { createHead } from "@vueuse/head";

// app.use(ElementPlus);
// let comp;
// for ([comp] of Object.entries(ElementPlusIconsVue)) {
//   app.component(comp);
// }
// app.mount("#app");

export default function createApp() {
  const pinia = createPinia();
  const app = createSSRApp(App);
  const head = createHead();
  const router = routers();
  // const i18n = await defineCreateI18n();

  // const pinia = createStore();

  const initialState = {};
  // if (isSSR && window && window.__INITIAL_STATE__) {
  //   pinia.state.value = JSON.parse(window.__INITIAL_STATE__);
  // } else {
  //   initialState.pinia = pinia.state.value;
  // }
  if (import.meta.env.SSR) {
    // i18n.global.locale.value = "en";
    initialState.pinia = pinia.state.value;
  } else {
    // 在单纯SPA页面中没有这个属性值，找不到对于内容
    pinia.state.value = window.__INITIAL_STATE__;
  }

  // app.use(ElementPlus).provide(ID_INJECTION_KEY, {
  //   prefix: 100,
  //   current: 0,
  // });
  app.provide(ID_INJECTION_KEY, {
    prefix: 100,
    current: 0,
  });
  app.use(head);
  app.use(i18n);
  app.use(router);
  app.use(pinia);
  return { app, router, pinia, initialState, head };
}
