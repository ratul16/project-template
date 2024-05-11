import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
  state: () => ({
    appName: 'Project template'
  }),
  actions: {
    // function to modify states
  },
  getters: {
    // function to get states
  },
});