<script setup>
  import IconLink from './IconLink.vue'

  import { ref, onMounted } from 'vue';

  const bio = ref([]);
  const socialMedia = ref([]);

  onMounted(async () => {
    const smResponse = await fetch('src/assets/socialmedia.json');
    socialMedia.value = await smResponse.json();
  });
</script>

<template>
  <footer class="sticky-bottom">
    <span class="style-pixel-bold">Ryan Davis | </span>
    <IconLink v-for="(socialMedia, index) in socialMedia"
        :key="index"
        :link="socialMedia.url"
        :iconClass="socialMedia.icon">
    </IconLink>
  </footer>
</template>

<style scoped>
  footer {
    background-color: #f8f9fa;
    padding: 20px;
    text-align: center;
  }
</style>