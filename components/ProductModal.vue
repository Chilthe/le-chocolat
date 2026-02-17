<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="product"
        class="modal-overlay"
        @click.self="emit('close')"
        role="dialog"
        aria-modal="true"
        :aria-label="product.name"
      >
        <Transition name="modal-scale">
          <div v-if="product" class="modal-content">
            <!-- Close button -->
            <button class="modal-close" @click="emit('close')" aria-label="Fermer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <!-- Image -->
            <div class="modal-image-side">
              <div class="modal-image-wrapper">
                <img :src="product.image" :alt="product.name" class="modal-image" />
                <span v-if="product.badge" class="modal-badge badge badge-gold">{{ product.badge }}</span>
              </div>
            </div>

            <!-- Details -->
            <div class="modal-details">
              <span class="modal-category">{{ product.categoryLabel }}</span>
              <h2 class="modal-name">{{ product.name }}</h2>
              <p class="modal-short-desc">{{ product.description }}</p>

              <div class="modal-divider" />

              <p class="modal-long-desc">{{ product.longDescription }}</p>

              <div class="modal-meta">
                <div class="modal-meta-item">
                  <span class="meta-label">Poids</span>
                  <span class="meta-value">{{ product.weight }}</span>
                </div>
                <div class="modal-meta-item">
                  <span class="meta-label">Disponibilité</span>
                  <span class="meta-value" :class="product.inStock ? 'in-stock' : 'out-of-stock'">
                    {{ product.inStock ? 'En stock' : 'Rupture de stock' }}
                  </span>
                </div>
              </div>

              <div class="modal-purchase">
                <div class="modal-price">
                  <span class="price-amount">{{ product.price }}&nbsp;€</span>
                  <span class="price-unit">/ {{ product.weight }}</span>
                </div>

                <!-- Quantity selector -->
                <div v-if="product.inStock" class="quantity-selector">
                  <button class="qty-btn" @click="quantity = Math.max(1, quantity - 1)" aria-label="Diminuer">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                  <span class="qty-value">{{ quantity }}</span>
                  <button class="qty-btn" @click="quantity++" aria-label="Augmenter">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                </div>

                <button
                  v-if="product.inStock"
                  class="btn btn-gold add-to-cart"
                  @click="addToCart"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                  Ajouter au panier
                </button>

                <button v-else class="btn btn-outline" disabled>
                  Rupture de stock
                </button>
              </div>

              <!-- Total -->
              <p v-if="product.inStock && quantity > 1" class="modal-total">
                Total : <strong>{{ (product.price * quantity).toFixed(2) }}&nbsp;€</strong>
              </p>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import type { Product } from '~/data/products'

const props = defineProps<{ product: Product | null }>()
const emit = defineEmits<{ close: [] }>()

const cartStore = useCartStore()
const quantity = ref(1)

watch(() => props.product, () => { quantity.value = 1 })

function addToCart() {
  if (!props.product) return
  cartStore.addItem(props.product, quantity.value)
  emit('close')
}

// Close on Escape key
onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
})

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && props.product) emit('close')
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(44, 24, 16, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: var(--space-lg);
  backdrop-filter: blur(3px);
}

.modal-content {
  background-color: var(--c-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  box-shadow: var(--shadow-xl);
}

/* Close */
.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-full);
  background-color: var(--c-white);
  color: var(--c-text);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-sm);
  transition: background-color var(--transition-fast), color var(--transition-fast);
}

.modal-close:hover {
  background-color: var(--c-dark);
  color: var(--c-white);
}

/* Image side */
.modal-image-side {
  background-color: var(--c-light);
}

.modal-image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 360px;
}

.modal-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-badge {
  position: absolute;
  top: 16px;
  left: 16px;
}

/* Details side */
.modal-details {
  padding: var(--space-xl) var(--space-lg);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.modal-category {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--c-gold);
}

.modal-name {
  font-size: clamp(1.3rem, 2.5vw, 1.75rem);
  color: var(--c-dark);
  line-height: 1.2;
  margin-top: 4px;
}

.modal-short-desc {
  font-size: 0.9rem;
  color: var(--c-text-muted);
  font-style: italic;
}

.modal-divider {
  width: 40px;
  height: 2px;
  background-color: var(--c-gold);
  margin: var(--space-sm) 0;
}

.modal-long-desc {
  font-size: 0.9rem;
  color: var(--c-text-muted);
  line-height: 1.75;
}

/* Meta */
.modal-meta {
  display: flex;
  gap: var(--space-lg);
  padding: var(--space-md) 0;
  border-top: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
  margin-top: var(--space-sm);
}

.modal-meta-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.meta-label {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--c-text-muted);
}

.meta-value {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--c-dark);
}

.in-stock { color: #3a7c5e; }
.out-of-stock { color: #b04040; }

/* Purchase */
.modal-purchase {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  flex-wrap: wrap;
  margin-top: var(--space-md);
}

.modal-price {
  display: flex;
  align-items: baseline;
  gap: 4px;
}

.price-amount {
  font-family: var(--font-serif);
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--c-dark);
}

.price-unit {
  font-size: 0.8rem;
  color: var(--c-text-muted);
}

/* Quantity */
.quantity-selector {
  display: flex;
  align-items: center;
  border: 1.5px solid var(--c-border);
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.qty-btn {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--c-dark);
  transition: background-color var(--transition-fast);
}
.qty-btn:hover { background-color: var(--c-light); }

.qty-value {
  min-width: 40px;
  text-align: center;
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--c-dark);
  border-left: 1.5px solid var(--c-border);
  border-right: 1.5px solid var(--c-border);
  padding: 0 var(--space-sm);
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.add-to-cart {
  flex: 1;
  min-width: 160px;
}

.modal-total {
  font-size: 0.85rem;
  color: var(--c-text-muted);
  margin-top: -4px;
}
.modal-total strong { color: var(--c-dark); }

/* Transitions */
.modal-fade-enter-active { animation: fadeIn 0.25s ease; }
.modal-fade-leave-active { animation: fadeIn 0.2s ease reverse; }
.modal-scale-enter-active { animation: scaleIn 0.28s ease; }
.modal-scale-leave-active { animation: scaleIn 0.2s ease reverse; }

/* Responsive */
@media (max-width: 680px) {
  .modal-content {
    grid-template-columns: 1fr;
    max-height: 95vh;
    border-radius: var(--radius-md);
  }
  .modal-image-wrapper { min-height: 240px; }
  .modal-details { padding: var(--space-lg) var(--space-md); }
  .modal-purchase { gap: var(--space-sm); }
}
</style>
