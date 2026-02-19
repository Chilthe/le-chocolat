<template>
  <header class="toolbar" :class="{ 'toolbar--scrolled': scrolled }">
    <div class="toolbar-inner container">
      <!-- Left nav -->
      <nav class="toolbar-nav toolbar-nav--left" aria-label="Navigation principale gauche">
        <NuxtLink
          v-for="link in navLeft"
          :key="link.label"
          :to="link.to"
          class="nav-link"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- Center logo -->
      <NuxtLink to="/" class="toolbar-logo">
        <span class="logo-sub">Le</span>
        <span class="logo-main">Chocolat</span>
      </NuxtLink>

      <!-- Right nav + actions -->
      <div class="toolbar-right">
        <nav class="toolbar-nav toolbar-nav--right" aria-label="Navigation principale droite">
          <NuxtLink
            v-for="link in navRight"
            :key="link.label"
            :to="link.to"
            class="nav-link"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <div class="toolbar-actions">
          <!-- Account -->
          <button class="icon-btn" title="Mon compte" aria-label="Mon compte">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>

          <!-- Cart -->
          <button class="icon-btn cart-btn" title="Panier" aria-label="Panier" @click="cartStore.drawerOpen = true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span v-if="cartStore.totalItems > 0" class="cart-badge">{{ cartStore.totalItems }}</span>
          </button>
        </div>
      </div>

      <!-- Mobile menu button -->
      <button
        class="mobile-toggle"
        :class="{ 'mobile-toggle--open': mobileOpen }"
        @click="mobileOpen = !mobileOpen"
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition name="mobile-menu">
      <nav v-if="mobileOpen" class="mobile-menu">
        <NuxtLink
          v-for="link in [...navLeft, ...navRight]"
          :key="link.label"
          :to="link.to"
          class="mobile-link"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const cartStore = useCartStore()
const mobileOpen = ref(false)
const scrolled = ref(false)

const navLeft = [
  { label: 'Tablettes', to: '/produits#tablettes' },
  { label: 'Barres', to: '/produits#barres' },
  { label: 'Bonbons', to: '/produits#bonbons' },
]

const navRight = [
  { label: 'Confiseries', to: '/produits#confiseries' },
  { label: 'Gâteaux', to: '/produits#gateaux' },
  { label: 'Coffrets', to: '/produits#coffrets' },
]

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 40
  })
})
</script>

<style scoped>
.toolbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--toolbar-height);
  background-color: var(--c-white);
  border-bottom: 1px solid var(--c-border);
  transition: box-shadow var(--transition);
}

.toolbar--scrolled {
  box-shadow: var(--shadow-md);
}

.toolbar-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-lg);
}

/* Logo */
.toolbar-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-sub {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 0.75rem;
  color: var(--c-text-muted);
  letter-spacing: 0.12em;
}

.logo-main {
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 1.4rem;
  color: var(--c-dark);
  letter-spacing: 0.06em;
}

/* Navs */
.toolbar-nav {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
}

.nav-link {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--c-text-muted);
  transition: color var(--transition-fast);
  white-space: nowrap;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--c-dark);
}

/* Right section */
.toolbar-right {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
}

/* Actions */
.toolbar-actions {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.icon-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  color: var(--c-dark);
  transition: background-color var(--transition-fast), color var(--transition-fast);
}

.icon-btn:hover {
  background-color: var(--c-light);
  color: var(--c-gold);
}

.cart-badge {
  position: absolute;
  top: 2px;
  right: 2px;
  background-color: var(--c-gold);
  color: var(--c-white);
  font-size: 0.6rem;
  font-weight: 700;
  min-width: 16px;
  height: 16px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3px;
}

/* Mobile toggle */
.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 8px;
}

.mobile-toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background-color: var(--c-dark);
  transition: all var(--transition-fast);
  transform-origin: center;
}

.mobile-toggle--open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.mobile-toggle--open span:nth-child(2) { opacity: 0; }
.mobile-toggle--open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile menu */
.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: var(--c-white);
  border-bottom: 1px solid var(--c-border);
  padding: var(--space-md) var(--container-padding);
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  box-shadow: var(--shadow-md);
}

.mobile-link {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--c-text-muted);
  padding: var(--space-sm) 0;
  border-bottom: 1px solid var(--c-border);
}

.mobile-link:hover { color: var(--c-dark); }

.mobile-menu-enter-active,
.mobile-menu-leave-active { transition: all var(--transition-fast); }
.mobile-menu-enter-from,
.mobile-menu-leave-to { opacity: 0; transform: translateY(-8px); }

/* Responsive */
@media (max-width: 900px) {
  .toolbar-nav { display: none; }
  .mobile-toggle { display: flex; }
}

@media (max-width: 480px) {
  .toolbar-right { display: none; }
  .toolbar-actions { display: flex; }
  .toolbar-right .toolbar-actions { display: flex; }
}
</style>
