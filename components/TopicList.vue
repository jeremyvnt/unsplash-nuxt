<script lang="ts">
import { defineComponent } from 'vue';
import type { TopicVM } from '~/types/TopicVM';
import { Routes } from '~/types/Routes';

interface TopicListData {
  response?: any;
  selectedValue?: string;
}

const mapTopicApiResponseToTopic = (apiTopic: any): TopicVM => ({
  id: apiTopic.slug,
  name: apiTopic.title,
  href: `${Routes.Topics}/${apiTopic.slug}`,
});

export default defineComponent({
  name: 'TopicList',
  data: (): TopicListData => ({
    response: undefined,
    selectedValue: undefined,
  }),
  created() {
    this.getTopics();
  },
  computed: {
    currentRoute(): string {
      return this.$route.path;
    },
    topics(): TopicVM[] {
      if (!this.response) return [];
      return this.response.map(topic => mapTopicApiResponseToTopic(topic));
    },
  },
  methods: {
    getTopics(): void {
      this.$unsplash.topics
        .list({ page: 1, perPage: 20 })
        .then((response: any) => {
          this.response = response?.response?.results || [];
        })
        .catch((error: any) => {
          console.log('Error: ', error);
        });
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
  <v-tabs
    align-tabs="start"
    show-arrows
    density="compact"
    v-model="selectedValue"
    :items="topics"
    class="position-sticky"
  >
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
