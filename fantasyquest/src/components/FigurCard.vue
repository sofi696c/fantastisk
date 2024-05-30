<template>
  
    <div class="figur-card">
      <img :src="image" alt="Figur Image" class="figur-image" />
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>

    
 
  </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      description: String,
      image: String
    }
  }
  </script>
  
  <style scoped>
  
  .figur-card {
    height: 95%;
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
    font-family: 'Times New Roman', Times, serif;
    color: #1B3F59;
    margin-top: 8px;
  }
  
  p {
    font-family: open sans;
    color: #000000;
  }
  
  

  @media (max-width: 768px) {
    
  .figur-card {
    width: calc(100% -32px); /* One card per row */
  }


    h2 {
        font-size: 1.2em;
      ;
    }

    p {
        font-size: 0.9em;
        
  

    }

}
  </style>
  