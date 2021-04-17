<template>
    <ion-list class="ion-padding">
        <ion-list-header>
            <h2>Trips</h2>
        </ion-list-header>
        <div v-if="trips.length != 0">
            <trip-list-item v-for="trip in trips" :key="trip.id" :trip="trip"></trip-list-item>
        </div>
        <ion-item v-else>
            <ion-label class="ion-text-center">
                No trip data yet...
            </ion-label>
        </ion-item>
    </ion-list>
</template>

<script>
import { IonList, IonListHeader, IonItem, IonLabel } from '@ionic/vue';
import TripListItem from '@/components/trips/TripListItem.vue';

export default {
    props: ['trips'],
    components: {
        IonList, IonListHeader, TripListItem, IonItem, IonLabel
    }
}
</script>