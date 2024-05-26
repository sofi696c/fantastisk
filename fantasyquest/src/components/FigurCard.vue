<template>
    <div class="figur-card">
      <img :src="imageSrc" alt="Figur Image" class="figur-image" />
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>

    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      description: String,
      imageSrc: String
    }
  }
  </script>
  
  <style scoped>
  .figur-card {
    height: fit-content;
    width: 38.5vh;
    border: none;
    background-color: #E4E0D9;
    padding: 16px;
    margin: 16px;
    border-radius: 20px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .figur-image {
    width: 100%;
    height: auto;
    border-radius: 20px 20px 0 0;
  }
  
  h2 {
    font-family: katari;
    color: #1B3F59;
    margin-top: 8px;
  }
  
  p {
    font-family: open sans;
    color: #000000;
  }
  
  button {
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
  
  button:hover {
    background-color: #F1C40F;
    color: #000000;
    transition-duration: 0.4s;
  }
  </style>
  