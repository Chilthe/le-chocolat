<template>
  <div
    class="w-full h-screen bg-cover bg-center flex items-end justify-start p-25"
    style="background-image: url('src/assets/chipichapa.png')"
  >
    <strong class="text-white text-6xl prevent-select">{{ offerTitle }}</strong>
  </div>
</template>

<script setup>
import { ref } from "vue";

const offerTitle = ref("Calendrier de l'avant !");
</script>

<style scoped>
.prevent-select {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
