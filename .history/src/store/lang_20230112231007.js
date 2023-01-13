import { defineStore } from "pinia";

const langStore = defineStore("lang", {
  state() {
    return {
      lang: "zh",
      maxWidth: 992, //
    };
  },
  actions: {
    updateLang(newLang) {
      this.lang = newLang;
    },
  },
});

export default langStore;
