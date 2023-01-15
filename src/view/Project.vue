<script setup>
  import { ref } from "vue";
  /**
   *
   */
  import chBj from "../assets/images/ch-1.jpg";
  import logoPng from "../assets/images/logo.png";

  const projectList = ref([
    {
      bj: chBj,
      icon: logoPng,
    },
    {
      bj: chBj,
      icon: logoPng,
    },
    {
      bj: chBj,
      icon: logoPng,
    },
    {
      bj: chBj,
      icon: logoPng,
    },
    {
      bj: chBj,
      icon: logoPng,
    },
    {
      bj: chBj,
      icon: logoPng,
    },
    {
      bj: chBj,
      icon: logoPng,
    },
    {
      bj: chBj,
      icon: logoPng,
    },
  ]);
</script>
<template>
  <div class="max-w-screen-xl margin-auto pt-16 pb-24 project">
    <h2 class="text-center py-6 text-2xl font-bold">{{ $t("porjectPage.title") }}</h2>
    <div class="project-list">
      <div class="flex relative p-4 mb-10 item" v-for="(item, index) in projectList">
        <div class="flex-1">
          <img :src="item.bj" alt="" />
        </div>
        <div class="flex-1 p-3">
          <div class="relative my-2 title">
            <span>{{ $t(`porjectPage.list.program_${index}.title`) }}</span>
          </div>
          <h5> {{ $t(`porjectPage.list.program_${index}.detail`) }} </h5>
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
      display: grid;
      grid-template-columns: 20vw 20vw 20vw;
      // grid-template-rows: 24vw 24vw 24vw;
      grid-auto-rows: 26vw;
      justify-content: space-between;
      .item {
        flex-direction: column;
        box-shadow: 0 3px 15px rgb(0 0 0 / 16%);
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
  }
</style>
