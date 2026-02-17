<template>
  <div class="home">
    <!-- ===== HERO ===== -->
    <section class="hero">
      <div class="hero-bg">
        <img
          src="https://picsum.photos/seed/hero-chocolat/1920/1080"
          alt="Le Chocolat — Chocolaterie artisanale"
          class="hero-image"
        />
        <div class="hero-overlay" />
      </div>
      <div class="hero-content container">
        <span class="section-label">Chocolaterie artisanale</span>
        <h1 class="hero-title">
          L'art du chocolat<br>
          <em>selon nos maîtres</em>
        </h1>
        <p class="hero-subtitle">
          Des créations d'exception, élaborées à partir des meilleures fèves<br>
          de cacao sélectionnées aux quatre coins du monde.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/produits" class="btn btn-gold">
            Découvrir nos créations
          </NuxtLink>
          <NuxtLink to="/produits#coffrets" class="btn btn-outline-white">
            Nos coffrets cadeaux
          </NuxtLink>
        </div>
      </div>
      <div class="hero-scroll">
        <span>Défiler</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="1" y="1" width="14" height="22" rx="7" />
          <circle cx="8" cy="7" r="2" fill="currentColor" stroke="none">
            <animate attributeName="cy" values="7;15;7" dur="1.8s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </section>

    <!-- ===== BRAND STRIP ===== -->
    <div class="brand-strip">
      <div class="container">
        <div class="brand-strip-inner">
          <div class="brand-strip-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>Fèves grand cru</span>
          </div>
          <div class="brand-strip-sep" />
          <div class="brand-strip-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span>Fait avec passion</span>
          </div>
          <div class="brand-strip-sep" />
          <div class="brand-strip-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>Click &amp; Collect 24h</span>
          </div>
          <div class="brand-strip-sep" />
          <div class="brand-strip-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>33 Av. de l'Opéra, Paris</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ===== CAROUSEL ===== -->
    <section class="section carousel-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Sélection du moment</span>
          <h2 class="section-title">Nos créations phares</h2>
          <div class="divider" />
          <p class="section-description">
            De la tablette grand cru au coffret cadeau, chaque création est le fruit d'un savoir-faire
            transmis avec passion et d'ingrédients soigneusement sélectionnés.
          </p>
        </div>

        <ProductCarousel
          :products="carouselProducts"
          @open="openModal"
        />

        <div class="section-cta">
          <NuxtLink to="/produits" class="btn btn-outline">
            Voir tous nos produits
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ===== FEATURED OFFER ===== -->
    <FeaturedOffer
      :product="featuredProduct"
      @open="openModal"
    />

    <!-- ===== NEW ARRIVALS ===== -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Dernières créations</span>
          <h2 class="section-title">Nouveautés</h2>
          <div class="divider" />
        </div>

        <div class="product-grid">
          <ProductCard
            v-for="product in newProducts"
            :key="product.id"
            :product="product"
            @open="openModal"
          />
        </div>
      </div>
    </section>

    <!-- ===== BRAND STORY ===== -->
    <section class="brand-story section">
      <div class="container">
        <div class="brand-story-inner">
          <div class="brand-story-image">
            <img
              src="https://picsum.photos/seed/chocolaterie-atelier/600/700"
              alt="L'atelier Le Chocolat"
            />
          </div>
          <div class="brand-story-content">
            <span class="section-label">Notre histoire</span>
            <h2 class="brand-story-title">L'art de la chocolaterie artisanale</h2>
            <div class="divider" />
            <p>
              Fondée au cœur de Paris, notre chocolaterie perpétue une tradition
              d'excellence en sélectionnant les meilleures fèves de cacao à travers
              le monde — Madagascar, Pérou, Sao Tomé — pour créer des chocolats
              d'une finesse et d'une intensité inégalées.
            </p>
            <p>
              Chaque création est le résultat d'un travail minutieux : torrефaction,
              conchage et assemblage réalisés dans notre atelier parisien, pour vous
              offrir une expérience gustative authentique et mémorable.
            </p>
            <NuxtLink to="/produits" class="btn btn-primary brand-story-cta">
              Explorer nos créations
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <ProductModal
      :product="selectedProduct"
      @close="selectedProduct = null"
    />
  </div>
</template>

<script setup lang="ts">
import { products } from '~/data/products'
import type { Product } from '~/data/products'

const selectedProduct = ref<Product | null>(null)

function openModal(product: Product) {
  selectedProduct.value = product
}

// Carousel: first 9 products
const carouselProducts = computed(() => products.slice(0, 9))

// Featured: the bestseller coffret
const featuredProduct = computed(() =>
  products.find(p => p.id === 7) ?? products[0]
)

// New arrivals: products with 'Nouveauté' badge or last added
const newProducts = computed(() =>
  products.filter(p => p.badge === 'Nouveauté' || p.id >= 14).slice(0, 4)
)
</script>

<style scoped>
/* ===== HERO ===== */
.hero {
  position: relative;
  height: 92vh;
  min-height: 560px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(44, 24, 16, 0.78) 0%,
    rgba(61, 28, 10, 0.45) 60%,
    rgba(61, 28, 10, 0.2) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  max-width: 640px;
}

.hero-content .section-label {
  color: var(--c-gold);
}

.hero-title {
  font-size: clamp(2.4rem, 6vw, 4rem);
  color: var(--c-white);
  line-height: 1.15;
}

.hero-title em {
  font-style: italic;
  color: rgba(255, 255, 255, 0.75);
}

.hero-subtitle {
  font-size: clamp(0.9rem, 1.5vw, 1.05rem);
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.75;
}

.hero-actions {
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
  margin-top: var(--space-sm);
}

.hero-scroll {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

/* ===== BRAND STRIP ===== */
.brand-strip {
  background-color: var(--c-light);
  padding: var(--space-lg) 0;
  border-top: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
}

.brand-strip-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xl);
  flex-wrap: wrap;
}

.brand-strip-item {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-brown);
}

.brand-strip-item svg { color: var(--c-gold); }

.brand-strip-sep {
  width: 1px;
  height: 24px;
  background-color: var(--c-border);
}

/* ===== CAROUSEL SECTION ===== */
.carousel-section { background-color: var(--c-cream); }

.section-cta {
  display: flex;
  justify-content: center;
  margin-top: var(--space-2xl);
}

/* ===== PRODUCT GRID ===== */
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
}

/* ===== BRAND STORY ===== */
.brand-story { background-color: var(--c-light); }

.brand-story-inner {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: var(--space-2xl);
  align-items: center;
}

.brand-story-image {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.brand-story-image img {
  width: 100%;
  height: 520px;
  object-fit: cover;
}

.brand-story-content {
  display: flex;
  flex-direction: column;
}

.brand-story-content .divider {
  margin: var(--space-md) 0;
}

.brand-story-content p + p {
  margin-top: var(--space-md);
}

.brand-story-cta {
  margin-top: var(--space-xl);
  align-self: flex-start;
}

.brand-story-title {
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  color: var(--c-dark);
  margin-top: var(--space-sm);
}

/* Responsive */
@media (max-width: 1024px) {
  .product-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 768px) {
  .product-grid { grid-template-columns: repeat(2, 1fr); }
  .brand-story-inner { grid-template-columns: 1fr; }
  .brand-story-image img { height: 300px; }
  .brand-strip-sep { display: none; }
  .hero-actions { flex-direction: column; }
  .hero-actions .btn { width: 100%; }
}

@media (max-width: 480px) {
  .product-grid { grid-template-columns: 1fr; }
}
</style>
