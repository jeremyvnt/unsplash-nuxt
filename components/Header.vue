<script lang="ts">
import { defineComponent } from 'vue';
import SearchBar from '~/components/SearchBar.vue';
import { Routes } from '~/types/Routes';
import PerPageInput from '~/components/PerPageInput.vue';

export default defineComponent({
  name: 'Header',
  computed: {
    Routes() {
      return Routes;
    },
  },
  components: { PerPageInput, SearchBar },
});
</script>

<template>
  <v-app-bar :elevation="0" class="px-8">
    <v-row justify="space-between" align="center" class="flex-nowrap ga-2">
      <v-btn
        flat
        :ripple="false"
        rounded
        variant="text"
        :active="false"
        :to="Routes.Root"
        class="noOverlay mr-3"
      >
        <img src="/images/logo.svg" alt="unsplash" height="32" width="32" />
      </v-btn>
      <v-row align="center" class="flex-nowrap ga-2">
        <div style="min-width: 360px">
          <SearchBar />
        </div>
      </v-row>
      <v-row justify="end" align="center" class="flex-nowrap ga-2" no-gutters>
        <div style="min-width: 200px">
          <PerPageInput />
        </div>
        <v-btn variant="outlined" size="small" class="text-body-2 text-grey" disabled>
          Envoyer une photo
        </v-btn>
        <v-btn
          variant="plain"
          class="text-body-2 text-grey-darken-1 ma-0"
          :to="Routes.Login"
          disabled
        >
          Connexion
        </v-btn>
      </v-row>
    </v-row>
  </v-app-bar>
</template>

<style>
.noOverlay:hover > .v-btn__overlay {
  display: none;
}
</style>
