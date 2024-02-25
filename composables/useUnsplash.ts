import { createApi } from 'unsplash-js';

export const useUnsplash = () => {
  const config = useRuntimeConfig();
  const unsplashApi = createApi({
    accessKey: config.public.unsplashAccessKey,
  });

  function getTrendyPhotos(page: number, perPage: number) {
    return unsplashApi.photos.list({ page, perPage });
  }

  function searchPhotos(query: string, page: number, perPage: number) {
    return unsplashApi.search.getPhotos({ query, page, perPage });
  }

  function getTopic(topicIdOrSlug: string) {
    return unsplashApi.topics.get({ topicIdOrSlug });
  }

  function getTopics(page: number, perPage: number) {
    return unsplashApi.topics.list({ page, perPage });
  }

  function getTopicPhotos(topicIdOrSlug: string, page: number, perPage: number) {
    return unsplashApi.topics.getPhotos({ topicIdOrSlug, page, perPage });
  }

  return { getTopic, getTopics, getTopicPhotos, getTrendyPhotos, searchPhotos };
};
