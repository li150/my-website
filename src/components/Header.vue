<script setup>
  import { ref, computed, getCurrentInstance, nextTick, reactive } from "vue";
  import DefineDrawer from "../components/DefineDrawer.vue";
  import useLang from "../store/modules/lang";
  /**
   * 图片链接引入
   */
  import wechatPng from "../assets/images/home/wechat.png";
  import wechatQrcodePng from "../assets/images/home/wechat-qrcode.png";
  import headerQqPng from "../assets/images/home/header-qq.png";
  import qqQrcodePng from "../assets/images/home/qq-qrcode.png";
  import phoneCall from "../assets/images/header/phone-call.png";

  const { proxy } = getCurrentInstance();
  const langState = useLang();
  /**
   * 联系图标
   */
  const isZh = computed(() => langState.lang === "zh");
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
    const lang = langState.lang === "zh" ? "en" : "zh";
    // langState.lang = lang;
    nextTick(() => {
      langState.updateLang(lang);
      proxy.$i18n.locale = lang;
      console.log(langState, ":langState");
    });
  };

  // 抽屉显隐
  const drawer = ref(false);
  const closed = () => (drawer.value = false);
  const handleClose = (done) => {
    done();
    closed();
  };
  const hanleOpenMenu = () => (drawer.value = true);
  // pc端菜单
  let menuLists = reactive([
    { active: false, id: 0, path: "/" },
    { active: false, id: 0, path: "/?type=1" },
    { active: false, id: 0, path: "/project" },
    { active: false, id: 0, path: "/about" },
    // { active: false, id: 0, path: "/review" },
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
  <div class="header md:hidden lg:block">
    <!-- 顶部内容 -->
    <div class="content">
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
  <div class="header-menu md:hidden lg:block">
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
  <!-- 移动端菜单图标 -->
  <div class="sticky top-0 bg-white z-999 lg:hidden md:flex mobile-menu">
    <img class="flex-shrink-0 w-12" src="../assets/images/header/menu.png" @click="hanleOpenMenu" />
    <div class="flex items-center justify-center flex-1">
      <img class="w-14" src="../assets/images/logo.png" />
      <div class="ml-2 font-bold">{{ $t("header.title") }}</div>
    </div>
    <!-- 移动端菜单 -->
    <DefineDrawer
      :menu-list="menuLists"
      :drawer="drawer"
      @handleClose="handleClose"
      @closed="closed"
      @changeMenu="changeMenu"
    ></DefineDrawer>
  </div>
</template>

<style scoped lang="scss">
  $color-1: #202020;
  .header {
    color: $color-1;

    .content {
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

  .mobile-menu {
    padding: 0.5em 2.3333vw;
    font-size: 4vw;
    color: #36485e;

    img {
      width: 6.4vw;
      height: 6.4vw;
      display: block;
      margin: 0 0.1em;
    }
  }
</style>
