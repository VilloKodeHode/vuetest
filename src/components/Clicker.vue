<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div class="border-2 border-orange-100 rounded-3xl shadow-xl mx-12 my-8 p-8">
    <h1 class="mb-8">{{ msg }}</h1>

    <div class="grid grid-cols-3 [&>*]:tracking-[0.2rem]">
      <button class="" @click="count++">Add (+1)</button>
      <button @click="count--">Subtract (-1)</button>
      <button @click="count *= 2">Double (*2)</button>
      <button @click="count /= 2">Halfen (/2)</button>
      <button @click="count = 0">Reset (0)</button>
    </div>
    <p class="text-9xl">{{ count > 9000 ? "it's over 9000!" : count }}</p>
  </div>
</template>

<style scoped></style>
