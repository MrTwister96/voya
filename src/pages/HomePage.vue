<template>
    <base-layout title="Home">
        <!-- Trip List -->
        <trips-list :trips="trips"></trips-list>

        <add-fab @action="addTrip"></add-fab>
    </base-layout>
</template>

<script>
import { mapState } from 'vuex';
import AddFab from '@/components/buttons/AddFab.vue';
import TripsList from '@/components/trips/TripsList.vue';


export default {
    components: {
        AddFab, TripsList
    },
    methods: {
        addTrip(){
            this.$router.replace({ name: "AddTrip" })
        }
    },
    computed: {
        ...mapState({
            trips: 'trips'
        })        
    }
}
</script>