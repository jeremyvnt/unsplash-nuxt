<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: '[id]',
  computed: {
    path(): string {
      const route = useRoute();
      return route.path;
    },
    id(): string | string[] {
      const route = useRoute();
      return route.params.id;
    },
  },
});
</script>

<template>
  <div>
    <h1>Topic: {{ id }}</h1>
    <p v-if="path">Current route: {{ path }}</p>
  </div>
</template>

<style scoped></style>
