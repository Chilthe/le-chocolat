<template>
  <!-- Add carrousel -->
  <div class="w-full h-screen flex justify-center sm:justify-start items-end">
    <img
      :src="getImage(offers[0].image)"
      class="w-full h-full object-cover object-center"
    />

    <strong class="prevent-select absolute text-white text-3xl pb-10 sm:text-6xl sm:pl-15 sm:pb-15">
      {{ offers[0].title }}
    </strong>
  </div>
</template>

<script setup>
import PRODUCTS from "@/utils/products.json";

import { ref } from "vue";
import { getImage } from "/src/utils/utils.js";

const offers = PRODUCTS.filter((p) => p.offer);
</script>

<style scoped>
.prevent-select {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
