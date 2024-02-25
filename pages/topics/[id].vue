<script setup lang="ts">
const route = useRoute();
const { getTopicPhotos } = useUnsplash();

const id = computed(() => route.params.id);

const getPhotos = (page: number, perPage: number) => getTopicPhotos(id.value, page, perPage);
</script>

<template>
  <div>
    <TopicHero :topicId="id" />
    <PhotoInfiniteGallery v-if="id" query-key="photos-topic" :queryFn="getPhotos" />
  </div>
</template>

<style scoped></style>
