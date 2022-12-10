<template>
  <div class="homeCard">
    <img class="w-14 h-14 rounded" src="/src/assets/avatar.gif" />
    <div class="text-center tablet:w-3/5">
      <h3>
        <span>{{ date.text1 }}</span
        >，
        <span>{{ date.userName }} </span>
        <span class="hidden tablet:inline">，{{ date.text2 }}！</span>
      </h3>
      <div class="flex justify-center">
        <p class="p-1 hidden tablet:block">今天是</p>
        <p class="py-1 hidden tablet:block">{{ date.year }}</p>
        <p class="p-1">{{ date.week }}</p>
        <p class="p-1">{{ date.time }}</p>
      </div>
    </div>
    <div class="flex justify-center w-full text-center tablet:w-auto">
      <div class="px-4">
        <h4>代办</h4>
        <p cl>
          <span>{{ todoStore.doneTodo }}</span>
          /<span>{{ todoStore.allTodo }}</span>
        </p>
      </div>
      <div class="px-4">
        <h4>项目</h4>
        <p>
          <span>{{ projectStore.projects.length }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onBeforeUnmount, watch } from "vue";
import { useTodoStore } from "@/stores/todoStore";
import { useProjectStore } from "@/stores/projectStore";
let timer;
onBeforeMount(() => {
  myClock();
  timer = setInterval(myClock, 1000);
});
onBeforeUnmount(() => {
  clearInterval(timer);
});
const date = ref({});
date.value.userName = localStorage.getItem("userName");
function format(i) {
  return i < 10 ? "0" + i : "" + i;
}
const week = {
  day0: "星期天",
  day1: "星期一",
  day2: "星期二",
  day3: "星期三",
  day4: "星期四",
  day5: "星期五",
  day6: "星期六",
};
const myClock = function () {
  const now = new Date();
  const hours = now.getHours();
  if (hours < 12 && hours >= 8) {
    date.value.text1 = "早上好";
    date.value.text2 = "开始您新的一天吧";
  } else if (12 <= hours && hours < 18) {
    date.value.text1 = "下午好";
    date.value.text2 = "请继续努力";
  } else {
    date.value.text1 = "下班了";
    date.value.text2 = "请注意休息";
  }
  const time = `${format(now.getHours())}:${format(now.getMinutes())}:${format(
    now.getSeconds()
  )}`;
  const year =
    format(now.getFullYear()) +
    "年" +
    format(now.getMonth() + 1) +
    "月" +
    format(now.getDate()) +
    "日";
  const weekend = week["day" + now.getDay()];
  date.value.year = year;
  date.value.week = weekend;
  date.value.time = time;
};
const todoStore = useTodoStore();
const projectStore = useProjectStore();
</script>

<style lang="scss" scoped>
.homeCard {
  @apply flex flex-col h-48 items-center justify-between w-full  p-4 shadow-md rounded-lg tablet:flex-row tablet:h-20;
  background: var(--color-light);
}
</style>
