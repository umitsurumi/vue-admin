<template>
  <div class="themeToggle">
    <MagicStick class="h-6 w-6 cursor-pointer mx-auto" />
    <ul class="hidden mt-2">
      <li class="hover:bg-gray-200 hover:text-black" @click="changeTheme('')">
        浅色
      </li>
      <li
        class="hover:bg-gray-900 hover:text-gray-50"
        @click="changeTheme('dark', $event)"
      >
        深色
      </li>
      <li
        class="hover:bg-blue-300 hover:text-blue-100"
        @click="changeTheme('blue', $event)"
      >
        蓝色
      </li>
      <li
        class="hover:bg-green-300 hover:text-green-100"
        @click="changeTheme('green', $event)"
      >
        绿色
      </li>
      <li
        class="hover:bg-red-300 hover:text-red-100"
        @click="changeTheme('red', $event)"
      >
        红色
      </li>
    </ul>
  </div>
</template>

<script setup>
import { MagicStick } from "@element-plus/icons-vue";
import { useAlertStore } from "@/stores/alertStore";
const alertStore = useAlertStore();
function changeTheme(theme, e) {
  const html = document.documentElement;
  if (!theme) {
    alertStore.updateAlert("切换成功", "现在为浅色主题");
    html.removeAttribute("data-theme");
  } else {
    alertStore.updateAlert(
      "切换成功",
      `现在为${e.target.innerHTML.trim()}主题`
    );
    html.setAttribute("data-theme", theme);
  }
}
</script>

<style lang="scss" scoped>
.themeToggle {
  @apply absolute right-20 w-16 z-50;
  top: calc(50% - 12px);
  &:hover ul {
    @apply rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hover:cursor-pointer;
    display: block;
    background-color: var(--color-base);
    li {
      @apply p-1 text-center;
    }
  }
}
</style>
