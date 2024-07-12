import { createApp } from 'vue'
import { createPinia } from 'pinia'
import primeVueConfig from './scripts/primevue-config.js'

import App from './App.vue'
import router from './router'

// Prime Vue & Flex
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// PrimeVue Configuration
primeVueConfig(app)

app.mount('#app')
