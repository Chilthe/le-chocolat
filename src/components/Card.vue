<template>
  <div class="sm:w-[40vh]">
    <div class="h-18/20">
      <img
        class="h-fill"
        :src="getImage(product.image)"
        :alt="product.description"
      />
    </div>

    <div class="h-1/20 flex justify-between px-1">
      <span>{{ product.title }}</span>
      <span>{{ product.grames }}g</span>
    </div>
    <div class="h-1/20 flex justify-between px-3">
      <span>{{ product.price }} €</span>
    </div>
  </div>
</template>

<script setup>
import { getImage } from "/src/utils/utils.js";

defineProps({
  product: Object,
});
</script>
