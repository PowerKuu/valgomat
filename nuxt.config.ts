// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  //devtools: { enabled: true },
  components: [
      {
          path: '@/components',
          global: true,
      },
  ],
  /*
  experimental: {
    viewTransition: true
  }*/

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  }
})
