<script setup></script>
<template>
  <img class="bannel" src="../assets/images/review/bannel.png" />
  <div class="max-w-screen-xl py-16 margin-auto">
    <h1>{{ $t("reviewpage.title") }}</h1>
    <div class="flex justify-between pt-12">
      <div class="item">
        <img class="top" src="../assets/images/review/top-icon.png" />
        <div class="title">{{ $t("reviewpage.itemOne.title") }}</div>
        <div class="label">{{ $t("reviewpage.itemOne.label") }}</div>
        <div class="bottom">{{ $t("reviewpage.itemOne.bottom") }}</div>
      </div>
      <div class="item">
        <img class="top" src="../assets/images/review/top-icon.png" />
        <div class="title">{{ $t("reviewpage.itemTwo.title") }}</div>
        <div class="label">
          {{ $t("reviewpage.itemTwo.label") }}
        </div>
        <div class="bottom">{{ $t("reviewpage.itemTwo.bottom") }}</div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .bannel {
    width: 100%;
    display: block;
  }

  h1 {
    font-size: 45px;
    font-weight: 800;
    color: #000000;
    text-align: center;
  }

  .item {
    flex-basis: 47%;
    height: 384px;
    color: #202020;
    font-size: 16px;
    font-weight: 400;
    line-height: 36px;
    box-sizing: border-box;
    padding: 26px 32px 36px 32px;
    box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.16);

    .top {
      display: block;
      width: 152px;
      height: 8px;
    }

    .title {
      font-size: 22px;
      font-weight: bold;
      line-height: 42px;
    }

    .label {
      padding: 25px 0 107px 0;
      height: 65px;
    }
  }
</style>
