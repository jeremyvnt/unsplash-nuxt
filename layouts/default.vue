<script lang="ts">
import { defineComponent } from 'vue';
import Header from '~/components/Header.vue';
import TopicList from '~/components/TopicList.vue';

export default defineComponent({
  name: 'default',
  components: { Header, TopicList },
});
</script>

<template>
  <v-layout>
    <Header />
    <v-main>
      <TopicList />
      <v-col>
        <slot />
      </v-col>
    </v-main>
  </v-layout>
</template>

<style scoped></style>
