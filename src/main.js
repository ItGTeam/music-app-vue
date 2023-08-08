import './assets/main.css'
import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import veeValidatePlugin from './includes/validation'
import { auth } from '@/includes/firebase';
import Icon from './directives/icon'
import i18n from '@/includes/i18n'


let app;

auth.onAuthStateChanged(() => {
    if (!app) {

        app = createApp(App)

        app.use(createPinia())
        app.use(router)
        app.use(veeValidatePlugin)
        app.use(i18n)
        app.directive("icon", Icon);

        app.mount('#app')
    }

})
