import { createStore } from 'vuex'
import * as fb from '../firebase'
import router from '../router/index'
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    plugins: [createPersistedState()],
    state() {
        return {
            userProfile: {},
            trips: [],
            activeTrip: null
        }
    },
    mutations: {
        setUserProfile(state, userProfile) {
            state.userProfile = userProfile
        },
        setTrips(state, trips) {
            state.trips = trips
        },
        startTrip(state, trip){
            state.activeTrip = trip
        },
        endTrip(state) {
            state.activeTrip = null
        }
    },
    actions: {
        // Firebase Authentication Functions
        async fetchUserProfile({ dispatch, commit }, user) {
            const userProfile = await fb.usersCollection.doc(user.uid).get()
            commit('setUserProfile', userProfile.data())
            router.push({ name: 'Home' })
            dispatch('fetchTrips')
        },
        async signup({ dispatch }, data) {
            const { user } = await fb.auth.createUserWithEmailAndPassword(data.email, data.password)
            await fb.usersCollection.doc(user.uid).set({
                name: "",
                uid: user.uid,
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
            commit('setTrips', [])
            router.push({ name: "Auth" })
        },

        // App Actions
        async fetchTrips({ commit, state }) {
            const snapshot = await fb.tripsCollection.where('uid', '==', state.userProfile.uid).orderBy('date').get()

            const trips = []

            snapshot.forEach(doc => {
                const trip = {
                    id: doc.id,
                    date: doc.data().date,
                    description: doc.data().description,
                    odoStart: doc.data().odoStart,
                    odoEnd: doc.data().odoEnd,
                    totalDistance: doc.data().totalDistance
                }
                trips.push(trip)
            })

            trips.reverse()

            commit('setTrips', trips)
        },

        async addTrip ({ dispatch, state }, data) {
            const user = state.userProfile


            await fb.tripsCollection.doc().set({
                uid: user.uid,
                date: new Date(),
                description: data.description,
                odoStart: data.odoStart,
                odoEnd: data.odoEnd,
                totalDistance: data.totalDistance
            })

            dispatch('fetchTrips')
        },

        async deleteTrip ({ dispatch }, id) {
            await fb.tripsCollection.doc(id).delete()

            dispatch('fetchTrips')

        },

        startTrip({ commit }, tripData) {
            const newTrip = {
                description: tripData.description,
                odoStart: tripData.odoStart,
            }

            commit('startTrip', newTrip)
        },

        endTrip({ state, dispatch, commit }, odoEnd) {
            const tripData = {
                description: state.activeTrip.description,
                odoStart: state.activeTrip.odoStart,
                odoEnd: odoEnd,
                totalDistance: odoEnd - state.activeTrip.odoStart
            }

            dispatch('addTrip', tripData)
            commit('endTrip')
        }
    },
    getters: {}
});

export default store;