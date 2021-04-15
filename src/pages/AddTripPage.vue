<template>
    <blank-layout>
        <blank-center-card title="Add New Trip">
            <add-trip-form @create="create"></add-trip-form>
        </blank-center-card>
        <close-fab @action="close"></close-fab>
    </blank-layout>
</template>

<script>
import CloseFab from '@/components/buttons/CloseFab.vue';
import BlankCenterCard from '@/components/cards/BlankCenterCard.vue';
import AddTripForm from '@/components/forms/AddTripForm.vue';

export default {
    components: {
        CloseFab,
        BlankCenterCard,
        AddTripForm
    },
    methods: {
        close(){
            this.$router.replace({ name: "Home" })
        },
        create(tripData){
            console.log(tripData)
        }
    }
}
</script>