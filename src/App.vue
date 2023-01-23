<script setup>
  import { onMounted, getCurrentInstance } from "vue";
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";
  import FixedPlugin from "./components/FixedPlugin.vue";
  import { getGeoip } from "./utils/utils";
  import useLang from "./store/modules/lang";

  const { proxy } = getCurrentInstance();
  console.log(useLang(), ":useLang");
  const lang = useLang();

  // onMounted(() => {
  //   getGeoip().then((iso_code) => {
  //     const lang = iso_code === "CN" ? "zh" : "en";
  //     proxy.$i18n.locale = lang;
  //   });
  // });
</script>
<template>
  <Header></Header>
  <FixedPlugin></FixedPlugin>
  <div class="min-h">
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>
<style scoped lang="scss">
  .min-h {
    // 计算内容最低高度
    min-height: calc(100vh - 6rem - 162px);
  }
</style>
