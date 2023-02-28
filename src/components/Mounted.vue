<script setup>
import { ref, onMounted } from "vue";

const p = ref(null);

onMounted(() => {
  p.value.textContent = "Mounted!";
});
</script>

<template>
  <p ref="p">Not mounted yet...</p>
</template>
