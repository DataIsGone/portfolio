<script setup>
    import Anchor from './AnchorLink.vue';

    import { ref, onMounted, computed } from 'vue';
    import { useRoute } from 'vue-router';
  
    const route = useRoute();
    const contents = ref({});
  
    onMounted(async () => {
        const response = await fetch('/src/assets/projects.json');
        contents.value = await response.json();
    });
    
    const currProj = computed(() => {
        const projId = route.query.projId;
        return contents.value[projId] || 'Project Not Found';
    });
</script>

<template>
    <div>
        <span class="style-pixel">Navigation:</span>
    </div>
        <div>
            <span
            v-for="(sectionName, index) in currProj.projSection" 
            :key="index">
               <Anchor :text=sectionName :targetId=sectionName></Anchor>
               <span v-if="index != currProj.projSection.length - 1">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            </span>
        </div>
</template>

<style scoped>
@media screen and (max-width: 575px) {
    .section, .section-text {
        padding: 1em 0;
        margin: 1em;
    }
}
</style>