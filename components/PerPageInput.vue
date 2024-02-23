<script setup lang="ts">
const route = useRoute();
const { setQueryParam } = useQueryParams();

const perPage = ref(route.query['perPage']);

function setPerPageQueryParam() {
  if (parseInt(perPage.value, 10) <= 0) return;

  setQueryParam('perPage', perPage.value);
}
</script>

<template>
  <v-text-field
    type="number"
    min="1"
    v-model="perPage"
    @keydown.enter="setPerPageQueryParam"
    density="compact"
    variant="solo-filled"
    label="Éléments par page"
    prepend-inner-icon="mdi-counter"
    single-line
    hide-details
    rounded
    flat
  />
</template>

<style scoped></style>
