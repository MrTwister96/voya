<template>
    <blank-layout>
        <blank-center-card title="End Trip">
            <end-trip-form @end="end"></end-trip-form>
        </blank-center-card>
        <close-fab @action="close"></close-fab>
    </blank-layout>
</template>

<script>
import { mapActions } from 'vuex';
import BlankCenterCard from '@/components/cards/BlankCenterCard.vue';
import CloseFab from '@/components/buttons/CloseFab.vue';
import EndTripForm from '@/components/trips/EndTripForm.vue';

export default {
    components: {
        CloseFab, BlankCenterCard, EndTripForm
    },
    methods: {
        ...mapActions({
            endTrip: 'endTrip',
        }),
        end(odoEnd) {
            this.endTrip(odoEnd).then(() => {
                this.close()
            })
        },
        close(){
            this.$router.replace({ name: "Home" })
        }
    }
}
</script>