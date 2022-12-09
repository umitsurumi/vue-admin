<template>
  <li class="w-1/2 h-1/2 p-4 laptop:h-full">
    <div class="homeCard">
      <slot></slot>
      <div
        class="hidden flex-col flex-grow justify-center mx-8 h-4/5 w-1/4 tablet:flex laptop:flex-grow-0"
      >
        <h3 class="mb-4 text-2xl">{{ item.title }}</h3>
        <p class="text-xl">{{ item.description }}</p>
      </div>
    </div>
  </li>
</template>

<script setup>
const props = defineProps({
  item: Object,
});
</script>

<style lang="scss" scoped>
.homeCard {
  @apply w-full h-full flex justify-between items-center border rounded-3xl shadow-md hover:cursor-pointer;
  border: var(--color-dark);
  background: linear-gradient(var(--color-normal), var(--color-light));
}
</style>
