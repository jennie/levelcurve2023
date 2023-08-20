// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  // nitro: {
  //   prerender: {
  //     routes: ["/", "/thank-you"],
  //   },
  // },
  runtimeConfig: {
    public: {
      datoKey: process.env.DATO_CMS_TOKEN,
    },
  },
  image: {
    domains: ["datocms-assets.com"],
    provider: "ipx",
  },

  modules: [
    "@formkit/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "dayjs-nuxt",
  ],
  css: ["~/assets/css/index.css"],
  postcss: {
    plugins: {
      "postcss-mixins": {},
      "postcss-custom-media": {},
    },
  },
});
