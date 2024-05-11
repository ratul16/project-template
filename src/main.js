import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';

import App from './App.vue'
import router from './router'

// Prime Vue Components
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeflex/primeflex.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)


app.use(PrimeVue, { ripple: true })

app.mount('#app')
