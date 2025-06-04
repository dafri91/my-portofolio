<script setup>
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useThemeStore } from './stores/theme';
import Navbar from './components/layout/Navbar.vue';
import Footer from './components/layout/Footer.vue';

const route = useRoute();
const themeStore = useThemeStore();

const isHomePage = computed(() => route.path === '/');

watch(
  () => themeStore.isDark,
  (isDark) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  },
  { immediate: true }
);
</script>

<template>
  <div
    class="flex flex-col min-h-screen"
    :class="[
      themeStore.isDark ? 'bg-gray-900' : 'bg-[#FFFBF5]'
    ]"
  >
    <Navbar />
    
    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition
          name="page"
          mode="out-in"
          appear
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    
    <Footer />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
