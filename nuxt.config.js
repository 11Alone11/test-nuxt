// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  image: {
    format: ["webp"],
    quality: 80,
    fit: "cover",
    loading: "lazy",
  },
  build: {
    // Анализ размера бандлов
    analyze:
      process.env.NODE_ENV === "production"
        ? false
        : {
            analyzerMode: "static",
            openAnalyzer: true,
          },

    // Минификация и оптимизация
    optimization: {
      splitChunks: {
        chunks: "all",
        automaticNameDelimiter: ".",
        name: "true",
        maxSize: 200000, // Максимальный размер каждого чанка (в байтах)
      },
    },

    // Оптимизация загрузки CSS
    extractCSS: true,

    // Продвинутое сжатие с Brotli и gzip
    compression: {
      brotli: true,
      gzip: true,
    },

    // Применение tree shaking и dead code elimination
    terser: {
      terserOptions: {
        compress: {
          drop_console: process.env.NODE_ENV === "production", // Удалять console.log в продакшене
          drop_debugger: process.env.NODE_ENV === "production", // Удалять debugger в продакшене
        },
      },
    },

    // Расширенные настройки Babel для оптимизации и поддержки старых браузеров
    babel: {
      presets({ isServer }) {
        return [
          [
            "@nuxt/babel-preset-app",
            {
              targets: isServer
                ? { node: "current" }
                : { browsers: ["last 2 versions"] },
              corejs: { version: 3 },
            },
          ],
        ];
      },
    },

    // Использование Webpack Bundle Analyzer
    extend(config, { isClient, isServer }) {
      if (isClient) {
        config.devtool = "source-map";
      }
      if (isServer) {
        config.devtool = "inline-source-map";
      }
    },
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
