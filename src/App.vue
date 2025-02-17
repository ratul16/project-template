<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

// import LocaleSwitcher from "@/components/LocaleSwitcher.vue";
import AvatarDropdown from "@/components/AvatarDropdown.vue";

const route = useRoute();
const activeRoute = computed(() => route.path);

const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
    to: "/",
  },
  // {
  //   label: "Projects",
  //   icon: "pi pi-search",
  //   items: [
  //     {
  //       label: "Components",
  //       icon: "pi pi-bolt",
  //     },
  //     {
  //       label: "Blocks",
  //       icon: "pi pi-server",
  //     },
  //     {
  //       label: "UI Kit",
  //       icon: "pi pi-pencil",
  //     },
  //     {
  //       label: "Templates",
  //       icon: "pi pi-palette",
  //       items: [
  //         {
  //           label: "Apollo",
  //           icon: "pi pi-palette",
  //         },
  //         {
  //           label: "Ultima",
  //           icon: "pi pi-palette",
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    label: "Map",
    icon: "pi pi-map",
    to: "/map",
  },
  {
    label: "Information",
    icon: "pi pi-info-circle",
    to: "/information",
  },
  {
    label: "Design UI",
    icon: "pi pi-palette",
    to: "/design",
  },
]);

// Add theme toggler
const isDarkTheme = ref(false);

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
  document.documentElement.classList.toggle("p-dark");
};
</script>

<template>
  <div class="app" :class="{ 'dark-theme': isDarkTheme }">
    <header class="layout-header">
      <Menubar
        :model="items"
        :focused="false"
        class="border-noround bg-primary"
        :breakpoint="`768px`"
      >
        <template #start>
          <div class="flex align-items-center">
            <i class="icons8-weather-station-wind mr-2 brand-logo" alt="Logo" />
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
          <!-- if submenu exists -->
          <a
            v-else
            v-ripple
            :href="item.to || '#'"
            :target="item.target"
            v-bind="props.action"
            class="nav-link"
          >
            <span :class="[item.icon, 'icon']" />
            <span>{{ item.label }}</span>
            <span v-if="hasSubmenu" class="pi pi-angle-down ml-2" />
          </a>
        </template>
        <template #end>
          <div class="flex align-items-center gap-2">
            <LocaleSwitcher />
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

    <div class="mobile-navbar">
      <ul>
        <li v-for="item in items" :key="item">
          <router-link
            :to="item.to"
            v-if="item.to && item.label !== 'Projects'"
            :class="{ 'active-link': activeRoute === item.to }"
            class="nav-link"
          >
            <i :class="[item.icon, 'icon']" />
            <span>{{ item.label }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/scss/main.scss";
</style>

<style lang="scss" scoped>
:deep(.p-menubar) {
  padding: 1rem;
  // background: var(--p-primary-color) !important;
  border: none;
}
.nav-link.active-link {
  background: rgba(255, 255, 255, 0.313) !important;
  position: relative;
  border-radius: var(--p-menubar-item-border-radius);
}

.nav-link {
  .icon {
    font-size: 1.2rem;
    line-height: 0;
  }
}

.app {
  position: relative;
  .mobile-navbar {
    display: none;
  }

  .brand-logo {
    font-size: 1.8rem;
    color: var(--p-surface-0);
  }
}

@include media-queries("tab-sm") {
  :deep(.p-menubar) {
    .p-menubar-button {
      display: none;
    }
  }
  .app {
    position: relative;

    .mobile-navbar {
      display: block;
      position: fixed;
      z-index: 9999;
      bottom: 0;
      width: 100%;
      ul {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding: 0.5rem;
        // gap: 0 0.5rem;
        background: var(--p-primary-color);
        width: 100%;
        list-style: none;
        margin: 0;

        li {
          display: flex;
          justify-content: center;
          width: 100%;
          a {
            color: var(--p-surface-0);
            text-decoration: none;
            display: flex;
            flex-direction: column;
            align-items: center; // Center icon and text
            width: 100%; // Make link take full width of li
            padding: 1rem 0;
            gap: 1rem;
            span {
              text-align: center; // Center the text
              font-size: 14px;
              line-height: 0;
            }
            .icon {
              font-size: 1.4rem;
              margin-bottom: 10px;
            }
          }
        }
      }

      .nav-link {
        // gap: 0;
      }
    }
  }
}
</style>
