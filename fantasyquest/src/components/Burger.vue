<template>
    <div>
      <button @click="toggleMenu" class="burger-menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav v-if="menuOpen" class="menu">
        <ul class="burger-nav">
          <li><a href="https://fantasyfestival.dk/" target="_blank">Fantasyfestivalens hjemmeside</a></li>
          <li><router-link to="/mine-projekter">Se program</router-link></li>
          <li><a href="https://www.universe.com/explore?query=Quest&loc=Esbjerg%252C%2520Danmark&ll=55.476466%252C8.459405" target="_blank">Billetter</a></li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      }
    }
  };
  </script>
  
  <style scoped>
  .burger-menu {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 25px;
    background: transparent;
    border: none;
    padding: 0;
    z-index: 10;
  }

  
  .burger-menu span {
    width: 30px;
    height: 3px;
    background: white;
    border-radius: 5px;
   
  }

  
  
  .menu {
    position: absolute;
    top: 60px;
    right: 0;
    background: #2c3e50;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    width: 200px;
  }
  
  
  .menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .menu li {
    padding: 10px 20px;
  }
  
  .menu a {
    text-decoration: none;
    color: white;
    display: block;
  }
  
  .menu a:hover {
    color: #F1C40F;
  }
  
    @media (min-width: 768px) {
        .burger-menu {
        display: none;
        }
    
        .menu {
        position: static;
        background: none;
        box-shadow: none;
        width: auto;
        }
    
        .menu ul {
        display: flex;
        }
    
        .menu li {
        padding: 0 10px;
        }

        .burger-nav{
            display: none;
        }
    }
  </style>