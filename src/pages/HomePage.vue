<template>
    <base-layout :title="title">
    </base-layout>
</template>

<script>
export default {
    data() {
        return {
            title: "Home"
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('logout')
        }
    }
}
</script>