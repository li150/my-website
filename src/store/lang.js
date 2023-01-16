import { defineStore } from "pinia";
import { isSSR } from "../utils/utils";

export const useLang = defineStore("lang", {
  state() {
    return {
      lang: "zh",
      maxWidth: 992, //
      clientWidth: isSSR && document.body.clientWidth, //页面宽度
    };
  },
  actions: {
    updateLang(newLang) {
      console.log(newLang, ":newLang", this.$state.lang);
      this.lang = newLang;
    },
  },
});
