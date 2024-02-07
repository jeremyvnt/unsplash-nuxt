<script lang="ts">
import { defineComponent } from 'vue';
import TopicList from '~/components/TopicList.vue';
import Header from '~/components/Header.vue';

export default defineComponent({
  name: 'default',
  components: { Header, TopicList },
});
</script>

<template>
  <v-layout>
    <Header />
    <v-main>
      <v-col>
        <TopicList />
        <slot />
      </v-col>
    </v-main>
  </v-layout>
</template>

<style scoped></style>
