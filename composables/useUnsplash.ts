import { createApi } from 'unsplash-js';

export const useUnsplash = () => {
  const config = useRuntimeConfig();
  const unsplashApi = createApi({
    accessKey: config.public.unsplashAccessKey,
  });

  function getTrendyPhotos(page: number, perPage: number) {
    return unsplashApi.photos.list({ page, perPage });
  }

  return { getTrendyPhotos };
};
