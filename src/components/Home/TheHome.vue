<template>
  <ul class="flex flex-wrap w-full h-80 my-8 laptop:flex-nowrap laptop:h-40">
    <HomeItem
      v-for="homeItem in homeList"
      :item="homeItem"
      :key="homeItem.name"
    >
      <component class="homeIcon" :is="homeItem.name" :class="homeItem.color" />
    </HomeItem>
  </ul>
  <div class="flex flex-col justify-between w-full px-4 laptop:flex-row">
    <div class="w-full laptop:w-2/3">
      <HomeCard />
      <HomeProject />
      <HomeCharts />
    </div>
    <div class="w-full my-4 laptop:w-1/3 laptop:ml-4 laptop:my-0">
      <HomeTodos />
      <HomeNews />
    </div>
  </div>
</template>

<script setup>
import HomeItem from "./HomeItem.vue";
import HomeCard from "./HomeCard.vue";
import HomeProject from "./HomeProject.vue";
import HomeCharts from "./HomeCharts.vue";
import HomeTodos from "./HomeTodos.vue";
import HomeNews from "./HomeNews.vue";
import { ref } from "vue";
const homeList = ref([
  {
    name: "StarFilled",
    title: "用户",
    description: "11,451",
    color: "text-yellow-400",
  },
  {
    name: "Comment",
    title: "消息",
    description: "147",
    color: "text-blue-500",
  },
  {
    name: "TrendCharts",
    title: "销量",
    description: "214,587",
    color: "text-red-400",
  },
  {
    name: "GoodsFilled",
    title: "商品",
    description: "191,981",
    color: "text-green-600",
  },
]);
</script>

<style lang="scss" scoped>
.homeIcon {
  @apply flex-grow w-24 h-24 p-2  tablet:flex-grow-0 rounded-2xl;
}
</style>
