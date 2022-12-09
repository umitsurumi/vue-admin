import { ref, watch, computed } from "vue";
import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

export const useTodoStore = defineStore("todoStore", () => {
  const todoArr = ref(JSON.parse(localStorage.getItem("todoList")) || []);

  function addTodo(todoValue) {
    const newTodo = {
      id: uuidv4(),
      value: todoValue,
      done: false,
      isEditing: false,
    };
    todoArr.value.unshift(newTodo);
  }

  function checkTodo(todoId) {
    todoArr.value.forEach((todo) => {
      if (todo.id === todoId) {
        todo.done = !todo.done;
      }
    });
  }

  function deleteTodo(todoId) {
    todoArr.value = todoArr.value.filter((todo) => todo.id !== todoId);
  }

  function editTodo(todo) {
    todo.isEditing = true;
  }

  function checkAll() {
    if (allTodo.value !== doneTodo.value) {
      todoArr.value.forEach((todo) => {
        todo.done = true;
      });
    } else {
      todoArr.value.forEach((todo) => {
        todo.done = false;
      });
    }
  }

  function clearTodo() {
    todoArr.value = todoArr.value.filter((todo) => !todo.done);
  }

  const allTodo = computed(() => todoArr.value.length);

  const doneTodo = computed(() => {
    let i = 0;
    for (const todo of todoArr.value) {
      if (todo.done) {
        i++;
      }
    }
    return i;
  });

  watch(
    () => todoArr.value,
    (newList) => {
      localStorage.setItem("todoList", JSON.stringify(newList));
    },
    { deep: true }
  );

  return {
    todoArr,
    addTodo,
    checkTodo,
    deleteTodo,
    editTodo,
    checkAll,
    clearTodo,
    allTodo,
    doneTodo,
  };
});
