<script setup>
import { ref, watch } from "vue";

const todoId = ref(1);
const todoData = ref(null);

async function fetchData() {
  todoData.value = null;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  );
  todoData.value = await res.json();
}
fetchData();

watch(todoId, fetchData);
</script>

<template>
  <div
    class="border-2 border-orange-100 rounded-3xl shadow-xl mx-12 my-8 p-8 flex flex-col items-center"
  >
    <h1 class="m-8">A watcher:</h1>
    <p>Todo id: {{ todoId }}</p>
    <button @click="todoId++">Fetch next todo</button>
    <p v-if="!todoData">Loading...</p>
    <pre v-else>{{ todoData }}</pre>
  </div>
</template>
