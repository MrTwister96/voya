import { createStore } from 'vuex'
import * as fb from '../firebase'
import router from '../router/index'

const store = createStore({
    state() {
        return {
            userProfile: {}
        }
    },
    mutations: {
        setUserProfile(state, val) {
            state.userProfile = val
        }
    },
    actions: {
        async login({ dispatch }, form) {
            const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)

            dispatch('fetchUserProfile', user)
        },
        async fetchUserProfile({ commit }, user) {
            const userProfile = await fb.usersCollection.doc(user.uid).get()

            commit('setUserProfile', userProfile.data())

            router.push({ name: 'Home' })
            
        },
        async signup({ dispatch }, form) {
            const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)

            await fb.usersCollection.doc(user.uid).set({
                name: "",
                email: form.email
            })

            dispatch('fetchUserProfile', user)
            
        },
        async logout ({ commit }) {
            await fb.auth.signOut()

            commit('setUserProfile', {})
            router.push('/auth')
        }
    },
    getters: {}
});

export default store;