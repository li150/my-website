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
    min-height: calc(100vh - 4rem - 143px);
  }
</style>
