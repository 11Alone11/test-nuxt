// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  ssr: true,
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@nuxt/image"],
});
