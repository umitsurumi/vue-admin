<template>
  <h2 class="w-full h-12 px-4 mt-8 text-2xl">项目信息一览</h2>

  <table class="w-full h-full mx-auto text-center">
    <tr>
      <th class="w-32">项目名称</th>
      <th>项目描述</th>
      <th class="w-80">项目进度</th>
    </tr>
    <tr v-for="project in projectStore.projects" :key="project.id">
      <td>
        <a :href="project.url">{{ project.name }}</a>
      </td>
      <td>{{ project.description }}</td>
      <td class="w-80 px-2">
        <el-progress
          :text-inside="true"
          :stroke-width="20"
          :percentage="project.percentage"
          :status="project.type"
        />
      </td>
    </tr>
  </table>
</template>

<script setup>
import { useProjectStore } from "@/stores/projectStore";
const projectStore = useProjectStore();
</script>

<style lang="scss" scoped>
table {
  border-top: 1px solid;
  border-left: 1px solid;
  border-color: var(--color-dark);
  th,
  td {
    border-right: 1px solid;
    border-bottom: 1px solid;
    border-color: var(--color-dark);
  }
  td {
    height: 3rem;
  }
}
</style>
