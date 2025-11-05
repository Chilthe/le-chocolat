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
        img_link="confiserie_1.png"
        img_title="Confiserie"
        img_price="5.55"
        product_gram="500g"
      />
      <Card
        img_link="chocolat_1.png"
        img_title="Tablette de Chocolat"
        img_price="11.75"
        product_gram="500g"
      />
      <Card
        img_link="ourson_1.png"
        img_title="Ourson en chocolat blanc"
        img_price="7.20"
        product_gram="500g"
      />
    </div>

    <div
      v-else-if="type === 'products'"
      class="h-7/8 flex justify-center items-center gap-10"
    >
      <Card
        img_link="chocolat/cahuet.png"
        img_title="Ourson en chocolat blanc"
        img_price="7.20"
        product_gram="500g"
      />
      <Card
        img_link="chocolat/classic.png"
        img_title="Ourson en chocolat blanc"
        img_price="7.20"
        product_gram="500g"
      />
      <Card
        img_link="chocolat/dark.png"
        img_title="Ourson en chocolat blanc"
        img_price="7.20"
        product_gram="500g"
      />
      <Card
        img_link="chocolat/stars.png"
        img_title="Ourson en chocolat blanc"
        img_price="7.20"
        product_gram="500g"
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
</script>
