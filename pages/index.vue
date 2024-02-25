<script setup lang="ts">
const { getTrendyPhotos } = useUnsplash();
const { setQueryParam } = useQueryParams();
const route = useRoute();

const currentSelectedPhoto = computed(() => route.query['selected']);

const setSelectedPhotoQueryParam = (photoId: string) => {
  if (currentSelectedPhoto && currentSelectedPhoto.value === photoId)
    return setQueryParam('selected', undefined);
  return setQueryParam('selected', photoId);
};
</script>

<template>
  <div class="ma-4">
    <InfinitePhotoGallery
      query-key="photos-trendy"
      :queryFn="getTrendyPhotos"
      @on-photo-click="setSelectedPhotoQueryParam"
      :selected-photo="currentSelectedPhoto"
    />
  </div>
</template>
