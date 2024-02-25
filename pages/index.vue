<script setup lang="ts">
const { getTrendyPhotos } = useUnsplash();
</script>

<template>
  <div class="ma-4">
    <InfinitePhotoGallery query-key="photos-trendy" :queryFn="getTrendyPhotos" />
  </div>
</template>
