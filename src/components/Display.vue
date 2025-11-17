<template>
  <div class="sm:h-[80vh]">
    <div class="h-1/8 flex justify-center items-center">
      <!-- <span class="text-3xl">{{ title }}</span> -->
      <span class="text-3xl pt-3">[insérer titre]</span>
    </div>

    <div
      class="p-5 sm:gap-10 sm:h-7/8 sm:flex sm:justify-center sm:items-center"
    >
      <Card
        v-for="product in patesatartiner"
        :key="product.index"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import PRODUCTS from "@/utils/products.json";
import { computed } from "vue";
import Card from "~/Card.vue";

const props = defineProps({
  type: String,
});

const patesatartiner = PRODUCTS.filter(
  (p) => p.image.folder === "pate-a-tartiner/"
);
</script>
