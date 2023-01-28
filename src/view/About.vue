<script setup>
  import { useHead } from "@vueuse/head";
  import isLang from "../utils/isLang";
  // 判断是否是中英文
  const { langFlag } = isLang();
  /**
   * 1.前端技能
   *
   * 2.工作经验
   */

  useHead({
    meta: [
      {
        name: "title",
        content: "biboom的官网的关于我",
      },
      {
        name: "author",
        content: "biboom-1449770614@qq.com",
      },
      {
        name: "description",
        content: "这是biboom的官网的关于我",
      },
      {
        name: "keywords",
        content: "biboom-我的技能,biboom-工作经验",
      },
    ],
  });
</script>
<template>
  <div class="about">
    <!-- 背景 -->
    <div class="banner">
      <img src="../assets/images/review/bannel.png" />
    </div>
    <div class="max-w-screen-xl margin-auto ptb-64">
      <!-- 技能 -->
      <div class="flex mb-10 md:mx-7 md:mb-7">
        <div class="flex-basis-1/2 md:flex-basis p-8 left">
          <h1 class="mb-4 text-title">
            {{ $t("aboutPage.skills.title") }}
          </h1>
          <div>
            <ul class="ul-list">
              <li v-for="item in 9"
                ><span class="w-2 h-2 inline-block rounded-full mr-1 bg-blue-900"></span
                >{{ $t(`aboutPage.skills.item.${item}`) }}</li
              >
            </ul>
          </div>
        </div>
        <div class="md:hidden right">
          <img :title="langFlag" src="../assets/images/about/3.png" alt="" />
        </div>
      </div>
      <!-- 经验 -->
      <div class="flex md:mx-7">
        <div class="md:hidden right">
          <img :title="langFlag" src="../assets/images/about/2.png" alt="" />
        </div>
        <div class="flex-basis-1/2 md:flex-basis p-8 left">
          <h1 class="mb-4 text-title">{{ $t("aboutPage.experience.title") }}</h1>
          <div>
            <div>{{ $t("aboutPage.experience.item_1.tips") }}：</div>
            <ul class="ul-list">
              <li v-for="item in 3"
                ><span class="text-li"></span>{{ $t(`aboutPage.experience.item_1.${item}`) }}</li
              >
            </ul>
            <div class="mt-4">{{ $t("aboutPage.experience.item_2.tips") }}：</div>
            <ul class="ul-list">
              <li v-for="item in 3"
                ><span class="text-li"></span>{{ $t(`aboutPage.experience.item_2.${item}`) }}</li
              >
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  $color-1: #f9dc4d;
  .about {
    .text-title {
      @apply text-black text-xl font-bold;
    }
    .text-li {
      @apply w-2 h-2 inline-block rounded-full mr-1 bg-blue-900;
    }

    .ptb-64 {
      padding-top: 74px;
      padding-bottom: 114px;

      .left {
        box-shadow: 0px 2px 13px #d6d6d6;
      }

      .right {
        flex-basis: 50%;

        > img {
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .ul-list {
      > li {
        line-height: 1.7;
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
