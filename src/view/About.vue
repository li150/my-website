<script setup>
  import {} from "vue";
  import isLang from "../utils/isLang";

  const { langFlag } = isLang();
</script>
<template>
  <div class="about">
    <div class="banner">
      <img src="../assets/images/review/bannel.png" />
    </div>
    <div class="max-w-screen-xl margin-auto mtb-64">
      <div class="flex mb-10">
        <div class="bg-blue-400 left"></div>
        <div class="overflow-hidden right">
          <img :title="langFlag" src="../assets/images/about/3.png" alt="" />
        </div>
      </div>
      <div class="flex">
        <div class="overflow-hidden right">
          <img :title="langFlag" src="../assets/images/about/2.png" alt="" />
        </div>
        <div class="bg-green-400 left"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .about {
    .mtb-64 {
      margin-top: 74px;
      margin-bottom: 114px;

      .left {
        flex-basis: 50%;
        box-shadow: 0px 2px 13px #d6d6d6;
      }

      .right {
        flex-basis: 50%;
      }
    }
  }
</style>
