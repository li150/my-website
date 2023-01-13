import { computed } from "vue";
import langStore from "../store/lang";

const langState = langStore();

const isLang = () => {
  const isLangEn = computed(() => langState.$state.lang !== "en");
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
