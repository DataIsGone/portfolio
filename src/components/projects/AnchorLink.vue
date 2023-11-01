<script setup>
    import { computed, defineProps } from 'vue';

    const props = defineProps({
        text: {
            type: String,
            required: true
        },
        targetId: {
            type: String,
            required: true
        }
    });

    const computedHref = computed(() => `#${props.targetId}`);
</script>

<template>
    <a :href="computedHref" class="anchor-link">{{ text }}</a>
</template>
  
<style scoped>
    .anchor-link {
        color: blue;
        text-decoration: underline;
    }
</style>