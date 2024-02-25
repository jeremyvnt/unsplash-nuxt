<script setup lang="ts">
const route = useRoute();
const query = computed(() => route.params.query);

const { searchPhotos } = useUnsplash();
const getPhotos = (page: number, perPage: number) => searchPhotos(query.value, page, perPage);
</script>

<template>
  <div>
    <v-container>
      <h1 v-if="query" class="my-5">{{ query }}</h1>
    </v-container>
    <PhotoInfiniteGallery v-if="query" query-key="photos-search" :queryFn="getPhotos" />
  </div>
</template>

<style scoped></style>
