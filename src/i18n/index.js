import { createI18n } from "vue-i18n";
import zh from "./zh";
import en from "./en";
import { getGeoip, isSSR } from "../utils/utils";

const message = {
  zh: { ...zh },
  en: { ...en },
};

// 当前语言状态
const getCurrentLanguage = () => {
  const UAlong = isSSR && navigator.language; // zh-CN
  const langCode = isSSR && UAlong.indexOf("zh") !== -1 ? "zh" : "en";
  isSSR && localStorage.setItem("lang", langCode);
  return langCode;
};

const i18n = createI18n({
  legacy: false,
  messages: message,
  globalInjection: true,
  locale: "zh",
});

// getGeoip().then((iso_code) => {
//   const lang = iso_code === "CN" ? "zh" : "en";
//   i18n.global.locale.value = lang;
// });
// async function defineCreateI18n() {
//   const iso_code = await getGeoip();
//   const lang = iso_code === "CN" ? "zh" : "en";
//   return createI18n({
//     legacy: false,
//     messages: message,
//     globalInjection: true,
//     locale: lang || "zh",
//   });
// }
// export default defineCreateI18n;
export default i18n;
