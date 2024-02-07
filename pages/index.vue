<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div>
    <h1>Index</h1>
    <p>Current route: {{ route.path }}</p>
    <PhotosGallery />
  </div>
</template>
