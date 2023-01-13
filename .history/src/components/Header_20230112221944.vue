<script setup>
  import { computed, getCurrentInstance, nextTick, reactive } from "vue";
  import langStore from "../store/lang";
  /**
   * 图片链接引入
   */
  import wechatPng from "../assets/images/home/wechat.png";
  import wechatQrcodePng from "../assets/images/home/wechat-qrcode.png";
  import headerQqPng from "../assets/images/home/header-qq.png";
  import qqQrcodePng from "../assets/images/home/qq-qrcode.png";
  import phoneCall from "../assets/images/header/phone-call.png";

  const { proxy } = getCurrentInstance();
  const langState = langStore();
  /**
   * 联系图标
   */
  const isZh = computed(() => langState.$state.lang === "zh");
  // 中英图标显示
  const imgs = computed(() => {
    if (isZh.value) {
      return [
        {
          icon: wechatPng,
          code: wechatQrcodePng,
        },
        {
          icon: headerQqPng,
          code: qqQrcodePng,
        },
      ];
    }
    return [phoneCall];
  });
  // 中英文切换
  const changeLang = () => {
    const lang = langState.$state.lang === "zh" ? "en" : "zh";
    langState.updateLang(lang);
    nextTick(() => {
      proxy.$i18n.locale = lang;
    });
  };

  // pc端菜单
  let menuLists = reactive([
    { active: false, id: 0, path: "/" },
    { active: false, id: 0, path: "/?type=1" },
    { active: false, id: 0, path: "/order" },
    { active: false, id: 0, path: "/about" },
    { active: false, id: 0, path: "/review" },
  ]);
  const clickIcon = () => {};

  // 点击菜单栏
  const changeMenu = (ind) => {
    menuLists = menuLists.map((item, index) => {
      item.active = false;
      if (ind === index) item.active = true;
      return item;
    });
    nextTick(() => {
      if (ind === 0) window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
      //   if (ind === 1)
      // window.scrollTo({
      //   top: langState.$state.HomePageServerElOffsetTop,
      //   behavior: "smooth",
      // });
    });
  };
</script>
<template>
  <div class="header">
    <!-- 顶部内容 -->
    <div class="p-5f">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <img src="../assets/images/logo.png" class="w-12 mr-4" />
          <div>
            Whatsapp:15016400000
            <span class="mx-4">|</span> Email: 1449770614@qq.com
          </div>
        </div>
        <div class="flex items-center">
          <div v-if="!isZh" class="flex">
            <img
              v-for="(item, index) of imgs"
              :key="index"
              :src="item"
              class="w-10 mr-4"
              @click="clickIcon(index)"
            />
          </div>
          <div v-else class="flex">
            <el-popover
              v-for="(item, ind) of imgs"
              :key="ind"
              placement="bottom"
              :width="220"
              trigger="click"
            >
              <template #reference>
                <img :src="item.icon" class="w-10 mr-4" />
              </template>
              <img :src="item.code" style="width: 200px; height: 200px; display: block" />
            </el-popover>
          </div>
          <!-- 中英文 -->
          <el-button style="border: none" @click="changeLang">
            <text :style="isZh ? '' : 'color: #e0a300'">En</text>&ensp;| &ensp;<text
              :style="isZh ? 'color: #e0a300' : ''"
              >中文
            </text>
          </el-button>
        </div>
      </div>
    </div>
  </div>
  <!-- pc端菜单 -->
  <div class="header-menu">
    <div class="flex header-menu-in">
      <router-link
        v-for="(item, ind) of menuLists"
        :key="ind"
        :to="item.path"
        :class="ind == 1 ? 'activehover' : ''"
      >
        <el-button
          :class="
            item.active
              ? ind == 1
                ? 'menu-item active name'
                : 'menu-item active'
              : ind == 1
              ? 'menu-item name'
              : 'menu-item'
          "
          @click="changeMenu(ind)"
        >
          {{ $t(`header.${ind + 1}`) }}
        </el-button>
      </router-link>
    </div>
  </div>
  <!-- 移动端菜单栏 -->
  <div class="flex mobile-menu">
    <img style="flex: 1" class="menu-icon" src="../assets/header/menu.png" @click="hanleOpenMenu" />
    <div style="flex: 23; margin-right: 8vw" class="flex flex-center">
      <img class="menu-icon" src="../assets/home/logo.png" />
      <div style="margin-top: 3px">{{ $t("header.title") }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  $color-1: #202020;
  .header {
    color: $color-1;

    .p-5f {
      padding: 0 5%;
    }
  }
  .header-menu {
    background: #f9dc4d;
    white-space: nowrap;
    position: sticky;
    z-index: 1000;
    top: 0;
    color: $color-1;

    .header-menu-in {
      width: 75%;
      height: 70px;
      margin: 0 auto;
      justify-content: flex-end;

      .menu-item {
        width: 95px;
        height: 70px;
        border: none;
        margin: 0 10px;
        font-size: 17px;
        color: #332a00;
        cursor: pointer;
        background: none;
        font-weight: bold;
        padding: 10px 20px;
        box-sizing: border-box;

        &:hover {
          color: #ffffff;
          background: #332a00;
          height: 70px;
        }
      }

      .active {
        color: #ffffff;
        background: #332a00;
        border-radius: 23px;
      }

      .button {
        width: 140px;
        height: 50px;
        font-size: 17px;
      }

      .buttonen {
        width: 140px;
        height: 50px;
      }
    }
  }
</style>
