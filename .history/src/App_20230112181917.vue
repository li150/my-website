<script setup>
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";
</script>
<template>
  <Header></Header>
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
