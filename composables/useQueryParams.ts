import { omit } from 'ramda';
import type { LocationQueryValue } from 'vue-router';

export const useQueryParams = () => {
  const route = useRoute();
  const router = useRouter();

  async function setQueryParam(name: string, value: LocationQueryValue): Promise<void> {
    const query = value ? { ...route.query, [name]: value } : omit([name], route.query);

    await router.push({
      path: route.path,
      query,
    });
  }

  return { setQueryParam };
};
