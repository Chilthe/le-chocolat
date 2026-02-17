<template>
  <aside class="filters">
    <div class="filters-header">
      <h3 class="filters-title">Filtres</h3>
      <button v-if="hasActiveFilters" class="filters-reset" @click="reset">
        Réinitialiser
      </button>
    </div>

    <!-- Categories -->
    <div class="filter-group">
      <h4 class="filter-group-title">Catégorie</h4>
      <ul class="filter-list">
        <li v-for="cat in categories" :key="cat.id">
          <label class="filter-checkbox">
            <input
              type="checkbox"
              :value="cat.id"
              v-model="selectedCategories"
            />
            <span class="checkbox-box" />
            <span class="checkbox-label">{{ cat.label }}</span>
            <span class="checkbox-count">({{ categoryCounts[cat.id] || 0 }})</span>
          </label>
        </li>
      </ul>
    </div>

    <!-- Price range -->
    <div class="filter-group">
      <h4 class="filter-group-title">Prix</h4>
      <div class="price-range">
        <div class="price-inputs">
          <div class="price-input-group">
            <label>Min</label>
            <div class="price-input-wrapper">
              <input
                type="number"
                :min="0"
                :max="maxPrice"
                v-model.number="priceMin"
                class="price-input"
              />
              <span class="price-currency">€</span>
            </div>
          </div>
          <span class="price-separator">—</span>
          <div class="price-input-group">
            <label>Max</label>
            <div class="price-input-wrapper">
              <input
                type="number"
                :min="0"
                :max="999"
                v-model.number="priceMax"
                class="price-input"
              />
              <span class="price-currency">€</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- In stock only -->
    <div class="filter-group">
      <label class="filter-checkbox">
        <input type="checkbox" v-model="inStockOnly" />
        <span class="checkbox-box" />
        <span class="checkbox-label">En stock uniquement</span>
      </label>
    </div>

    <!-- Sort -->
    <div class="filter-group">
      <h4 class="filter-group-title">Trier par</h4>
      <div class="sort-options">
        <button
          v-for="opt in sortOptions"
          :key="opt.value"
          class="sort-btn"
          :class="{ 'sort-btn--active': sortBy === opt.value }"
          @click="sortBy = opt.value"
        >
          {{ opt.label }}
        </button>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { categories, products } from '~/data/products'

const emit = defineEmits<{
  update: [filters: {
    categories: string[]
    priceMin: number
    priceMax: number
    inStockOnly: boolean
    sortBy: string
  }]
}>()

const maxPrice = Math.max(...products.map(p => p.price))

const selectedCategories = ref<string[]>([])
const priceMin = ref(0)
const priceMax = ref(maxPrice)
const inStockOnly = ref(false)
const sortBy = ref('featured')

const sortOptions = [
  { value: 'featured', label: 'Mis en avant' },
  { value: 'price-asc', label: 'Prix croissant' },
  { value: 'price-desc', label: 'Prix décroissant' },
  { value: 'name-asc', label: 'Nom A–Z' },
]

const hasActiveFilters = computed(() =>
  selectedCategories.value.length > 0 ||
  priceMin.value > 0 ||
  priceMax.value < maxPrice ||
  inStockOnly.value ||
  sortBy.value !== 'featured'
)

const categoryCounts = computed(() => {
  const counts: Record<string, number> = {}
  for (const p of products) {
    counts[p.category] = (counts[p.category] || 0) + 1
  }
  return counts
})

function reset() {
  selectedCategories.value = []
  priceMin.value = 0
  priceMax.value = maxPrice
  inStockOnly.value = false
  sortBy.value = 'featured'
}

watch(
  [selectedCategories, priceMin, priceMax, inStockOnly, sortBy],
  () => {
    emit('update', {
      categories: selectedCategories.value,
      priceMin: priceMin.value,
      priceMax: priceMax.value,
      inStockOnly: inStockOnly.value,
      sortBy: sortBy.value,
    })
  },
  { deep: true }
)
</script>

<style scoped>
.filters {
  position: sticky;
  top: calc(var(--toolbar-height) + 24px);
  padding: var(--space-lg);
  background-color: var(--c-white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  max-height: calc(100vh - var(--toolbar-height) - 48px);
  overflow-y: auto;
}

.filters-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.filters-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--c-dark);
}

.filters-reset {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-gold);
  transition: color var(--transition-fast);
}
.filters-reset:hover { color: var(--c-gold-dark); }

/* Groups */
.filter-group {
  padding-top: var(--space-md);
  border-top: 1px solid var(--c-border);
}

.filter-group-title {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--c-text-muted);
  margin-bottom: var(--space-md);
}

/* Checkbox */
.filter-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.filter-checkbox {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  cursor: pointer;
}

.filter-checkbox input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.checkbox-box {
  width: 16px;
  height: 16px;
  border-radius: var(--radius-sm);
  border: 1.5px solid var(--c-border);
  flex-shrink: 0;
  transition: all var(--transition-fast);
  position: relative;
  background-color: var(--c-white);
}

.filter-checkbox input:checked + .checkbox-box {
  background-color: var(--c-dark);
  border-color: var(--c-dark);
}

.filter-checkbox input:checked + .checkbox-box::after {
  content: '';
  position: absolute;
  left: 4px;
  top: 1px;
  width: 5px;
  height: 9px;
  border: 2px solid var(--c-white);
  border-top: none;
  border-left: none;
  transform: rotate(45deg);
}

.checkbox-label {
  font-size: 0.87rem;
  color: var(--c-text);
  flex: 1;
}

.checkbox-count {
  font-size: 0.75rem;
  color: var(--c-text-muted);
}

/* Price */
.price-inputs {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.price-input-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.price-input-group label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-text-muted);
}

.price-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.price-input {
  width: 100%;
  padding: 6px 24px 6px 8px;
  border: 1.5px solid var(--c-border);
  border-radius: var(--radius-sm);
  font-size: 0.87rem;
  color: var(--c-dark);
  background-color: var(--c-white);
  font-family: var(--font-sans);
  transition: border-color var(--transition-fast);
}

.price-input:focus {
  outline: none;
  border-color: var(--c-gold);
}

.price-currency {
  position: absolute;
  right: 8px;
  font-size: 0.78rem;
  color: var(--c-text-muted);
}

.price-separator {
  color: var(--c-text-muted);
  flex-shrink: 0;
  font-size: 0.8rem;
  margin-top: 20px;
}

/* Sort */
.sort-options {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.sort-btn {
  text-align: left;
  padding: 8px 12px;
  border-radius: var(--radius-sm);
  font-size: 0.87rem;
  color: var(--c-text);
  transition: all var(--transition-fast);
  border: 1.5px solid transparent;
}

.sort-btn:hover {
  background-color: var(--c-light);
  color: var(--c-dark);
}

.sort-btn--active {
  background-color: var(--c-dark);
  color: var(--c-white);
  border-color: var(--c-dark);
}
</style>
