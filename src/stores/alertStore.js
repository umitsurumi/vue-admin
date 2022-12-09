import { ref } from "vue";
import { defineStore } from "pinia";

export const useAlertStore = defineStore("alertStore", () => {
  const title = ref("success alert");
  const description = ref("more text description");
  const type = ref("success");
  const isShowAlert = ref(false);
  // const isShowConfirm = ref(false);
  // const methods = ref();
  // const methodParas = ref();
  function updateAlert(titleText, descriptionText, typeText = "success") {
    title.value = titleText;
    description.value = descriptionText;
    type.value = typeText;
    isShowAlert.value = true;
    setTimeout(() => {
      isShowAlert.value = false;
    }, 1500);
  }
  // function confirmAlert() {
  //   return new Promise((res, rej) => {
  //     this.isShowConfirm = true;
  //     nextTick(() => {
  //       document.getElementById("confirmYes").onclick = res;
  //       document.getElementById("confirmNo").onclick = rej;
  //     });
  //   })
  //     .then(() => {
  //       this.methods(this.methodParas);
  //       this.updateAlert("操作成功！", "");
  //       this.isShowConfirm = false;
  //     })
  //     .catch(() => {
  //       this.updateAlert("取消操作", "", "info");
  //       this.isShowConfirm = false;
  //     });
  // }
  return {
    title,
    description,
    type,
    isShowAlert,
    updateAlert,
    // isShowConfirm,
    // methods,
    // methodParas,
    // confirmAlert,
  };
});
