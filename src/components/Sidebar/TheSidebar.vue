<template>
  <div class="sidebar">
    <ul
      class="h-screen transition-all duration-500"
      :class="triggerStore.showSidebar ? 'w-44' : 'w-16'"
    >
      <SidebarItem v-for="item in sidebarList" :item="item" :key="item.name">
        <component
          class="flex-shrink-0 w-6 h-6 mr-2 fill-current"
          :is="item.name"
        />
      </SidebarItem>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SidebarItem from "./SidebarItem.vue";
import { useTriggerStore } from "@/stores/triggerStore";

//点击展开|收起sidebar更改Ul宽度
const triggerStore = useTriggerStore();

const sidebarList = ref([
  { name: "HomeFilled", title: "首页", path: "/" },
  { name: "Avatar", title: "用户管理", path: "/users" },
  { name: "Management", title: "项目管理", path: "/projects" },
  { name: "Histogram", title: "图表统计", path: "/chart" },
  { name: "PictureFilled", title: "图片查看", path: "/image" },
  { name: "LocationFilled", title: "地图查看", path: "/map" },
]);
</script>

<style lang="scss" scoped>
.sidebar {
  background: linear-gradient(var(--color-light), var(--color-dark));
}
</style>
