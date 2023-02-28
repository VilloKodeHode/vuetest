<script setup>
import { ref, computed } from "vue";

let id = 0;

const newTodo = ref("");
const hideCompleted = ref(false);
const todos = ref([
  { id: id++, text: "Count to infinity" },
  { id: id++, text: "Train brain for gain" },
  {
    id: id++,
    text: "Make a todo list",
  },
  { id: id++, text: "Keep calm and keep coding" },
]);

const filteredTodos = computed(() => {
  return hideCompleted.value ? todos.value.filter((t) => !t.done) : todos.value;
});

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value });
  newTodo.value = "";
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo);
}
</script>

<template>
  <div
    class="border-2 border-orange-100 rounded-3xl shadow-xl mx-12 my-8 p-8 flex flex-col items-center"
  >
    <h1>A todo list:</h1>
    <form @submit.prevent="addTodo">
      <input class="my-8" v-model="newTodo" />
      <button>Add Todo</button>
    </form>
    <ul class="flex flex-col items-end bg-orange-100 rounded-xl">
      <li class="p-4 w-full" v-for="todo in filteredTodos" :key="todo.id">
        <div class="flex justify- gap-4">
          <input class="w-6" type="checkbox" v-model="todo.done" />

          <span
            :class="{ done: todo.done }"
            class="shadow-inner bg-orange-400 bg-opacity-10 p-2 m-auto rounded-xl"
          >
            {{ todo.text }}
          </span>
          <button @click="removeTodo(todo)">X</button>
        </div>
      </li>
    </ul>
    <button @click="hideCompleted = !hideCompleted">
      {{ hideCompleted ? "Show all" : "Hide completed" }}
    </button>
  </div>
</template>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
