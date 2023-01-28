<script setup>
  import { ref } from "vue";
  import { useHead } from "@vueuse/head";
  /**
   *
   */
  import projectBj1 from "../assets/images/website-skill/project-1.jpg";
  import logoPng from "../assets/images/logo.png";

  const projectList = ref([
    {
      bj: projectBj1,
      icon: logoPng,
    },
    {
      bj: projectBj1,
      icon: logoPng,
    },
    {
      bj: projectBj1,
      icon: logoPng,
    },
    {
      bj: projectBj1,
      icon: logoPng,
    },
    {
      bj: projectBj1,
      icon: logoPng,
    },
    {
      bj: projectBj1,
      icon: logoPng,
    },
    {
      bj: projectBj1,
      icon: logoPng,
    },
    {
      bj: projectBj1,
      icon: logoPng,
    },
  ]);

  useHead({
    meta: [
      {
        name: "title",
        content: "biboom的官网的项目",
      },
      {
        name: "author",
        content: "biboom-1449770614@qq.com",
      },
      {
        name: "description",
        content: "这是biboom的官网的项目",
      },
      {
        name: "keywords",
        content:
          "biboom-Beespal官网（PC/Mobile）,biboom-君丰国际快递集运转运（小程序）,biboom-项目的可信采集系统+可视化大屏",
      },
    ],
  });
</script>
<template>
  <div class="max-w-screen-xl margin-auto pt-16 pb-24 project">
    <h2 class="text-center py-6 text-2xl font-bold">{{ $t("porjectPage.title") }}</h2>
    <!-- 项目列表 -->
    <div class="lg:grid project-list">
      <div class="flex relative p-4 mb-10 item" v-for="(item, index) in projectList">
        <div class="flex-1 overflow-hidden">
          <img :src="item.bj" alt="" class="img" />
        </div>
        <div class="flex-1 p-3">
          <div class="relative my-2 title">
            <span>{{ $t(`porjectPage.list.program_${index}.title`) }}</span>
          </div>
          <h5 class="text-indent mobile-text text-justify">
            {{ $t(`porjectPage.list.program_${index}.detail`) }}
          </h5>
        </div>
        <div class="absolute icon">
          <img :src="item.icon" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .project {
    .project-list {
      grid-template-columns: 32% 32% 32%;
      grid-auto-rows: 33%;
      // grid-template-rows: 24vw 24vw 24vw;
      justify-content: space-between;

      .text-indent {
        height: 135px;
        overflow-y: auto;
        font-size: 15px;
        text-indent: 30px;
        overflow-y: auto;
        &::-webkit-scrollbar {
          width: 2px; /* 滚动条宽度， width：对应竖滚动条的宽度  height：对应横滚动条的高度*/
          height: 1px;
          background: gainsboro;
        }
      }
      .item {
        flex-direction: column;
        box-shadow: 0 3px 15px rgb(0 0 0 / 16%);
        .img {
          transition: transform 1s;
        }
        &:hover {
          .img {
            transform: scale3d(1.3, 1.3, 1.3);
          }
        }
        .title {
          &::before {
            position: absolute;
            content: "";
            right: 0;
            top: 50%;
            transform: translate(0, -50%);
            width: 25%;
            height: 2px;
            background: rgba(139, 139, 139, 0.157);
          }
        }
        .icon {
          bottom: -26px;
          left: 3rem;
          box-shadow: 0 3px 15px rgb(0 0 0 / 16%);
          padding: 5px;
          background-color: #fff;
          > img {
            width: 56px;
          }
        }
      }
    }

    @media screen and (max-width: 1024px) {
      .project {
        padding-top: 1vw;
        padding-bottom: 1vw;
      }
      .project-list {
        .item {
          height: 48vh;
          margin-left: 4vw;
          margin-right: 4vw;

          .mobile-text {
            padding-right: 2px;
            height: 14vh;
          }
        }
      }
    }
  }
</style>
