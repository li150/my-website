import { createSSRApp } from "vue";
import "./style.css";
import App from "./App.vue";
// 完全引入element-plus
// import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import router from "./router";
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
  const pinia = createPinia();
  app.use(router).use(i18n).use(pinia);
}
