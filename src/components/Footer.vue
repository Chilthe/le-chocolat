<template>
  <footer>
    <div class="w-full h-50 pt-3 flex justify-center items-center">
      <div class="h-full">
        <span>CONTACT</span>
        <menu class="pt-4">
          <li>Thomas Delannoy</li>
          <li>Chef Chocolatier - confiseur</li>
          <li>
            <a href="tel:+33611307361"> +33 (0)6 11 30 73 61 </a>
          </li>
          <li>
            <a class="underline" href="mailto:tdel@augusteetferdinand.com">
              tdel@augusteetferdinand.com
            </a>
          </li>
          <li>
            <a
              class="underline"
              target="_blank"
              href="https://www.augusteetferdinand.com/"
            >
              augusteetferdinand.com
            </a>
          </li>
        </menu>
      </div>

      <div class="w-1/10" />

      <!-- Add router -->
      <div class="h-full">
        <span>NOS PRODUITS</span>
        <menu class="pt-4">
          <li>
            <button
              class="hover-underline-animation left"
              @click="test('Chocolats')"
            >
              Chocolats
            </button>
          </li>
          <li>
            <button @click="test('Confiseries')">Confiseries</button>
          </li>
          <li>
            <button @click="test('Éditions limitées')">
              Éditions limitées
            </button>
          </li>
        </menu>
      </div>
    </div>
    <div class="h-25 w-full flex justify-center items-start">
      <!-- same as header -->
      <strong class="text-4xl pt-1">LE CHOCOLAT</strong>
    </div>
  </footer>
</template>

<script setup>
function test(str) {
  alert(str);
  return str;
}
</script>

<style scoped>
button {
  display: flex;
  width: 100%;
}

button:hover {
  text-decoration: underline;
}
</style>
