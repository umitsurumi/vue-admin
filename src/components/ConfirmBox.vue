<template>
  <slot :confirmAlert="confirmAlert"></slot>
  <div class="confirmInfo" v-if="isShowConfirm">
    <div class="confirmBox">
      <WarnTriangleFilled class="w-20 h-20 m-auto" />
      <p class="my-2">是否确认删除？</p>
      <button value="yes" id="confirmYes">确认</button>
      <button value="no" id="confirmNo">取消</button>
    </div>
  </div>
</template>
<script setup>
import { ref, nextTick } from "vue";
import { useAlertStore } from "@/stores/alertStore";
const isShowConfirm = ref(false);
const alertStore = useAlertStore();
const props = defineProps({
  id: String,
  message: String,
  methods: Function,
});
function confirmAlert() {
  return new Promise((res, rej) => {
    isShowConfirm.value = true;
    nextTick(() => {
      document.getElementById("confirmYes").onclick = res;
      document.getElementById("confirmNo").onclick = rej;
      document.querySelector(".confirmInfo").classList.add("bg-slate-800");
    });
  })
    .then(() => {
      props.methods(props.id);
      alertStore.updateAlert("操作成功", props.message);
      isShowConfirm.value = false;
      document.querySelector(".confirmInfo").classList.remove("bg-slate-800");
    })
    .catch(() => {
      alertStore.updateAlert("取消操作", "取消了删除操作", "info");
      isShowConfirm.value = false;
      document.querySelector(".confirmInfo").classList.remove("bg-slate-800");
    });
}
</script>

<style lang="scss" scoped>
.confirmInfo {
  @apply fixed inset-0 flex justify-center items-center w-screen h-screen bg-opacity-40;
  z-index: 1;
  .confirmBox {
    @apply w-60 h-40 rounded-lg text-center;
    background-color: var(--color-base);
    button {
      @apply p-1 mx-2 rounded hover:bg-red-600 hover:text-zinc-50;
      background-color: var(--color-dark);
    }
  }
}
</style>
