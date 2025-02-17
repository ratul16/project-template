/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import PrimeVue from "primevue/config";
import CustomPreset from './theme';

// Import PrimeVue styles
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

// components
import Button from 'primevue/button';
import ButtonGroup from "primevue/buttongroup";
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Menubar from 'primevue/menubar';
import Avatar from 'primevue/avatar';
import Select from 'primevue/select';
import Breadcrumb from 'primevue/breadcrumb';



// Create a function to register PrimeVue components and configurations
export default function configurePrimeVue(app) {
  app.use(PrimeVue, {
    theme: {
      preset: CustomPreset,
      options: {
        darkModeSelector: '.dark-mode', // disable dark mode by setting false || ''
      }
    },
    ripple: true
  });

  // Register PrimeVue components
  app.component('Button', Button);
  app.component('ButtonGroup', ButtonGroup);
  app.component('Dialog', Dialog);
  app.component('InputText', InputText);
  app.component('Menubar', Menubar);
  app.component('Avatar', Avatar);
  app.component('Select', Select);
  app.component('Breadcrumb', Breadcrumb);
}