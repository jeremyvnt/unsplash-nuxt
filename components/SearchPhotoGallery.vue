<script lang="ts">
import PhotoGallery from '~/components/PhotoGallery.vue';

interface SearchPhotoGalleryData {
  page: number;
  photos: any[];
}
export default defineNuxtComponent({
  name: 'SearchPhotoGallery',
  components: { PhotoGallery },
  props: {
    query: String,
  },
  data(): SearchPhotoGalleryData {
    return {
      page: 1,
      photos: [],
    };
  },
  created() {
    this.getSearchPhotos();
  },
  methods: {
    getSearchPhotos(): void {
      this.$unsplash.search
        .getPhotos({ query: this.query, page: this.page, perPage: 15 })
        .then((response: any) => {
          const results = response?.response?.results || [];
          this.photos = [...this.photos, ...results] as any[];
        })
        .catch((error: any) => {
          console.log('Error: ', error);
        });
    },
    loadMore() {
      this.page += 1;
      this.getSearchPhotos();
    },
  },
});
</script>

<template>
  <PhotoGallery :photos="photos" @load-more="loadMore" />
</template>

<style scoped></style>
