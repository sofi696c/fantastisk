<template>
    <main>
      <div id="demo" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">

          <div class="carousel-item active">
            <img src="../assets/b1.jpg" alt="img" class="d-block w-100">
            <div class="carousel-caption d-none d-md-block">
              <div class="text-box-left">
                <h3>Velkommen til Fantasy Quest Esbjerg</h3>
                <p class="p1">Her finder du alle nødvendige oplysninger om årets Fantasy Quest.
                    <br> Vælg mellem en udfordrende aftenversion eller en familievenlig dagversion under Fantasyfestivalen.
                    <br><br>Vi ser frem til at byde dig velkommen!
                </p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <img src="../assets/kæmperne.jpg" alt="img" class="d-block w-100">
            <div class="carousel-caption d-none d-md-block">
              <div class="text-box-left">
                <h3>Mød de fire kæmper</h3>
                <p class="p1">Kæmperne er fire imponerende, modige helte, der er udvalgt til at beskytte verden mod de onde kræfter.
                    <br><br>Bliv en del af årets Quest og støt dem!
                </p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <img src="../assets/b2.jpg" alt="img" class="d-block w-100">
            <div class="carousel-caption d-none d-md-block">
              <div class="text-box-left">
                <h3>Fantasy Quest Esbjerg gentages i 2024!</h3>
                <p class="p1">Efter sidste års succesfulde debut af Fantasy Quest, er vi tilbage med endnu en spændende event! Find alle de relevante oplysninger om årets Quest her.
                <br> <br> Vi glæder os til at se dig!
                </p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <img src="../assets/b3.jpg" alt="img" class="d-block w-100">
            <div class="carousel-caption d-none d-md-block">
              <div class="text-box-left">
                <h3>Velkommen til Fantasy Quest Esbjerg</h3>
                <p class="p1">Her på siden finder du alle relevante informationer om årets Quest.
                  <br> Vælg imellem en svær aftenudgave eller en familievenlig dagudgave under Fantasyfestivalen.
                  <br><br>Vi glæder os til at se dig!
                </p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <img src="../assets/b4.jpg" alt="img" class="d-block w-100">
            <div class="carousel-caption d-none d-md-block">
              <div class="text-box-left">
                <h3>Fantasy Quest Esbjerg gentages i 2024!</h3>
                <p class="p1">Efter sidste års succesfulde debut af Fantasy Quest, er vi tilbage med endnu en spændende event! Find alle de relevante oplysninger om årets Quest her.
                <br> <br> Vi glæder os til at se dig!
                </p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <img src="../assets/b5.jpg" alt="img" class="d-block w-100">
            <div class="carousel-caption d-none d-md-block">
              <div class="text-box-left">
                <h3>Velkommen til Fantasy Quest Esbjerg</h3>
                <p class="p1">Her på siden finder du alle relevante informationer om årets Quest.
                  <br> Vælg imellem en svær aftenudgave eller en familievenlig dagudgave under Fantasyfestivalen.
                  <br><br>Vi glæder os til at se dig!
                </p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <img src="../assets/b6.jpg" alt="img" class="d-block w-100">
            <div class="carousel-caption d-none d-md-block">
              <div class="text-box-left">
                <h3>Fantasy Quest Esbjerg gentages i 2024!</h3>
                <p class="p1">Efter sidste års succesfulde debut af Fantasy Quest, er vi tilbage med endnu en spændende event! Find alle de relevante oplysninger om årets Quest her.
                <br> <br> Vi glæder os til at se dig!
                </p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <img src="../assets/b7.jpg" alt="img" class="d-block w-100">
            <div class="carousel-caption d-none d-md-block">
              <div class="text-box-left">
                <h3>Velkommen til Fantasy Quest Esbjerg</h3>
                <p class="p1">Her på siden finder du alle relevante informationer om årets Quest.
                  <br> Vælg imellem en svær aftenudgave eller en familievenlig dagudgave under Fantasyfestivalen.
                  <br><br>Vi glæder os til at se dig!
                </p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <img src="../assets/b8.jpg" alt="img" class="d-block w-100">
            <div class="carousel-caption d-none d-md-block">
              <div class="text-box-left">
                <h3>Fantasy Quest Esbjerg gentages i 2024!</h3>
                <p class="p1">Efter sidste års succesfulde debut af Fantasy Quest, er vi tilbage med endnu en spændende event! Find alle de relevante oplysninger om årets Quest her.
                <br> <br> Vi glæder os til at se dig!
                </p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <img src="../assets/b9.jpg" alt="img" class="d-block w-100">
            <div class="carousel-caption d-none d-md-block">
              <div class="text-box-left">
                <h3>Velkommen til Fantasy Quest Esbjerg</h3>
                <p class="p1">Her på siden finder du alle relevante informationer om årets Quest.
                  <br> Vælg imellem en svær aftenudgave eller en familievenlig dagudgave under Fantasyfestivalen.
                  <br><br>Vi glæder os til at se dig!
                </p>
              </div>
            </div>
          </div>

        </div>
  
        
      </div>

      <div class="card-område">

        <h1>Se udvalgte kategorier</h1>
        <div id="app">
            <div v-for="card in cards" :key="card.id">
                <Card :title="card.title" :description="card.description" :moreText="card.moreText"/>
            </div>
        </div>

        <h1 id="programscroll" class="program">Se programmet for Questen</h1>
        <div id="app-1">
            <div v-for="card in card1s" :key="card.id">
                <Card1 :title="card.title" :description="card.description" :link="card.link" />
            </div>
        </div>

      </div>  

      <div class="figur-section">
        <h1>Historien</h1>
        <p class="historien"> ”I gamle dage sagde man... <br>
            ...at det onde ville komme fra havet. Gennem generationer blev den fortælling givet videre. 
            Man hørte den, da Esbjerg blev grundlagt i 1868. Man holdt altid øje med havet. Mod vest. <br>

            Så i Esbjerg byggede man et værn mod ondskaben. Noget der skulle holde øje med havet, 
            noget der skulle træde i karakter, hvis det gik galt. I 1995 blev det værn forstærket, 
            da skulpturerne ”Mennesket ved havet” blev skabt. Mens kunstneren byggede om dagen, arbejdede 
            troldmanden Gygaz den Vise om natten. <br>

            Gygaz åbnede en portal til kæmpernes verden. Her fandt han frem til fire gode kæmper, der meldte 
            sig frivilligt. De sagde farvel til deres familier og travede gennem portalen mod Esbjerg. Her 
            mødtes de med Gygaz. Luften sitrede af magi, og da de sidste ord i en magtfuld formular forlod 
            Gygaz’ læber, var de fire kæmper blevet ét med statuerne af de fire hvide mænd. På den måde kunne 
            de til evig tid holde øje med havet... <br> <br>


            ...Men så begyndte der at ske mystiske ting. Naturen blev syg. De gamle talte om ondskaben. 
            Om vogterne. En dag trak skyerne sig sammen, over havet mod vest, og der blev unaturligt mørkt. 
            Lyn flængede himlen. Man kunne se en stor, bevinget skabning på himlen. <br>

            De fire statuer rejste sig op, vogterne var blevet vækket, de gjorde sig klar og råbte. Råbene 
            kunne høres over hele landet, på tværs af portaler til andre verdener. ”Der er brug for helte i 
            Esbjerg!”, råbte de. <br>

            Det er tid til, at heltene samles. Det er tid til, at ondskaben skal bekæmpes. Det er tid til, 
            at portalerne lukkes." <br> <br>

            Det er tid til Fantasy Quest Esbjerg. Er du klar?
        </p>
        <div class="figur-container">
            <div id="app-2">
                <div v-for="figurCard in figurCards" :key="figurCard.id">
                    <FigurCard 
                    :title="figurCard.title" 
                    :description="figurCard.description"
                    :image="figurCard.image"
                    />
                </div>
            </div>
          </div>  

      </div>

    </main>
  </template>
  



  <script >
    import Card from '../components/Card.vue';
    import Card1 from '../components/Card1.vue';
    import FigurCard from '../components/FigurCard.vue';
    import imageOne from '../assets/Arkivaren.jpg';
    import imageTwo from '../assets/Gygaz.jpg';
    import imageThree from '../assets/Malice.jpg';
    import imageFour from '../assets/Gnist.jpg';
    import imageFive from '../assets/Havfruedronning.jpg';
    import imageSix from '../assets/Portal.jpg';
    

    export default {
    name: 'App',
    components: {
        Card,
        Card1,
        FigurCard
    },
    data() {
        return {
        cards: [
            { id: 1, title: 'Dags Quest', description: 'Familieudgaven af Fantasy Quest Esbjerg er et oplevelsesløb for hele familien, med tryk på oplevelse. For det er ikke et klassisk løb. Det handler om at leve sig ind i en anden verden, en magisk historie, hvor I sammen er på en ”quest” – en mission, en opgave, en jagt.' , moreText:' Her møder I magiske væsner, der stiller jer nogle opgaver og udfordringer undervejs mod målet, som I skal løse sammen for at gennemføre Questen. Sværhedsgraden er sænket, så børnene kan være med til at løse opgaverne. Men tag ikke fejl, der er brug for alle gode kræfter og samarbejdsevner, hvis I skal være med til at redde Esbjerg. Som en ekstra bonus kan I møde YouTuberen Lakserytteren undervejs i Questen rundt i Esbjergs gader.' },
            { id: 2, title: 'Aften Quest', description: 'Når tusmørket begynder at sænke sig over Esbjerg, skrues sværhedsgraden i AftenQuesten op. Nu skal der virkelig tænkes kreativt og løses opgaver, der kræver både mod, samarbejde og snilde for at I kan gennemføre questen og redde Esbjerg.', moreText: 'Er du vild med at løse gåder og knække koder, så må du ikke snyde dig selv for denne ultimative oplevelse. Vi sender dig og vennerne ud på jeres ultimative eventyr i Esbjergs gader og stræder. Her vil I blive nødt til at samarbejde og udtænke nye løsninger for at gennemføre AftenQuesten.' },
        ],
        card1s: [
            { id: 1, title: 'Dags Quest', description: 'Lørdag d. 14 September', link:"https://www.universe.com/events/family-quest-dagquest-tickets-C6PYX3" },
            { id: 2, title: 'Aften Quest', description: 'Lørdag d. 14 September', link:"https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4" },
        ],
        figurCards: [
    { 
        id: 1, 
        title: 'Arkivaren', 
        description: 'Akrivaren er den vise og lærde vogter af Esbjergs ældgamle skrifter og magiske artefakter. Han er en mester i fortryllelser og hemmeligheder, og hans dybe viden om fortidens magi er uundværlig i kampen mod ondskaben. Med sin enorme bogsamling og sin evne til at tyde gamle spådomme, rådgiver han heltene i deres færd.',
        image: imageOne   
      },
    { 
        id: 2, 
        title: 'Gygaz', 
        description: 'Gygaz den Vise er en mægtig troldmand og portalmester. Han er kendt for at have åbnet portalen til kæmpernes verden og for sin rolle i at bringe de fire vogtere til Esbjerg. Med sin dybe forståelse af magiske formularer og portaler er Gygaz en uundværlig beskytter, der bruger sin magi til at holde det onde i skak og vejlede heltene på deres rejse.',
        image: imageTwo
    },
    { 
        id: 3, 
        title: 'Malice', 
        description: 'Malice er en skyggefuld og ond kraft, der truer Esbjerg med sin mørke magi. Hun er en skikkelse fra en anden verden, drevet af et ønske om kaos og ødelæggelse. Med sine farlige fortryllelser og evnen til at manipulere skygger, er hun en formidabel fjende, som heltene må stå sammen for at bekæmpe.',
        image: imageThree
    },
    {
      id: 4,
      title: 'Gnist',
      description: 'Gnist er en unik skabning, der kan skifte mellem form som en mægtig drage og en modig mand. Som drage besidder han ildens magt, med skinnende skæl og flammende ånde. Som mand er han klog og taktisk, altid parat til at beskytte Esbjerg med sit brændende hjerte og sine magiske evner. Gnists dualitet gør ham til en uvurderlig allieret i kampen mod mørkets kræfter.',
      image: imageFour
    },
    {
      id: 5,
      title: 'Havfruedronningen',
      description: 'Havfruedronningen er hersker over havets dybder og beskytter af undervandsriget. Hun er en majestætisk og nådefuld skikkelse, med en mystisk skønhed og en kraftfuld stemme, der kan berolige storme og kalde på havets væsener. Hendes alliance med Esbjergs vogtere er afgørende for at holde havets ondskab i skak.',
      image: imageFive
    },
    {
      id: 6,
      title: 'Portal',
      description: 'Portal er en magisk åbning skabt af Gygaz, der forbinder Esbjerg med andre verdener. Den er emnet for årets quest, da det er gennem denne portal, at både hjælpere og trusler kan komme. Portalen er en kilde til både muligheder og farer, og heltene må finde en måde at kontrollere den på for at forhindre ondskabens kræfter i at trænge igennem.',
      image: imageSix
    }
    
]
        }
    }
    }

    

  </script>
  
  <style lang="scss" scoped>
  main {
    height: fit-content; 

  }
  
  /* Stilen for hele karousellen */
  .carousel {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  
  /* Overlay gradient på hver karouselbillede */
  .carousel-item::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    width: 150vh;
  }
  
  /* Positionering og styling af karouselltekster */
  .carousel-caption {
    position: absolute;
    bottom: 20%;
    left: 50px;
    display: inline-block;
  }
  
  /* Stilen for tekstboksen til venstre i karousellen */
  .text-box-left {
    text-align: left;
    color: #F1C40F;
    padding: 10px;
    width: auto;
    max-width: 500px;
    border-radius: 5px;
  }
  
  /* Stilen for overskriften i tekstboksen */
  .text-box-left h3 {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 10px;
    font-family: 'Times New Roman', Times, serif;
  }
  
  /* Stilen for teksten i tekstboksen */
  .text-box-left .p1 {
    font-size: 16px;
    line-height: 1.5;
    color: #F1C40F;
  }
  
  /* Størrelsen på billederne i karousellen */
  .w-100 {
    width: 100%;
    height: 100vh;
  }
.card-område {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 110vh;
}



h1 {
    font-size: 40px;
    font-weight: 700;
    color: #F1C40F;
    font-family: 'Times New Roman', Times, serif;
    font-style: italic;
    display: flex;
}

.figur-section {
    height: fit-content;
    width: auto;
    background-color: #2c3e50;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 10vh;
    
}

.historien {
    font-size: 22px;
    color: #E4E0D9;
    font-family: 'Times New Roman', Times, serif;
    margin: 5vh 30vh;
    font-style: italic;
}

  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 5vh 0;
  display: flex;
  justify-content: center;
}

#app-1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 5vh 0;
  display: flex;
  justify-content: center;
}

#app-2 {
font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 5vh 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  
}

.figur-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    
   
    
}

@media (max-width: 768px) {
    .historien {
        font-size: 16px;
        margin: 5vh 4vw;
    }
    
    

}
  

  </style>
  

