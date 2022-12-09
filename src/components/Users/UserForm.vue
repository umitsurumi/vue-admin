<template>
  <div id="userForm">
    <form
      class="flex flex-col justify-around absolute inset-0 m-auto w-2/3 h-2/3 px-6 pt-6 rounded-2xl shadow-2xl items-center"
    >
      <h1 class="text-2xl pb-2">编辑用户信息</h1>
      <div class="flex w-5/6">
        <div class="flex w-2/3 my-4 mr-8">
          <div class="flex"><User class="w-6 h-6" />姓名：</div>
          <input
            type="text"
            name="name"
            class="w-36"
            v-model="userStore.newUser.name"
          />
        </div>
        <div class="flex w-2/3 my-4">
          <div class="flex"><Calendar class="w-6 h-6" />年龄：</div>
          <input
            type="text"
            name="age"
            maxlength="3"
            class="w-12"
            v-model="userStore.newUser.age"
          />
        </div>
      </div>
      <div class="flex w-5/6">
        <div class="flex w-2/3 my-4 mr-8">
          <div class="flex"><Gender class="w-6 h-6" />性别：</div>
          <Male class="w-6 h-6" />男<input
            type="radio"
            name="gender"
            value="男"
            v-model="userStore.newUser.gender"
            :checked="userStore.newUser.gender === '男' ? true : false"
          />
          <Female class="ml-2 w-6 h-6" />女<input
            type="radio"
            name="gender"
            value="女"
            v-model="userStore.newUser.gender"
            :checked="userStore.newUser.gender === '女' ? true : false"
          />
          <Rainbow class="ml-2 w-6 h-6" />其他<input
            type="radio"
            name="gender"
            value="其他"
            v-model="userStore.newUser.gender"
            :checked="userStore.newUser.gender === '其他' ? true : false"
          />
        </div>
        <div class="flex w-2/3 my-4">
          <div class="flex"><MapLocation class="w-6 h-6" />省市：</div>
          <select name="province" v-model="userStore.newUser.province">
            <option disabled value="">省市</option>
            <option>河北省</option>
            <option>山西省</option>
            <option>辽宁省</option>
            <option>吉林省</option>
            <option>黑龙江省</option>
            <option>江苏省</option>
            <option>浙江省</option>
            <option>安徽省</option>
            <option>福建省</option>
            <option>江西省</option>
            <option>山东省</option>
            <option>河南省</option>
            <option>湖北省</option>
            <option>湖南省</option>
            <option>广东省</option>
            <option>海南省</option>
            <option>四川省</option>
            <option>贵州省</option>
            <option>云南省</option>
            <option>陕西省</option>
            <option>甘肃省</option>
            <option>青海省</option>
            <option>台湾省</option>
            <option>内蒙古自治区</option>
            <option>广西壮族自治区</option>
            <option>西藏自治区</option>
            <option>宁夏回族自治区</option>
            <option>新疆维吾尔自治区</option>
            <option>北京市</option>
            <option>天津市</option>
            <option>上海市</option>
            <option>重庆市</option>
            <option>香港特别行政区</option>
            <option>澳门特别行政区</option>
          </select>
        </div>
      </div>

      <div class="flex w-5/6 my-4">
        <div class="flex"><OfficeBuilding class="w-6 h-6" />详细住址：</div>
        <input type="text" name="address" v-model="userStore.newUser.address" />
      </div>
      <div class="flex w-5/6 my-4">
        <div class="flex"><Phone class="w-6 h-6" />电话号码：</div>
        <input
          type="text"
          name="telephone"
          v-model="userStore.newUser.telephone"
        />
      </div>
      <div class="flex w-5/6 my-4">
        <div class="flex"><Message class="w-6 h-6" />电子邮箱：</div>
        <input type="text" name="email" v-model="userStore.newUser.email" />
      </div>
      <div class="flex justify-center items-center w-full mx-auto py-4">
        <button
          type="button"
          class="w-16 h-8 mr-4 rounded"
          @click="editUserInfo"
        >
          确认
        </button>
        <button type="button" class="w-16 h-8 rounded" @click="cancelEdit">
          取消
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useUserStore } from "@/stores/userStore";
import { useTriggerStore } from "@/stores/triggerStore";
import { useAlertStore } from "@/stores/alertStore";
import { v4 as uuidv4 } from "uuid";
import {
  User,
  Female,
  Male,
  Calendar,
  MapLocation,
  Phone,
  OfficeBuilding,
  Message,
} from "@element-plus/icons-vue";
import Rainbow from "../Icons/Rainbow.vue";
import Gender from "../Icons/Gender.vue";

const userStore = useUserStore();
const triggerStore = useTriggerStore();
const alertStore = useAlertStore();
const oldUserData = ref({});
function editUserInfo() {
  if (userStore.isEdit) {
    alertStore.updateAlert(
      "修改成功",
      `修改了用户${userStore.newUser.name}的信息`
    );
  } else {
    alertStore.updateAlert("添加成功", `添加了新用户${userStore.newUser.name}`);
  }
  userStore.addUser();
  triggerStore.showUserEditor = false;
}
function cancelEdit() {
  for (let key in oldUserData.value) {
    userStore.newUser[key] = oldUserData.value[key];
  }
  alertStore.updateAlert("取消操作", "用户信息未作保存", "warning");
  userStore.newUser = {};
  userStore.newUser.id = uuidv4();
  userStore.isEdit = false;
  triggerStore.showUserEditor = false;
}

watch(
  () => triggerStore.showUserEditor,
  () => {
    if (triggerStore.showUserEditor) {
      oldUserData.value = Object.assign({}, userStore.newUser);
    }
  }
);
</script>

<style lang="scss" scoped>
#userForm {
  @apply fixed top-0 left-0 w-screen h-screen bg-slate-800 bg-opacity-40 z-50;
  min-width: 720px;
  min-height: 500px;
  form {
    min-width: 700px;
    min-height: 480px;
    background-color: var(--color-normal);
    input:focus {
      outline-color: #569eff;
    }
    input[type="radio"]:hover {
      cursor: pointer;
    }
    select:hover {
      cursor: pointer;
    }
    button:hover {
      color: var(--color-base);
      background-color: var(--color-hover);
    }
    h1 {
      width: 100%;
      text-align: center;
      border-bottom: 2px dashed black;
    }
    & > div:last-child {
      border-top: 2px dashed black;
    }
  }
}
</style>
