/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import PrimeVue from 'primevue/config';
import CustomPreset from './theme'; // Custom Prime Vue theme

// Import PrimeVue styles
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

// components
import Button from 'primevue/button';
import ButtonGroup from "primevue/buttongroup";
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import ToastService from 'primevue/toastservice';
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";


// Create a function to register PrimeVue components and configurations
export default function configurePrimeVue(app) {
  app.use(PrimeVue, {
    theme: {
      preset: CustomPreset,
      options: {
        prefix: 'p',
        darkModeSelector: 'p-dark',
      }
    },
    ripple: true
  });
  app.use(ToastService);

  app.component('Button', Button);
  app.component('ButtonGroup', ButtonGroup);
  app.component('Dialog', Dialog);
  app.component('InputText', InputText);
  app.component('TabView', TabView);
  app.component('TabPanel', TabPanel);
}