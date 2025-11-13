<template>
  <div class="sm:w-[40vh] h-7/8 overflow-hidden">
    <div class="h-18/20 flex justify-center items-center">
      <img
        :src="getImage(product.image)"
        :alt="product.description"
        class="w-full h-full object-cover object-center"
      />
    </div>

    <div class="h-1/20 flex justify-between px-1">
      <span class="text-[1.1vw]">{{ product.title }}</span>
      <span class="text-[1vw]">{{ product.grames }}</span>
    </div>
    <div class="h-1/20 flex justify-between px-3">
      <span class="text-[1vw]">{{ product.price }} €</span>
    </div>
  </div>
</template>

<script setup>
import { getImage } from "/src/utils/utils.js";

defineProps({
  product: Object,
});
</script>
