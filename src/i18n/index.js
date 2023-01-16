import { createI18n } from "vue-i18n";
import zh from "./zh";
import en from "./en";
import { isSSR } from "../utils/utils";

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
  locale: getCurrentLanguage() || "zh",
});
export default i18n;
