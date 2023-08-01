import './assets/main.css'
import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import veeValidatePlugin from './includes/validation'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(veeValidatePlugin)

app.mount('#app')
