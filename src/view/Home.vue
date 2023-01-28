<script setup>
  import { ref, computed, onMounted, watchEffect } from "vue";
  import { useI18n } from "vue-i18n";
  import { useRoute } from "vue-router";
  import { useHead } from "@vueuse/head";
  import isLang from "../utils/isLang";
  import DefineCarousel from "../components/DefineCarousel.vue";
  import useLang from "../store/modules/lang";
  /**
   * 图片链接引入
   */
  import skill_1 from "../assets/images/website-skill/skill-1.jpg";
  import skill_2 from "../assets/images/website-skill/skill-2.jpg";
  import skill_3 from "../assets/images/website-skill/skill-3.jpg";
  import skill_4 from "../assets/images/website-skill/skill-4.webp";
  import HTML5Png from "../assets/images/website-skill/HTML5.png";
  import skill_5 from "../assets/images/website-skill/skill-5.webp";
  import CSS3Png from "../assets/images/website-skill/CSS3.png";
  import skill_6 from "../assets/images/website-skill/skill-6.webp";
  import javascriptMapPng from "../assets/images/website-skill/javascript-map.png";
  import skill_7 from "../assets/images/website-skill/skill-7.webp";
  import VuePng from "../assets/images/website-skill/Vue.png";
  import skill_8 from "../assets/images/website-skill/skill-8.webp";
  import ReactPng from "../assets/images/website-skill/React.png";
  import skill_9 from "../assets/images/website-skill/skill-9.webp";
  import AngularPng from "../assets/images/website-skill/Angular.png";
  import iphonePng from "../assets/images/iphone.png";
  import wzHomePng from "../assets/images/website-skill/wzhome.jpg";
  import biboomHome from "../assets/images/website-skill/biboomhome.jpg";
  import { isSSR } from "../utils/utils";

  const { t } = useI18n();
  const state = useLang();
  const route = useRoute();
  // 详情列表
  const arrs = ref([
    {
      bgUrl: skill_4,
      icon: HTML5Png,
      title: t("homePage.itemOne.item_1.title"),
      tips: t("homePage.itemOne.item_1.tips"),
      active: false,
    },
    {
      bgUrl: skill_5,
      icon: CSS3Png,
      title: t("homePage.itemOne.item_2.title"),
      tips: t("homePage.itemOne.item_2.tips"),
      active: false,
    },
    {
      bgUrl: skill_6,
      icon: javascriptMapPng,
      title: t("homePage.itemOne.item_3.title"),
      tips: t("homePage.itemOne.item_3.tips"),
      active: false,
    },
    {
      bgUrl: skill_7,
      icon: VuePng,
      title: t("homePage.itemOne.item_4.title"),
      tips: t("homePage.itemOne.item_4.tips"),
      active: false,
    },
    {
      bgUrl: skill_8,
      icon: ReactPng,
      title: t("homePage.itemOne.item_5.title"),
      tips: t("homePage.itemOne.item_5.tips"),
      active: false,
    },
    {
      bgUrl: skill_9,
      icon: AngularPng,
      title: t("homePage.itemOne.item_6.title"),
      tips: t("homePage.itemOne.item_6.tips"),
      active: false,
    },
  ]);
  const imgs = ref([skill_1, skill_2, skill_3]);
  const itemOneList = computed(() => arrs.value);

  // 展示运输服务详情
  const itemOneShowDetail = (ind, type) => {
    arrs.value = arrs.value.map((item, index) => {
      item.active = false;
      if (index === ind && type === 1) item.active = true;
      return item;
    });
  };

  // 判断是否是中英文
  const { langFlag, isLangZh, isLangEn } = isLang();

  // 轮播图切换
  const carouselConfig = ref({
    // height: "26.5vw",
    height: "100%",
    direction: "vertical",
    autoplay: true,
    initialIndex: 0,
    interval: 3000,
  });
  const carouselList = ref([{ url: wzHomePng }, { url: biboomHome }]);
  const currentIndex = ref(0);
  const hanlechange = (index) => {
    currentIndex.value = index;
  };

  const homeItemRef = ref(null);
  const offsetTop = ref(0);

  useHead({
    meta: [
      {
        name: "title",
        content: "biboom的官网的首页",
      },
      {
        name: "author",
        content: "biboom-1449770614@qq.com",
      },
      {
        name: "description",
        content: "这是biboom的官网的首页",
      },
      {
        name: "keywords",
        content: "biboom-前端的专业技能,biboom-我擅长的方向,biboom-项目的展示",
      },
    ],
  });
  onMounted(() => {
    console.log("111111111111111");
    offsetTop.value = homeItemRef.value.offsetTop - 70;
    state.updateOffsetTop(offsetTop.value);
  });
  watchEffect(
    () => {
      if (route.path === "/" && route.query.type === "1") {
        isSSR && window.scrollTo({ top: offsetTop.value, behavior: "smooth" });
      }
    },
    {
      flush: "post",
    },
  );
