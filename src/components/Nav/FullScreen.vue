<template>
  <el-tooltip
    class="box-item"
    effect="dark"
    content="切换全屏"
    placement="bottom-end"
  >
    <FullScreen class="mr-4 w-6 h-6 cursor-pointer" @click="changeFullScreen" />
  </el-tooltip>
</template>

<script setup>
import { FullScreen } from "@element-plus/icons-vue";

let isFullScreen = false;
function changeFullScreen() {
  if (isFullScreen) {
    const func1 =
      document.exitFullscreen ||
      document.mozCancelFullScreen ||
      document.webkitCancelFullScreen ||
      document.msExitFullscreen;
    func1.call(document);
    isFullScreen = false;
  } else {
    const html = document.documentElement;
    const func2 =
      html.requestFullscreen ||
      html.mozRequestFullScreen ||
      html.webkitRequestFullScreen ||
      html.msRequestFullscreen;
    func2.call(html);
    isFullScreen = true;
  }
}
</script>

<style lang="scss" scoped></style>
