<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: '[id]',
  computed: {
    path(): string {
      const route = useRoute();
      return route.path;
    },
    id(): string {
      return this.$route.params.id as string;
    },
  },
});
</script>

<template>
  <div>
    <TopicHero :topicId="id" />
    <TopicPhotoGallery :topicId="id" />
  </div>
</template>

<style scoped></style>
