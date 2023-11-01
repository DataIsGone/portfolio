<template>
  <button @click="navigate">{{ label }}</button>
</template>

<script setup>
import { ref } from 'vue';

// Props declaration
const props = defineProps({
  label: String,
  href: String,
});

const navigate = () => {
  window.location.href = props.href;
};
</script>

<style scoped>
    button {  
        border: none;
        outline: none;
        background-color: black;
        color: white;
        cursor: pointer;
        padding: 15px;
        border-radius: 10px;
        font-size: 18px;
    }
    button:hover {
        background-color: #ffb100;
        color: black;
    }
    
</style>