export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Hotel',
      meta: [
        { property: 'og:image', content: '/image/favicon.svg' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/image/logo.svg' }
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
})