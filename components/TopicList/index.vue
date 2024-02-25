<script setup lang="ts">
import type { ApiResponse } from 'unsplash-js/src/helpers/response';
import type { Basic } from 'unsplash-js/src/methods/topics/types';
import type { TopicVM } from '~/components/TopicList/TopicVM';
import { mapFromTopicBasic } from '~/components/TopicList/TopicVM';

const route = useRoute();
const { getTopics } = useUnsplash();

const selectedValue: string | undefined = ref(undefined);
const topics: TopicVM[] = ref([]);

const { data } = await useAsyncData('topics', () => getTopics(1, 20), {
  transform: (response: ApiResponse<{ results: Basic[]; total: number }>) => {
    return response.response;
  },
});

watch(
  data,
  newData => {
    topics.value = (newData?.results || []).map(topic => mapFromTopicBasic(topic));
  },
  { immediate: true },
);

watch(
  () => route.path,
  (to: string, from: string) => {
    if (to !== from) {
      selectedValue.value = to;
    }
  },
);
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
