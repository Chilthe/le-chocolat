<template>
  <header
    :class="`h-20 w-full fixed bg-primary transition-all duration-150 ease-in-out z-1 
    ${isVisible ? 'translate-y-0' : '-translate-y-full'}`"
  >
    <div class="h-full grid grid-cols-3 items-center">
      <div class="col-span-1 pl-25 flex justify-start">
        <button @click="test('menu')">
          <Bars3Icon class="size-10" />
        </button>
      </div>

      <div class="col-span-1 flex justify-center">
        <strong class="text-4xl">LE CHOCOLAT</strong>
      </div>

      <div class="col-span-1 pr-25 flex justify-end">
        <button @click="test('search')">
          <MagnifyingGlassIcon class="size-8" />
        </button>
        <button @click="test('user')">
          <UserIcon class="size-8 mx-3" />
        </button>
        <button @click="test('shop')">
          <ShoppingBagIcon class="size-8" />
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
