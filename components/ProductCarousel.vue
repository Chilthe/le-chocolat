<template>
  <div class="carousel">
    <!-- Prev button -->
    <button
      class="carousel-btn carousel-btn--prev"
      :disabled="currentIndex === 0"
      @click="prev"
      aria-label="Produit précédent"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>

    <!-- Track viewport -->
    <div
      class="carousel-viewport"
      ref="viewportRef"
      @touchstart.passive="onTouchStart"
      @touchend.passive="onTouchEnd"
    >
      <div
        class="carousel-track"
        :style="{ transform: `translateX(-${currentIndex * itemWidth}px)` }"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="carousel-item"
        >
          <ProductCard :product="product" @open="emit('open', $event)" />
        </div>
      </div>
    </div>

    <!-- Next button -->
    <button
      class="carousel-btn carousel-btn--next"
      :disabled="currentIndex >= maxIndex"
      @click="next"
      aria-label="Produit suivant"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </button>

    <!-- Dots -->
    <div class="carousel-dots">
      <button
        v-for="i in totalPages"
        :key="i"
        class="carousel-dot"
        :class="{ 'carousel-dot--active': currentPage === i - 1 }"
        @click="goToPage(i - 1)"
        :aria-label="`Page ${i}`"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/data/products'

const props = defineProps<{ products: Product[] }>()
const emit = defineEmits<{ open: [product: Product] }>()

const currentIndex = ref(0)
const viewportRef = ref<HTMLElement | null>(null)
const itemWidth = ref(0)
const visibleCount = ref(3)

const maxIndex = computed(() => Math.max(0, props.products.length - visibleCount.value))
const currentPage = computed(() => currentIndex.value)
const totalPages = computed(() => Math.max(1, props.products.length - visibleCount.value + 1))

function next() {
  if (currentIndex.value < maxIndex.value) currentIndex.value++
}

function prev() {
  if (currentIndex.value > 0) currentIndex.value--
}

function goToPage(page: number) {
  currentIndex.value = Math.min(page, maxIndex.value)
}

function updateLayout() {
  const w = window.innerWidth
  visibleCount.value = w <= 480 ? 1 : w <= 768 ? 2 : 3
  if (viewportRef.value) {
    itemWidth.value = viewportRef.value.offsetWidth / visibleCount.value
  }
  // Reclampe l'index si on réduit le nombre visible
  currentIndex.value = Math.min(currentIndex.value, maxIndex.value)
}

// Swipe
let touchStartX = 0
let touchStartY = 0

function onTouchStart(e: TouchEvent) {
  touchStartX = e.touches[0].clientX
  touchStartY = e.touches[0].clientY
}

function onTouchEnd(e: TouchEvent) {
  const dx = e.changedTouches[0].clientX - touchStartX
  const dy = e.changedTouches[0].clientY - touchStartY
  // Ne déclenche que si le geste est majoritairement horizontal et suffisant
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
    if (dx < 0) next()
    else prev()
  }
}

onMounted(() => {
  updateLayout()
  window.addEventListener('resize', updateLayout)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateLayout)
})
</script>

<style scoped>
.carousel {
  position: relative;
  padding: 0 56px;
}

.carousel-viewport {
  overflow: hidden;
  width: 100%;
}

.carousel-track {
  display: flex;
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  touch-action: pan-y;
}

.carousel-item {
  flex: 0 0 calc(100% / 3);
  padding: 0 10px;
  box-sizing: border-box;
}

/* Nav buttons */
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: var(--radius-full);
  background-color: var(--c-white);
  color: var(--c-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-fast);
  z-index: 2;
  margin-top: -24px;
}

.carousel-btn:hover:not(:disabled) {
  background-color: var(--c-dark);
  color: var(--c-white);
  box-shadow: var(--shadow-lg);
}

.carousel-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.carousel-btn--prev { left: 0; }
.carousel-btn--next { right: 0; }

/* Dots */
.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: var(--space-lg);
}

.carousel-dot {
  width: 8px;
  height: 8px;
  border-radius: var(--radius-full);
  background-color: var(--c-border);
  transition: all var(--transition-fast);
}

.carousel-dot--active {
  background-color: var(--c-gold);
  width: 24px;
}

/* Responsive */
@media (max-width: 768px) {
  .carousel { padding: 0 44px; }
  .carousel-item { flex: 0 0 calc(100% / 2); }
}

@media (max-width: 480px) {
  .carousel { padding: 0 36px; }
  .carousel-item { flex: 0 0 100%; }
}
</style>
