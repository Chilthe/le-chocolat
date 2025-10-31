<template>
  <main class="flex-1">
    <Offer v-if="OFFER" />
    <div class="grid grid-cols-3">
      <div v-for="product in products" :key="product.id">
        <div class="pa-1 col-span-1">
          <img :src="getImageUrl(product.img)" :alt="product.title" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import products from "@/utils/products.json";
import Offer from "~/Offer.vue";

const OFFER = ref(true);

const getImageUrl = (filename) => {
  return new URL(`../assets/${filename}`, import.meta.url).href;
};
</script>
