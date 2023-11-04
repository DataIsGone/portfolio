import { ref, onMounted } from 'vue';

export function jsonDataFetcher(url) {
  const data = ref(null);
  const error = ref(null);

  onMounted(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        data.value = json;
      })
      .catch(err => {
        error.value = err;
      });
  });

  return { data, error };
}
