<template>
    <auth-layout :title="title" :image="image">
        <login-form @login="login"></login-form>
    </auth-layout>
</template>

<script>
import LoginForm from '@/components/auth/LoginForm.vue';

export default {
    components: {
        LoginForm
    },
    data() {
        return {
            title: "Login",
            image: require('../../public/assets/images/login.svg')
        }
    },
    methods: {
        login(userData) {
            console.log(userData)
            console.log("WORKING!")
        }
    }
}
</script>