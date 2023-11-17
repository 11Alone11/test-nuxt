// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  image: {
    format: ["webp"],
    quality: 80,
    fit: "cover",
    loading: "lazy",
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  ssr: true,
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-swiper",
    "vuetify-nuxt-module",
  ],
});
