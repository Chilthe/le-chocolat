<template>
  <div class="h-[80vh]">
    <div class="h-1/8 flex justify-center items-end">
      <span class="text-2xl">PLACEHOLDER_PRODUCTS_TITLE</span>
    </div>

    <div class="h-7/8 flex justify-center items-center gap-10">
      <Card img_link="confiserie_1.png" img_title="Confiserie" img_price="5.55" />
      <Card img_link="chocolat_1.png" img_title="Tablette de Chocolat" img_price="11.75" />
      <Card img_link="ourson_1.png" img_title="Ourson en chocolat blanc" img_price="7.20" />
    </div>
  </div>
</template>

<script setup>
import PRODUCTS from "@/utils/products.json";
import Card from "~/Card.vue"
</script>