<script setup>
    import Anchor from './AnchorLink.vue';

    import { ref, onMounted, computed } from 'vue';
    import { useRoute } from 'vue-router';
  
    const route = useRoute();
    const contents = ref({});
  
    onMounted(async () => {
        const response = await fetch('/projects.json');
        contents.value = await response.json();
    });
    
    const currProj = computed(() => {
        const projId = route.query.projId;
        return contents.value[projId] || 'Project Not Found';
    });
</script>

<template>
    <div id="nav-title">
        <span class="style-pixel">Navigation:</span>
    </div>
    <div class="nav-text">
        <span v-for="(sectionName, index) in currProj.projSection" :key="index">
            <Anchor :text=sectionName :targetId=sectionName></Anchor>
            <span v-if="index != currProj.projSection.length - 1">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        </span>
    </div>
</template>

<style scoped>
@media screen and (max-width: 575px) {
    #nav-title {
        padding-top: 0.5em;
    }
    .nav-text {
        padding: 0 0.75em;
        margin-top: 0.5em;
        margin-bottom: 0.25em;
    }
}
</style>