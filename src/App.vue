<template>
  <ConfirmBox />
  <Transition name="el-alert">
    <el-alert
      show-icon
      v-show="alertStore.isShowAlert"
      :title="alertStore.title"
      :type="alertStore.type"
      :description="alertStore.description"
    />
  </Transition>
  <TheSidebar v-show="isShowMenu" />
  <div id="main">
    <TheNav v-show="isShowMenu" />
    <div class="m-2">
      <RouterView />
    </div>
  </div>
  <Top
    class="fixed bottom-4 right-4 w-10 h-10 px-2 z-50 rounded-full bg-slate-600 text-zinc-200 hover:cursor-pointer"
    v-show="isShowToTop"
    @click="toTop"
  />
</template>

<script setup>
import { RouterView, useRoute } from "vue-router";
import { ref, watch } from "vue";
import { useAlertStore } from "@/stores/alertStore";

import TheSidebar from "./components/Sidebar/TheSidebar.vue";
import TheNav from "./components/Nav/TheNav.vue";
import ConfirmBox from "./components/ConfirmBox.vue";

//根据路由显示sidebar和nav
const isShowMenu = ref(false);
const route = useRoute();
watch(
  () => route.meta,
  () => {
    isShowMenu.value = route.meta.notShowMenu ? false : true;
  },
  { deep: true }
);

//回到顶部按钮
const isShowToTop = ref(false);
window.addEventListener("scroll", () => {
  if (scrollY > 100) {
    isShowToTop.value = true;
  } else {
    isShowToTop.value = false;
  }
});
function toTop() {
  scrollTo(scrollX, 0);
}

//显示操作通知，alertStore定时器实现1.5s后消失
const alertStore = useAlertStore();
</script>

<style lang="scss" scoped>
#main {
  flex: auto;
  background: linear-gradient(var(--color-base), var(--color-normal));
}
.el-alert {
  @apply w-80 h-20 absolute inset-x-0 mx-auto;
  z-index: 999;
}
.el-alert-enter-active,
.el-alert-leave-active {
  transition: all 0.3s linear;
}

.el-alert-enter-from,
.el-alert-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
