<script setup>
  const props = defineProps({
    carouselList: {
      type: Array,
    },
  });
</script>
<template>
  <el-carousel v-bind="$attrs">
    <el-carousel-item v-for="item in props.carouselList" :key="item.url">
      <img class="img" :src="item.url" alt="" />
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped lang="scss">
  .img {
    height: 100%;
    object-fit: cover;
  }
  .el-carousel--vertical,
  .el-carousel__container {
    height: 100% !important;
  }
</style>
