// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      datoKey: process.env.DATO_CMS_TOKEN,
    },
  },
  modules: ["@formkit/nuxt", "@hexdigital/nuxt-datocms", "@nuxtjs/tailwindcss"],
  css: ["~/assets/css/index.css"],
  datocms: {
    publicReadOnlyToken: process.env.DATO_CMS_TOKEN,
    endpoint: "https://graphql.datocms.com",
  },
  postcss: {
    plugins: {
      "postcss-mixins": {},
      "postcss-custom-media": {},
    },
  },
});
