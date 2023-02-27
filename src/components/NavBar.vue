<script setup>
import RESUME from "../assets/Norwegian resume shorted.pdf";
</script>

<template>
  <nav class="bg-orange-200 absolute top-0 left-0 p-2 w-full">
    <div class="flex justify-between items-center px-8">
      <div class="flex items-center gap-4">
        <img
          src="../assets/Avatar.png"
          class="h-12 rounded-full hover:rotate-[360deg] hover:scale-[3] hover:translate-x-12 hover:translate-y-12 duration-1000"
        />
        <p class="text-lg">VILLO</p>
      </div>
      <div>
        <a
          class="bg-green-500 py-1 px-4 text-green-900 border-4 border-green-700"
          href="https://github.com/VilloKodeHode/portfolio/blob/main/src/pages/assets/Norwegian%20resume%20plain.pdf"
          target="_blank"
          >Resume</a
        >
      </div>
    </div>
  </nav>
</template>
