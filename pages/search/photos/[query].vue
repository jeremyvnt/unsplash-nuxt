<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: '[query]',
  computed: {
    query(): string {
      return this.$route.params.query as string;
    },
  },
});
</script>

<template>
  <div>
    <v-container>
      <h1 v-if="query" class="my-5">{{ query }}</h1>
    </v-container>
    <SearchPhotoGallery v-if="query" :query="query" />
  </div>
</template>

<style scoped></style>
