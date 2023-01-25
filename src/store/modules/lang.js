import { defineStore } from "pinia";
import { ref } from "vue";
import { isSSR } from "../../utils/utils";

export default defineStore("lang", {
  state: () => ({
    lang: "zh",
    maxWidth: 992, //
    clientWidth: isSSR && document.body.clientWidth, //页面宽度
    homePageServerOffsetTop: 0,
    sum: 1,
  }),
  // state() {
  //   return {
  //     lang: "zh",
  //     maxWidth: 992, //
  //     clientWidth: isSSR && document.body.clientWidth, //页面宽度
  //     sum: 1,
  //   };
  // },
  actions: {
    updateLang(newLang) {
      console.log(newLang, ":newLang", this.lang);
      localStorage.setItem("lang", newLang);
      this.lang = newLang;
    },
    updateOffsetTop(offsetTop) {
      this.homePageServerOffsetTop = offsetTop;
    },
    updateSum() {
      this.sum = this.sum + 1;
    },
  },
  // const lang = ref("zh");
  // const maxWidth = ref(992);
  // const clientWidth = ref(1080);
  // const updateLang = (newLang) => {
  //   lang.value = newLang;
  // };
  // if (isSSR) {
  //   clientWidth.value = document.body.clientWidth;
  // }
  // return {
  //   lang,
  //   maxWidth,
  //   clientWidth,
  //   updateLang,
  // };
});
