<template>
    <div class="card1">
      <div class="icon-div">
        <font-awesome-icon class="fa-calendar" icon="calendar" />
      </div>
  
      <div class="card-middle">
        <h2>{{ title }}</h2>
        <p class="p-middle">{{ description }}</p>
      </div>
  
      <div class="button-div">
        <button class="card1-btn" @click="navigateToLink">
          <p class="p-btn">Se mere</p>
        </button>
        
      </div>
    </div>
    
  </template>
  
  <script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  

  export default {
    props: {
      title: String,
      description: String,
      link: String // Tilføj en link-prop
    },
    components: {
    FontAwesomeIcon
  },
    methods: {
      navigateToLink(){
        window.open(this.link, '_blank');
      }
    }
  }
  </script>
  
  <style scoped>

  .fa-calendar {
    font-size: 50px;
    color: #1B3F59;
  }
  .card1 {
    height: auto;
    width: auto;
    border: none;
    background-color: #E4E0D9;
    padding-left: 20px;
    padding-right: 20px;
    margin: 16px;
    border-radius: 20px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    align-content: space-around;
  }
  
  .card-middle {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
  }
  
  h2 {
    font-family: 'Times New Roman', Times, serif;
    color: #1B3F59;
  }
  
  p {
    font-family: open sans;
    color: #000000;
    margin-bottom: 0%;
  }
  
  .icon-div{
    display: flex;
    justify-content: space-around;
    align-items: center;
  
  }

  .button-div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
  .card1-btn{
    background-color: #1B3F59;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 15px;
    width: auto;
    align-self: center;
    font-family: open sans;
  }
  .p-btn{
    font-family: open sans;
    color: #ffffff;
    margin:0;
  
  }
  .card1-btn:hover {
    background-color: #F1C40F;
    color: #000000;
    transition-duration: 0.4s;
  }

  @media screen and (max-width: 768px){
    .card1 {
      flex-direction: column;
      padding: 20px;
    }

    .card-middle {
      padding: 0;
    }

    .p-middle{
      
      margin-bottom: 8px;
    }

    h2{
      margin-top: 8px;
    }
  }
  </style>
  