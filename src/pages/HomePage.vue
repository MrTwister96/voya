<template>
    <base-layout title="Home">
        <!-- Active Trip (If Any) -->
        <ion-list class="ion-padding" v-if="activeTrip != null">
            <ion-list-header>
                <h2>Active Trip</h2>
            </ion-list-header>
            <ion-item class="ion-activatable">
                <ion-label>
                    <h2>{{ activeTrip.description }}</h2>
                    <h2>Odometer Start: {{ activeTrip.odoStart }}</h2>
                </ion-label>
                <ion-icon slot="end" :src="require('../../public/assets/icon/stop-circle-outline.svg')" @click="endTrip"></ion-icon>
                <ion-ripple-effect></ion-ripple-effect>
            </ion-item>
        </ion-list>
        <!-- Trip List -->
        <trips-list :trips="trips"></trips-list>

        <ion-fab vertical="bottom" horizontal="center">
            <ion-fab-button color="success" @click="setOpen(true)">
                <ion-icon :src="require('../../public/assets/icon/add-outline.svg')"></ion-icon>
            </ion-fab-button>
        </ion-fab>


        <ion-modal :is-open="isOpenRef" @onDidDismiss="setOpen(false)">
            <ion-page>

                <ion-header translucent>
                    <ion-toolbar>
                        <ion-title>New Trip</ion-title>
                        <ion-buttons slot="end">
                            <ion-button @click="setOpen(false)">
                                <ion-icon
                                    slot="icon-only"
                                    :src="require('../../public/assets/icon/close-outline.svg')"
                                ></ion-icon>
                            </ion-button>
                        </ion-buttons>
                    </ion-toolbar>
                </ion-header>

                <ion-content>
                    <ion-list>
                        <ion-item v-if="activeTrip == null" class="ion-activatable" @click="addRoute('StartTrip')">
                            <ion-label>
                                Start a Trip
                            </ion-label>
                            <ion-ripple-effect></ion-ripple-effect>
                        </ion-item>
                        <ion-item v-else class="ion-activatable" @click="addRoute('EndTrip')">
                            <ion-label>
                                End Current Active Trip
                            </ion-label>
                            <ion-ripple-effect></ion-ripple-effect>
                        </ion-item>
                        <ion-item class="ion-activatable" @click="addRoute('AddTrip')">
                            <ion-label>
                                Add Trip Manually
                            </ion-label>
                            <ion-ripple-effect></ion-ripple-effect>
                        </ion-item>
                    </ion-list>
                </ion-content>
            </ion-page>

        </ion-modal>
    </base-layout>
</template>

<script>
import { ref } from 'vue';
import { mapState } from 'vuex';
import {
    IonModal, IonHeader, IonToolbar, IonTitle,
    IonButtons, IonButton, IonIcon, IonFab,
    IonFabButton, IonContent, IonPage, IonList,
    IonItem, IonLabel,IonRippleEffect, IonListHeader
} from '@ionic/vue';
import TripsList from '@/components/trips/TripsList.vue';

export default {
    components: {
        TripsList, IonModal, IonHeader, IonToolbar,
        IonTitle, IonButtons, IonButton, IonIcon,
        IonContent, IonPage, IonFab, IonFabButton,
        IonList, IonItem, IonLabel,IonRippleEffect,
        IonListHeader
    },
    methods: {
        addRoute(routeName){
            this.setOpen(false)
            this.$router.replace({ name: routeName })
        },
        endTrip(){
            this.$router.replace({ name: 'EndTrip' })
        }
    },
    computed: {
        ...mapState({
            trips: 'trips',
            activeTrip: 'activeTrip'
        })
    },
    setup() {
        const isOpenRef = ref(false)
        const setOpen = (state) => isOpenRef.value = state

        return {
            isOpenRef, setOpen
        }
    }
}
</script>