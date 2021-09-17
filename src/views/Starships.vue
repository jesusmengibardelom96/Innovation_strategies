<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-back-button default-href="/home"></ion-back-button>
        <ion-title>Starships</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-back-button default-href="/home"></ion-back-button>
          <ion-title size="large">Starships</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-list>
          <div v-for="starship in starships" :key="starship">
            <ion-item @click="showModal(starship.name, starship, 'starship')">
              <ion-label>{{ starship.name }}</ion-label>
            </ion-item>
          </div>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonList,
  IonItem,
  IonLabel,
  loadingController,
  modalController,
} from "@ionic/vue";
import { defineComponent } from "vue";
import axios from "axios";
import Modal from './modal.vue'

//Function to set in localStorage the api
function setSwAPIDataInLocal() {
  axios
    .get("https://swapi.dev/api/starships")
    .then((result) => {
      localStorage.setItem("starships", JSON.stringify(result.data.results));
    })
    .catch((err) => console.error(err));
}

//Function to get the data saved in localstorage
function getSwAPIData() {
  let starships = [];
  if (JSON.parse(localStorage.getItem("starships") as string) !== null) {
    starships = JSON.parse(localStorage.getItem("starships") as string);
  }
  return starships;
}

//Function to present loader in app
async function presentLoading() {
  const loading = await loadingController.create({
    cssClass: "my-custom-class",
    message: "Please wait, starships are entering...",
    duration: 2000,
  });

  loading.present();

  setTimeout(function () {
    loading.dismiss();
  }, 2000);
}

export default defineComponent({
  name: "Starships",
  data() {
    return {
      starships: [] || "",
    };
  },
  ionViewDidEnter() {
    setSwAPIDataInLocal();
    presentLoading();
    setTimeout(() => {
      this.starships = getSwAPIData();
    }, 2000);
  },
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonList,
    IonItem,
    IonLabel,
  },
  methods: {
    //Function to show a modal with the Object information
    async showModal(nameStarship: string, starship: {}, type: string) {
       const modal = await modalController
        .create({
          component: Modal,
          cssClass: 'my-custom-class',
          componentProps: {
            title: nameStarship,
            contentModal: starship,
            typeModal: type
          },
        })
      return modal.present();
    }
  }
});
</script>

<style scoped>
ion-back-button {
  float: left;
}

ion-title {
  float: left;
  height: 100%;
  margin: 12px;
}

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
</style>