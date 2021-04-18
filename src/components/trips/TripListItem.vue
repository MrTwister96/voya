<template>
    <ion-item class="ion-activatable">
        <ion-label>
            <h2>{{ fmtDate(trip.date) }}</h2>
            <p>{{ trip.description }} ({{ trip.totalDistance }}Km)</p>
        </ion-label>

        <ion-icon slot="end" :src="require('../../../public/assets/icon/trash-outline.svg')" @click="deleteTrip(trip.id)"></ion-icon>
        <ion-ripple-effect></ion-ripple-effect>
    </ion-item>
</template>

<script>
import { IonIcon, IonItem, IonLabel, loadingController, toastController, IonRippleEffect } from '@ionic/vue';
import { mapActions } from 'vuex';
import moment from 'moment';


export default {
    props: ['trip'],
    components: {
        IonItem, IonLabel, IonIcon, IonRippleEffect
    },
    methods: {
        ...mapActions({
            deleteById: 'deleteTrip'
        }),
        fmtDate(timestamp) {
            const date = new Date(timestamp.seconds * 1000)
            return moment(date).format('YYYY/MM/DD hh:mm A')
        },
        deleteTrip(id){
            loadingController.create({
                message: 'Please Wait...'
            }).then((loading) => {
                loading.present();
                this.deleteById(id)
                .then(() => {
                    loading.dismiss();
                    toastController.create({
                        message: "Deleted",
                        duration: 1000,
                        color: 'success',
                        position: 'top'
                    }).then((toast) => {
                        toast.present()
                    })
                }).catch(() => {
                    loading.dismiss();
                    toastController.create({
                        message: "Username or Password incorrect",
                        duration: 1000,
                        color: 'danger',
                        position: 'top'
                    }).then((toast) => {
                        toast.present()
                    })
                })
            });
        }
    }
}
</script>