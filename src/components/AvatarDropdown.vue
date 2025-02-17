<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isOpen = ref(false);
const menuRef = ref(null);
const buttonRef = ref(null);

const items = [
  {
    label: "Dark Mode",
    icon: "pi pi-moon",
    command: () => console.log("Dark mode toggled"),
  },
  {
    label: "Profile",
    icon: "pi pi-user",
    command: () => console.log("Profile clicked"),
  },
  {
    label: "Activity",
    icon: "pi pi-clock",
    command: () => console.log("Activity clicked"),
  },
  {
    label: "Log In",
    icon: "pi pi-sign-in",
    command: () => console.log("Log in clicked"),
  },
];

const toggleMenu = (event) => {
  event.stopPropagation();
  isOpen.value = !isOpen.value;
};

const closeMenu = (event) => {
  if (menuRef.value?.contains(event.target) || buttonRef.value?.contains(event.target)) {
    return;
  }
  isOpen.value = false;
};

onMounted(() => {
  document.addEventListener("click", closeMenu);
});

onUnmounted(() => {
  document.removeEventListener("click", closeMenu);
});
</script>

<template>
  <div class="custom-menu-wrapper">
    <button
      ref="buttonRef"
      type="button"
      serverity=""
      class="menu-trigger"
      @click="toggleMenu"
      aria-haspopup="true"
      :aria-expanded="isOpen"
    >
      <i class="pi pi-user"></i>
    </button>

    <div
      ref="menuRef"
      class="menu-overlay"
      :class="{ 'menu-show': isOpen }"
      role="menu"
      tabindex="-1"
    >
      <ul class="menu-list">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="menu-item"
          role="menuitem"
          @click="handleItemClick(item)"
        >
          <i :class="item.icon"></i>
          <span>{{ item.label }}</span>
        </li>
      </ul>
      <div class="menu-footer">App version 2.0.6</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.custom-menu-wrapper {
  position: relative;
  display: inline-block;
}

.menu-trigger {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  border: none;
  border-radius: 2rem;
  // background: rgba(255, 255, 255, 0.2);
  // color: white;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
}

.menu-overlay {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  min-width: 180px;
  background: var(--p-surface-0);
  border-radius: 0.5rem;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.2s ease;
  pointer-events: none;
  z-index: 1000;

  &.menu-show {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
}

.menu-list {
  list-style: none;
  margin: 0;
  padding: 0.5rem;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  color: var(--p-text-color);
  cursor: pointer;
  border-radius: 0.375rem;
  transition: background-color 0.2s;
  font-size: 14px;

  i {
    font-size: 1rem;
    color: var(--p-text-color);
  }

  &:hover {
    background: var(--p-primary-color);
    color: var(--p-surface-0);

    i {
      color: var(--p-surface-0);
    }
  }
}

.menu-footer {
  padding: 0.75rem 1rem;
  border-top: 1px solid var(--p-primary-color);
  color: var(--p-text-color);
  font-size: 12px;
  text-align: left;
}
</style>
