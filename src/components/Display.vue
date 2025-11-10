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
        :img_link="product1"
        img_title="Confiserie"
        img_price="5.55"
        product_gram="500g"
      />
      <Card
        :img_link="product2"
        img_title="Tablette de Chocolat"
        img_price="11.75"
        product_gram="500g"
      />
      <Card
        :img_link="product3"
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
        :img_link="chocolat1"
        img_title="Ourson en chocolat blanc"
        img_price="7.20"
        product_gram="500g"
      />
      <Card
        :img_link="chocolat2"
        img_title="Ourson en chocolat blanc"
        img_price="7.20"
        product_gram="500g"
      />
      <Card
        :img_link="chocolat3"
        img_title="Ourson en chocolat blanc"
        img_price="7.20"
        product_gram="500g"
      />
      <Card
        :img_link="chocolat4"
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

const product1 = {
  file: "confiserie_1.png",
};
const product2 = {
  file: "chocolat_1.png",
};
const product3 = {
  file: "ourson_1.png",
};

const chocolat1 = {
  folder: "chocolat/",
  file: "cahuet.png",
};
const chocolat2 = {
  folder: "chocolat/",
  file: "classic.png",
};
const chocolat3 = {
  folder: "chocolat/",
  file: "dark.png",
};
const chocolat4 = {
  folder: "chocolat/",
  file: "stars.png",
};
</script>
