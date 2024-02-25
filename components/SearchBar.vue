<script setup lang="ts">
import { Routes } from '~/types/Routes';

const route = useRoute();

const defaultTextValue = undefined;
const searchText = ref(defaultTextValue);

function redirectToSearchPage() {
  if (searchText.value) {
    navigateTo(`${Routes.Search_Photos}/${searchText.value}`);
  }
}

watch(
  () => route.path,
  (to: string) => {
    if (!to.match(Routes.Search_Photos)) {
      searchText.value = defaultTextValue;
    }
  },
);
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
