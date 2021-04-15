<template>
    <ion-page>
        <ion-menu side="end" content-id="main-content" ref="menu">
            <ion-header>
                <ion-toolbar translucent>
                    <ion-title>Menu</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content>
                <ion-list>
                    <ion-item @click="this.$router.push({ name: 'Home' })">
                        <ion-icon slot="start" :src="require('../../../public/assets/icon/home-outline.svg')"></ion-icon>
                        <ion-label>Home</ion-label>
                    </ion-item>
                    <ion-item @click="this.$router.push({ name: 'Cars' })">
                        <ion-icon slot="start" :src="require('../../../public/assets/icon/car-outline.svg')"></ion-icon>
                        <ion-label>Cars</ion-label>
                    </ion-item>
                    <ion-item @click="logout">
                        <ion-icon slot="start" :src="require('../../../public/assets/icon/log-out-outline.svg')"></ion-icon>
                        <ion-label>Logout</ion-label>
                    </ion-item>
                </ion-list>
            </ion-content>

        </ion-menu>
        
        <div class="ion-page" id="main-content">
            <ion-header>
                <ion-toolbar>
                    <ion-buttons slot="start">
                        <ion-back-button :default-href="pageDefaultBackLink"></ion-back-button>
                    </ion-buttons>
                    <ion-title>{{ title }}</ion-title>
                    <ion-buttons slot="end">
                        <ion-menu-button></ion-menu-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>

            <ion-content>
                <slot />
            </ion-content>
        </div>
        
    </ion-page>
</template>

<script>
import {
    IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonBackButton,
    IonButtons, IonMenuButton, IonMenu, IonList, IonItem, IonIcon,
    IonLabel
} from '@ionic/vue'

import { mapActions } from 'vuex'

export default {
    props: ['title', 'pageDefaultBackLink'],
    components: {
        IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonBackButton,
        IonButtons, IonMenuButton, IonMenu, IonList, IonItem, IonIcon,
        IonLabel
    },
    methods: {
        ...mapActions({
            logout: 'logout'
        })
    }
}
</script>