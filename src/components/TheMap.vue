<template>
  <div id="mapsContainer">
    <div id="container" class="w-full h-full"></div>
  </div>
</template>

<script setup>
import AMapLoader from "@amap/amap-jsapi-loader";
import { shallowRef, onMounted } from "vue";

const map = shallowRef(null);
function initMap() {
  AMapLoader.load({
    key: "30617dd055e20a38d6ae47aa5523dcda", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [""], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
    .then((AMap) => {
      map.value = new AMap.Map("container", {
        //设置地图容器id
        viewMode: "3D", //是否为3D地图模式
        zoom: 11, //初始化地图级别
        center: [121.495260416619, 31.24194635], //初始化地图中心点位置
      });
    })
    .catch((e) => {
      console.log(e);
    });
}
onMounted(() => initMap());
</script>

<style lang="scss" scoped>
#mapsContainer {
  @apply shadow-2xl;
  height: calc(100vh - 112px);
}
</style>
