<script setup>
  import { ref, onMounted } from "vue";
  import useLang from "../store/modules/lang";

  const state = useLang();
  let currentHeight = ref(0); // 页面高度
  const isShowGoTop = ref(false); // 是否展示置顶按钮

  onMounted(() => {
    setTimeout(() => {
      currentHeight.value = document.body.clientHeight - window.innerHeight + 10;
    }, 100);

    // 监听宽度
    window.onresize = () => {
      state.clientWidth = document.body.clientWidth;
      currentHeight.value = document.body.clientHeight - window.innerHeight + 10;
    };

    // 监听滚动条高度
    window.onscroll = () => {
      //滚动的高度
      const moveHeight =
        document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
      if (state.clientWidth >= state.maxWidth) {
        isShowGoTop.value = moveHeight - 800 >= 0;
      } else {
        isShowGoTop.value = currentHeight.value / 2 - moveHeight <= 0;
      }
    };
  });

  //点击
  const clickItem = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 150);
  };
</script>
<template>
  <div class="right-plugin">
    <!-- 回到顶部按钮 -->
    <div v-show="isShowGoTop" class="flex item top" @click="clickItem">
      <img src="../assets/images/home/go-top.png" class="item-icon" />
      <div class="flex items-center hide">{{ $t("footer.top") }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .right-plugin {
    border-radius: 12px 0 0 12px;
    box-shadow: 0px 4px 14px 1px rgba(255, 224, 119, 0.34);
    filter: blur(undefinedpx);
    background: #ffffff;
    transition: all 0.4s;
    // padding-top: 12px;
    overflow: hidden;
    position: fixed;
    z-index: 100;
    right: 0;
    top: 60vh;
    user-select: none;

    .item {
      width: 151px;
      // padding-right: 30px;
      color: #333333;
      cursor: pointer;
      font-size: 16px;
      font-weight: 400;
      padding-left: 11px;
      // margin-bottom: 15px;
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
      // margin: 18px 0 0 0;
      background: #f9dc4d;
    }

    .el-backtop {
      position: relative;
      width: 160px;
      height: 48px;
      display: block;
    }
  }

  @media screen and (max-width: 1024px) {
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
