<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: '[text]',
  computed: {
    path(): string {
      const route = useRoute();
      return route.path;
    },
    text(): string | string[] {
      const route = useRoute();
      return route.params.text;
    },
  },
});
</script>

<template>
  <div>
    <h1>Search photos</h1>
    <p v-if="text">Text: {{ text }}</p>
    <p v-if="path">Current route: {{ path }}</p>
  </div>
</template>

<style scoped></style>
