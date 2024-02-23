<script setup lang="ts">
import type { Basic } from 'unsplash-js/src/methods/photos/types';
import type { ApiResponse } from 'unsplash-js/src/helpers/response';

const route = useRoute();

const defaultPerPage = 15;

const perPage = computed(() => route.query['perPage'] || defaultPerPage);
const page = ref(1);

const photos = reactive(new Set([]));

const { getTrendyPhotos } = useUnsplash();
const { data } = await useLazyAsyncData(
  `photos-trendy:page=${page}&perPage=${perPage}`,
  () => getTrendyPhotos(page.value, perPage.value),
  {
    transform: (
      response: ApiResponse<{
        results: Basic[];
        total: number;
      }>,
    ) => {
      return response.response;
    },
    watch: [page, perPage],
  },
);

watch(data, newData => {
  (newData?.results || []).forEach(photo => photos.add(photo));
});

function loadMore(): void {
  page.value += 1;
}
</script>

<template>
  <PhotoGallery :photos="photos" @load-more="loadMore" />
</template>

<style scoped></style>