</script>
<template>
  <div class="banner">
    <!-- 背景 -->
    <img src="../assets/images/banner.jpg" alt="biboom背景图" class="" />
  </div>
  <!-- 1 -->
  <div class="pb-24 home-item-one">
    <div class="text-center">
      <h1 class="text-4xl">{{ $t("homePage.itemOne.title") }}</h1>
      <div class="text-base py-8">{{ $t("homePage.itemOne.tips") }}</div>
    </div>
    <div class="margin-auto main-in">
      <div class="flex justify-between md:hidden item-list">
        <div v-for="(item, ind) of itemOneList" :key="ind" class="item">
          <img class="item-bg" :src="item.bgUrl" />
          <transition name="el-fade-in-linear">
            <div v-if="!item.active" class="item-body">
              <img class="bg-white item-icon" :src="item.icon" />
              <div class="item-title">
                {{ $t(`homePage.itemOne.item_${ind + 1}.title`) }}
              </div>
              <el-button size="small" class="bottom-icon" @click="itemOneShowDetail(ind, 1)">
                >>>
              </el-button>
            </div>
          </transition>
          <transition name="el-fade-in-linear">
            <div v-if="item.active" class="item-body">
              <div class="detail" v-html="$t(`homePage.itemOne.item_${ind + 1}.tips`)"></div>
              <el-button
                size="small"
                class="bottom-icon"
                style="text-align: right"
                @click="itemOneShowDetail(ind)"
              >
                &lt;&lt;&lt;
              </el-button>
            </div>
          </transition>
        </div>
        <p>{{ $t("homePage.itemOne.bottomTips") }}</p>
      </div>
      <div class="lg:hidden">
        <div class="flex justify-evenly mb-8 bg-content">
          <div class="bgctable1 relative">
            <img src="../assets/images/website-skill/HTML5.png" class="mx-auto bg-white" alt="" />
            <p class="absolute bottom-0 left-0 right-0 text-center">{{
              $t("homePage.itemOne.item_1.title")
            }}</p>
          </div>
          <div class="bgctable2 relative">
            <img src="../assets/images/website-skill/CSS3.png" class="mx-auto bg-white" alt="" />
            <p class="absolute bottom-0 left-0 right-0 text-center">{{
              $t("homePage.itemOne.item_2.title")
            }}</p>
          </div>
          <div class="bgctable3 relative">
            <img
              src="../assets/images/website-skill/javascript-map.png"
              class="mx-auto bg-white"
              alt=""
            />
            <p class="absolute bottom-0 left-0 right-0 text-center">{{
              $t("homePage.itemOne.item_3.title")
            }}</p>
          </div>
        </div>
        <div class="flex justify-evenly bg-content2">
          <div class="bgctable1 relative">
            <img src="../assets/images/website-skill/Vue.png" class="mx-auto bg-white" alt="" />
            <p class="absolute bottom-0 left-0 right-0 text-center">{{
              $t("homePage.itemOne.item_4.title")
            }}</p>
          </div>
          <div class="bgctable2 relative">
            <img src="../assets/images/website-skill/React.png" class="mx-auto bg-white" alt="" />
            <p class="absolute bottom-0 left-0 right-0 text-center">{{
              $t("homePage.itemOne.item_5.title")
            }}</p>
          </div>
          <div class="bgctable3 relative">
            <img src="../assets/images/website-skill/Angular.png" class="mx-auto bg-white" alt="" />
            <p class="absolute bottom-0 left-0 right-0 text-center">{{
              $t("homePage.itemOne.item_6.title")
            }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 2 -->
  <div class="home-item-two mobile" ref="homeItemRef">
    <div>
      <div class="title">
        <h1 class="title_one">{{ $t("homePage.itemTwo.title") }}</h1>
        <div class="py-8 text-lg">{{ $t("homePage.itemTwo.tips") }}</div>
      </div>
      <!-- pc端 -->
      <div
        class="flex justify-between max-w-screen-xl xl:max-w-full md:hidden item-list margin-auto"
      >
        <div class="item-list-i">
          <el-image :title="langFlag" :src="imgs[0]" fit="fill" class="item-list-i-bannel" />
          <div class="item-title">{{ $t("homePage.itemTwo.item_1.title") }}</div>
          <div class="item-tips">{{ $t("homePage.itemTwo.item_1.detail") }}</div>
          <img src="../assets/images/home/95.png" class="bottom-icon" alt="" />
        </div>
        <div class="item-list-i">
          <el-image :title="langFlag" :src="imgs[1]" fit="fill" class="item-list-i-bannel" />
          <div class="item-title">{{ $t("homePage.itemTwo.item_2.title") }}</div>
          <div class="item-tips">{{ $t("homePage.itemTwo.item_2.detail") }}</div>
          <img src="../assets/images/home/96.png" class="bottom-icon" alt="" />
        </div>
        <div class="item-list-i">
          <el-image :title="langFlag" :src="imgs[2]" fit="fill" class="item-list-i-bannel" />
          <div class="item-title">{{ $t("homePage.itemTwo.item_3.title") }}</div>
          <div class="item-tips">{{ $t("homePage.itemTwo.item_3.detail") }}</div>
          <img src="../assets/images/home/97.png" class="bottom-icon" alt="" />
        </div>
      </div>
      <!-- 移动端 -->
      <div class="grid justify-between lg:hidden item-list">
        <div class="item-list-i">
          <el-image :src="imgs[0]" fit="cover" lazy class="item-list-i-bannel" />
        </div>
        <div class="item-list-i">
          <el-image :src="imgs[1]" fit="cover" lazy class="item-list-i-bannel" />
        </div>
        <div class="item-list-i">
          <el-image :src="imgs[2]" fit="cover" lazy class="item-list-i-bannel" />
        </div>
        <div class="items-text">{{ $t("homePage.itemTwo.item_1.title") }}</div>
        <div class="items-text">{{ $t("homePage.itemTwo.item_2.title") }}</div>
        <div class="items-text">{{ $t("homePage.itemTwo.item_3.title") }}</div>
      </div>
      <!-- <div class="flex justify-between text-center mx-7 lg:hidden">
        <div class="items-text">{{ $t("homePage.itemTwo.item_1.title") }}</div>
        <div class="items-text">{{ $t("homePage.itemTwo.item_2.title") }}</div>
        <div class="items-text">{{ $t("homePage.itemTwo.item_3.title") }}</div>
      </div> -->
    </div>
  </div>
  <!-- 3 -->
  <div class="md:bg-gray-200 home-item-three">
    <div class="lg:flex lg:justify-between max-w-screen-xl margin-auto xl:max-w-full">
      <div class="left lg:bg-white">
        <h1>{{ $t("homePage.itemThree.title") }}</h1>
        <p>{{ $t("homePage.itemThree.tips") }}</p>
        <div class="flex left-item" :class="{ 'translate-side': currentIndex === 0 }">
          <span>01</span>
          <p>{{ $t("homePage.itemThree.tips_1") }}</p>
        </div>
        <div class="flex left-item" :class="{ 'translate-side': currentIndex === 1 }">
          <span>02</span>
          <p>{{ $t("homePage.itemThree.tips_2") }}</p>
        </div>
      </div>
      <div class="relative iphone-warp">
        <!-- <div class="absolute defin-carouse">
          <DefineCarousel
            v-bind="carouselConfig"
            :carousel-list="carouselList"
            @change="hanlechange"
          ></DefineCarousel>
        </div> -->
        <div class="lg:absolute mobile-iphone-init absolute0 iphone">
          <div class="relative mobile-img">
            <img class="lg:absolute absolute0" :src="iphonePng" alt="" />
            <div class="absolute defin-carouse">
              <DefineCarousel
                v-bind="carouselConfig"
                :carousel-list="carouselList"
                @change="hanlechange"
              ></DefineCarousel>
            </div>
          </div>
        </div>
        <!-- <picture>
          <source srcset="../assets/images/home/94.png" media="(min-width:1024px)" />
          <source srcset="../assets/images/home/mobele-94.png" media="(max-width:1024px)" />
          <img class="img" :title="langFlag" src="../assets/images/home/94.png" />
        </picture> -->
      </div>
    </div>
  </div>
  <!-- 4 -->
  <div class="home-item-four">
    <div class="max-w-screen-xl pt-6 pb-16 text-center margin-auto xl:max-w-full">
      <div class="pb-10 title">
        <h1 class="text-4xl">{{ $t("homePage.itemFour.title") }}</h1>
        <div class="pt-4">{{ $t("homePage.itemFour.tips") }}</div>
      </div>
      <div class="flex justify-between md:block item-list">
        <div class="item md:mx-8">
          <img
            src="../assets/images/home/2022-9-3/Snipaste_2022-09-05_14-36-44.png"
            class="item-icon"
          />
          <div class="item-title">
            {{ $t("homePage.itemFour.item_1.title") }}
          </div>
          <div class="text-justify item-tips">{{ $t("homePage.itemFour.item_1.tips") }}</div>
        </div>

        <div class="item md:mx-8 md:my-20">
          <img
            src="../assets/images/home/2022-9-3/Snipaste_2022-09-05_14-37-48.png"
            class="item-icon"
          />

          <div class="item-title">
            {{ $t("homePage.itemFour.item_3.title") }}
          </div>
          <div class="text-justify item-tips">{{ $t("homePage.itemFour.item_3.tips") }}</div>
        </div>

        <div class="item md:mx-8">
          <img
            src="../assets/images/home/2022-9-3/Snipaste_2022-09-05_14-34-16.png"
            class="item-icon"
          />
          <div class="item-title">
            {{ $t("homePage.itemFour.item_2.title") }}
          </div>
          <div class="text-justify item-tips">{{ $t("homePage.itemFour.item_2.tips") }}</div>
        </div>
      </div>
    </div>
  </div>
  <!-- 5 -->
  <div class="home-item-five">
    <div class="max-w-screen-xl text-center margin-auto in">
      <h1>{{ $t("homePage.itemFive.title") }}</h1>
      <p class="tips">{{ $t("homePage.itemFive.tips") }}</p>
      <div class="md:block lg:flex detail-info">
        <div class="flex items-center justify-center"
          ><span></span>{{ $t("homePage.itemFive.item.tips_2") }}</div
        >
        <div class="flex items-center justify-center"
          ><span></span>{{ $t("homePage.itemFive.item.tips_3") }}</div
        >
        <div class="flex items-center justify-center"
          ><span></span>{{ $t("homePage.itemFive.item.tips_1") }}</div
        >
      </div>
      <el-popover v-if="isLangEn" placement="top" :width="220" trigger="click">
        <template #reference>
          <img src="../assets/images/home/wechat.png" class="scaleItem" />
        </template>
        <img
          src="../assets/images/website-skill/wechat-qrcode.png"
          style="width: 200px; height: 200px; display: block"
        />
      </el-popover>
      <div v-else @click="clickItem(2)">
        <img src="../assets/images/home/whatsapp@2x.png" class="scaleItem" />
      </div>

      <p class="detail-text" @click="detail">
        {{ $t("homePage.itemFive.detail") }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .banner {
    width: 100%;
    height: calc(100vh - 134px);
    img {
      width: 100%;
      height: auto;
      // object-fit: cover;
    }
  }

  .absolute0 {
    // top-0 left-0 right-0 bottom-0
    @apply top-0 left-0 right-0 bottom-0;
  }
  .mobile-iphone-init {
    @apply md:relative md:flex md:justify-center;
  }

  .home-item-one {
    position: relative;
    padding-top: 50px;
    overflow: hidden;
    height: 945px;
    background-image: url("../assets/images/home/2022-9-3/Ecommerce-Order-bg(2).jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: 1;

    &::before {
      background: rgba(238, 238, 238, 0.84);
      position: absolute;
      display: block;
      height: 100%;
      content: "";
      width: 100%;
      z-index: -1;
      left: 0;
      top: 0;
    }

    .main-in {
      position: relative;
      max-width: 980px;

      .item-list {
        position: absolute;
        flex-wrap: wrap;
        z-index: 10;
        top: 0;
        left: 0;

        .item {
          width: 300px;
          height: 300px;
          margin: 30px 0;
          overflow: hidden;
          transition: all 0.4s;
          position: relative;
          border-radius: 10px;
          box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.16);

          &:hover {
            transform: scale(1.1);
          }

          .item-body {
            top: 0;
            left: 0;
            z-index: 5;
            width: 100%;
            height: 100%;
            position: absolute;
            text-align: center;
            box-sizing: border-box;

            .item-icon {
              width: 60px;
              height: 60px;
              padding: 10px;
              display: block;
              margin: 30px auto;
              // background: #f9dc4d;
              border-radius: 16px;
            }

            .item-title {
              font-size: 22px;
              line-height: 38px;
              font-weight: 500;
            }

            .bottom-icon {
              left: 0;
              width: 100%;
              border: none;
              bottom: 30px;
              display: block;
              font-size: 18px;
              background: none;
              position: absolute;
            }

            .detail {
              top: 50%;
              left: 50%;
              width: 253px;
              font-size: 16px;
              text-align: left;
              line-height: 38px;
              position: absolute;
              letter-spacing: 1px;
              // word-break: keep-all;
              transform: translate(-50%, -50%);
              text-indent: 32px;
            }
          }

          &::before {
            background: rgba(239, 239, 239, 0.93);
            position: absolute;
            display: block;
            height: 100%;
            content: "";
            width: 100%;
            z-index: 2;
            left: 0;
            top: 0;
          }

          .item-bg {
            z-index: 1;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        p {
          width: 100%;
          font-size: 16px;
          text-align: center;
        }
      }

      .bg-content {
        div {
          z-index: 1;
          height: 26vw;
          width: 26vw;
          background-size: cover;
          &::before {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            content: "";
            filter: opacity(0.6);
            background: #fff;
            z-index: -1;
          }
          img {
            width: 9vw;
            margin-top: 3vh;
          }
          p {
            padding-bottom: 1.2vh;
            font-size: 4vw;
          }
        }
        .bgctable1 {
          background-image: url("../assets/images/website-skill/skill-4.webp");
        }
        .bgctable2 {
          background-image: url("../assets/images/website-skill/skill-5.webp");
        }
        .bgctable3 {
          background-image: url("../assets/images/website-skill/skill-6.webp");
        }
      }
    }
    .bg-content2 {
      div {
        z-index: 1;
        height: 26vw;
        width: 26vw;
        background-size: cover;
        &::before {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          content: "";
          filter: opacity(0.6);
          background: #fff;
          z-index: -1;
        }
        img {
          width: 10vw;
          margin-top: 3vh;
        }
        p {
          padding-bottom: 1.2vh;
          font-size: 4vw;
        }
      }
      .bgctable1 {
        background-image: url("../assets/images/website-skill/skill-7.webp");
      }
      .bgctable2 {
        background-image: url("../assets/images/website-skill/skill-8.webp");
      }
      .bgctable3 {
        background-image: url("../assets/images/website-skill/skill-9.webp");
      }
    }
  }

  .home-item-two {
    // height: 825px;
    padding: 70px 0 110px 0;
    box-sizing: border-box;
    background: #fff3d9;

    .title {
      color: #000000;
      text-align: center;
      font-family: PingFang SC-Heavy, PingFang SC;

      h1 {
        font-size: 45px;
        line-height: 40px;
        font-weight: 500;
      }
    }

    .item-list {
      grid-template-columns: 29vw 29vw 29vw;

      .item-list-i {
        // width: 380px;
        flex-basis: 32%;
        height: 496px;
        position: relative;
        border-radius: 8px;
        background: #f4f4f4;
        position: relative;
        transition: all 0.4s;
        border: 2px solid #f3ca3f;
        font-family: PingFang SC-Heavy, PingFang SC;

        &:hover {
          transform: scale(1.1);
        }

        .item-list-i-bannel {
          margin: 0 auto;
          display: block;
          height: 229px;
          // width: 370px;
          width: 100%;
        }

        .item-title {
          padding: 0 20px;
          font-size: 22px;
          line-height: 50px;
          font-weight: 500;
          color: #332a00;
        }

        .item-tips {
          color: #332a00;
          padding: 0 20px;
          font-size: 16px;
          line-height: 28px;
          text-indent: 32px;
        }

        .bottom-icon {
          transform: translateX(-50%);
          position: absolute;
          display: block;
          bottom: -50px;
          height: 88px;
          width: 88px;
          z-index: 1;
          left: 50%;
        }
      }
    }
  }

  .home-item-three {
    height: 791px;
    padding: 101px 0;
    box-sizing: border-box;
    // background: rgba(255, 243, 217, 0.28);

    .left {
      flex: 1;
      height: 576px;
      color: #000000;
      box-shadow: 0px 0px 6px 1px #e4e4e4;
      border-radius: 8px 8px 8px 8px;
      padding: 50px 50px 50px 16px;
      box-sizing: border-box;

      h1 {
        font-weight: 500;
        font-size: 45px;
      }

      p {
        font-size: 16px;
        line-height: 32px;
      }

      .left-item {
        font-size: 26px;
        color: #333333;
        line-height: 42px;
        padding-top: 37px;
        transition: transform 1s;

        &.translate-side {
          transform: translateX(36px);
        }

        &:nth-child(4) {
          padding-bottom: 18px;
        }

        &::before {
          content: "";
          width: 8px;
          height: 96px;
          display: block;
          margin-right: 8px;
          background: #f3c93a;
        }

        span {
          width: 96px;
          height: 96px;
          color: #ffffff;
          display: block;
          font-size: 48px;
          line-height: 96px;
          font-weight: bold;
          font-weight: bold;
          margin-right: 16px;
          text-align: center;
          background: linear-gradient(93deg, #f3c93a 0%, #f3c93a 100%);
        }
      }

      .el-button {
        float: right;
        height: 54px;
        border: none;
        color: #ffffff;
        font-size: 28px;
        font-weight: 500;
        padding: 5px 37px;
        border-radius: 27px;
        background: linear-gradient(101deg, #f87e00 0%, #f9dc4d 100%);
      }
    }

    .defin-carouse {
      // top: 11.9%;
      // left: 14%;
      // right: 25.5%;
      // bottom: 12%;
      top: 63px;
      left: 46px;
      right: 46px;
      bottom: 95px;
      border-radius: 8px;
      overflow: hidden;
      // background-color: blue;
    }

    .iphone-warp {
      flex-basis: 300px;
      flex-shrink: 0;

      .iphone {
        // top: -38px;
        .mobile-img {
          height: 100%;
          img {
            height: auto;
          }
        }
      }
    }

    .img {
      display: block;
      // width: 400px;
      height: 584px;
      // margin-left: 24px;
      padding-left: 24px;
    }
  }

  .home-item-five {
    height: 618px;
    position: relative;

    .bg {
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      left: 0;
    }

    .in {
      padding: 97px 0 117px 0;
      box-sizing: border-box;
      text-align: center;
      line-height: 40px;
      font-size: 22px;
      color: #332a00;

      h1 {
        font-size: 45px;
        font-weight: 500;
        color: #332a00;
      }

      .tips {
        //font-weight: 800;
        padding: 20px 0;
      }

      img {
        width: 80px;
        height: 80px;
        display: block;
        margin: 58px auto 7px;
      }

      .detail-info {
        font-size: 16px;
        justify-content: center;

        > div {
          margin-bottom: 2vw;
        }

        span {
          width: 40px;
          height: 40px;
          display: inline-flex;
          margin-left: 1.23vw;
          margin-right: 3px;
          background: url("../assets/images/home/2022-9-3/success-yellow.png") no-repeat;
          background-size: cover;

          &:nth-child(2),
          &:nth-child(3) {
            margin-left: 2vw;
          }
        }
      }

      .detail-text {
        cursor: pointer;
        font-size: 35px;
        // margin-top: 7px;
      }
    }
  }

  .home-item-four {
    background: rgba(238, 241, 241, 0.92);

    .item-list {
      margin-top: 60px;

      .item {
        // width: 339px;
        flex-basis: 32%;
        height: 430px;
        padding: 80px 20px;
        position: relative;
        background: #ffffff;
        border-radius: 12px;
        box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.16);
        transition: all 0.4s;

        &:hover {
          transform: scale(1.1);
        }

        .item-icon {
          top: -40px;
          left: 40px;
          display: block;
          position: absolute;
          border-radius: 12px;
        }

        .item-title {
          height: 60px;
          font-size: 21px;
          font-weight: 500;
          line-height: 30px;
          //white-space: nowrap;
        }

        .item-tips {
          // padding: 20px 0;
          line-height: 32px;
          font-size: 16px;
          text-indent: 32px;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .banner {
      height: auto;
    }
    .home-item-one {
      height: auto;
      background-image: none;
    }
    .home-item-two {
      &.mobile {
        .item-list {
          padding-left: 4vw;
          padding-right: 4vw;
        }
        .item-list-i {
          border: none;
          overflow: hidden;
          border-radius: 0;
          // width: 29.8667vw;
          // height: 29.8667vw;
          width: auto;
          height: auto;
          margin-top: 8vw;
          background-color: transparent;
          .item-list-i-bannel {
            height: 28vw;
          }
        }
        .items-text {
          // width: 29.8667vw;
          padding-top: 1.8vw;
          text-align: center;
          font-size: 2.2vw;
        }
      }
    }
    .home-item-three {
      height: auto;
      padding: 5.8667vw 3.2vw;

      .img {
        width: 29.3333vw;
        height: 50.1333vw;
        margin: 0;
      }

      .left {
        height: auto;
        padding: 0;
        box-shadow: none;
        .left-item {
          &.translate-side {
            transform: translateX(0);
          }
        }
      }

      .iphone-warp {
        height: 90vw;
        .mobile-img {
          width: 52vw;
          height: 50vw;
        }
      }
      .defin-carouse {
        top: 10.5vw;
        left: 8vw;
        right: 7.9vw;
        bottom: 11vw;
        border-radius: 1.3vw;
      }
    }
  }
</style>
