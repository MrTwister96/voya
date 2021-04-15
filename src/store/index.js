import { createStore } from 'vuex'
import * as fb from '../firebase'
import router from '../router/index'
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    plugins: [createPersistedState()],
    state() {
        return {
            userProfile: {}
        }
    },
    mutations: {
        setUserProfile(state, userProfile) {
            state.userProfile = userProfile
        }
    },
    actions: {
        // Firebase Authentication Functions
        async fetchUserProfile({ commit }, user) {
            const userProfile = await fb.usersCollection.doc(user.uid).get()
            commit('setUserProfile', userProfile.data())
            router.push({ name: 'Home' })
        },
        async signup({ dispatch }, data) {
            const { user } = await fb.auth.createUserWithEmailAndPassword(data.email, data.password)
            await fb.usersCollection.doc(user.uid).set({
                name: "",
                email: data.email
            })
            dispatch('fetchUserProfile', user)
        },
        async login({ dispatch }, data) {
            const { user } = await fb.auth.signInWithEmailAndPassword(data.email, data.password)
            dispatch('fetchUserProfile', user)
        },
        async logout ({ commit }) {
            await fb.auth.signOut()
            commit('setUserProfile', {})
            router.push({ name: "Auth" })
        }
    },
    getters: {}
});

export default store;