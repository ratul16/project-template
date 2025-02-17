<script setup>
import { ref, watch, onMounted, computed } from "vue";

const themeNames = [
  "lara-light-indigo",
  "lara-dark-indigo",
  "lara-light-blue",
  "lara-dark-blue",
  "lara-light-purple",
  "lara-dark-purple",
  "lara-light-teal",
  "lara-dark-teal",
];

const themeName = ref("lara-light-blue");
const loadedThemes = ref({});
let observer = null;

const setupThemeObserver = () => {
  const config = { attributes: true, childList: true, subtree: true };
  observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach((node) => {
          if (mutation.target === document.head && node.nodeName === "STYLE") {
            loadedThemes.value[themeName.value] = node;
            observer.disconnect();
          }
        });
      }
    });
  });

  observer.observe(document.head, config);
};

const loadTheme = async (newTheme, oldTheme) => {
  if (newTheme !== oldTheme && newTheme) {
    // Remove old theme
    if (oldTheme && loadedThemes.value[oldTheme]) {
      document.head.removeChild(loadedThemes.value[oldTheme]);
    }

    // Load from cache or import new
    if (loadedThemes.value[newTheme]) {
      document.head.appendChild(loadedThemes.value[newTheme]);
    } else {
      setupThemeObserver();
      await import(`primevue/resources/themes/${newTheme}/theme.css`);
    }
  }
};

// Watch for theme changes
watch(themeName, (newTheme, oldTheme) => {
  loadTheme(newTheme, oldTheme);
});

// Initial theme load
onMounted(() => {
  loadTheme(themeName.value);
});

const isDark = computed(() => themeName.value.includes("dark"));

const toggleTheme = () => {
  const currentTheme = themeName.value;
  if (currentTheme.includes("light")) {
    themeName.value = currentTheme.replace("light", "dark");
  } else {
    themeName.value = currentTheme.replace("dark", "light");
  }
};
</script>

<template>
  <div class="theme-switcher">
    <!-- Quick toggle button -->
    <Button
      :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
      @click="toggleTheme"
      rounded
      text
      aria-label="Toggle theme"
    />

    <!-- Theme dropdown -->
    <AutoComplete
      v-model="themeName"
      :options="themeNames"
      class="ml-2"
      optionLabel=""
      placeholder="Select Theme"
    />
  </div>
</template>

<style lang="scss" scoped>
.theme-switcher {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
