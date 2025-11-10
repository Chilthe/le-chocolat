<template>
  <div class="w-[40vh] h-7/8 overflow-hidden">
    <div class="h-18/20 flex justify-center items-center">
      <img
        :src="getImage(img_link)"
        :alt="img_link"
        class="w-full h-full object-cover object-center"
      />
    </div>

    <div class="h-1/20 flex justify-between px-1">
      <span class="text-[1.1vw]">{{ img_title }}</span>
      <span class="text-[1vw]">{{ product_gram }}</span>
    </div>
    <div class="h-1/20 flex justify-between px-3">
      <span class="text-[1vw]">{{ img_price }} €</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  img_link: Object,
  img_alt: String,
  img_title: String,
  img_price: String,
  product_gram: String,
});

function getImage(product) {
  const path = product.folder
    ? `${product.folder}${product.file}`
    : product.file;
  return new URL('../assets/'+path, import.meta.url).href;
}
</script>
