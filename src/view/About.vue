<script setup>
  import {} from "vue";
  import isLang from "../utils/isLang";
  // 判断是否是中英文
  const { langFlag } = isLang();
</script>
<template>
  <div class="about">
    <div class="banner">
      <img src="../assets/images/review/bannel.png" />
    </div>
    <div class="max-w-screen-xl margin-auto ptb-64">
      <div class="flex mb-10 md:mx-7 md:mb-7">
        <div class="bg-blue-400 flex-basis-1/2 md:flex-basis p-8 left">助力您的包裹成功寄递！</div>
        <div class="md:hidden right">
          <img :title="langFlag" src="../assets/images/about/3.png" alt="" />
        </div>
      </div>
      <div class="flex md:mx-7">
        <div class="md:hidden right">
          <img :title="langFlag" src="../assets/images/about/2.png" alt="" />
        </div>
        <div class="bg-green-400 flex-basis-1/2 md:flex-basis p-8 left">助力您的包裹成功寄递！</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .about {
    .ptb-64 {
      padding-top: 74px;
      padding-bottom: 114px;

      .left {
        box-shadow: 0px 2px 13px #d6d6d6;
      }

      .right {
        flex-basis: 50%;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .about {
      .ptb-64 {
        padding-top: 6.1333vw;
        padding-bottom: 14.7333vw;
      }
    }
  }
</style>
