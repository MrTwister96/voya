<template>
    <form class="ion-padding" @submit.prevent="submitForm">
        <ion-list>
            <ion-item>
                <ion-label position="floating">Description</ion-label>
                <ion-input type="text" required v-model="description" />
            </ion-item>
            <ion-item>
                <ion-label position="floating">Odometer Start</ion-label>
                <ion-input type="number" required v-model="odoStart" />
            </ion-item>
            <ion-button type="submit" expand="full" color="secondary">Start</ion-button>
        </ion-list>
    </form>
</template>

<script>
import {
    IonList, IonItem, IonLabel,
    IonInput, IonButton
} from '@ionic/vue';

export default {
    emits: ['start'],
    components: {
        IonList, IonItem, IonLabel,
        IonInput, IonButton
    },
    data() {
        return {
            description: "",
            odoStart: null
        }
    },
    methods: {
        submitForm() {
            const tripData = {
                description: this.description,
                odoStart: this.odoStart
            }

            this.$emit('start', tripData);
        }
    }
}
</script>