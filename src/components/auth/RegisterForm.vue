<template>
    <form class="ion-padding" @submit.prevent="submitForm">
        <ion-list>
            <ion-item>
                <ion-label position="floating">Email</ion-label>
                <ion-input type="email" required v-model="enteredEmail" />
            </ion-item>
            <ion-item>
                <ion-label position="floating">Password</ion-label>
                <ion-input type="password" required v-model="enteredPassword" />
            </ion-item>
            <ion-button type="submit" expand="full" color="secondary">Submit</ion-button>
        </ion-list>
    </form>
</template>

<script>
import {
    IonList, IonItem, IonLabel,
    IonInput, IonButton
} from '@ionic/vue';

export default {
    emits: ['register'],
    components: {
        IonList, IonItem, IonLabel,
        IonInput, IonButton
    },
    data() {
        return {
            enteredEmail: "",
            enteredPassword: ""
        }
    },
    methods: {
        submitForm() {
            const userData = {
                email: this.enteredEmail,
                password: this.enteredPassword
            }

            this.$emit('register', userData);
        }
    }
}
</script>