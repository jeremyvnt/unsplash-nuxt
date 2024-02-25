<script setup lang="ts">
import PhotoPreview from '~/components/photo/Preview.vue';
import type { Basic } from 'unsplash-js/src/methods/photos/types';
import type { ApiResponse } from 'unsplash-js/src/helpers/response';
import type { Photos } from 'unsplash-js/src/methods/search/types/response';
import type { InfiniteScrollSide, InfiniteScrollStatus } from 'vuetify/components';

interface InfinitePhotoGalleryProps {
  queryKey: string;
  perPage?: number;
  queryFn: (page: number, perPage: number) => Promise<ApiResponse<Partial<Photos>>>;
  selectedPhoto?: string;
}

interface InfinitePhotoGalleryEmits {
  (e: 'onPhotoClick', photoId: string): void;
}

interface LoadOptions {
  side: InfiniteScrollSide;
  done: (status: InfiniteScrollStatus) => void;
}

const route = useRoute();
const { queryKey, queryFn, perPage, selectedPhoto } = defineProps<InfinitePhotoGalleryProps>();
const emit = defineEmits<InfinitePhotoGalleryEmits>();

const defaultPerPage = 15;
const photos: Basic[] = reactive(new Set([]));
const perPageParam = computed(() => perPage || route.query['perPage'] || defaultPerPage);
const page = ref(1);

const { data, execute } = await useAsyncData(
  `${queryKey}:page=${page}&perPage=${perPage}`,
  () => queryFn(page.value, perPageParam.value),
  {
    transform: (response: ApiResponse<Partial<Photos>>) => {
      return response.response;
    },
    watch: [perPageParam],
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

async function nextPage({ done }: LoadOptions) {
  page.value += 1;

  try {
    await execute();
    done('ok');
  } catch (e) {
    done('error');
  }
}
const handleOnPhotoClick = id => emit('onPhotoClick', id);
</script>

<template>
  <v-container>
    <v-row no-gutters>
      <v-infinite-scroll
        min-height="1000px"
        height="100%"
        :items="photos"
        mode="intersect"
        @load="nextPage"
      >
        <div class="gallery">
          <PhotoPreview
            v-for="photo in photos"
            :key="photo?.id"
            :is-selected="selectedPhoto === photo?.id"
            :imageUrl="photo?.urls?.regular"
            :id="photo?.id"
            :firstName="photo?.user?.first_name"
            :lastName="photo?.user?.last_name || ''"
            :userId="photo?.user?.id"
            :userPicture="photo?.user?.profile_image?.small"
            :isAvailableHiring="photo?.user?.for_hire"
            @on-click="handleOnPhotoClick"
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
  padding-left: 5px;
  padding-right: 5px;
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
