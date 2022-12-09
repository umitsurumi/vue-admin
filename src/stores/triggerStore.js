import { ref } from "vue";
import { defineStore } from "pinia";

//触发器，用于元素切换显示
export const useTriggerStore = defineStore("triggerStore", () => {
  const showSidebar = ref(false);
  const showUserEditor = ref(false);
  return { showSidebar, showUserEditor };
});
