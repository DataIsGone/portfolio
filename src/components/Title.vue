<template>
  <div class="container-fluid intro-section py-5 no-space titleBar">
      <div class="container">
          <div class="row align-items-center">
              <!-- Image Column -->
              <div class="col-md-6 no-space">
                  <img :src="imgPath" alt="Profile Image" class="img-fluid">
              </div>
              <!-- Text Column -->
              <div class="col-md-6 no-space">
                  <h3 class="style-pixel-bold">Hey, I'm Ryan!</h3>
                  <h5>I'm a tech artist with a bit of experience in everything.</h5>
              </div>
          </div>
      </div>
  </div>
</template>
  
<script setup>
  import { ref } from 'vue';
  import taLogo from '/src/assets/img/ta_logo.png';

  const name = ref('Title');
  const imgPath = taLogo;
</script>
  
<style scoped>
  .titleBar {
    background-color: #000000;
  }

  img {
    margin: 0 auto;
  }

  .img-fluid {
    margin: 0 0 1.5em 0;
    padding: 10px 0;
  }

  h3, h5 {
    color: white;
  }

  .no-space {
    padding: 0 !important;
    margin: 0 !important;
  }

  @media screen and (max-width: 575px) {
    img {
      width: 60%;
      height: auto;
    }

    h5 {
      margin: 1em;
    }
  }
  </style>