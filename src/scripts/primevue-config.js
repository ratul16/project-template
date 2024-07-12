/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import ButtonGroup from "primevue/buttongroup";
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import ToastService from 'primevue/toastservice';
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";

// Import PrimeVue styles
import 'primevue/resources/themes/aura-light-blue/theme.css' // or any other theme
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

// Create a function to register PrimeVue components and configurations
export default function configurePrimeVue(app) {
  app.use(PrimeVue, { ripple: true });
  app.use(ToastService);

  app.component('Button', Button);
  app.component('ButtonGroup', ButtonGroup);
  app.component('Dialog', Dialog);
  app.component('InputText', InputText);
  app.component('TabView', TabView);
  app.component('TabPanel', TabPanel);
}
