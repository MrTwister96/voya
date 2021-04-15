<template>
    <base-layout :title="title">
        <h2 @click="logout">TESTING</h2>
        <add-fab @action="addTrip"></add-fab>
    </base-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AddFab from '@/components/buttons/AddFab.vue';

export default {
    components: {
        AddFab
    },
    data() {
        return {
            title: "Home"
        }
    },
    methods: {
        addTrip(){
            this.$router.replace({ name: "AddTrip" })
        },
        ...mapActions({
            logout: 'logout'
        })
    },
    computed: {
        ...mapState({
            userProfile: 'userProfile'
        })
    }
}
</script>