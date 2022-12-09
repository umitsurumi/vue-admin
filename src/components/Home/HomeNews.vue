<template>
  <div class="newsCard">
    <div class="newsList">
      <div class="flex items-center justify-between w-full h-16">
        <h3>动态</h3>
        <Bell class="w-6 h-6 hover:cursor-pointer" />
      </div>
      <ul class="w-full h-80">
        <li
          v-for="i in 6"
          class="flex items-center w-full h-12 my-2 border-stone-300 border-t-2"
        >
          <img src="@/assets/avatar.gif" class="w-10 h-10 rounded-full" />
          <div class="ml-4">
            <h4><span class="font-bold mr-1">Admin</span>发布了一条公告</h4>
            <p class="text-sm text-slate-500">三天前</p>
          </div>
        </li>
      </ul>
      <div class="newsCardFooter">
        <button>上一页</button>
        <a>1</a>
        <a>2</a>
        <a>3</a>
        <a>...</a>
        <a>10</a>
        <button>下一页</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.newsCard {
  @apply w-full my-4;
  height: 30rem;
  .newsList {
    @apply shadow-lg px-4 rounded-md relative;
    width: 94%;
    height: 94%;
    background-color: var(--color-normal);
    transform-style: preserve-3d;
    &::after,
    &::before {
      @apply w-full h-full shadow-lg rounded-md absolute block;
      content: "";
      background-color: var(--color-normal);
    }
    &::before {
      top: 3%;
      left: 3%;
      transform: translateZ(-1px);
    }
    &::after {
      top: 6%;
      left: 6%;
      transform: translateZ(-2px);
    }
  }
}
.newsCardFooter {
  @apply flex justify-between items-center w-full pt-2 px-4 h-16;
  button {
    @apply w-12;
  }
  a {
    @apply hover:cursor-pointer;
  }
}
</style>
