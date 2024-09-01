import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import App from './App.vue';
import router from './router';
import primeVueConfig from './scripts/primevue-config.js';


const app = createApp(App);

// Create and configure Pinia
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

// Use Pinia before using other plugins or mounting the app
app.use(pinia);
app.use(router);

// PrimeVue Configuration
primeVueConfig(app);

// Mount the app
app.mount('#app');
