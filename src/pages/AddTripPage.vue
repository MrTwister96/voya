<template>
    <blank-layout>
        <blank-center-card title="Add New Trip">
            <add-trip-form @create="create"></add-trip-form>
        </blank-center-card>
        <close-fab @action="close"></close-fab>
    </blank-layout>
</template>

<script>
import { loadingController, toastController } from '@ionic/vue';
import CloseFab from '@/components/buttons/CloseFab.vue';
import BlankCenterCard from '@/components/cards/BlankCenterCard.vue';
import AddTripForm from '@/components/trips/AddTripForm.vue';
import {  mapActions } from 'vuex';

export default {
    components: {
        CloseFab,
        BlankCenterCard,
        AddTripForm
    },
    methods: {
        ...mapActions({
            addTrip: 'addTrip'
        }),
        close(){
            this.$router.replace({ name: "Home" })
        },
        create(tripData){
            loadingController.create({
                message: 'Please Wait...'
            }).then((loading) => {
                loading.present();
                this.addTrip(tripData)
                .then(() => {
                    loading.dismiss();
                    this.$router.replace({ name: "Home" })
                }).catch(() => {
                    loading.dismiss();
                    toastController.create({
                        message: "Unable to add trip",
                        duration: 2000,
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