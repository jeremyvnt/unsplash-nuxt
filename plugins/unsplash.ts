import { createApi } from 'unsplash-js';

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig();
  const unsplash = createApi({
    accessKey: config.public.unsplashAccessKey,
  });

  nuxtApp.provide('unsplash', unsplash);
});
