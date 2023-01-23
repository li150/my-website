import { defineStore } from "pinia";
import { ref } from "vue";
import { isSSR } from "../../utils/utils";

export const useLang = defineStore("langs", () => {
  // state() {
  //   return {
  //     lang: "zh",
  //     maxWidth: 992, //
  //     clientWidth: isSSR && document.body.clientWidth, //页面宽度
  //   };
  // },
  // actions: {
  //   updateLang(newLang) {
  //     console.log(newLang, ":newLang", this.$state.lang);
  //     this.lang = newLang;
  //   },
  // },
  const lang = ref("zh");
  const maxWidth = ref(992);
  const clientWidth = ref(1080);

  const updateLang = (newLang) => {
    lang.value = newLang;
  };

  if (isSSR) {
    clientWidth.value = document.body.clientWidth;
  }

  return {
    lang,
    maxWidth,
    clientWidth,
    updateLang,
  };
});
