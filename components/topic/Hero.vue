<script setup lang="ts">
import type { ApiResponse } from 'unsplash-js/src/helpers/response';
import type { Full } from 'unsplash-js/src/methods/topics/types';

interface TopicHeroProps {
  topicId: string;
}

const { getTopic } = useUnsplash();
const { topicId } = defineProps<TopicHeroProps>();
const imgUrl: string = ref('');
const title: string | undefined = ref(undefined);
const description: string | undefined = ref(undefined);

const { data } = await useAsyncData(`topic:${topicId}`, () => getTopic(topicId), {
  transform: (response: ApiResponse<Full>) => {
    return response.response;
  },
  watch: [topicId],
});

watch(
  data,
  newData => {
    title.value = newData.title;
    description.value = newData.description;
    imgUrl.value = newData.cover_photo.urls.regular;
  },
  { immediate: true },
);
</script>

<template>
  <v-parallax :src="imgUrl" class="parallax-container mb-4">
    <div class="d-flex flex-column fill-height justify-center text-white pa-10 parallax-opacity">
      <h1 v-if="title" class="text-h4 font-weight-bold mb-4">{{ title }}</h1>
      <h4 v-if="description" class="subheading font-weight-medium">{{ description }}</h4>
    </div>
  </v-parallax>
</template>

<style scoped>
.parallax-container {
  height: 500px;
}
.parallax-opacity {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
}
</style>
