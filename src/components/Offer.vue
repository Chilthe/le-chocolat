<template>
  <div
    class="w-full h-screen bg-cover bg-center flex items-end justify-start p-25"
    style="background-image: url('src/assets/calendrier.png')"
  >
    <strong class="text-white text-6xl italic text-shadow-lg/50 prevent-select">
      {{ offers[0].title }}
    </strong>
  </div>
</template>

<script setup>
import PRODUCTS from "@/utils/products.json";

import { ref } from "vue";

const offers = PRODUCTS.filter((p) => p.offer);
</script>

<style scoped>
.prevent-select {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
