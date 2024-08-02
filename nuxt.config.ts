export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Hotel',
      meta: [
        { property: 'og:image', content: '/image/logo.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/image/logo.png' }
      ],
    },
  },

  modules: ['@nuxt/image', '@nuxtjs/tailwindcss'],

  image: {
    domains: ['localhost:3000'],
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  compatibilityDate: '2024-08-02',
})