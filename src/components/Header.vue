<template>
  <header
    :class="`h-20 w-full ${isFixed ? 'fixed' : 'relative'} 
      bg-primary${isFixed ? '' : '/0'}
      transition-all duration-500 ease-in-out z-1`"
  >
    <div class="h-full grid grid-cols-3 items-center">
      <div class="col-span-1 pl-25 flex justify-start bg-sky-400">
        <img src="./in.png" />
      </div>

      <div class="col-span-1 flex justify-center bg-pink-400">
        <strong style="font-size: x-large">LE CHOCOLAT</strong>
      </div>

      <div class="col-span-1 pr-25 flex justify-end bg-sky-400">
        <img src="./in.png" />
        <img src="./in.png" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isFixed = ref(true);
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
    isFixed.value = false;
  } else {
    isFixed.value = true;
  }

  lastScrollY.value = currentScrollY;
};
</script>

<style>
body {
  scroll-behavior: smooth;
}
</style>
