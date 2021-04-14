<template>
    <auth-layout :title="title" :image="image">
        <login-form @login="login"></login-form>
    </auth-layout>
</template>

<script>
import { loadingController, toastController } from '@ionic/vue';
import LoginForm from '@/components/auth/LoginForm.vue';

export default {
    components: {
        LoginForm
    },
    data() {
        return {
            title: "Login",
            image: require('../../public/assets/images/login.svg'),
            error: "",
        }
    },
    methods: {
        login(userData) {
            loadingController.create({
                message: 'Please Wait...'
            }).then((loading) => {
                loading.present();
                this.$store.dispatch('login', {
                    email: userData.email,
                    password: userData.password
                }).then(() => {
                    loading.dismiss();
                }).catch(() => {
                    loading.dismiss();
                    toastController.create({
                        message: "Username or Password incorrect",
                        duration: 2000,
                        color: 'danger',
                        position: 'top'
                    }).then((toast) => {
                        toast.present()
                    })
                })
            });
        }
    }
}
</script>