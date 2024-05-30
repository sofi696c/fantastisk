<script setup>
    import { RouterLink } from 'vue-router';
</script>

 
<template>
    <footer>
        
            <div class="column">
                <div class="logo">
                    <img class="gnist" src="../assets/gul-logo.png" alt="gult logo af dragen Gnist">
                </div>
                    <nav>
                        <ul class="nav-routes">
                            <li> <a href="#demo">Tilbage til toppen</a></li>
                        </ul>
                    </nav>
            </div>
            <
            
                    
                
        
        
    </footer>
</template>

<style lang="scss" scoped>
    footer {
        background-color: #2c3e50;
        height: auto
       
    }

   
    .column {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
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
        height: 20vh;
        width: auto;
        display: flex;
        padding-left: 50px;
    
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
        padding-right: 50px;
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
    .card{
        flex-direction: row;
        padding: 20px;
        justify-content: space-evenly;
    }
    }
</style>