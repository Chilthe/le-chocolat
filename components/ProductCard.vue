<template>
  <article class="product-card" @click="emit('open', product)" role="button" tabindex="0" @keydown.enter="emit('open', product)">
    <div class="card-image-wrapper">
      <img
        :src="product.image"
        :alt="product.name"
        class="card-image"
        loading="lazy"
      />
      <span v-if="product.badge" class="card-badge badge badge-gold">{{ product.badge }}</span>
      <div v-if="!product.inStock" class="card-oos">Rupture de stock</div>
      <div class="card-overlay">
        <span class="card-cta">Voir le produit</span>
      </div>
    </div>

    <div class="card-body">
      <span class="card-category">{{ product.categoryLabel }}</span>
      <h3 class="card-name">{{ product.name }}</h3>
      <p class="card-description">{{ product.description }}</p>
      <div class="card-footer">
        <span class="card-price">{{ product.price }}&nbsp;€</span>
        <span class="card-weight">{{ product.weight }}</span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Product } from '~/data/products'

defineProps<{ product: Product }>()
const emit = defineEmits<{ open: [product: Product] }>()
</script>

<style scoped>
.product-card {
  background-color: var(--c-white);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: transform var(--transition), box-shadow var(--transition);
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.product-card:hover .card-overlay {
  opacity: 1;
}

.product-card:hover .card-image {
  transform: scale(1.05);
}

/* Image */
.card-image-wrapper {
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background-color: var(--c-light);
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.card-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 1;
}

.card-oos {
  position: absolute;
  inset: 0;
  background-color: rgba(250, 247, 242, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--c-text-muted);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(61, 28, 10, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition);
}

.card-cta {
  color: var(--c-white);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border: 1.5px solid rgba(255, 255, 255, 0.8);
  padding: 8px 20px;
  border-radius: var(--radius-sm);
  backdrop-filter: blur(2px);
}

/* Body */
.card-body {
  padding: var(--space-md);
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 4px;
}

.card-category {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--c-gold);
}

.card-name {
  font-size: 1rem;
  font-weight: 600;
  color: var(--c-dark);
  line-height: 1.3;
  margin-top: 2px;
}

.card-description {
  font-size: 0.82rem;
  color: var(--c-text-muted);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: var(--space-sm);
  padding-top: var(--space-sm);
  border-top: 1px solid var(--c-border);
}

.card-price {
  font-family: var(--font-serif);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--c-dark);
}

.card-weight {
  font-size: 0.78rem;
  color: var(--c-text-muted);
  letter-spacing: 0.04em;
}
</style>
