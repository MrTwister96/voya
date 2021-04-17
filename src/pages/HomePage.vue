<template>
    <base-layout :title="title">
        <!-- TODO: CLEAN UP CODE HERE -->
        <!-- Trip List -->
        <ion-list class="ion-padding">
            <ion-list-header>
                <h2 @click="refresh">Trips</h2>
            </ion-list-header>
            <ion-item v-for="trip in trips" :key="trip">
                <ion-label>
                    <h2>{{ fmtDate(trip.date) }}</h2>
                    <p>{{ trip.totalDistance }} Km</p>
                </ion-label>

                <ion-icon slot="end" :src="require('../../public/assets/icon/trash-outline.svg')" @click="deleteTrip(trip.id)"></ion-icon>
            </ion-item>
        </ion-list>

        <add-fab @action="addTrip"></add-fab>
    </base-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AddFab from '@/components/buttons/AddFab.vue';
import { IonList, IonItem, IonLabel, IonListHeader, IonIcon } from '@ionic/vue'

import moment from 'moment';

export default {
    components: {
        AddFab,
        IonItem,
        IonList,
        IonLabel,
        IonListHeader,
        IonIcon
    },
    data() {
        return {
            title: "Home"
        }
    },
    methods: {
        ...mapActions({
            logout: 'logout',
            deleteTrip: 'deleteTrip',
            refresh: 'fetchTrips'
        }),
        addTrip(){
            this.$router.replace({ name: "AddTrip" })
        },
        fmtDate(timestamp) {
            const date = new Date(timestamp.seconds * 1000)
            return moment(date).format('YYYY/MM/DD hh:mm A')
        }
    },
    computed: {
        ...mapState({
            userProfile: 'userProfile',
            trips: 'trips'
        })        
    }
}
</script>