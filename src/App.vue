<script setup>
import Hero from "./components/Hero.vue";
import Intro from "./components/Intro.vue";
import Clicker from "./components/Clicker.vue";
import Joke from "./components/Joke.vue";
import NavBar from "./components/NavBar.vue";
import Writer from "./components/Writer.vue";
import ConditionalRendering from "./components/ConditionalRendering.vue";
import ToDoList from "./components/ToDoList.vue";
import Mounted from "./components/Mounted.vue";
import Watcher from "./components/Watcher.vue";

function greeting(name) {
  alert("Greetings " + name);
}
</script>

<!-- <script>
import { useCounterStore } from "./store/counter";

export default {
  setup() {
    const store = useCounterStore();

    const counter = store.getCounter;
    const incrementCounter = store.incrementCounter;

    return {
      counter,
      incrementCounter,
    };
  },
};
</script> -->

<template>
  <NavBar />
  <Hero />
  <Intro />
  <Clicker msg="Here is a clicker:" />
  <Suspense>
    <Joke />
  </Suspense>
  <Writer />
  <ConditionalRendering />
  <ToDoList />
  <Watcher />

  <!-- <button @click="incrementCounter">Increment counter {{ counter }}</button> -->
</template>

<style scoped></style>
