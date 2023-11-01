<script setup>
    import { computed } from 'vue';

    const props = defineProps({
      videoId: String,
      videoType: String
    });

    const videoUrlVimeo = computed(() => `https://player.vimeo.com/video/${props.videoId}`);
</script>

<template>
    <div class="video-embed mx-auto">
      <iframe
        :src="videoUrlVimeo"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen>
      </iframe>
    </div>
    
</template>

<style scoped>
    .video-embed {
    position: relative;
    padding-bottom: 50%;
    width: 150vh;
    height: 100%;
    overflow: hidden;
    max-width: 100%;
    align-items: center;
    }

    .video-embed iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    }
</style>