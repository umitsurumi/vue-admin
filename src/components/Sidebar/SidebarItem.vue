<template>
  <div class="tooltip-base-box">
    <el-tooltip
      class="box-item"
      effect="dark"
      :content="item.title"
      placement="left"
      :disabled="triggerStore.showSidebar"
    >
      <li class="sidebarItem" @click="router.push(item.path)">
        <slot></slot>
        <Transition>
          <p class="delay-400" v-if="triggerStore.showSidebar">
            {{ item.title }}
          </p>
        </Transition>
      </li>
    </el-tooltip>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { useTriggerStore } from "@/stores/triggerStore";

//点击展开|收起sidebar文字栏
const triggerStore = useTriggerStore();

const router = useRouter();
const props = defineProps({
  item: Object,
});
</script>

<style lang="scss" scoped>
.sidebarItem {
  @apply flex items-center h-14 py-4 px-4 hover:cursor-pointer;
  &:hover {
    color: var(--color-base);
    background-color: var(--color-hover);
    cursor: pointer;
  }
}
.v-enter-active {
  transition: opacity 0.2s ease 0.2s;
}

.v-enter-from {
  opacity: 0;
}
.tooltip-base-box {
  align-items: center;
  justify-content: space-between;
  .box-item {
    width: 110px;
    margin-top: 10px;
  }
}
</style>
