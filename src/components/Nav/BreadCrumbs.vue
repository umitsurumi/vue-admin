<template>
  <div class="hidden items-center pl-2 h-10 tablet:flex">
    <button
      class="routerButton"
      :class="route.isCurrentRoute ? 'routerActive' : ''"
      v-for="route in routerArr"
      :key="route.name"
      @click="router.push(route.path)"
    >
      {{ route.name }}
    </button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
const routerArr = ref([{ name: "首页", path: "/", isCurrentRoute: true }]);
const router = useRouter();
watch(
  () => router.currentRoute.value.fullPath,
  () => {
    let current = router.currentRoute.value;
    if (current.path === "/login") {
      return false;
    }
    routerArr.value.forEach((item) => (item.isCurrentRoute = false));
    for (let i = 0; i < routerArr.value.length; i++) {
      if (routerArr.value[i].path === current.fullPath) {
        routerArr.value[i].isCurrentRoute = true;
        return false;
      }
    }
    routerArr.value.push({
      name: current.name,
      path: current.fullPath,
      isCurrentRoute: true,
    });
  }
);
</script>

<style lang="scss" scoped>
.routerButton {
  @apply w-auto h-8 px-2 mx-1 rounded-lg border-solid shadow;
  &:hover {
    color: (--color-light);
    background-color: var(--color-dark);
  }
}
.routerActive {
  color: var(--color-base);
  background-color: var(--color-hover);
  &:hover {
    background-color: var(--color-hover);
  }
}
</style>
