<template>
  <Teleport to="body">
    <!-- Overlay -->
    <Transition name="overlay">
      <div
        v-if="cartStore.drawerOpen"
        class="drawer-overlay"
        @click="cartStore.drawerOpen = false"
      />
    </Transition>

    <!-- Drawer -->
    <Transition name="drawer">
      <aside v-if="cartStore.drawerOpen" class="cart-drawer" aria-label="Panier">
        <!-- Header -->
        <div class="drawer-header">
          <h2 class="drawer-title">Mon panier</h2>
          <span class="drawer-count">{{ cartStore.totalItems }} article{{ cartStore.totalItems !== 1 ? 's' : '' }}</span>
          <button class="drawer-close" @click="cartStore.drawerOpen = false" aria-label="Fermer le panier">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <!-- Items -->
        <div class="drawer-items">
          <div v-if="cartStore.items.length === 0" class="drawer-empty">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <p>Votre panier est vide</p>
          </div>

          <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
            <img :src="item.image" :alt="item.name" class="item-image" />
            <div class="item-info">
              <p class="item-name">{{ item.name }}</p>
              <p class="item-weight">{{ item.weight }}</p>
              <p class="item-price">{{ (item.price * item.quantity).toFixed(2) }} €</p>
            </div>
            <div class="item-qty">
              <button class="qty-btn" @click="cartStore.updateQuantity(item.id, item.quantity - 1)" aria-label="Diminuer">−</button>
              <span class="qty-value">{{ item.quantity }}</span>
              <button class="qty-btn" @click="cartStore.updateQuantity(item.id, item.quantity + 1)" aria-label="Augmenter">+</button>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div v-if="cartStore.items.length > 0" class="drawer-footer">
          <div class="promo-row">
            <input
              v-model="promoCode"
              class="promo-input"
              type="text"
              placeholder="Code promo"
            />
            <button class="promo-btn" @click="applyPromo">Appliquer</button>
          </div>
          <div v-if="promoError" class="promo-error">{{ promoError }}</div>
          <div v-if="promoApplied" class="promo-success">Code appliqué — {{ discountPercent }}% de réduction !</div>

          <div class="total-row">
            <div class="total-info">
              <span class="total-label">Total</span>
              <div>
                <span v-if="promoApplied" class="total-original">{{ cartStore.totalPrice.toFixed(2) }} €</span>
                <span class="total-price">{{ discountedTotal.toFixed(2) }} €</span>
              </div>
            </div>
            <button class="pay-btn">Payer</button>
          </div>
        </div>
      </aside>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const cartStore = useCartStore()

const promoCode = ref('')
const promoError = ref('')
const promoApplied = ref(false)
const discountPercent = ref(0)

const PROMO_CODES: Record<string, number> = {
  CHOCO10: 10,
  CHOCO20: 20,
  BIENVENUE: 15,
}

const discountedTotal = computed(() => {
  if (!promoApplied.value) return cartStore.totalPrice
  return cartStore.totalPrice * (1 - discountPercent.value / 100)
})

function applyPromo() {
  const code = promoCode.value.trim().toUpperCase()
  if (!code) {
    promoError.value = 'Veuillez entrer un code promo.'
    promoApplied.value = false
    return
  }
  if (PROMO_CODES[code] !== undefined) {
    discountPercent.value = PROMO_CODES[code]
    promoApplied.value = true
    promoError.value = ''
  } else {
    promoError.value = 'Code promo invalide.'
    promoApplied.value = false
  }
}
</script>

<style scoped>
.drawer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 1100;
}

.cart-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 420px;
  max-width: 100vw;
  background: var(--c-white);
  z-index: 1101;
  display: flex;
  flex-direction: column;
  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.12);
}

/* Header */
.drawer-header {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-lg) var(--space-xl);
  border-bottom: 1px solid var(--c-border);
  flex-shrink: 0;
}

.drawer-title {
  font-family: var(--font-serif);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--c-dark);
  flex: 1;
}

.drawer-count {
  font-size: 0.78rem;
  color: var(--c-text-muted);
  font-weight: 500;
  letter-spacing: 0.05em;
}

.drawer-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-full);
  color: var(--c-text-muted);
  transition: background-color var(--transition-fast), color var(--transition-fast);
}

.drawer-close:hover {
  background-color: var(--c-light);
  color: var(--c-dark);
}

/* Items */
.drawer-items {
  flex: 1;
  overflow-y: auto;
  padding: var(--space-md) var(--space-xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.drawer-empty {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  color: var(--c-text-muted);
  padding: var(--space-xxl) 0;
}

.drawer-empty p {
  font-size: 0.9rem;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-md) 0;
  border-bottom: 1px solid var(--c-border);
}

.item-image {
  width: 72px;
  height: 72px;
  object-fit: cover;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
}

.item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.item-name {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--c-dark);
  line-height: 1.3;
}

.item-weight {
  font-size: 0.75rem;
  color: var(--c-text-muted);
}

.item-price {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--c-gold);
  margin-top: 4px;
}

.item-qty {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
}

.qty-btn {
  width: 28px;
  height: 28px;
  border-radius: var(--radius-full);
  border: 1px solid var(--c-border);
  font-size: 1rem;
  line-height: 1;
  color: var(--c-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--transition-fast);
}

.qty-btn:hover {
  background-color: var(--c-light);
}

.qty-value {
  width: 28px;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--c-dark);
}

/* Footer */
.drawer-footer {
  padding: var(--space-lg) var(--space-xl);
  border-top: 1px solid var(--c-border);
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  flex-shrink: 0;
}

.promo-row {
  display: flex;
  gap: var(--space-sm);
}

.promo-input {
  flex: 1;
  height: 42px;
  padding: 0 var(--space-md);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-sm);
  font-size: 0.88rem;
  color: var(--c-dark);
  background: var(--c-white);
  outline: none;
  transition: border-color var(--transition-fast);
}

.promo-input:focus {
  border-color: var(--c-gold);
}

.promo-btn {
  height: 42px;
  padding: 0 var(--space-md);
  background-color: var(--c-light);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-sm);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--c-dark);
  white-space: nowrap;
  transition: background-color var(--transition-fast);
}

.promo-btn:hover {
  background-color: var(--c-border);
}

.promo-error {
  font-size: 0.8rem;
  color: #c0392b;
}

.promo-success {
  font-size: 0.8rem;
  color: #27ae60;
  font-weight: 600;
}

.total-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
}

.total-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.total-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--c-text-muted);
  font-weight: 600;
}

.total-original {
  font-size: 0.85rem;
  color: var(--c-text-muted);
  text-decoration: line-through;
  margin-right: 6px;
}

.total-price {
  font-family: var(--font-serif);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--c-dark);
}

.pay-btn {
  padding: 0 var(--space-xl);
  height: 48px;
  background-color: var(--c-gold);
  color: var(--c-white);
  border-radius: var(--radius-sm);
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: opacity var(--transition-fast);
  white-space: nowrap;
}

.pay-btn:hover {
  opacity: 0.88;
}

/* Transitions */
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.25s ease;
}
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(100%);
}
</style>
