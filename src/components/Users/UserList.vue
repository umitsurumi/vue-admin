<template>
  <UserForm v-show="triggerStore.showUserEditor" />
  <div class="flex items-center justify-between w-full h-12 px-4 mt-8">
    <h2 class="text-2xl">用户信息一览</h2>
    <div class="userTool flex">
      <input
        type="text"
        maxlength="4"
        v-model="searchKey"
        placeholder="输入姓名关键字，回车键查找"
        class="w-80 h-10 px-4 -mr-10 rounded-full shadow focus:outline-none"
        @keyup.enter="userStore.searchUser(searchKey)"
      />
      <Search
        class="userToolIcon mr-6 text-black rounded-r-full relative"
        @click="userStore.searchUser(searchKey)"
      />
      <Refresh
        class="userToolIcon rounded-full mr-6"
        @click="
          {
            userStore.searchUser('');
            searchKey = '';
          }
        "
      />
      <DocumentAdd
        class="userToolIcon rounded-full"
        @click="triggerStore.showUserEditor = true"
      />
    </div>
  </div>
  <table class="w-full h-full mx-auto text-center">
    <tr>
      <th class="w-16">
        <div class="flex items-center justify-center">
          <h4>姓名</h4>
          <div class="sortTool ml-1">
            <ArrowUp class="w-3 h-3 mb-1 hover:cursor-pointer" />
            <ArrowDown class="w-3 h-3 hover:cursor-pointer" />
          </div>
        </div>
      </th>
      <th class="w-12">性别</th>
      <th class="w-16">
        <div class="flex items-center justify-center">
          <h4>年龄</h4>
          <div class="sortTool ml-1">
            <ArrowUp class="w-3 h-3 mb-1 hover:cursor-pointer" />
            <ArrowDown class="w-3 h-3 hover:cursor-pointer" />
          </div>
        </div>
      </th>
      <th class="w-16">省市</th>
      <th>住址</th>
      <th class="w-28">电话</th>
      <th class="w-60">邮箱</th>
      <th class="w-20">编辑</th>
    </tr>
    <tr v-for="user in pageArr[nowPage - 1]" :key="user.id">
      <td class="w-16">{{ user.name }}</td>
      <td class="w-12">{{ user.gender }}</td>
      <td class="w-16">{{ user.age }}</td>
      <td class="w-16">{{ user.province }}</td>
      <td class="px-2 text-justify">{{ user.address }}</td>
      <td>{{ user.telephone }}</td>
      <td>{{ user.email }}</td>
      <td class="userEditBtn">
        <div class="hover:bg-blue-400" @click="editUserItem(user)">
          <Edit class="w-6 h-6" />
          <p>编辑</p>
        </div>
        <ConfirmBox
          :id="user.id"
          :methods="userStore.deleteUser"
          :message="`删除了用户${user.name}`"
          v-slot="slotProps"
        >
          <div class="hover:bg-red-400" @click="slotProps.confirmAlert">
            <Delete class="w-6 h-6" />
            <p>删除</p>
          </div>
        </ConfirmBox>
      </td>
    </tr>
  </table>
  <div class="userListFooter">
    <el-button
      @click="nowPage === 1 ? false : nowPage--"
      :disabled="nowPage === 1 ? true : false"
      >上一页</el-button
    >
    <a
      class="w-8 h-8 mx-2 text-center leading-8 rounded hover:cursor-pointer"
      :class="{ 'bg-blue-400 text-slate-50': nowPage === page }"
      v-for="page in pages"
      @click="nowPage = page"
      >{{ page }}
    </a>
    <el-button
      @click="nowPage === pageArr.length ? false : nowPage++"
      :disabled="nowPage === pageArr.length ? true : false"
    >
      下一页
    </el-button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useUserStore } from "@/stores/userStore";
import { useTriggerStore } from "@/stores/triggerStore";
import UserForm from "./UserForm.vue";
const userStore = useUserStore();
const triggerStore = useTriggerStore();

const maxUsers = 16;
const pageArr = ref([]);
const nowPage = ref(1);
const pages = computed(() => Math.ceil(userStore.users.length / maxUsers));
function pageUsers() {
  //const pages = Math.ceil(userStore.users.length / maxUsers);
  pageArr.value.length = 0;
  for (let i = 0; i < pages.value; i++) {
    const arr = userStore.users.slice(i * maxUsers, (i + 1) * maxUsers);
    pageArr.value.push(arr);
  }
  nowPage.value = 1;
}
onMounted(() => pageUsers());

function editUserItem(user) {
  triggerStore.showUserEditor = true;
  userStore.isEdit = true;
  userStore.newUser = user;
}

const searchKey = ref("");

watch(
  () => userStore.changed,
  () => {
    pageUsers();
    userStore.changed = false;
  }
);
</script>

<style lang="scss" scoped>
table {
  border-top: 1px solid;
  border-left: 1px solid;
  border-color: var(--color-dark);
  th {
    height: 3rem;
    .sortTool {
      display: none;
    }
    &:hover {
      .sortTool {
        display: block;
      }
    }
  }
  td {
    height: 5rem;
  }
  th,
  td {
    border-right: 1px solid;
    border-bottom: 1px solid;
    border-color: var(--color-dark);
  }
}

.userEditBtn {
  div {
    @apply flex justify-center m-1 py-1 rounded hover:cursor-pointer;
    &:hover {
      color: var(--color-base);
    }
  }
}
.userListFooter {
  @apply flex justify-center items-center mt-4;
  button {
    @apply w-16 h-8 rounded bg-transparent border-none;
    &:hover {
      color: var(--color-base);
      background-color: var(--color-hover);
    }
  }
}
.userTool {
  .userToolIcon {
    @apply w-10 h-10 p-2 hover:cursor-pointer hover:bg-slate-800 hover:text-slate-50;
  }
}
</style>
