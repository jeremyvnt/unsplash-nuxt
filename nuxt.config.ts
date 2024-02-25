// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      unsplashAccessKey: process.env.UNSPLASH_ACCESS_KEY || undefined,
    },
  },
  plugins: ['~/plugins/vuetify'],
  build: {
    transpile: ['vuetify'],
  },
  components: true,
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    '@nuxt/test-utils/module',
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
