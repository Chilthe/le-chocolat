<template>
  <main class="flex-1">
    <Offer v-if="OFFER" />
    <Display />
    <div class="border-b" />
    <Display />
  </main>
</template>

<script setup>
import { ref } from "vue";
import Offer from "~/Offer.vue";
import Display from "~/Display.vue";

const OFFER = ref(true);
</script>
