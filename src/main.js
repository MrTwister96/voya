import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Custom Imports */
import AuthLayout from "@/components/base/AuthLayout.vue";
import BaseLayout from "@/components/base/BaseLayout.vue";
import BlankLayout from "@/components/base/BlankLayout.vue";

import './registerServiceWorker'

import store from './store';

import { auth } from './firebase';

let app

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(IonicVue)
      .use(router)
      .use(store);
    
    app.component('auth-layout', AuthLayout);
    app.component('base-layout', BaseLayout);
    app.component('blank-layout', BlankLayout);

    router.isReady().then(() => {
      app.mount('#app');
    });
  }
})

// const app = createApp(App)
//   .use(IonicVue)
//   .use(router)
//   .use(store);

// app.component('auth-layout', AuthLayout);
// app.component('base-layout', BaseLayout);

// router.isReady().then(() => {
//   app.mount('#app');
// });


