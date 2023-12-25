// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
                  @import "@/assets/scss/variables/index.scss";
                  @import "@/assets/scss/mixins/index.scss";
              `,
        },
      },
    },
  },
});
