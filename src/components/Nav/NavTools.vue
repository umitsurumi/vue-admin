<template>
  <div class="navTools">
    <div class="flex">
      <SidebarTrigger />
      <p class="hidden ml-4 tablet:block">
        <span>首页</span>
        <span class="mx-2">/</span>
        <span>{{ $router.currentRoute.value.name }}</span>
      </p>
    </div>
    <div class="flex items-center h-full relative">
      <ThemeToggle />
      <FullScreen />
      <UserAvatar />
    </div>
  </div>
</template>

<script setup>
import SidebarTrigger from "./SidebarTrigger.vue";
import ThemeToggle from "./ThemeToggle.vue";
import FullScreen from "./FullScreen.vue";
import UserAvatar from "./UserAvatar.vue";
</script>

<style lang="scss" scoped>
.navTools {
  @apply flex items-center justify-between h-14 p-2 shadow;
  background: linear-gradient(var(--color-base), var(--color-light));
  border-bottom: 1px solid;
  border-color: var(--color-base);
}
</style>
