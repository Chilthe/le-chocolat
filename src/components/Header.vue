<template>
  <header
    :class="`h-20 w-full fixed bg-primary transition-all duration-150 ease-in-out z-1 
    ${isVisible ? 'translate-y-0' : '-translate-y-full'}`"
  >
    <div class="h-full grid grid-cols-3 items-center">
      <div class="flex justify-start sm:justify-center">
        <button @click="test('menu')">
          <Bars3Icon class="size-8 sm:size-10 mx-3" />
        </button>
        <button @click="test('search')">
          <MagnifyingGlassIcon class="size-7 sm:size-8" />
        </button>
      </div>

      <strong class="flex justify-center text-xl sm:text-3xl"> LE CHOCOLAT </strong>

      <div class="flex justify-end sm:justify-center">
        <button @click="test('user')">
          <UserIcon class="size-7 sm:size-8" />
        </button>
        <button @click="test('shop')">
          <ShoppingBagIcon class="size-7 sm:size-8 mx-3" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/vue/24/solid";

const isVisible = ref(true);
const lastScrollY = ref(0);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY.value) {
    isVisible.value = false;
  } else {
    isVisible.value = true;
  }

  lastScrollY.value = currentScrollY;
};

// Write components :
// - menu
// - search
// - user
// - shopping cart
function test(str) {
  alert(str);
  return;
}
</script>

<style>
body {
  scroll-behavior: smooth;
}

button {
  cursor: pointer;
}
</style>
