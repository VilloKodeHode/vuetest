<script setup></script>

<template>
  <main
    class="animate-Appear px-8 grid md:gap-0 md:my-0 my-8 gap-12 grid-cols-1 sm:mt-0 lg:grid-cols-2 xl:mx-24 md:mx-12 sm:mx-4"
  >
    <article class="m-auto z-40">
      <h1 class="my-4" id="home">
        <span class="font-Roboto text-7xl"> Joakim Villo </span>
      </h1>

      <p>
        Jeg nærmer meg slutte på et Front-End-Development kurs og har brukt
        mange timer utenom kurset på å lære så mye jeg kan om koding og design.
        Hvert eneste sekund har vært lærerikt og jeg har hele tiden jobbet med å
        lære meg så mye som mulig
      </p>
    </article>
    <div class="mx-auto">
      <img
        id="avatar"
        class="md:h-80 h-64 hero--img"
        src="../assets/Avatar.png"
      />
    </div>

    <div class="md:w-2/3 flex gap-12 justify-center m-auto"></div>
  </main>
</template>

<style scoped>
.hero--img {
  border-radius: 39% 61% 47% 53% / 70% 51% 49% 30%;
}
</style>
