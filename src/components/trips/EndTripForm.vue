<template>
    <form class="ion-padding" @submit.prevent="submitForm">
        <ion-list>
            <ion-item>
                <ion-label position="floating">Odometer End</ion-label>
                <ion-input type="number" required v-model="odoEnd" />
            </ion-item>
            <ion-button type="submit" expand="full" color="secondary">End</ion-button>
        </ion-list>
    </form>
</template>

<script>
import {
    IonList, IonItem, IonLabel,
    IonInput, IonButton
} from '@ionic/vue';

export default {
    emits: ['end'],
    components: {
        IonList, IonItem, IonLabel,
        IonInput, IonButton
    },
    data() {
        return {
            odoEnd: null
        }
    },
    methods: {
        submitForm() {
            this.$emit('end', this.odoEnd);
        }
    }
}
</script>