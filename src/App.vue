<script setup>
  import Navbar from './components/Nav.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <Navbar></Navbar>

  <router-view></router-view>

  <Footer></Footer>
</template>

<style scoped>
</style>
