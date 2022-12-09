<template>
  <div
    class="relative text-left"
    @click.stop="() => (showDropdown = !showDropdown)"
  >
    <el-avatar
      class="mt-2 cursor-pointer"
      shape="square"
      :size="45"
      src="/src/assets/avatar.gif"
    />
    <div
      class="dropdownMenu"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
      v-if="showDropdown"
    >
      <div class="py-1" role="none">
        <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
        <a
          href="#"
          class="dropdownItem"
          role="menuitem"
          tabindex="-1"
          id="dropdown-item-0"
          >个人中心</a
        >
        <router-link
          to="/"
          class="dropdownItem"
          role="menuitem"
          tabindex="-1"
          id="dropdown-item-1"
          >回到首页
        </router-link>
      </div>
      <div class="py-1" role="none">
        <router-link
          to="/login"
          @click="logout"
          class="dropdownItem"
          role="menuitem"
          tabindex="-1"
          id="dropdown-item-2"
          >退出登录
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { RouterLink } from "vue-router";

function logout() {
  localStorage.removeItem("user");
}

//实现点击空白区域隐藏头像下拉菜单
const showDropdown = ref(false);
function avatarTrigger(event) {
  if (event !== null) {
    showDropdown.value = false;
  }
}
onMounted(() => {
  document.addEventListener("click", avatarTrigger);
});
onBeforeUnmount(() => {
  document.removeEventListener("click", avatarTrigger);
});
</script>

<style lang="scss" scoped>
.dropdownMenu {
  @apply absolute right-0 z-10 mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none;
  background-color: var(--color-base);
}
.dropdownItem {
  @apply block px-4 py-2 text-sm;
  &:hover {
    background-color: var(--color-dark);
  }
}
</style>
