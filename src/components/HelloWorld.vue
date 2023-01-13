<script setup>
  import { ref } from "vue";
  const value = ref(new Date());
  // const msg = "hhh";
</script>
<template>
  <el-calendar v-model="value" />
</template>
