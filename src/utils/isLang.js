import { computed } from "vue";
import langStore from "../store/lang";

const isLang = () => {
  const langState = langStore();
  const isLangEn = computed(() => langState.$state.lang !== "zh");
  const isLangZh = computed(() => langState.$state.lang !== "en");
  const langFlag = computed(() =>
    langState.$state.lang !== "en" ? "必速派国际快递物流" : "Beespal Express",
  );
  return {
    isLangEn,
    isLangZh,
    langFlag,
  };
};

export default isLang;
