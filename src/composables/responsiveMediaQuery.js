import { ref, watchEffect } from 'vue';

export function responsiveMediaQuery(query) {
  const matches = ref(false);

  const updateMatches = () => {
    const mediaQuery = window.matchMedia(query);
    matches.value = mediaQuery.matches;
  };

  watchEffect(() => {
    const mediaQuery = window.matchMedia(query);
    updateMatches();
    mediaQuery.addEventListener('change', updateMatches);

    return () => {
      mediaQuery.removeEventListener('change', updateMatches);
    };
  });

  return matches;
}