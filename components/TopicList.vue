<script lang="ts">
import { defineComponent } from 'vue';
import { topics } from '~/fixtures/topics';
import type { Topic } from '~/fixtures/topics';

interface TopicListData {
  topics: Topic[];
  selectedValue?: string;
}

export default defineComponent({
  name: 'TopicList',
  data: (): TopicListData => ({ topics, selectedValue: undefined }),
  computed: {
    currentRoute(): string {
      const route = useRoute();
      return route.path;
    },
  },
  watch: {
    currentRoute(newRoute, previousRoute) {
      if (previousRoute !== newRoute) {
        this.selectedValue = newRoute;
      }
    },
  },
});
</script>

<template>
  <v-tabs align-tabs="start" show-arrows density="compact" v-model="selectedValue" :items="topics">
    <v-tab
      v-for="topic in topics"
      :key="topic?.href"
      :value="topic.href"
      :to="topic.href"
      class="text-body-2 text-capitalize text-grey-darken-1 w-full"
    >
      {{ topic.name }}
    </v-tab>
  </v-tabs>
</template>

<style scoped></style>
