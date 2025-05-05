import {createApp} from 'vue'
import Toast from "vue-toastification";
import App from './App.vue'
import router from './router'
import './style.css';
import { createPinia } from 'pinia'

import "vue-toastification/dist/index.css";

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
})

app.use(router)
app.use(vuetify)
app.use(Toast);
app.use(createPinia())

app.mount('#app')



