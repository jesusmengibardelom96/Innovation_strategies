<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Swapi</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Swapi</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <ion-slides pager="true" :options="setUpSlideOpts()">
          <ion-slide router-link="/people">
            <ion-card>
              <ion-card-header>
                <img src="../../public/assets/grupo-de-personas.png">
                <ion-card-subtitle></ion-card-subtitle>
                <ion-card-title><h1>People</h1></ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-slide>
          <ion-slide router-link="/starships">
            <ion-card>
              <ion-card-header>
                <img src="../../public/assets/nave-espacial.png">
                <ion-card-subtitle></ion-card-subtitle>
                <ion-card-title><h1>Starships</h1></ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-slide>
          <ion-slide router-link="/planets">
            <ion-card>
              <ion-card-header>
                <img src="../../public/assets/jupiter.png">
                <ion-card-subtitle></ion-card-subtitle>
                <ion-card-title><h1>Planets</h1></ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-slide>
        </ion-slides>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSlides, IonSlide, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonSlides,
    IonSlide,
    IonCard, 
    IonCardHeader, 
    IonCardSubtitle, 
    IonCardTitle
  },
  methods: {
    //Function for set the slider options
    async setUpSlideOpts() {
      const slideOpts = {
        initialSlide: 1,
        speed: 400
      };
      return { slideOpts }
    }
  }
});


</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}

ion-card {
  width: 100%;
  height: 300px!important;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-slide, .swiper-pagination {
    bottom: 40px!important;
}
</style>