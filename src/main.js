import { createSSRApp } from "vue";
import "./style.css";
import App from "./App.vue";
// 完全引入element-plus
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
import ElementPlus, { ID_INJECTION_KEY } from "element-plus";
import "element-plus/dist/index.css";
// import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import routers from "./router";
import i18n from "./i18n";
import { createPinia } from "pinia";

// app.use(ElementPlus);
// let comp;
// for ([comp] of Object.entries(ElementPlusIconsVue)) {
//   app.component(comp);
// }
// app.mount("#app");

export default function createApp() {
  const app = createSSRApp(App);
  const router = routers();
  const pinia = createPinia();
  app.use(ElementPlus).provide(ID_INJECTION_KEY, {
    prefix: 100,
    current: 0,
  });
  app.use(i18n);
  app.use(router);
  app.use(pinia);
  return { app, router, pinia };
}
