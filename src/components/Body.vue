<template>
  <main>
    <Offer v-if="OFFER" />
    <div v-else class="h-20" />
    <Display type="display" class="bg-tertiary" />
    <!-- <Display type="products" /> -->
  </main>
</template>

<script setup>
import { ref } from "vue";
import Offer from "~/Offer.vue";
import Display from "~/Display.vue";

const OFFER = ref(false);
</script>
