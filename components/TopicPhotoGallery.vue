<script lang="ts">
import PhotoGallery from '~/components/PhotoGallery.vue';

interface TopicPhotoGalleryData {
  page: number;
  photos: any[];
}

export default defineNuxtComponent({
  name: 'TopicPhotoGallery',
  components: { PhotoGallery },
  props: {
    topicId: String,
  },
  data(): TopicPhotoGalleryData {
    return {
      page: 1,
      photos: [],
    };
  },
  created() {
    this.getTopicPhotos();
  },
  methods: {
    getTopicPhotos(): void {
      this.$unsplash.topics
        .getPhotos({ topicIdOrSlug: this.topicId, page: this.page, perPage: 15 })
        .then((response: any) => {
          const results: any[] = response?.response?.results || [];
          this.photos = [...this.photos, ...results];
        })
        .catch((error: any) => {
          console.log('Error: ', error);
        });
    },
    loadMore() {
      this.page += 1;
      this.getTopicPhotos();
    },
  },
});
</script>

<template>
  <PhotoGallery :photos="photos" @load-more="loadMore" />
</template>

<style scoped></style>
