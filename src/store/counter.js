import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCounterStore = defineStore("CounterStore", () => {
  // state
  const counter = ref(0);
  // getter
  const getCounter = computed(() => counter.value);
  // action
  function incrementCounter() {
    counter.value++;
  }

  return { getCounter, incrementCounter };
});
