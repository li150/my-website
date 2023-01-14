<script setup>
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";
  import FixedPlugin from "./components/FixedPlugin.vue";
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
