<template>
    <auth-layout :title="title" :image="image">
        <register-form @register="register"></register-form>
    </auth-layout>
</template>

<script>
import RegisterForm from '@/components/auth/RegisterForm.vue';

export default {
    components: {
        RegisterForm
    },
    data() {
        return {
            title: "Register",
            image: require('../../public/assets/images/auth.svg')
        }
    },
    methods: {
        register(userData) {
            console.log(userData)
            console.log("WORKING!")
        }
    }
}
</script>