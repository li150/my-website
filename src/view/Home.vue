<script setup>
  import { ref, computed } from "vue";
  import { useI18n } from "vue-i18n";
  import isLang from "../utils/isLang";
  /**
   * 图片链接引入
   */
  import _500675756_ from "../assets/images/home/_500675756_.png";
  import _501657450_ from "../assets/images/home/_501657450_.png";
  import _401118931_ from "../assets/images/home/_401118931_.png";
  import EcommerceOrderJpg from "../assets/images/home/2022-9-3/Ecommerce-Order.jpg";
  import EcommerceOrderPng from "../assets/images/home/2022-9-3/Ecommerce-Order.png";
  import EcommerceOrder2 from "../assets/images/home/2022-9-3/Ecommerce-Order(2).jpg";
  import EcommerceOrderQueryPng from "../assets/images/home/2022-9-3/Ecommerce-Order-query.png";
  import EcommerceOrderPng3 from "../assets/images/home/2022-9-3/Ecommerce-Order(3).jpg";
  import EcommerceOrderPng31 from "../assets/images/home/2022-9-3/Ecommerce-Order-3.png";
  import EcommerceOrderBg2 from "../assets/images/home/2022-9-3/Ecommerce-Order-bg(2).jpg";
  import EcommerceOrderPng4 from "../assets/images/home/2022-9-3/Ecommerce-Order-4.png";
  import EcommerceOrderBgJpg from "../assets/images/home/2022-9-3/Ecommerce-Order-bg(3).jpg";
  import EcommerceOrderPng5 from "../assets/images/home/2022-9-3/Ecommerce-Order-5.png";
  import EcommerceOrderBgJpg4 from "../assets/images/home/2022-9-3/Ecommerce-Order-bg(4).jpg";
  import EcommerceOrderPng6 from "../assets/images/home/2022-9-3/Ecommerce-Order-6.png";

  const { t } = useI18n();
  // 详情列表
  const arrs = ref([
    {
      bgUrl: EcommerceOrderJpg,
      icon: EcommerceOrderPng,
      title: t("homepage.itemFive.item_1.title"),
      tips: t("homepage.itemFive.item_1.tips"),
      active: false,
    },
    {
      bgUrl: EcommerceOrder2,
      icon: EcommerceOrderQueryPng,
      title: t("homepage.itemFive.item_2.title"),
      tips: t("homepage.itemFive.item_2.tips"),
      active: false,
    },
    {
      bgUrl: EcommerceOrderPng3,
      icon: EcommerceOrderPng31,
      title: t("homepage.itemFive.item_3.title"),
      tips: t("homepage.itemFive.item_3.tips"),
      active: false,
    },
    {
      bgUrl: EcommerceOrderBg2,
      icon: EcommerceOrderPng4,
      title: t("homepage.itemFive.item_4.title"),
      tips: t("homepage.itemFive.item_4.tips"),
      active: false,
    },
    {
      bgUrl: EcommerceOrderBgJpg,
      icon: EcommerceOrderPng5,
      title: t("homepage.itemFive.item_5.title"),
      tips: t("homepage.itemFive.item_5.tips"),
      active: false,
    },
    {
      bgUrl: EcommerceOrderBgJpg4,
      icon: EcommerceOrderPng6,
      title: t("homepage.itemFive.item_6.title"),
      tips: t("homepage.itemFive.item_6.tips"),
      active: false,
    },
  ]);
  const imgs = [_500675756_, _501657450_, _401118931_];
  const itemFiveList = computed(() => arrs.value);

  // 展示运输服务详情
  const itemFiveShowDetail = (ind, type) => {
    arrs.value = arrs.value.map((item, index) => {
      item.active = false;
      if (index === ind && type === 1) item.active = true;
      return item;
    });
  };

  // 判断是否是中英文
  const { langFlag, isLangZh, isLangEn } = isLang();
