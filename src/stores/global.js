import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
  state: () => ({
    appName: 'Vue 3 Starter template',
    author: {
      name: "Hasibul Alam Ratul",
      role: "Frontend Developer"
    },
  }),
  actions: {
    updateAuthorName(newName) {
      this.author.name = newName;
      console.log('Author name updated:', this.author.name);
    },
  },
  getters: {
    authorRole: (state) => state.author.role,
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'global-store',
        storage: localStorage, // Can be sessionStorage or localStorage
      },
    ],
  },
});
