// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/styles/colormode.css','~/assets/styles/styles.css','~/assets/styles/fonts.css','~/assets/styles/transitions.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    "@nuxt/content"
  ],
  content: {
    documentDriven: true,
    experimental: {
      search: true
    },
    // Ensure search index is enabled
    search: {
      index: true,
    },
    navigation: {
      fields: ['author', 'publishedAt']
    }
  }
})