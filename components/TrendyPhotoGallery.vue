<script lang="ts">
import { defineComponent } from 'vue';
import PhotoGallery from '~/components/PhotoGallery.vue';
import { trendyPhotos } from '~/fixtures/photos';

export default defineComponent({
  name: 'TrendyPhotoGallery',
  components: { PhotoGallery },
  data: () => ({
    photos: trendyPhotos,
  }),
});
</script>

<template>
  <PhotoGallery :photos="photos" />
</template>

<style scoped></style>
