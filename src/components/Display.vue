<template>
  <div class="h-[80vh]">
    <div class="h-1/8 flex justify-center items-end">
      <span class="text-2xl">{{ title }}</span>
    </div>

    <div
      v-if="type === 'display'"
      class="h-7/8 flex justify-center items-center gap-10"
    >
      <Card
        v-for="product in classics"
        :key="product.index"
        :product="product"
      />
    </div>

    <div
      v-else-if="type === 'products'"
      class="h-7/8 flex justify-center items-center gap-10"
    >
      <Card v-for="tab in tablettes" :key="tab.index" :product="tab" />
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

const title = computed(() => {
  switch (props.type) {
    case "display":
      return "Découvrez nos produits";
    case "products":
      return "Sélection de nos tablettes de chocolat";
    default:
      return "Recherche d'un titre adapté";
  }
});

const tablettes = PRODUCTS.filter(image.folder !== null);
const classics = PRODUCTS.filter(image.folder === null);
</script>
