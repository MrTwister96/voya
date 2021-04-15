<template>
    <ion-card class="v-center">
        <ion-card-header>
            <ion-card-title class="ion-text-center">{{ title }}</ion-card-title>
        </ion-card-header>

        <ion-card-content>
            <slot />
        </ion-card-content>
    </ion-card>
</template>

<script>
import {
    IonCard, IonCardContent,
    IonCardTitle, IonCardHeader
} from '@ionic/vue'

export default {
    props: ['title'],
    components: {
        IonCard, IonCardContent,
        IonCardTitle, IonCardHeader
    }
}
</script>

<style scoped>
.v-center {
    transform:  translateY(-50%);
    top: 50%;
}
</style>