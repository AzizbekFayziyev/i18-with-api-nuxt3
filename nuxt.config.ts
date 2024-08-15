// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    lazy: true,
    langDir: "locales/",
    strategy: "prefix_except_default",
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        iso: "en",
        name: "English",
        file: "eng.json",
      },
      {
        code: "uz",
        iso: "uz",
        name: "Uzbek",
        file: "uzb.json",
      },
      {
        code: "ru",
        iso: "ru",
        name: "Russian",
        file: "rus.js",
      },
    ],
  },
});
