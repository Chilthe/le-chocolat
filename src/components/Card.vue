<template>
  <div class="w-125 h-175 bg-primary overflow-hidden">
    <div class="h-19/20 flex justify-center items-center">
      <img :src="getImageUrl(img_link)" :alt="img_link" class="w-full h-full object-cover object-center" />
    </div>

    <div class="flex justify-between px-3">
      <span class="text-2xl items-start">{{ img_title }}</span>
      <span class="text-xl flex items-end">{{ img_price }} €</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  img_link: String,
  img_alt: String,
  img_title: String,
  img_price: String
})

const getImageUrl = (filename) => {
  return new URL(`../assets/${filename}`, import.meta.url).href;
};
</script>