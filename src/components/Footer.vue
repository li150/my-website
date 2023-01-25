<script setup>
  import { ref } from "vue";

  /**
   * footerList 底部数据
   */
  const footerList = ref([
    {
      id: "icp",
      icon: "safetyIcon",
      title: "icp",
      url: "https://beian.miit.gov.cn/",
    },
    {
      id: "bi",
      icon: "nameIcon",
      title: "bi",
    },
  ]);
  const isFlag = (id) => id === "bi";
  // 跳转链接
  const hanleGo = (url) => url && window.open(url);
</script>
<template>
  <div class="flex justify-center py-12 border-t footer">
    <div
      v-for="item in footerList"
      :key="item.id"
      class="flex items-center text-white"
      :class="{ 'lg:pl-12 md:pl-2': isFlag(item.id) }"
    >
      <!-- 图标 -->
      <!-- <nuxt-icon :name="item.icon" class="svgs" filled /> -->
      <div class="pl-2" :class="{ 'cursor-pointer': item.url }" @click="hanleGo(item.url)">{{
        $t(`footer.${item.title}`)
      }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  $define-base-bg: #332a00;
  .footer {
    background-color: $define-base-bg;
    font-size: 18px;

    .svgs {
      // 属性穿透
      :deep(svg) {
        margin-bottom: 0;
      }
    }
  }
</style>
