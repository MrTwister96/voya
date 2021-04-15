<template>
    <ion-page>
        <ion-content>
            <slot />
        </ion-content>
    </ion-page>
</template>

<script>
import {
    IonPage, IonContent
} from '@ionic/vue'

export default {
    components: {
        IonPage, IonContent
    }
}
</script>