</script>
<template>
  <div class="banner">
    <img src="../assets/images/banner.jpg" alt="背景图" class="" />
  </div>
  <!-- 1 -->
  <div class="pb-24 home-item-one">
    <div class="text-center">
      <h1 class="text-4xl">{{ $t("homepage.itemFive.title") }}</h1>
      <div class="text-base py-8">{{ $t("homepage.itemFive.tips") }}</div>
    </div>
    <div class="main-in">
      <div class="flex justify-between md:hidden item-list">
        <div v-for="(item, ind) of itemFiveList" :key="ind" class="item">
          <img class="item-bg" :src="item.bgUrl" />
          <transition name="el-fade-in-linear">
            <div v-if="!item.active" class="item-body">
              <img class="item-icon" :src="item.icon" />
              <div class="item-title">
                {{ $t(`homepage.itemFive.item_${ind + 1}.title`) }}
              </div>
              <el-button size="mini" class="bottom-icon" @click="itemFiveShowDetail(ind, 1)">
                >>>
              </el-button>
            </div>
          </transition>
          <transition name="el-fade-in-linear">
            <div v-if="item.active" class="item-body">
              <div class="detail" v-html="$t(`homepage.itemFive.item_${ind + 1}.tips`)"></div>
              <el-button
                size="mini"
                class="bottom-icon"
                style="text-align: right"
                @click="itemFiveShowDetail(ind)"
              >
                &lt;&lt;&lt;
              </el-button>
            </div>
          </transition>
        </div>
        <p>{{ $t("homepage.itemFive.bottomTips") }}</p>
      </div>
      <div class="lg:hidden">
        <div class="flex justify-evenly mb-8 bg-content">
          <div class="bgctable1 relative">
            <img
              src="../assets/images/home/2022-9-3/Ecommerce-Order.png"
              class="mx-auto bg-yellow-300"
              alt=""
            />
            <p class="absolute bottom-0 left-0 right-0 text-center">biboom</p>
          </div>
          <div class="bgctable2 relative">
            <img
              src="../assets/images/home/2022-9-3/Ecommerce-Order.png"
              class="mx-auto bg-yellow-300"
              alt=""
            />
            <p class="absolute bottom-0 left-0 right-0 text-center">biboom</p>
          </div>
          <div class="bgctable3 relative">
            <img
              src="../assets/images/home/2022-9-3/Ecommerce-Order.png"
              class="mx-auto bg-yellow-300"
              alt=""
            />
            <p class="absolute bottom-0 left-0 right-0 text-center">biboom</p>
          </div>
        </div>
        <div class="flex justify-evenly bg-content2">
          <div class="bgctable1 relative">
            <img
              src="../assets/images/home/2022-9-3/Ecommerce-Order.png"
              class="mx-auto bg-yellow-300"
              alt=""
            />
            <p class="absolute bottom-0 left-0 right-0 text-center">biboom</p>
          </div>
          <div class="bgctable2 relative">
            <img
              src="../assets/images/home/2022-9-3/Ecommerce-Order.png"
              class="mx-auto bg-yellow-300"
              alt=""
            />
            <p class="absolute bottom-0 left-0 right-0 text-center">biboom</p>
          </div>
          <div class="bgctable3 relative">
            <img
              src="../assets/images/home/2022-9-3/Ecommerce-Order.png"
              class="mx-auto bg-yellow-300"
              alt=""
            />
            <p class="absolute bottom-0 left-0 right-0 text-center">biboom</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 2 -->
  <div class="home-item-two mobile">
    <div>
      <div class="title">
        <h1 class="title_one">{{ $t("homepage.itemOne.title") }}</h1>
        <div class="py-8 text-lg">{{ $t("homepage.itemOne.tips") }}</div>
      </div>
      <!-- pc端 -->
      <div
        class="flex justify-between max-w-screen-xl xl:max-w-full md:hidden item-list margin-auto"
      >
        <div class="item-list-i">
          <el-image :title="langFlag" :src="imgs[0]" fit="fit" class="item-list-i-bannel" />
          <div class="item-title">{{ $t("homepage.itemOne.one.title") }}</div>
          <div class="item-tips">{{ $t("homepage.itemOne.one.tips") }}</div>
          <img src="../assets/images/home/95.png" class="bottom-icon" alt="" />
        </div>
        <div class="item-list-i">
          <el-image :title="langFlag" :src="imgs[1]" fit="fit" class="item-list-i-bannel" />
          <div class="item-title">{{ $t("homepage.itemOne.two.title") }}</div>
          <div class="item-tips">{{ $t("homepage.itemOne.two.tips") }}</div>
          <img src="../assets/images/home/96.png" class="bottom-icon" alt="" />
        </div>
        <div class="item-list-i">
          <el-image :title="langFlag" :src="imgs[2]" fit="fit" class="item-list-i-bannel" />
          <div class="item-title">{{ $t("homepage.itemOne.three.title") }}</div>
          <div class="item-tips">{{ $t("homepage.itemOne.three.tips") }}</div>
          <img src="../assets/images/home/97.png" class="bottom-icon" alt="" />
        </div>
      </div>
      <!-- 移动端 -->
      <div class="flex justify-between mx-7 lg:hidden item-list">
        <div class="item-list-i">
          <el-image :src="imgs[0]" fit="fit" class="item-list-i-bannel" />
        </div>
        <div class="item-list-i">
          <el-image :src="imgs[1]" fit="fit" class="item-list-i-bannel" />
        </div>
        <div class="item-list-i">
          <el-image :src="imgs[2]" fit="fit" class="item-list-i-bannel" />
        </div>
      </div>
      <div class="flex justify-between text-center mx-7 lg:hidden">
        <div class="items-text">{{ $t("homepage.itemOne.one.title") }}</div>
        <div class="items-text">{{ $t("homepage.itemOne.two.title") }}</div>
        <div class="items-text">{{ $t("homepage.itemOne.three.title") }}</div>
      </div>
    </div>
  </div>
  <!-- 3 -->
  <div class="md:bg-gray-200 home-item-three">
    <div class="flex justify-between max-w-screen-xl margin-auto xl:max-w-full">
      <div class="left lg:bg-white">
        <h1>{{ $t("homepage.itemThree.title") }}</h1>
        <p>{{ $t("homepage.itemThree.label") }}</p>
        <div class="flex left-item">
          <span>01</span>
          <p>{{ $t("homepage.itemThree.tips_1") }}</p>
        </div>
        <div class="flex left-item">
          <span>02</span>
          <p>{{ $t("homepage.itemThree.tips_2") }}</p>
        </div>
      </div>
      <picture>
        <source srcset="../assets/images/home/94.png" media="(min-width:1024px)" />
        <source srcset="../assets/images/home/mobele-94.png" media="(max-width:1024px)" />

        <img class="img" :title="langFlag" src="../assets/home/94.png" />
      </picture>
    </div>
  </div>
  <!-- 4 -->
  <div class="home-item-four">
    <div class="max-w-screen-xl pt-6 pb-16 text-center margin-auto xl:max-w-full">
      <div class="pb-10 title">
        <h1>{{ $t("homepage.itemSix.title") }}</h1>
        <div>{{ $t("homepage.itemSix.tips") }}</div>
      </div>
      <div class="flex justify-between md:block item-list">
        <div class="item md:mx-8">
          <img
            src="../assets/images/home/2022-9-3/Snipaste_2022-09-05_14-36-44.png"
            class="item-icon"
          />
          <div class="item-title">
            {{ $t("homepage.itemSix.item_2.title") }}
          </div>
          <div v-if="isLangZh">
            <div class="item-tips">{{ $t("homepage.itemSix.item_2.tips") }}</div>
            <div class="item-tips">{{ $t("homepage.itemSix.item_2.tipsone") }}</div>
          </div>
          <div v-else class="item-tips"
            >依托自营专线及合作的国际快递，我们可以为你提供全球范围内的国际运输服务。</div
          >
        </div>

        <div class="item md:mx-8 md:my-20">
          <img
            src="../assets/images/home/2022-9-3/Snipaste_2022-09-05_14-34-16.png"
            class="item-icon"
          />
          <div class="item-title">
            {{ $t("homepage.itemSix.item_1.title") }}
          </div>
          <div v-if="isLangZh">
            <div class="item-tips">{{ $t("homepage.itemSix.item_1.tips") }}</div>
            <div class="item-tips">{{ $t("homepage.itemSix.item_1.tipsone") }}</div>
          </div>
          <div v-else class="item-tips">xxx</div>
        </div>

        <div class="item md:mx-8">
          <img
            src="../assets/images/home/2022-9-3/Snipaste_2022-09-05_14-37-48.png"
            class="item-icon"
          />
          <div class="item-title">
            {{ $t("homepage.itemSix.item_3.title") }}
          </div>
          <div class="item-tips">{{ $t("homepage.itemSix.item_3.tips") }}</div>
        </div>
      </div>
    </div>
  </div>
  <!-- 5 -->
  <div class="home-item-five">
    <div class="max-w-screen-xl text-center margin-auto in">
      <h1>{{ $t("homepage.itemFour.title") }}</h1>
      <p class="tips">{{ $t("homepage.itemFour.tips") }}</p>
      <div class="md:block lg:flex detail-info">
        <div class="justify-center"><span></span>{{ $t("homepage.itemFour.itemDetail.1") }}</div>
        <div class="justify-center"><span></span>{{ $t("homepage.itemFour.itemDetail.2") }}</div>
        <div class="justify-center"><span></span>{{ $t("homepage.itemFour.itemDetail.3") }}</div>
      </div>
      <el-popover v-if="isLangEn" placement="top" :width="220" trigger="click">
        <template #reference>
          <img src="../assets/images/home/wechat.png" class="scaleItem" />
        </template>
        <img
          src="../assets/images/home/wechat-qrcode.png"
          style="width: 200px; height: 200px; display: block"
        />
      </el-popover>
      <div v-else @click="clickItem(2)">
        <img src="../assets/images/home/whatsapp@2x.png" class="scaleItem" />
      </div>

      <p class="detail-text" @click="detail">
        {{ $t("homepage.itemFour.detail") }}
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

  .home-item-one {
    position: relative;
    padding-top: 50px;
    overflow: hidden;
    height: 945px;
    background-image: url("../assets/images/home/2022-9-3/Ecommerce-Order-bg(2).jpg");
    background-repeat: no-repeat;
    background-size: 100%;
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
      margin: 0 auto;

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
          overflow: hidden;
          transition: all 0.4s;
          position: relative;
          border-radius: 10px;
          box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.16);
          // transition: all 0.4s;

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
              background: #f9dc4d;
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
              text-align: center;
              line-height: 38px;
              position: absolute;
              letter-spacing: 1px;
              word-break: keep-all;
              transform: translate(-50%, -50%);
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
            top: 0;
            left: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
            position: absolute;
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
          background-image: url("../assets/images/home/2022-9-3/Ecommerce-Order(3).jpg");
        }
        .bgctable2 {
          background-image: url("../assets/images/home/2022-9-3/Ecommerce-Order(2).jpg");
        }
        .bgctable3 {
          background-image: url("../assets/images/home/2022-9-3/Ecommerce-Order(3).jpg");
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
        background-image: url("../assets/images/home/2022-9-3/Ecommerce-Order(3).jpg");
      }
      .bgctable2 {
        background-image: url("../assets/images/home/2022-9-3/Ecommerce-Order-bg(3).jpg");
      }
      .bgctable3 {
        background-image: url("../assets/images/home/2022-9-3/Ecommerce-Order-bg(4).jpg");
      }
    }
  }

  .home-item-two {
    // height: 825px;
    padding: 70px 0 80px 0;
    box-sizing: border-box;
    background: #fff3d9;
    // background-image: ;

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

    .img {
      display: block;
      width: 400px;
      height: 584px;
      margin-left: 24px;
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

        div {
          display: flex;
          align-items: center;
          text-align: left;
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
        height: 430px;
        padding: 80px 20px;
        position: relative;
        background: #ffffff;
        border-radius: 12px;
        box-sizing: border-box;
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
          font-size: 17px;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .home-item-one {
      height: auto;
      background-image: none;
    }
    .home-item-two {
      &.mobile {
        .item-list-i {
          border: none;
          overflow: hidden;
          border-radius: 0;
          width: 29.8667vw;
          height: 29.8667vw;
          margin-top: 8vw;
          background-color: transparent;
        }
        .items-text {
          width: 29.8667vw;
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
      }
    }
  }
</style>
