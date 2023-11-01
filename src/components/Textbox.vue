<script setup>
import { ref, onMounted } from 'vue';
import { defineProps } from 'vue';

// Define the props
const props = defineProps({
  filepath: {
    type: String,
    required: true
  }
});

const allText = ref([]);

async function fetchData(path) {
  const response = await fetch(path);
  const data = await response.json();
  return Object.values(data).join('\n');
}

onMounted(async () => {
  allText.value = await fetchData(props.filepath);
});

</script>

<template>
  <div class="container mx-auto">
    Contents & Stop Times
    <div class="text-box" v-bind:style="{ whiteSpace: 'pre-line' }">
      {{ allText }}
    </div>
  </div>
  </template>

<style scoped>
  .text-box {
    border: 1px solid #000;
    padding: 10px;
    margin: 10px 0;
    box-sizing: border-box;
    align-items: center;
    max-height: 10vh;
    overflow: auto;
  }

</style>