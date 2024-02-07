<script lang="ts">
import { defineComponent } from 'vue';
import PhotoPreview from '~/components/PhotoPreview.vue';

export default defineComponent({
  name: 'PhotoGallery',
  components: { PhotoPreview },
  props: {
    photos: Array<any>,
  },
});
</script>

<template>
  <v-container>
    <v-row no-gutters>
      <div class="gallery">
        <PhotoPreview
          v-for="photo in photos"
          :key="photo.id"
          :imageUrl="photo.urls.regular"
          :id="photo.id"
          :firstName="photo?.user?.first_name"
          :lastName="photo?.user?.last_name || ''"
          :userId="photo?.user?.id"
          :userPicture="photo?.user?.profile_image?.small"
          :isAvailableHiring="photo?.user?.for_hire"
        />
      </div>
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
