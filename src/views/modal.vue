<template>
  <ion-header>
    <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
        <ion-buttons slot="end">
            <ion-button @click="modalCtrl.dismiss()">Close</ion-button>
        </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
      <ion-list v-if="typeModal == 'people'">
        <ion-item>
            <ion-label>
               <strong> Height:</strong> {{ content.height }}cm
            </ion-label>
        </ion-item>
        <ion-item>
            <ion-label>
               <strong> Mass:</strong> {{ content.mass }}Kg
            </ion-label>
        </ion-item>
        <ion-item>
            <ion-label>
               <strong> Eye color:</strong> {{ content.eye_color }}
            </ion-label>
        </ion-item>
        <ion-item>
            <ion-label>
                <strong> Birth year:</strong> {{ content.birth_year }}
            </ion-label>
        </ion-item>
        <ion-item>
            <ion-label>
                <strong> Hair color:</strong> {{ content.hair_color }}
            </ion-label>
        </ion-item>
        <ion-item>
            <ion-label>
                <strong> Skin color:</strong> {{ content.skin_color }}
            </ion-label>
        </ion-item>
        <ion-item>
            <ion-label>
                <strong> Gender:</strong> {{ content.gender }}
            </ion-label>
        </ion-item>
    </ion-list>
    <ion-list v-if="typeModal == 'starship'">
        <ion-item>
            <ion-label>
                <strong>Cost in credits:</strong> {{ content.cost_in_credits }}$
            </ion-label>
        </ion-item>
        <ion-item>
            <ion-label>
               <strong> Class:</strong> {{ content.starship_class }}
            </ion-label>
        </ion-item>
        <ion-item>
            <ion-label>
               <strong>Manufacturer:</strong> {{ content.manufacturer }}
            </ion-label>
        </ion-item>
        <ion-item>
            <ion-label>
               <strong> Passengers capacity:</strong> {{ content.passengers }} Passengers
            </ion-label>
        </ion-item>
        <ion-item>
            <ion-label>
               <strong> Max speed:</strong> {{ content.max_atmosphering_speed }} AMH
            </ion-label>
        </ion-item>
        <ion-item>
            <ion-label>
               <strong> Length:</strong> {{ content.length }} M
            </ion-label>
        </ion-item>
        <ion-item>
            <ion-label>
               <strong> HyperDrive rating:</strong> {{ content.hyperdrive_rating }}
            </ion-label>
        </ion-item>
        <ion-item>
            <ion-label>
               <strong> Cargo capacity:</strong> {{ content.cargo_capacity }} Kg
            </ion-label>
        </ion-item>
    </ion-list>
     <ion-list v-if="typeModal == 'planet'">
        <ion-item>
            <ion-label>
               <strong> Climate:</strong> {{ content.climate }}
            </ion-label>
        </ion-item>
        <ion-item>
            <ion-label>
               <strong> Diameter:</strong> {{ content.diameter }} M
            </ion-label>
        </ion-item>
        <ion-item>
            <ion-label>
              <strong> Gravity:</strong> {{ content.gravity }}
            </ion-label>
        </ion-item>
        <ion-item>
            <ion-label>
               <strong> Orbital period:</strong> {{ content.orbital_periond }} days
            </ion-label>
        </ion-item>
        <ion-item>
            <ion-label>
               <strong> Population:</strong> {{ content.population }}
            </ion-label>
        </ion-item>
        <ion-item>
            <ion-label>
                <strong>Rotation period:</strong> {{ content.rotation_period }} H
            </ion-label>
        </ion-item>
        <ion-item>
            <ion-label>
               <strong> Surface water:</strong> {{ content.surface_water }} M
            </ion-label>
        </ion-item>
        <ion-item>
            <ion-label>
               <strong> Terrain:</strong> {{ content.terrain }}
            </ion-label>
        </ion-item>
    </ion-list>
  </ion-content>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButtons, IonButton, modalController } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Modal',
  props: {
    title: { type: String, default: 'Super Modal' },
    contentModal: { type: String, default: 'Super Modal' },
    typeModal: { type: String, default: 'Super Modal' }
  },
  data() {
    return {
      content: this.contentModal,
      modalCtrl: modalController
    }
  },
  components: { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButtons, IonButton }
});
</script>