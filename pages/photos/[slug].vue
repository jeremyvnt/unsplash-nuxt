<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: '[slug]',
  computed: {
    path(): string {
      const route = useRoute();
      return route.path;
    },
    slug(): string | string[] {
      const route = useRoute();
      return route.params.slug;
    },
  },
});
</script>

<template>
  <div>
    <h1>Photo details</h1>
    <p v-if="slug">Slug: {{ slug }}</p>
    <p v-if="path">Current route: {{ path }}</p>
  </div>
</template>

<style scoped></style>
