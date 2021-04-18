<template>
    <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button color="success" @click="action">
            <ion-icon :src="require('../../../public/assets/icon/add-outline.svg')"></ion-icon>
        </ion-fab-button>
    </ion-fab>
</template>

<script>
import { IonFab, IonFabButton, IonIcon } from '@ionic/vue';

export default {
    emits: ['action'],
    components: {
        IonFab, IonFabButton, IonIcon
    },
    methods: {
        action() {
            this.$emit('action');
        }
    }
    
}
</script>