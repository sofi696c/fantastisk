<script setup>
  import { RouterView } from 'vue-router'
  import portHeader from './components/Header.vue';
  import portFooter from './components/Footer.vue';
  

 
</script>

<template>
  <div>
    <portHeader />
    <RouterView />
    <portFooter />
    
  </div>
  <Carousel />

</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

* {
  font-family: "Rubik", sans-serif, "Pacifico", cursive;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  scroll-behavior: smooth;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

</style>
