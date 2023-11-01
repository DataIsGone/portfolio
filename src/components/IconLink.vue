<template>
    <a class="icon" :href="link" target="_blank" rel="noopener noreferrer">
      <i :class="iconClass"></i>
    </a>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  // Define the props
  const props = defineProps({
    link: {
      type: String,
      required: true
    },
    iconClass: {
      type: String,
      required: true
    },
  });
  </script>
  
  <style scoped>
  i {
    /* padding: 0; */
    font-size: 24px;
    color: #000;
  }
  .icon {
    padding: 0px 10px;
  }
  </style>