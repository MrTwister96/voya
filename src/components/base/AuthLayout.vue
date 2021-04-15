<template>
    <ion-page>
        <ion-content >
            <ion-card class="v-center">
                <ion-card-header>
                    <ion-card-title class="ion-text-center">{{ title }}</ion-card-title>
                    <ion-img class="ion-padding" :src="image" alt="Auth Page"></ion-img>
                    <ion-card-subtitle v-if="subtitle" class="ion-text-center">{{ subtitle }}</ion-card-subtitle>
                </ion-card-header>

                <ion-card-content>
                    <slot />
                </ion-card-content>
            </ion-card>
            <slot name="custom-end"></slot>
        </ion-content>
    </ion-page>
</template>

<script>
import {
    IonPage, IonContent, IonCard,
    IonCardContent, IonCardTitle, IonImg,
    IonCardSubtitle, IonCardHeader
} from '@ionic/vue'

export default {
    props: ['title', 'subtitle', 'image'],
    components: {
        IonPage, IonContent, IonCard,
        IonCardContent, IonCardTitle, IonImg,
        IonCardSubtitle, IonCardHeader
    }
}
</script>

<style scoped>
.v-center {
    transform:  translateY(-50%);
    top: 50%;
}
</style>