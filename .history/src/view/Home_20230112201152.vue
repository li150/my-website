<script setup>
  import { ref, computed } from "vue";
  import { useI18n } from "vue-i18n";
  import langStore from "../store/lang";
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
  const langState = langStore();
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

  const langFlag = computed(() =>
    langState.$state.lang !== "en" ? "必速派国际快递物流" : "Beespal Express",
  );
  const lang = isLang();
  //   const isLangEn = computed(() => langState.$state.lang !== "en");
  //   const isLangZh = computed(() => langState.$state.lang !== "en");
</script>
<template>
  <div class="banner">
    <img src="../assets/images/banner.jpg" alt="背景图" class="" />
  </div>
  <!-- 1 -->
  <div class="home-item-five">
    <div class="text-center">
      <h1 class="text-4xl">{{ $t("homepage.itemFive.title") }}</h1>
      <div class="text-base py-7">{{ $t("homepage.itemFive.tips") }}</div>
    </div>
    <div class="main-in">
      <div class="flex justify-between item-list">
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
    </div>
  </div>
  <!-- 2 -->
  <div class="home-item-one">
    <div class="main-in">
      <div class="title">
        <h1 class="title_one">{{ $t("homepage.itemOne.title") }}</h1>
        <div class="title_two">{{ $t("homepage.itemOne.tips") }}</div>
      </div>
      <div class="flex justify-between max-w-screen-xl item-list margin-auto">
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
    </div>
  </div>
  <!-- 3 -->
  <div class="home-item-three">
    <div class="flex max-w-screen-xl margin-auto">
      <div class="left">
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
        <source srcset="../assets/images/home/94.png" media="(min-width:992px)" />
        <source srcset="../assets/images/home/mobele-94.png" media="(max-width:992px)" />

        <img class="img" :title="langFlag" src="../assets/home/94.png" />
      </picture>
    </div>
  </div>
  <!-- 4 -->
  <div class="data-detail">
    <div class="max-w-screen-xl pt-6 pb-16 text-center margin-auto">
      <div class="pb-10 title">
        <h1>{{ $t("homepage.itemSix.title") }}</h1>
        <div>{{ $t("homepage.itemSix.tips") }}</div>
      </div>
      <div class="flex justify-between item-list">
        <div class="item">
          <img
            src="../assets/images/home/2022-9-3/Snipaste_2022-09-05_14-36-44.png"
            class="item-icon"
          />
          <div class="item-title">
            {{ $t("homepage.itemSix.item_2.title") }}
          </div>
          <div v-if="lang.isLangZh">
            <div class="item-tips">{{ $t("homepage.itemSix.item_2.tips") }}</div>
            <div class="item-tips">{{ $t("homepage.itemSix.item_2.tipsone") }}</div>
          </div>
          <div v-else class="item-tips"
            >依托自营专线及合作的国际快递，我们可以为你提供全球范围内的国际运输服务。</div
          >
        </div>

        <div class="item">
          <img
            src="../assets/images/home/2022-9-3/Snipaste_2022-09-05_14-34-16.png"
            class="item-icon"
          />
          <div class="item-title">
            {{ $t("homepage.itemSix.item_1.title") }}
          </div>
          <div v-if="lang.isLangZh">
            <div class="item-tips">{{ $t("homepage.itemSix.item_1.tips") }}</div>
            <div class="item-tips">{{ $t("homepage.itemSix.item_1.tipsone") }}</div>
          </div>
          <div v-else class="item-tips"
            >作为你的全球b2c物流供应商，你便可为你的顾客提供更专业的物流解决方案！尽我们所能，使你不再为物流而担忧。</div
          >
        </div>

        <div class="item">
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
  <div class="home-item-four">
    <div class="max-w-screen-xl text-center margin-auto in">
      <h1>{{ $t("homepage.itemFour.title") }}</h1>
      <p class="tips">{{ $t("homepage.itemFour.tips") }}</p>
      <div class="flex detail-info">
        <div><span></span>{{ $t("homepage.itemFour.itemDetail.1") }}</div>
        <div><span></span>{{ $t("homepage.itemFour.itemDetail.2") }}</div>
        <div><span></span>{{ $t("homepage.itemFour.itemDetail.3") }}</div>
      </div>
      <el-popover v-if="lang.isLangEn" placement="top" :width="220" trigger="click">
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
    img {
      width: 100%;
    }
  }

  .home-item-five {
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
    }
  }

  .home-item-one {
    height: 825px;
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

      div {
        padding: 34px 0 32px 0;
        line-height: 24px;
        font-size: 16px;
      }
    }

    .item-list {
      .item-list-i {
        width: 380px;
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
          width: 370px;
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
    background: rgba(255, 243, 217, 0.28);

    .left {
      color: #000000;
      height: 576px;
      background: #ffffff;
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

        p {
          width: 582px;
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

  .home-item-four {
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

  .data-detail {
    background: rgba(238, 241, 241, 0.92);

    .item-list {
      margin-top: 60px;

      .item {
        width: 339px;
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
</style>
