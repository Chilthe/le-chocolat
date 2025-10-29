<template>
  <main class="flex-1">
    <Offer v-if="OFFER" />
    <div v-for="product in products" :key="product.id">
      <img 
        :src="getImageUrl(product.img)"
        :alt="product.title"
      />
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import products from "@/utils/products.json";
import Offer from "~/Offer.vue";

const OFFER = ref(true);

const getImageUrl = (filename) => {
  return new URL(`../assets/${filename}`, import.meta.url).href
}
</script>
