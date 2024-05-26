<template>
    <div class="card1">
        <div>
            <i class="fas fa-heart"></i>
        </div>

        <div class="card-middle">
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
        </div>

        <div>
            <button class="card1-btn">
                >
            </button>
        </div>

    </div>
  </template>


<script>
import '@fortawesome/fontawesome-free/css/all.css';

export default {
  props: {
    title: String,
    description: String
  }
}
</script>


<style>
.card1{
    height: 10vh;
    width: 60vh;
    border: none;
    background-color: #E4E0D9;
    padding: 16px;
    margin: 16px;
    border-radius: 20px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.1);
    display: flex;
    align-content: space-around;
  }


  .card-middle {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
    color: none;
    border: none;
    padding: 8px 16px;
    border-radius: 15px;
    width: 30%;
    align-self: center;
    margin-top: 12.5%;
    font-family: open sans;
  }

  button:hover{
    background-color: none;
    color: #F1C40F;
    transition-duration: 0.4s;
  }


</style>
