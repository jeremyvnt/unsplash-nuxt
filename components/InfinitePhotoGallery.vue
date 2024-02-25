<script setup lang="ts">
import PhotoPreview from '~/components/PhotoPreview.vue';
import type { Basic } from 'unsplash-js/src/methods/photos/types';
import type { ApiResponse } from 'unsplash-js/src/helpers/response';
import type { Photos } from 'unsplash-js/src/methods/search/types/response';
import type { InfiniteScrollSide, InfiniteScrollStatus } from 'vuetify/components';

interface InfinitePhotoGalleryProps {
  queryKey: string;
  perPage?: number;
  queryFn: (page: number, perPage: number) => Promise<ApiResponse<Partial<Photos>>>;
}

interface LoadOptions {
  side: InfiniteScrollSide;
  done: (status: InfiniteScrollStatus) => void;
}

const route = useRoute();
const { queryKey, queryFn, perPage } = defineProps<InfinitePhotoGalleryProps>();

const defaultPerPage = 15;
const photos: Basic[] = reactive(new Set([]));
const perPageParam = computed(() => perPage || route.query['perPage'] || defaultPerPage);
const page = ref(1);

const { data, execute, status } = await useAsyncData(
  `${queryKey}:page=${page}&perPage=${perPage}`,
  () => queryFn(page.value, perPageParam.value),
  {
    transform: (response: ApiResponse<Partial<Photos>>) => {
      return response.response;
    },
    watch: [page, perPage],
  },
);

watch(data, newData => {
  (newData?.results || []).forEach(photo => photos.add(photo));
});

watch(
  () => route.query?.perPage,
  (newPerPage, previousPerPage) => {
    if (newPerPage !== previousPerPage) execute();
  },
);

async function load({ done }: LoadOptions) {
  page.value += 1;
  switch (status) {
    case 'pending':
      done('loading');
      break;
    case 'error':
      done('error');
      break;
    case 'success':
    default:
      //done('ok');
      setTimeout(() => done('ok'), 1500);
      break;
  }
}
</script>

<template>
  <v-container>
    <v-row no-gutters>
      <v-infinite-scroll
        min-height="1000px"
        height="100%"
        :items="photos"
        mode="intersect"
        @load="load"
      >
        <div class="gallery">
          <PhotoPreview
            v-for="photo in photos"
            :key="photo?.id"
            :imageUrl="photo?.urls?.regular"
            :id="photo?.id"
            :firstName="photo?.user?.first_name"
            :lastName="photo?.user?.last_name || ''"
            :userId="photo?.user?.id"
            :userPicture="photo?.user?.profile_image?.small"
            :isAvailableHiring="photo?.user?.for_hire"
          />
        </div>
      </v-infinite-scroll>
    </v-row>
  </v-container>
</template>

<style scoped>
.gallery {
  column-count: 3;
  column-gap: 24px;
}
@media (max-width: 900px) {
  .gallery {
    column-count: 2;
  }
}
@media (max-width: 600px) {
  .gallery {
    column-count: 1;
  }
}
</style>
