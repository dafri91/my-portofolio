<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useThemeStore } from '../../stores/theme';
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

const router = useRouter();
const themeStore = useThemeStore();

const mobileMenuOpen = ref(false);
const scrolled = ref(false);
const prevScrollPos = ref(window.pageYOffset);
const navbarVisible = ref(true);

const isDark = computed(() => themeStore.isDark);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const toggleTheme = () => {
  themeStore.toggleTheme();
};

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' }
];

const handleScroll = () => {
  const currentScrollPos = window.pageYOffset;
  
  // Determine if the user has scrolled past the threshold (100px)
  scrolled.value = currentScrollPos > 100;
  
  // Hide navbar when scrolling down, show when scrolling up
  if (prevScrollPos.value > currentScrollPos) {
    navbarVisible.value = true; // Scrolling up
  } else {
    navbarVisible.value = currentScrollPos < 100 || mobileMenuOpen.value;
  }
  
  prevScrollPos.value = currentScrollPos;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
<header
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#FFFBF5] dark:bg-gray-900 dark:bg-none"
  :class="[
    scrolled ? 'py-3 backdrop-blur-md shadow-md' : 'py-5',
    navbarVisible ? 'translate-y-0' : '-translate-y-full'
  ]"
>

    <div class="container-custom flex items-center justify-between">
      <!-- Logo -->
      <router-link
        to="/"
        class="text-lg sm:text-xl font-bold text-primary-600 dark:text-primary-400 flex items-center space-x-2"
      >
        <span>Dafri Mulya</span>
      </router-link>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center space-x-8">
        <router-link
          v-for="link in navLinks"
          :key="link.name"
          :to="link.path"
          class="font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          :class="{ 'text-primary-600 dark:text-primary-400': $route.path === link.path }"
        >
          {{ link.name }}
        </router-link>
        
        
        
        <!-- CV Download Button -->
        <!-- <a
          href="#"
          class="btn-primary text-sm py-2"
          download
        >
          Download CV
        </a> -->
      </nav>

      <!-- Mobile Menu Button -->
      <div class="flex items-center md:hidden space-x-4">

        
        <button
          @click="toggleMobileMenu"
          class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle mobile menu"
        >
          <Bars3Icon v-if="!mobileMenuOpen" class="h-6 w-6" />
          <XMarkIcon v-else class="h-6 w-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-md py-4 animate-slide-down"
    >
      <div class="container-custom flex flex-col space-y-4">
        <router-link
          v-for="link in navLinks"
          :key="link.name"
          :to="link.path"
          class="py-2 font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          :class="{ 'text-primary-600 dark:text-primary-400': $route.path === link.path }"
          @click="mobileMenuOpen = false"
        >
          {{ link.name }}
        </router-link>
        
        <!-- CV Download Button -->
        <!-- <a
          href="#"
          class="btn-primary text-center py-2"
          download
        >
          Download CV
        </a> -->
      </div>
    </div>
  </header>
  
  <!-- Spacer to prevent content from hiding under fixed navbar -->
  <div class="h-16 sm:h-20"></div>
</template>