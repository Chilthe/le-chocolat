<template>
  <div class="h-[80vh]">
    <div class="h-1/8 flex justify-center items-end">
      <span class="text-2xl">PLACEHOLDER_PRODUCTS_TITLE</span>
    </div>

    <div class="h-7/8 flex justify-center items-center gap-10">
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>

<script setup>
import PRODUCTS from "@/utils/products.json";
import Card from "~/Card.vue"

const getImageUrl = (filename) => {
  return new URL(`../assets/${filename}`, import.meta.url).href;
};
</script>