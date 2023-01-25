import { computed, reactive } from "vue";
import useLang from "../store/modules/lang";

/**
 * 判断是否为中英文
 */
function isLang() {
  const langState = useLang();
  // const langState = reactive({ lang: "zh" });
  const isLangEn = computed(() => langState.lang !== "zh");
  const isLangZh = computed(() => langState.lang !== "en");
  const langFlag = computed(() => (langState.lang !== "en" ? "biboom" : "biboom"));
  return {
    isLangEn,
    isLangZh,
    langFlag,
  };
}

export default isLang;
