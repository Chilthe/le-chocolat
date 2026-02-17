<template>
  <section class="featured-offer">
    <div class="featured-image-side">
      <img
        :src="product.image"
        :alt="product.name"
        class="featured-image"
        loading="lazy"
      />
    </div>

    <div class="featured-content-side">
      <div class="featured-content">
        <span class="section-label">Offre du moment</span>
        <h2 class="featured-title">{{ product.name }}</h2>
        <div class="featured-divider" />
        <p class="featured-desc">{{ product.longDescription }}</p>

        <div class="featured-meta">
          <span class="featured-price">{{ product.price }}&nbsp;€</span>
          <span class="featured-weight">{{ product.weight }}</span>
        </div>

        <div class="featured-actions">
          <button class="btn btn-outline-white" @click="emit('open', product)">
            Découvrir
          </button>
          <button class="btn btn-gold" @click="quickAdd">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            Ajouter au panier
          </button>
        </div>

        <span v-if="product.badge" class="featured-badge badge badge-gold">
          {{ product.badge }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Product } from '~/data/products'

const props = defineProps<{ product: Product }>()
const emit = defineEmits<{ open: [product: Product] }>()
const cartStore = useCartStore()

function quickAdd() {
  cartStore.addItem(props.product)
}
</script>

<style scoped>
.featured-offer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 520px;
  background-color: var(--c-dark);
  overflow: hidden;
}

.featured-image-side {
  position: relative;
  overflow: hidden;
}

.featured-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.featured-offer:hover .featured-image {
  transform: scale(1.04);
}

.featured-content-side {
  display: flex;
  align-items: center;
  padding: var(--space-2xl);
  background: linear-gradient(135deg, var(--c-dark) 0%, #5a2a12 100%);
  position: relative;
  overflow: hidden;
}

.featured-content-side::before {
  content: '';
  position: absolute;
  top: -60px;
  right: -60px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: rgba(196, 130, 26, 0.08);
  pointer-events: none;
}

.featured-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.featured-title {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  color: var(--c-white);
  line-height: 1.2;
}

.featured-divider {
  width: 40px;
  height: 2px;
  background-color: var(--c-gold);
}

.featured-desc {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.75;
  max-width: 420px;
}

.featured-meta {
  display: flex;
  align-items: baseline;
  gap: var(--space-md);
  padding: var(--space-md) 0;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.featured-price {
  font-family: var(--font-serif);
  font-size: 2rem;
  font-weight: 600;
  color: var(--c-white);
}

.featured-weight {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
}

.featured-actions {
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
}

.featured-badge {
  align-self: flex-start;
}

/* Responsive */
@media (max-width: 768px) {
  .featured-offer {
    grid-template-columns: 1fr;
  }
  .featured-image-side {
    min-height: 280px;
  }
  .featured-content-side {
    padding: var(--space-xl) var(--space-lg);
  }
  .featured-actions {
    flex-direction: column;
  }
  .featured-actions .btn {
    width: 100%;
  }
}
</style>
