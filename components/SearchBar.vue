<script lang="ts">
import { defineComponent } from 'vue';
import { Routes } from '~/types/Routes';
import type { RouteLocation } from 'vue-router';

const defaultTextValue = undefined;

export default defineComponent({
  name: 'SearchBar',
  data: () => ({
    searchText: defaultTextValue,
  }),
  methods: {
    redirectToSearchPage() {
      if (this.searchText) {
        navigateTo(`${Routes.Search_Photos}/${this.searchText}`);
      }
    },
  },
  watch: {
    $route(to: RouteLocation, from: RouteLocation) {
      if (!to.path.match(Routes.Search_Photos)) {
        this.searchText = defaultTextValue;
      }
    },
  },
});
</script>

<template>
  <v-text-field
    v-model="searchText"
    @keydown.enter="redirectToSearchPage"
    density="compact"
    variant="solo-filled"
    label="Rechercher des images haute résolution"
    prepend-inner-icon="mdi-magnify"
    single-line
    hide-details
    rounded
    flat
  />
</template>

<style scoped></style>
