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
          <li><router-link to="/om-mig">Gå til Fantasyfestivalens hjemmeside</router-link></li>
          <li><router-link to="/mine-projekter">Se program</router-link></li>
          <li><router-link to="/kontakt">Billetter</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isSticky = ref(false);
  
  // Function to handle scroll event
  const handleScroll = () => {
    isSticky.value = window.scrollY > 0;
  };
  
  // Listen for scroll event
  window.addEventListener('scroll', handleScroll);
  </script>
  
  <style scoped>
  header {
    background-color: #1B3F59;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: 10vh;
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
    font-family: katari;
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
    text-decoration: underline;
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