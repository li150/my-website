import { computed } from "vue";
import langStore from "../store/lang";

/**
 * 判断是否为中英文
 */
function isLang() {
  const langState = langStore();
  const isLangEn = computed(() => langState.$state.lang !== "zh");
  const isLangZh = computed(() => langState.$state.lang !== "en");
  const langFlag = computed(() => (langState.$state.lang !== "en" ? "biboom" : "biboom"));
  return {
    isLangEn,
    isLangZh,
    langFlag,
  };
}

export default isLang;
