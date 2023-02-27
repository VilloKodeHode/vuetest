<script setup>
import { ref } from "vue";

let joke = ref({});

const fetchJoke = async () => {
  await fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => (joke.value = data));
};

fetchJoke();
</script>

<template>
  <div
    class="flex justify-center flex-col border-2 border-orange-100 rounded-3xl shadow-xl mx-12 my-8 p-8 animate-SlideInFromRight"
  >
    <h2 class="text-3xl p-8">A very simple joke api:</h2>
    <div
      class="flex flex-col items-center m-auto bg-orange-100 w-fit p-4 border rounded-md"
    >
      <h3 class="mb-4 text-xl">Chuck norris joke:</h3>
      <p v-if="joke.value" class="max-w-xl animate-Appear" :key="joke.value.id">
        {{ joke.value }}
      </p>
      <p v-else>Loading joke...</p>
      <button class="mt-4" @click="fetchJoke">Get a new joke</button>
    </div>
  </div>
</template>
