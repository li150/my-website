<script setup>
  import { ref, nextTick, getCurrentInstance, computed, watchEffect } from "vue";
  import langStore from "../store/lang";
  const langState = langStore();

  const prpos = defineProps({
    menuList: {
      type: Array,
      required: true,
    },
    drawer: {
      type: Boolean,
      required: true,
    },
    config: {
      type: Object,
      required: true,
    },
  });
  const drawer = computed(() => prpos.drawer);
  const emits = defineEmits(["handleClose", "closed", "changeMenu"]);
  const handleClose = (done) => {
    emits("handleClose", done);
  };
  const hanleClose = () => emits("closed");
  // 配置
  const config = ref({
    direction: "ltr",
    size: "70vw",
    title: "",
    customClass: "phone-menu",
    showClose: false,
    beforeClose: handleClose,
  });

  const { proxy } = getCurrentInstance();

  // 是否是中文
  const isZh = computed(() => (proxy.$i18n.locale === "zh" ? true : false));

  // 点击菜单栏
  const changeMenu = (ind) => emits("changeMenu", ind);

  //修改语言
  const changeLang = () => {
    const lang = localStorage.getItem("lang") === "zh" ? "en" : "zh";
    nextTick(() => {
      localStorage.setItem("lang", lang);
      proxy.$i18n.locale = lang;
      langState.updateLang(lang);
    });
  };

  watchEffect(
    () => {
      if (prpos.drawer) {
        document.querySelector(".el-popup-parent--hidden").style.width = "100vw";
      }
    },
    { flush: "post" },
  ); //设置flush: 'post'可以更新数据数据之后操作DOM
</script>

<template>
  <el-drawer v-model="drawer" v-bind="config">
    <template #header>
      <!-- 关闭 -->
      <div class="close">
        <span @click="hanleClose">{{ $t("header.closed") }}</span>
      </div>
    </template>
    <div class="phone-menu">
      <!-- 移动菜单栏 按钮-->
      <router-link v-for="(item, ind) of prpos.menuList" :key="ind" :to="item.path">
        <el-button :class="item.active ? 'menu-item active' : 'menu-item'" @click="changeMenu(ind)">
          {{ $t(`header.${ind + 1}`) }}
        </el-button>
      </router-link>
    </div>
    <!-- 中英文 -->
    <el-button class="menu-item" @click="changeLang">
      <text :style="isZh ? '' : 'color: #e0a300'">En</text>&ensp;| &ensp;<text
        :style="isZh ? 'color: #e0a300' : ''"
        >中文</text
      >
    </el-button>
  </el-drawer>
</template>

<style scoped lang="scss">
  @media screen and (max-width: 1024px) {
    .phone-menu {
      width: 100%;
      text-align: center;

      .close {
        padding-top: 4vw;
        text-align: right;
        font-size: 5.0667vw;
        color: #4b4b4b;
      }

      .menu-item {
        width: 100%;
        height: 45px;
        border: none;
        font-size: 18px;
        color: #332a00;
        cursor: pointer;
        background: none;
        padding: 10px 20px;
        margin-bottom: 4.8vw;
        font-weight: bold;
        box-sizing: border-box;
        border: 0.2667vw solid #707070;
        border-radius: 7.4667vw;
      }

      .active {
        color: #ffffff;
        background: #332a00;
        border-radius: 23px;
      }
    }
  }
</style>
