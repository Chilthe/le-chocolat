<template>
  <div class="app-wrapper">
    <AppToolbar />
    <main class="main-content">
      <slot />
    </main>
    <AppFooter />
    <!-- Cart toast notification -->
    <Teleport to="body">
      <Transition name="toast">
        <div v-if="cartStore.toastVisible" class="cart-toast">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span><strong>{{ cartStore.toastProduct }}</strong> ajouté au panier</span>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
const cartStore = useCartStore()
</script>

<style scoped>
.cart-toast {
  position: fixed;
  bottom: 32px;
  right: 32px;
  background-color: var(--c-dark);
  color: var(--c-white);
  padding: 14px 20px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  box-shadow: var(--shadow-lg);
  z-index: 9999;
  max-width: 320px;
}

.toast-enter-active { animation: slideUp 0.3s ease; }
.toast-leave-active { animation: slideUp 0.25s ease reverse; }
</style>
