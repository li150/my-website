<template>
  <div class="right-plugin">
    <div
      v-for="(item, ind) of list"
      v-show="!isZh"
      :key="ind"
      class="flex item hide"
      @click="clickItem(ind)"
    >
      <img :src="item.icon" class="item-icon" />
      <div class="hide">{{ item.name }}</div>
    </div>

    <div v-if="useData.$state.clientWidth > useData.$state.maxWidth && isZh">
      <el-popover
        v-for="(item, ind) of list"
        :key="ind + 'ss'"
        placement="left-start"
        :width="220"
        trigger="click"
      >
        <template #reference>
          <div class="flex item hide">
            <img :src="item.icon" class="item-icon" />
            <div class="hide">{{ item.name }}</div>
          </div>
        </template>
        <img :src="item.qrCode" style="width: 200px; height: 200px; display: block" />
      </el-popover>
    </div>

    <div v-if="useData.$state.clientWidth < useData.$state.maxWidth && !isZh" class="item">
      <picture>
        <source srcset="../assets/home/mobile-call.png" media="(min-width:992px)" />
        <img src="../assets/home/whatsapp@2x.png" class="item-icon" @click="clickItem(0)" />
      </picture>
    </div>

    <div v-if="useData.$state.clientWidth < useData.$state.maxWidth && isZh" class="item">
      <el-popover placement="left-start" :width="220" trigger="click">
        <template #reference>
          <img src="../assets/home/wechat.png" class="item-icon" />
        </template>
        <img
          src="../assets/home/wechat-qrcode.png"
          style="width: 200px; height: 200px; display: block"
        />
      </el-popover>
    </div>
    <div
      v-show="isShowGoTop"
      class="flex item top"
      :style="isZh ? 'margin:0' : ''"
      @click="clickItem(3)"
    >
      <img src="../assets/home/go-top.png" class="item-icon" />
      <div class="hide">{{ isZh ? "点击回顶部" : "Back to top" }}</div>
    </div>
  </div>
</template>

<script setup>
  import { unref, ref, onMounted, nextTick, computed, getCurrentInstance } from "vue";
  import { dataState } from "../utlis/status";
  import whatsapp from "../assets/home/whatsapp@2x(2).png";
  /**
   * 图片
   */
  import headerQqPng from "../assets/home/header-qq.png";
  import qqQrcode from "../assets/home/qq-qrcode.png";
  import wechatPng from "../assets/home/wechat.png";
  import wechatQrcodePng from "../assets/home/wechat-qrcode.png";

  const { proxy } = getCurrentInstance();
  const useData = dataState();
  let currentHeight = ref(0); // 页面高度
  const isShowGoTop = ref(false); // 是否展示置顶按钮
  const buttonRef = ref(null);
  const popoverRef = ref(null);

  const isZh = computed(() => (proxy.$i18n.locale === "zh" ? true : false));

  const list = computed(() => {
    if (isZh.value) {
      return [
        {
          name: "QQ",
          icon: headerQqPng,
          qrCode: qqQrcode,
        },
        {
          name: "微信",
          icon: wechatPng,
          qrCode: wechatQrcodePng,
        },
      ];
    }
    return [
      {
        name: "Whatsapp",
        // icon: new URL("../assets/home/whatsapp@2x(2).png", import.meta.url).href,
        icon: whatsapp,
      },
      // {
      //   name: "Facebook",
      //   icon: new URL(
      //     "../assets/home/facebook_facebook52 (3)@2x.png",
      //     import.meta.url
      //   ).href,
      // },
      // {
      //   name: "Youtube",
      //   icon: new URL("../assets/home/youtube-fill@2x.png", import.meta.url).href,
      // },
    ];
  });

  onMounted(() => {
    setTimeout(() => {
      currentHeight.value = document.body.clientHeight - window.innerHeight + 10;
    }, 100);

    // 监听宽度
    window.onresize = () => {
      useData.$state.clientWidth = document.body.clientWidth;
      currentHeight.value = document.body.clientHeight - window.innerHeight + 10;
    };

    // 监听滚动条高度
    window.onscroll = () => {
      //滚动的高度
      const moveHeight =
        document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
      if (useData.$state.clientWidth >= useData.$state.maxWidth) {
        isShowGoTop.value = moveHeight - 800 >= 0;
      } else {
        isShowGoTop.value = currentHeight.value / 2 - moveHeight <= 0;
      }
    };
  });

  //点击
  const clickItem = (ind) => {
    // console.log(window.screen)
    if (isZh.value && ind < 3) {
      return;
    }
    switch (ind) {
      case 0:
        let url = `https://wa.me/+8616676308682`;
        if (useData.$state.clientWidth < useData.$state.maxWidth) {
          url = "https://wa.me/message/PBTGMXFBQYE3B1";
        }
        window.open(url);
        break;
      case 1:
        window.open(`https://www.facebook.com/Junfeng-express-102734032523346`);
        break;
      case 2:
        window.open(`https://www.youtube.com/channel/UCbSLPg1Om-0Geodtv0FUsmA`);
        break;
      case 3:
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 150);
        console.log(document.body.scrollTop);
        break;
    }
  };

  const onClickOutside = () => {
    // unref(popoverRef).popperRef?.delayHide?.()
  };
</script>

<style scoped lang="scss">
  .right-plugin {
    border-radius: 12px 0 0 12px;
    box-shadow: 0px 4px 14px 1px rgba(255, 224, 119, 0.34);
    filter: blur(undefinedpx);
    background: #ffffff;
    transition: all 0.4s;
    padding-top: 12px;
    overflow: hidden;
    position: fixed;
    z-index: 100;
    right: 0;
    top: 70%;

    .item {
      width: 151px;
      // padding-right: 30px;
      color: #333333;
      cursor: pointer;
      font-size: 16px;
      font-weight: 400;
      padding-left: 11px;
      margin-bottom: 15px;
      transition: all 0.4s;
      box-sizing: border-box;
      font-family: PingFang SC-Regular, PingFang SC;

      &:hover {
        transform: scale(1.1);
      }
    }

    .item-icon {
      width: 38px;
      height: 38px;
      display: block;
      margin-right: 6px;
    }

    .top {
      padding-bottom: 5px;
      color: #ffffff;
      margin: 18px 0 0 0;
      background: #f9dc4d;
    }

    .el-backtop {
      position: relative;
      width: 160px;
      height: 48px;
      display: block;
    }
  }

  @media screen and (max-width: 992px) {
    .right-plugin {
      top: 60%;

      padding: 0;
      // width: 9.3333vw;
      // height: 31.7333vw;

      .hide {
        display: none;
      }

      .top {
        margin: 0;
      }

      .item {
        margin: 0;
        width: 20vw;
        height: 50%;
        padding: 1.8667vw 1.6vw;
        box-sizing: border-box;

        .item-icon {
          margin: 0 auto;
          width: 10.4vw;
          height: 10.4vw;
        }

        &:last-child .item-icon {
          width: 6vw;
          height: 6vw;
          padding: 0;
        }
      }
    }
  }
</style>
