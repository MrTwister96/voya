<template>
    <auth-layout :title="title" :image="image">
        <register-form @register="register"></register-form>
        <template v-slot:custom-end>
            <back-fab @action="this.$router.push({ name: 'Auth' })"></back-fab>
        </template>
    </auth-layout>
</template>

<script>
import { loadingController, toastController } from '@ionic/vue';
import RegisterForm from '@/components/auth/RegisterForm.vue';
import BackFab from '@/components/buttons/BackFab.vue';

export default {
    components: {
        RegisterForm, BackFab
    },
    data() {
        return {
            title: "Register",
            image: require('../../public/assets/images/auth.svg'),
        }
    },
    methods: {
        register(userData) {
            loadingController.create({
                message: 'Please Wait...'
            }).then((loading) => {
                loading.present();
                this.$store.dispatch('signup', {
                    email: userData.email,
                    password: userData.password
                }).then(() => {
                    loading.dismiss();
                }).catch(() => {
                    loading.dismiss();
                    toastController.create({
                        message: "This Email is already being used",
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