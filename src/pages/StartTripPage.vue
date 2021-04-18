<template>
    <blank-layout>
        <blank-center-card title="Start a Trip">
            <start-trip-form @start="start"></start-trip-form>
        </blank-center-card>
        <close-fab @action="close"></close-fab>
    </blank-layout>
</template>

<script>
import { mapActions } from 'vuex';
import BlankCenterCard from '@/components/cards/BlankCenterCard.vue';
import CloseFab from '@/components/buttons/CloseFab.vue';
import StartTripForm from '@/components/trips/StartTripForm.vue';

export default {
    components: {
        CloseFab, BlankCenterCard, StartTripForm
    },
    methods: {
        ...mapActions({
            startTrip: 'startTrip',
        }),
        start(tripData) {
            this.startTrip(tripData).then(() => {
                this.close()
            })
        },
        close(){
            this.$router.replace({ name: "Home" })
        }
    }
}
</script>