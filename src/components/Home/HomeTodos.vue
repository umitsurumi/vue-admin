<template>
  <div class="todoCard">
    <div class="px-2 pt-2">
      <input
        maxlength="10"
        class="w-full p-2 shadow text-black"
        type="text"
        v-model="newTodo"
        placeholder="输入待办事项，回车键确认"
        @keyup.enter="addTodoItem"
      />
      <button class="addButton" @click="addTodoItem">添加</button>
    </div>
    <div
      class="flex flex-col justify-around mx-auto w-5/6 h-60 text-center"
      v-show="!todoStore.allTodo"
    >
      <h4>暂无待办事项</h4>
      <MessageBox class="h-1/3 w-1/3 mx-auto" />
    </div>
    <ul v-show="todoStore.allTodo">
      <TransitionGroup name="todoList">
        <li
          class="flex justify-between items-center px-4 h-10"
          v-for="todo in todoStore.todoArr"
          :key="todo.id"
        >
          <div class="flex innerText">
            <input
              class="hover:cursor-pointer mr-2"
              type="checkbox"
              :checked="todo.done"
              @click="todoStore.checkTodo(todo.id)"
            />
            <input
              maxlength="10"
              type="text"
              :id="todo.id"
              v-model="todo.value"
              v-show="todo.isEditing"
              @blur="endEdit(todo)"
            />
            <p v-show="!todo.isEditing">{{ todo.value }}</p>
          </div>
          <div class="flex -mr-2">
            <Edit class="editButton bg-blue-400" @click="editTodoItem(todo)" />
            <ConfirmBox
              :id="todo.id"
              :methods="todoStore.deleteTodo"
              :message="`删除了待办${todo.value}`"
              v-slot="slotProps"
            >
              <Delete
                class="editButton bg-red-400"
                @click="slotProps.confirmAlert"
              />
            </ConfirmBox>
          </div>
        </li>
      </TransitionGroup>
    </ul>
    <div
      class="flex items-center justify-between w-full h-10 px-2 border-t-2 border-dashed"
      v-show="todoStore.allTodo"
    >
      <div class="flex">
        <input
          type="checkbox"
          :checked="todoStore.doneTodo === todoStore.allTodo ? true : false"
          class="hover:cursor-pointer mr-2"
          @click="todoStore.checkAll"
        />
        <p class="text-sm">全选/全不选</p>
      </div>
      <div class="flex">
        <ConfirmBox :methods="todoStore.clearTodo" v-slot="slotProps">
          <DeleteFilled
            class="w-6 h-6 hover:cursor-pointer"
            @click="slotProps.confirmAlert"
          />
        </ConfirmBox>
      </div>
    </div>
  </div>
</template>

<script setup>
import ConfirmBox from "../ConfirmBox.vue";
import { useTodoStore } from "@/stores/todoStore";
import { useAlertStore } from "@/stores/alertStore";
import { ref } from "vue";
const newTodo = ref("");
const oldTodo = ref("");
const todoStore = useTodoStore();
const alertStore = useAlertStore();
function addTodoItem() {
  if (newTodo.value === "") {
    alertStore.updateAlert("添加失败", "请填写待办内容！", "error");
    return false;
  } else {
    alertStore.updateAlert("添加成功", `新待办为${newTodo.value}!`);
    todoStore.addTodo(newTodo.value);
    newTodo.value = "";
  }
}
function editTodoItem(todo) {
  todoStore.editTodo(todo);
  oldTodo.value = todo.value;
  // nextTick(() => document.getElementById(String(todo.id)).focus());
  setTimeout(() => document.getElementById(String(todo.id)).focus(), 0);
}
function endEdit(todo) {
  if (todo.value === "") {
    alertStore.updateAlert("编辑失败", "待办内容不能为空！", "error");
    setTimeout(() => document.getElementById(String(todo.id)).focus(), 0);
    return false;
  } else if (oldTodo.value === todo.value) {
    todo.isEditing = false;
    alertStore.updateAlert("编辑失败", `待办内容未作更改!`, "warning");
  } else {
    todo.isEditing = false;
    alertStore.updateAlert("编辑成功", `新待办为${todo.value}!`);
  }
}
</script>

<style lang="scss" scoped>
.todoCard {
  @apply w-full pb-2 shadow-lg rounded-md;
  min-height: 16rem;
  background: linear-gradient(var(--color-light), var(--color-normal));
  .addButton {
    @apply w-10 h-10 relative -ml-10 text-sm tablet:w-16 tablet:-ml-16;
    background-color: var(--color-dark);
    &:hover {
      color: var(--color-base);
      background-color: var(--color-hover);
    }
  }
  .editButton {
    @apply w-6 h-6 ml-1 p-1 block fill-current rounded tablet:w-8 laptop:hidden tablet:h-8 hover:cursor-pointer;
    color: var(--color-base);
  }
  li:hover {
    .editButton {
      display: block;
    }
  }
}
ul + div {
  border-color: var(--color-dark);
}
input:focus {
  outline: none;
}

/* todoList动画 TransitionGroup*/
.todoList-move,
.todoList-enter-active,
.todoList-leave-active {
  transition: all 0.5s ease;
}

.todoList-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.todoList-leave-to {
  opacity: 0;
}
</style>
