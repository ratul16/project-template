import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const CustomTheme = definePreset(Aura, {
  // Important note: for custom colors set color: 'color value' | for tailwind colors '{blue.400}'
  semantic: {
    // Custom color palette, which can be used by var(--p-brand-400)
    brand: {
      50: '{emerald.50}',
      100: '{emerald.100}',
      200: '{emerald.200}',
      300: '{emerald.300}',
      400: '{emerald.400}',
      500: '{emerald.500}',
      600: '{emerald.600}',
      700: '{emerald.700}',
      800: '{emerald.800}',
      900: '{emerald.900}',
      950: '{emerald.950}',
    },
    colorScheme: {
      light: {
        primary: {
          color: '{teal.400}',
          inverseColor: '#ffffff',
          hoverColor: '{teal.600}',
          activeColor: '{teal.800}',
        },
        highlight: {
          background: '{teal.950}',
          focusBackground: '{teal.700}',
          color: '#ffffff',
          focusColor: '#ffffff',
        },
      },
      dark: {
        primary: {
          color: '{teal.200}',
          inverseColor: '{teal.950}',
          hoverColor: '{teal.400}',
          activeColor: '{teal.300}',
        },
        highlight: {
          background: 'rgba(250, 250, 250, .16)',
          focusBackground: 'rgba(250, 250, 250, .24)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)',
        },
      },
    },
  },
});

export default CustomTheme;
