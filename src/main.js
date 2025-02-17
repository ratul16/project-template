import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue';
import router from './router';

import primeVueConfig from './scripts/primevueConfig';

const app = createApp(App)

// Use Pinia before using other plugins or mounting the app
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)

// PrimeVue Configuration
app.use(primeVueConfig)

// Mount the app
app.mount('#app')
