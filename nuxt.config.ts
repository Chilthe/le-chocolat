export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxt/icon'],
  css: ['~/assets/css/main.css'],
  vite: {
    server: {
      hmr: {
        host: 'localhost',
      },
      watch: {
        usePolling: true,
      },
    },
  },
  app: {
    head: {
      title: 'Le Chocolat',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Chocolaterie artisanale — Saveurs d\'exception, créées avec passion.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Lato:wght@300;400;700&display=swap'
        }
      ]
    }
  }
})
