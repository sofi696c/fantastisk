<template>
    <div class="card">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <button>
        Læs mere
      </button>
    </div>


    
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      description: String
    }
  }
  </script>
  
  <style scoped>
  .card {
    height: 25vh;
    width: 60vh;
    border: none;
    background-color: #E4E0D9;
    padding: 16px;
    margin: 16px;
    border-radius: 20px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.1);
  }


  h2{
    font-family: katari;
    color: #1B3F59;
  }

 p{
    font-family: open sans;
    color: #000000;
 }

 button{
    background-color: #1B3F59;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 15px;
    width: 30%;
    align-self: center;
    margin-top: 12.5%;
    font-family: open sans;
  }

  button:hover{
    background-color: #F1C40F;
    color: #000000;
    transition-duration: 0.4s;
  }

  </style>

