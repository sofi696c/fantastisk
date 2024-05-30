<script setup>
    import { RouterLink } from 'vue-router';
</script>

 
<template>
    <footer>
        <div class="card">
            <div class="column">
                <div class="logo">
                    <img class="gnist" src="../assets/gul-logo.png" alt="gult logo af dragen Gnist">
                </div>
            </div>
            <div class="column">
                <div class="column">
                    <nav>
                        <ul class="nav-routes">
                            <li> <a href="#demo">Tilbage til toppen</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    footer {
        background-color: #2c3e50;
        height: auto
       
    }

    .card {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        height: auto;
        background-color:#2c3e50;
    }
    
    .column {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    h1{
        padding-bottom: 3vh;
        font-family: 'Times New Roman', Times, serif;
        font-size: 50px;
    }

    h4{
        padding-bottom: 1vh;
    }

    .gnist {
        height: 30vh;
        width: auto;
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
        transition: 0.4s; /* Moved transition here for smoother effect */
    }

    .nav-routes a:hover {
        color: #F1C40F;
        cursor: pointer;
        text-decoration: underline;
    }

    @media screen and (max-width: 768px) {
        .nav-routes {
            flex-direction: column;
            gap: 12px;
            list-style: none;
        }

        h1{
        padding-bottom: 3vh;
        font-family: 'Times New Roman', Times, serif;
        font-size: 24px;
    }

    .gnist {
        height: 10vh;
        width: auto;
    }
      
    }
</style>