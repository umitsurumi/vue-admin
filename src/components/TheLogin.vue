<template>
  <div class="login-card">
    <h1 class="text-center text-3xl my-6">用户登录</h1>
    <form action="post" name="login">
      <div class="login-input">
        <User class="w-6 h-6 mr-2 fill-current" />
        <input
          class="w-3/4 h-8 p-2 flex-grow focus:outline-none"
          placeholder="请输入用户名"
          type="text"
          v-model="form.username"
        />
      </div>
      <div class="login-input">
        <Hide
          class="w-6 h-6 mr-2 fill-current cursor-pointer"
          v-show="!isShow"
          @click="changeShow"
        />
        <View
          class="w-6 h-6 mr-2 fill-current cursor-pointer"
          v-show="isShow"
          @click="changeShow"
        />
        <input
          class="w-3/4 h-8 p-2 flex-grow focus:outline-none"
          placeholder="请输入密码"
          autocomplete
          :type="showPassword"
          v-model="form.password"
        />
      </div>
      <div class="w-4/5 mx-auto py-2 flex justify-center">
        <button type="button" class="login-btn" @click="login">登录</button>
        <button type="button" class="login-btn" @click="register">注册</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useAlertStore } from "@/stores/alertStore";

//登录成功通知
const alertStore = useAlertStore();

//存储表单信息
const form = ref({
  username: "",
  password: "",
});

//密码明文切换
const isShow = ref(0);
const showPassword = computed(() => {
  return isShow.value ? "text" : "password";
});
function changeShow() {
  isShow.value = !isShow.value;
}

//实现路由跳转，本地保存登录信息
const router = useRouter();
function login() {
  if (localStorage.getItem("register") === null) {
    alertStore.updateAlert(
      "请先注册",
      `输入信息点击注册\r\n用户名和密码不小于5位`,
      "error"
    );
    return false;
  }
  const register = localStorage.getItem("register");
  if (`${form.value.username} + ${form.value.password}` !== register) {
    alertStore.updateAlert(
      "登录失败",
      "请检测登录信息与注册信息是否匹配",
      "error"
    );
    return false;
  }
  localStorage.setItem(
    "user",
    JSON.stringify(form.value.username + form.value.password)
  );
  alertStore.updateAlert("登录成功", `用户${form.value.username}已登录！`);
  localStorage.setItem("userName", form.value.username);
  form.value.username = "";
  form.value.password = "";
  const redirect = localStorage.getItem("preRoute");
  if (redirect) {
    //如果redirect存在说明当前用户是进入某页面后未登陆自动跳转到登陆页面来的，所以登陆完成后得再次回跳到该地址
    router.push(redirect);
  } else {
    //否则跳转到默认的页面，首页或者其他页面
    router.push("/");
  }
}
function register() {
  if (form.value.username.length > 4 && form.value.password.length > 4) {
    localStorage.setItem(
      "register",
      `${form.value.username} + ${form.value.password}`
    );
    alertStore.updateAlert("注册成功", `用户${form.value.username}已录入！`);
    form.value.username = "";
    form.value.password = "";
  } else {
    alertStore.updateAlert("注册失败", `用户名和密码不小于5位`, "error");
    form.value.username = "";
    form.value.password = "";
  }
}
</script>
<style lang="scss" scoped>
.login-card {
  @apply w-2/3 h-80 max-w-2xl m-auto p-4 absolute inset-x-0 top-28 rounded-2xl shadow-xl;
  background-color: var(--color-base);
}

.login-input {
  @apply flex justify-between items-center w-4/5 mb-4 mx-auto p-2 shadow;
  input {
    background-color: var(--color-base);
  }
}
.login-btn {
  @apply mx-2 py-2 px-2 font-semibold rounded-lg shadow-md flex-grow tablet:mx-8 tablet:px-6;
  &:hover {
    color: var(--color-base);
    background-color: var(--color-hover);
  }
}
</style>
