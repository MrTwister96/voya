<template>
    <ion-fab vertical="top" horizontal="end" slot="fixed">
        <ion-fab-button color="danger" size="small" @click="action">
            <ion-icon :src="require('../../../public/assets/icon/close-outline.svg')"></ion-icon>
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