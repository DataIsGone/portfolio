<template>
    <div class="title style-pixel-bold">
        <h3>{{ secTitle }}</h3>
        <hr>
    </div>
</template>
  
<script setup>
    import { defineProps } from 'vue';
    
    const props = defineProps({
        secTitle: {
            type: String,
            required: true
        }
    });
</script>
  
<style scoped>
    .title {
        padding: 0em 5em;
        text-align: left;
    }

    @media (max-width: 575px) {
        .title {
            padding: 0em 0.5em;
        }
    }
</style>