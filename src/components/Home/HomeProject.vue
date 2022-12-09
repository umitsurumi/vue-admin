<template>
  <div class="homePorject">
    <div class="flex justify-between p-4 items-center w-full h-12 shadow">
      <h4>项目</h4>
      <RouterLink to="/projects">更多</RouterLink>
    </div>

    <ul class="flex flex-wrap w-full h-5/6">
      <li
        v-for="project in homeProjectArr"
        :key="project.id"
        class="w-1/2 h-1/3 p-4 shadow tablet:w-1/3 tablet:h-1/2 hover:shadow-2xl transition-all"
      >
        <a
          :href="project.url"
          class="w-full h-full flex flex-col justify-between"
        >
          <div class="flex items-center">
            <component
              :is="components[project.name]"
              class="w-10 h-10 mr-2 flex-shrink-0 tablet:mr-6"
            ></component>
            <h3 class="truncate">{{ project.name }}</h3>
          </div>
          <p class="truncate text-slate-400 hidden tablet:block">
            {{ project.description }}
          </p>
          <div class="flex justify-between text-slate-400 text-sm">
            <p class="hidden tablet:block">{{ project.leader }}</p>
            <p>{{ project.state }}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useProjectStore } from "@/stores/projectStore";
import { ref, watch } from "vue";
import Github from "../Icons/Github.vue";
import JavaScript from "../Icons/JavaScript.vue";
import CSS from "../Icons/CSS.vue";
import HTML from "../Icons/HTML.vue";
import React from "../Icons/React.vue";
import Vue from "../Icons/Vue.vue";

/*组件是通过变量引用而非字符串，使用is绑定动态组件有两种办法
    1.局部声明重新建立变量名和组件关系
    2.全局注册并挂载组件（如全局引入的elementIcon）*/
const components = {
  Github,
  JavaScript,
  CSS,
  HTML,
  React,
  Vue,
};

//项目数量少于等于6，显示全部项目，项目数量大于6，显示前六项
const projectStore = useProjectStore();
const homeProjectArr = ref(projectStore.projects.slice(0, 6));
watch(
  () => projectStore.projects.length,
  () => {
    if (projectStore.projects.length > 6) {
      for (let i = 0; i < 6; i++)
        homeProjectArr.value[i] = projectStore.projects[i];
    } else {
      homeProjectArr.value = projectStore.projects.slice();
    }
  }
);
</script>

<style lang="scss" scoped>
.homePorject {
  @apply flex flex-col justify-around w-full h-96 my-4 shadow-md rounded-lg;
  background: var(--color-light);
}
</style>
