<template>
  <button v-if="props.href" @click="navigate">{{ label }}</button>
  <button v-else>{{ label }}</button>
</template>

<script setup>
import { ref } from 'vue';

// Props declaration
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  href: {
    type: String,
    required: false
  }
});

const navigate = () => {
  window.location.href = props.href;
};
</script>

<style scoped>
/* CSS */
button {
  font-size: 16px;
  /* letter-spacing: 2px; */
  text-decoration: none;
  font-family: 'Dogica Bold';
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  border: 3px solid;
  border-radius: 0;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

button:focus {
  outline: none !important;
  border: 3px solid;
  box-shadow: 0 0 2px 2px #ffb100;
}

button:active {
  box-shadow: 0px 0px 0px 0px;
  top: 5px;
  left: 5px;
  background: #ffb100;
}

@media (min-width: 768px) {
  button {
    padding: 0.25em 0.75em;
  }
}
    
</style>