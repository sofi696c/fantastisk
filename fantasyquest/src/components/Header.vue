<template>
  <header :class="{ 'sticky': isSticky }">
    <nav class="container">
      <div class="porfolie">
        <div class="logo">
          <img class="gnist" src="../assets/gul-logo.png" alt="gult logo af dragen Gnist">
          <h1 class="logo">Fantasy Quest</h1>
        </div>
      </div>

      <ul class="nav-routes">
        <li><a href="https://fantasyfestival.dk/" target="_blank">Fantasyfestivalens hjemmeside</a></li>          
        <li><router-link @click="scrollToProgram">Se program</router-link></li>
        <li><a href="https://www.universe.com/explore?query=Quest&loc=Esbjerg%252C%2520Danmark&ll=55.476466%252C8.459405" target="_blank">Billetter</a></li>
      </ul>
      <Burger class="burger-component" />
    </nav>
    
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import anime from 'animejs';
import Burger from './Burger.vue';

   


const isSticky = ref(false);

// Function to handle scroll event
const handleScroll = () => {
  isSticky.value = window.scrollY > 0;
  
};

/* const scrollToProgram = () => {
  const programSection = document.getElementById('.program');
  if (programSection) {
    programSection.scrollIntoView({ behavior: 'smooth' });
  }
};
 */

// Listen for scroll event
window.addEventListener('scroll', handleScroll);

window.removeEventListener('scroll', handleScroll);

onMounted(() => {
  anime({
    targets: '.gnist',
    translateX: [-300, 0], // from 100 to 250
    delay: 500,
    direction: 'alternate',
    loop: false,
    duration: 3000,
  });
});
</script>

<style scoped>
header {
  background-color: #2c3e50;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  transition: 0.3s; /* Add smooth transition for sticky effect */
}

.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

nav {
  display: flex;
  align-items: center;
  padding: 25px 16px;
}

.gnist {
  width: 70px;
  height: auto;
  padding-right: 15px;
}

.logo {
  font-size: 30px;
  font-weight: 700;
  color: #F1C40F;
  font-family: 'Times New Roman', Times, serif;
  display: flex;
}

.nav-routes {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  gap: 12px;
  list-style: none;
  color: white;
}

.nav-routes a {
  text-decoration: none;
  color: inherit;
}

.nav-routes a:hover {
  color: #F1C40F;
  cursor: pointer;
  text-decoration: border;
  transition: 0.4s;
}

@media screen and (max-width: 768px) {
  .nav-routes {
    display: none;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px 16px;
  }
  
 
  

}

</style>
