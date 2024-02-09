<script lang="ts">
import PhotoGallery from '~/components/PhotoGallery.vue';

interface TrendyPhotoGalleryData {
  page: number;
  photos: any[];
}
export default defineNuxtComponent({
  name: 'TrendyPhotoGallery',
  components: { PhotoGallery },
  data(): TrendyPhotoGalleryData {
    return {
      page: 1,
      photos: [],
    };
  },
  created() {
    this.getTrendyPhotos();
  },
  methods: {
    loadMore() {
      this.page += 1;
    },
    getTrendyPhotos(): void {
      this.$unsplash.photos
        .list({ page: this.page, perPage: 15 })
        .then((response: any) => {
          const results = response?.response?.results || [];
          this.photos = [...this.photos, ...results] as any[];
        })
        .catch((error: any) => {
          console.log('Error: ', error);
        });
    },
  },
  watch: {
    page(nextPage, previousPage) {
      if (nextPage > previousPage) {
        this.getTrendyPhotos();
      }
    },
  },
});
</script>

<template>
  <PhotoGallery :photos="photos" @load-more="loadMore" />
</template>

<style scoped></style>
