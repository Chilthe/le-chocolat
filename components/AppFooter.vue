<template>
  <footer class="footer">
    <div class="footer-inner container">
      <!-- Brand -->
      <div class="footer-brand">
        <div class="footer-logo">
          <span class="logo-sub">Le</span>
          <span class="logo-main">Chocolat</span>
        </div>
        <p class="footer-tagline">Chocolaterie artisanale<br>Saveurs d'exception, créées avec passion.</p>
      </div>

      <!-- Navigation -->
      <div class="footer-col">
        <h4 class="footer-heading">Nos créations</h4>
        <ul class="footer-links">
          <li v-for="cat in categories" :key="cat.id">
            <NuxtLink :to="`/produits#${cat.id}`" class="footer-link">{{ cat.label }}</NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Info -->
      <div class="footer-col">
        <h4 class="footer-heading">La boutique</h4>
        <ul class="footer-links">
          <li><a href="#" class="footer-link">À propos</a></li>
          <li><a href="#" class="footer-link">Notre savoir-faire</a></li>
          <li><a href="#" class="footer-link">Click & Collect</a></li>
          <li><a href="#" class="footer-link">Livraison</a></li>
          <li><a href="#" class="footer-link">Mentions légales</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div class="footer-col">
        <h4 class="footer-heading">Contact</h4>
        <address class="footer-address">
          <p>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            33 Avenue de l'Opéra<br>75002 Paris, France
          </p>
          <p>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
            </svg>
            +33 (0)1 42 XX XX XX
          </p>
          <p>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            contact@lechocolat.fr
          </p>
          <p class="footer-hours">
            <strong>Horaires</strong><br>
            Mar – Sam : 10h – 19h<br>
            Dimanche : 10h – 14h
          </p>
        </address>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p>&copy; {{ year }} Le Chocolat. Tous droits réservés.</p>
        <p>Fait avec <span aria-label="amour">♥</span> à Paris</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { categories } from '~/data/products'
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background-color: var(--c-dark);
  color: rgba(255, 255, 255, 0.75);
  margin-top: auto;
}

.footer-inner {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: var(--space-2xl);
  padding-top: var(--space-2xl);
  padding-bottom: var(--space-2xl);
}

/* Brand */
.footer-brand { padding-right: var(--space-xl); }

.footer-logo {
  display: flex;
  flex-direction: column;
  line-height: 1;
  margin-bottom: var(--space-md);
}

.logo-sub {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.15em;
}

.logo-main {
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 1.3rem;
  color: var(--c-white);
  letter-spacing: 0.06em;
}

.footer-tagline {
  font-size: 0.85rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.5);
}

/* Columns */
.footer-heading {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--c-gold);
  margin-bottom: var(--space-md);
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.footer-link {
  font-size: 0.87rem;
  color: rgba(255, 255, 255, 0.6);
  transition: color var(--transition-fast);
}
.footer-link:hover { color: var(--c-white); }

/* Address */
.footer-address {
  font-style: normal;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.footer-address p {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.87rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
}

.footer-address svg {
  flex-shrink: 0;
  margin-top: 3px;
  opacity: 0.7;
}

.footer-hours {
  font-size: 0.85rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.6);
  flex-direction: column !important;
  gap: 0 !important;
}

.footer-hours strong { color: rgba(255, 255, 255, 0.85); display: block; margin-bottom: 4px; }

/* Bottom bar */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: var(--space-md) 0;
}

.footer-bottom .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-bottom p {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.4);
}

/* Responsive */
@media (max-width: 960px) {
  .footer-inner {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-xl);
  }
  .footer-brand { grid-column: 1 / -1; padding-right: 0; }
}

@media (max-width: 560px) {
  .footer-inner { grid-template-columns: 1fr; }
  .footer-bottom .container { flex-direction: column; gap: var(--space-sm); text-align: center; }
}
</style>
