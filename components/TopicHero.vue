<script lang="ts">
interface TopicHeroData {
  page: number;
  imgUrl: string;
  title: string;
  description: string;
}
export default defineNuxtComponent({
  name: 'TopicHero',
  props: {
    topicId: String,
  },
  data(): TopicHeroData {
    return {
      page: 1,
      imgUrl: '',
      title: '',
      description: '',
    };
  },
  created() {
    this.getTopic();
  },
  methods: {
    getTopic(): void {
      this.$unsplash.topics
        .get({ topicIdOrSlug: this.topicId })
        .then((response: any) => {
          this.title = response?.response?.title;
          this.description = response?.response?.description;
          this.imgUrl = response?.response?.cover_photo.urls.regular;
        })
        .catch((error: any) => {
          console.log('Error: ', error);
        });
    },
  },
});
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
