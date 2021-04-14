<template>
    <auth-layout title="Voya" subtitle="Let us worry about the details" :image="require('../../public/assets/images/map.svg')">
        <ion-grid>
            <ion-row class="ion-text-center">
                <ion-col>
                    <ion-button color="secondary" router-link="/register">
                        Register
                        <ion-icon slot="end" :src="require('../../public/assets/icon/newspaper-outline.svg')"></ion-icon>
                    </ion-button>
                </ion-col>
                <ion-col>
                    <ion-button color="secondary" router-link="/login">
                        Login
                        <ion-icon slot="end" :src="require('../../public/assets/icon/log-in-outline.svg')"></ion-icon>
                    </ion-button>
                </ion-col>
            </ion-row>
        </ion-grid>
    </auth-layout>
</template>

<script>
import {
    IonButton, IonIcon, IonGrid, IonRow, IonCol
} from '@ionic/vue';

export default {
    components: {
        IonButton, IonIcon, IonGrid, IonRow, IonCol
    }
}
</script>

