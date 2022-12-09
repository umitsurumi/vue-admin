<template>
  <div class="w-full h-full m-auto py-8">
    <div class="imageFrame">
      <img class="border-8 border-stone-50 shadow-2xl" :src="currentImage" />
    </div>
  </div>
  <div class="flex justify-center w-5/6 h-40 mx-auto my-8">
    <ul class="flex items-center">
      <li>
        <ArrowLeftBold class="w-6 h-6 mr-2 hover:cursor-pointer" @click="pre" />
      </li>
      <li v-for="image in imageArr">
        <img
          :src="image"
          class="w-40 h-28 border-4 border-stone-50 shadow-lg hover:cursor-pointer hover:shadow-2xl"
        />
      </li>
      <li>
        <ArrowRightBold
          class="w-6 h-6 ml-2 hover:cursor-pointer"
          @click="next"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
const imageArr = ref([
  "https://cdn.staticaly.com/gh/umitsurumi/image-hosting@master/cover/IMG_20180822_211547.j2i9nqucnsw.webp",
  "https://cdn.staticaly.com/gh/umitsurumi/image-hosting@master/cover/IMG_20180806_184453.re8cip0sgy8.webp",
  "https://cdn.staticaly.com/gh/umitsurumi/image-hosting@master/cover/63043878_p0.3d6uvxtyf0o0.webp",
  "https://cdn.staticaly.com/gh/umitsurumi/image-hosting@master/cover/62154505_p0.3oe5zu2aj9y0.webp",
  "https://cdn.staticaly.com/gh/umitsurumi/image-hosting@master/cover/58419066_p0.6y7ekyb5aj40.webp",
]);
const currentImage = ref(imageArr.value[0]);
let i = 0;
setInterval(() => {
  if (i >= 5) {
    i = 1;
  } else {
    i++;
  }
  currentImage.value = imageArr.value[i % 5];
}, 5000);
function pre() {
  if (i === 0) {
    i = 4;
  } else {
    i--;
  }
  currentImage.value = imageArr.value[i % 5];
}
function next() {
  i++;
  currentImage.value = imageArr.value[i % 5];
}
</script>

<style lang="scss" scoped>
.imageFrame {
  @apply m-auto;
  width: 900px;
  height: 600px;
  transform-style: preserve-3d;
  &::after,
  &::before {
    @apply border-8 border-stone-50 shadow-2xl absolute block;
    width: 900px;
    height: 600px;
    content: "";
  }
  &::before {
    top: 1.5%;
    left: 1%;
    transform: translateZ(-1px);
  }
  &::after {
    top: 3%;
    left: 2%;
    transform: translateZ(-2px);
  }
  img {
    width: 900px;
    height: 600px;
    object-fit: cover;
  }
}
</style>
