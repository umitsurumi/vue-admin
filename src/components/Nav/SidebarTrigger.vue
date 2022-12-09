<template>
  <el-tooltip
    class="box-item"
    effect="dark"
    content="展开边栏"
    placement="bottom-start"
    :disabled="triggerStore.showSidebar"
  >
    <Fold
      class="w-6 h-6 fill-current hover:cursor-pointer"
      @click="trigger"
      v-if="triggerStore.showSidebar"
    />
    <Expand
      class="w-6 h-6 fill-current hover:cursor-pointer"
      @click="trigger"
      v-else
    />
  </el-tooltip>
</template>

<script setup>
import { Fold, Expand } from "@element-plus/icons-vue";
import { useTriggerStore } from "@/stores/triggerStore";

//点击展开|收起sidebar
const triggerStore = useTriggerStore();
function trigger() {
  triggerStore.showSidebar = !triggerStore.showSidebar;
}
</script>

<style lang="scss" scoped></style>
