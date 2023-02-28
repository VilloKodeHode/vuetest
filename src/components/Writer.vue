<script setup>
import { ref } from "vue";

const text = ref("");
</script>

<template>
  <div
    class="border-2 border-orange-100 rounded-3xl shadow-xl mx-12 my-8 p-8 flex flex-col items-center"
  >
    <h1 class="mb-8">A typefield:</h1>
    <input v-model="text" placeholder="Type here" />
    <p class="m-8 bg-orange-100 w-fit">{{ text }}</p>
  </div>
</template>
