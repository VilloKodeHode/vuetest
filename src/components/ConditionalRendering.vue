<script setup>
import { ref } from "vue";

const awesome = ref(true);

function toggle() {
  awesome.value = !awesome.value;
}
</script>

<template>
  <div
    class="border-2 border-orange-100 rounded-3xl shadow-xl mx-12 my-8 p-8 flex flex-col items-center"
  >
    <h1>Conditional rendering:</h1>
    <button @click="toggle">toggle</button>
    <div class="bg-orange-100 w-fit p-4 rounded-xl m-8">
      <h1 v-if="awesome">Vue is awesome!</h1>
      <h2 class="text-3xl" v-else>Vue is not awesome?? LIES!</h2>
    </div>
  </div>
</template>
