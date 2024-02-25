import { Basic } from 'unsplash-js/src/methods/topics/types';
import { Routes } from '~/types/Routes';

export interface TopicVM {
  id: string;
  name: string;
  href: string;
}

export const mapFromTopicBasic = (apiTopic: Basic): TopicVM => ({
  id: apiTopic.slug,
  name: apiTopic.title,
  href: `${Routes.Topics}/${apiTopic.slug}`,
});
