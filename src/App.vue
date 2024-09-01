<script setup>
import { ref, computed } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { useGlobalStore } from "@/stores/global"; // Adjust the path as needed

const store = useGlobalStore();

const test = ref("");
const appName = computed(() => store.appName);
const authorName = computed(() => store.author.name);
const authorRole = computed(() => store.author.role);

console.log("Hello");
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <div class="flex flex-column gap-2">
        <h2 class="my-0">{{ appName }}</h2>
        <p class="my-0">Author: {{ authorName }} ({{ authorRole }})</p>
      </div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/design-system">Design System</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>

<style lang="scss" scoped>
h2 {
  font-size: 1.5rem;
  margin: 0;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
