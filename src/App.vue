<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import AvatarDropdown from "@/components/AvatarDropdown.vue";

const route = useRoute();
const activeRoute = computed(() => route.path);

// Define menu items
const items = ref([
  { label: "Home", icon: "pi pi-home", to: "/" },
  { label: "Map", icon: "pi pi-map", to: "/map" },
  { label: "Information", icon: "pi pi-info-circle", to: "/information" },
  { label: "Design UI", icon: "pi pi-palette", to: "/design" },
]);

// Theme toggling logic
const isDarkTheme = ref(false);

const applyTheme = () => {
  document.documentElement.classList.toggle("dark-mode", isDarkTheme.value);
  localStorage.setItem("dark-theme", isDarkTheme.value.toString());
};

const toggleDarkMode = () => {
  isDarkTheme.value = !isDarkTheme.value;
  applyTheme();
};

onMounted(() => {
  isDarkTheme.value = localStorage.getItem("dark-theme") === "true";
  applyTheme();
});
</script>

<template>
  <div class="app">
    <header class="layout-header">
      <Menubar :model="items" class="" :breakpoint="`768px`">
        <template #start>
          <div class="flex align-items-center">
            <!-- <i class="pi pi-cloud mr-2 brand-logo" alt="Logo" /> -->
            <img src="@/assets/logo.svg" class="mr-1" width="30px" />
          </div>
        </template>

        <template #item="{ item, props, hasSubmenu }">
          <router-link v-if="item.to" v-slot="{ href, navigate }" :to="item.to" custom>
            <a
              v-ripple
              :href="href"
              v-bind="props.action"
              @click="navigate"
              :class="{ 'active-link': activeRoute === item.to }"
              class="nav-link"
            >
              <span :class="[item.icon, 'icon']" />
              <span>{{ item.label }}</span>
            </a>
          </router-link>
          <a v-else v-ripple href="#" v-bind="props.action" class="nav-link">
            <span :class="[item.icon, 'icon']" />
            <span>{{ item.label }}</span>
            <span v-if="hasSubmenu" class="pi pi-angle-down ml-2" />
          </a>
        </template>

        <template #end>
          <div class="flex align-items-center gap-2">
            <Button
              rounded
              :icon="isDarkTheme ? 'pi pi-moon' : 'pi pi-sun'"
              @click="toggleDarkMode"
            />
            <AvatarDropdown />
          </div>
        </template>
      </Menubar>
    </header>

    <main class="layout-main">
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <nav class="mobile-navbar">
      <ul>
        <li v-for="item in items" :key="item.label">
          <router-link
            v-if="item.to"
            :to="item.to"
            :class="{ 'active-link': activeRoute === item.to }"
            class="nav-link"
          >
            <i :class="[item.icon, 'icon']" />
            <span>{{ item.label }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
@use "@/assets/scss/main.scss";
</style>

<style lang="scss" scoped>
:deep(.p-menubar) {
  padding: 1rem;
  border: none;
}

.nav-link.active-link {
  background: rgba(255, 255, 255, 0.313) !important;
  border-radius: var(--p-menubar-item-border-radius);
}

.nav-link .icon {
  font-size: 1.2rem;
}

.app {
  position: relative;

  .brand-logo {
    font-size: 1.8rem;
    // padding: 0.25rem;
    color: var(--p-button-primary-background);
  }
}

.mobile-navbar {
  display: none;
}

@include media-queries("tab-sm") {
  // :deep(.p-menubar) {
  //   .p-menubar-button {
  //     display: none;
  //   }
  // }
  .mobile-navbar {
    // display: block;
    position: fixed;
    bottom: 0;
    width: 100%;
    background: var(--p-button-primary-background);
    z-index: 9999;

    ul {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      padding: 0.5rem;
      list-style: none;
      margin: 0;

      li {
        text-align: center;

        .nav-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          padding: 0.75rem 0;
          color: var(--p-button-primary-color);
          .icon {
            font-size: 1.4rem;
          }

          span {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
