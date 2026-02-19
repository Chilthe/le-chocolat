<template>
  <div class="products-page">
    <!-- Page header -->
    <div class="page-header">
      <div class="container">
        <span class="section-label">Notre collection</span>
        <h1 class="page-title">Tous nos produits</h1>
        <p class="page-subtitle">
          {{ filteredProducts.length }} création{{ filteredProducts.length > 1 ? 's' : '' }} artisanale{{ filteredProducts.length > 1 ? 's' : '' }}
        </p>
      </div>
    </div>

    <div class="container products-layout">
      <!-- Sidebar (desktop) -->
      <aside class="sidebar">
        <ProductFilters @update="onFiltersUpdate" />
      </aside>

      <!-- Main content -->
      <div class="products-main">

        <!-- Mobile filter toggle -->
        <div class="mobile-filter-bar">
          <button class="mobile-filter-btn" @click="mobileFiltersOpen = !mobileFiltersOpen">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="8" y1="12" x2="20" y2="12" />
              <line x1="12" y1="18" x2="20" y2="18" />
            </svg>
            Filtres &amp; Tri
          </button>
          <span class="results-count">{{ filteredProducts.length }} résultat{{ filteredProducts.length > 1 ? 's' : '' }}</span>
        </div>

        <!-- Mobile filters panel -->
        <Transition name="mobile-menu">
          <div v-if="mobileFiltersOpen" class="mobile-filters-panel">
            <ProductFilters @update="onFiltersUpdate" />
          </div>
        </Transition>

        <!-- Empty state -->
        <div v-if="filteredProducts.length === 0" class="empty-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
          <h3>Aucun produit trouvé</h3>
          <p>Essayez de modifier vos filtres pour voir plus de résultats.</p>
        </div>

        <!-- Products by section -->
        <template v-else>
          <div
            v-for="section in productSections"
            :key="section.categoryId"
            :id="section.categoryId"
            class="product-section"
          >
            <div class="section-header-row">
              <div>
                <h2 class="product-section-title">{{ section.label }}</h2>
                <span class="product-section-count">{{ section.products.length }} produit{{ section.products.length > 1 ? 's' : '' }}</span>
              </div>
              <NuxtLink :to="`/produits#${section.categoryId}`" class="section-see-all">
                Voir tout
              </NuxtLink>
            </div>

            <div class="product-grid">
              <ProductCard
                v-for="product in section.products"
                :key="product.id"
                :product="product"
                @open="openModal"
              />
            </div>
          </div>
        </template>
      </div>
    </div>

    <!-- Product modal -->
    <ProductModal
      :product="selectedProduct"
      @close="selectedProduct = null"
    />
  </div>
</template>

<script setup lang="ts">
import { products, categories } from '~/data/products'
import type { Product } from '~/data/products'

const selectedProduct = ref<Product | null>(null)
const mobileFiltersOpen = ref(false)

interface Filters {
  categories: string[]
  priceMin: number
  priceMax: number
  sortBy: string
}

const filters = ref<Filters>({
  categories: [],
  priceMin: 0,
  priceMax: 999,
  sortBy: 'featured',
})

function onFiltersUpdate(newFilters: Filters) {
  filters.value = newFilters
}

function openModal(product: Product) {
  selectedProduct.value = product
  mobileFiltersOpen.value = false
}

const filteredProducts = computed(() => {
  let result = [...products]

  // Category filter
  if (filters.value.categories.length > 0) {
    result = result.filter(p => filters.value.categories.includes(p.category))
  }

  // Price filter
  result = result.filter(p =>
    p.price >= filters.value.priceMin &&
    p.price <= filters.value.priceMax
  )

  // Sort
  switch (filters.value.sortBy) {
    case 'price-asc':
      result.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      result.sort((a, b) => b.price - a.price)
      break
    case 'name-asc':
      result.sort((a, b) => a.name.localeCompare(b.name, 'fr'))
      break
    case 'featured':
    default:
      result.sort((a, b) => {
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return a.id - b.id
      })
      break
  }

  return result
})

// Group by category, only non-empty sections
const productSections = computed(() => {
  return categories
    .map(cat => ({
      categoryId: cat.id,
      label: cat.label,
      products: filteredProducts.value.filter(p => p.category === cat.id),
    }))
    .filter(s => s.products.length > 0)
})

// Scroll to hash on mount
onMounted(() => {
  const hash = window.location.hash
  if (hash) {
    const el = document.querySelector(hash)
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
    }
  }
})
</script>

<style scoped>
/* Page header */
.page-header {
  background: linear-gradient(180deg, var(--c-light) 0%, var(--c-cream) 100%);
  padding: var(--space-2xl) 0 var(--space-xl);
  border-bottom: 1px solid var(--c-border);
  text-align: center;
}

.page-title {
  margin-top: var(--space-sm);
  color: var(--c-dark);
}

.page-subtitle {
  margin-top: var(--space-sm);
  font-size: 0.9rem;
  color: var(--c-text-muted);
}

/* Layout */
.products-layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: var(--space-2xl);
  padding-top: var(--space-2xl);
  padding-bottom: var(--space-3xl);
  align-items: start;
}

.sidebar {
  display: block;
}

/* Mobile filter bar */
.mobile-filter-bar {
  display: none;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-md);
  background-color: var(--c-white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  margin-bottom: var(--space-md);
}

.mobile-filter-btn {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-dark);
}

.results-count {
  font-size: 0.82rem;
  color: var(--c-text-muted);
}

.mobile-filters-panel {
  margin-bottom: var(--space-lg);
}

/* Empty state */
.empty-state {
  text-align: center;
  padding: var(--space-3xl) var(--space-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
  color: var(--c-text-muted);
}

.empty-state h3 { color: var(--c-dark); font-size: 1.2rem; }
.empty-state p { font-size: 0.9rem; }

/* Product sections */
.product-section {
  scroll-margin-top: calc(var(--toolbar-height) + 24px);
  margin-bottom: var(--space-3xl);
}

.section-header-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: var(--space-xl);
  padding-bottom: var(--space-md);
  border-bottom: 2px solid var(--c-border);
}

.product-section-title {
  font-size: clamp(1.3rem, 2.5vw, 1.75rem);
  color: var(--c-dark);
}

.product-section-count {
  font-size: 0.8rem;
  color: var(--c-text-muted);
  font-weight: 400;
  margin-top: 4px;
  display: block;
}

.section-see-all {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--c-gold);
  transition: color var(--transition-fast);
  white-space: nowrap;
}
.section-see-all:hover { color: var(--c-gold-dark); }

/* Product grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
}

/* Responsive */
@media (max-width: 1024px) {
  .products-layout {
    grid-template-columns: 220px 1fr;
    gap: var(--space-xl);
  }
  .product-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .products-layout {
    grid-template-columns: 1fr;
  }
  .sidebar { display: none; }
  .mobile-filter-bar { display: flex; }
  .product-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .product-grid { grid-template-columns: 1fr; }
}

/* Transitions */
.mobile-menu-enter-active,
.mobile-menu-leave-active { transition: all 0.2s ease; }
.mobile-menu-enter-from,
.mobile-menu-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
