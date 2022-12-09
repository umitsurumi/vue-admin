<template>
  <nav class="nav">
    <NavTools />
    <BreadCrumbs />
  </nav>
</template>

<script setup>
import NavTools from "./NavTools.vue";
import BreadCrumbs from "./BreadCrumbs.vue";
</script>

<style lang="scss" scoped>
.nav {
  @apply flex flex-col shadow-lg tablet:h-24;
  background-color: var(--color-light);
}
</style>
