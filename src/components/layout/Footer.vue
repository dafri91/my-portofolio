<script setup>
// import { useThemeStore } from '../../stores/theme';
import { computed } from 'vue';
import { Icon } from '@iconify/vue';

// const themeStore = useThemeStore();
// const isDark = computed(() => themeStore.isDark);

const currentYear = new Date().getFullYear();

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/dafri91', icon: 'mdi:github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'mdi:linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'mdi:twitter' },
  { name: 'Instagram', url: 'https://www.instagram.com/d4fri_/', icon: 'mdi:instagram' }
];
</script>

<template>
  <footer class="bg-gray-50 dark:bg-gray-800 pt-12 pb-8 mt-8">
    <div class="container-custom">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div class="md:col-span-2">
          <h3 class="text-xl font-bold mb-4">Dafri Mulya</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
            I am an Informatics Engineering student with a strong enthusiasm for technologies like web and application development, as well as Machine Learning.
          </p>
          <div class="flex space-x-4">
            <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank" rel="noopener noreferrer"
              class="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
              :aria-label="link.name">
              <Icon :icon="link.icon" class="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li>
              <router-link to="/"
                class="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                Home
              </router-link>
            </li>
            <li>
              <router-link to="/about"
                class="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                About
              </router-link>
            </li>
            <li>
              <router-link to="/portfolio"
                class="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                Portfolio
              </router-link>
            </li>
            <li>
              <router-link to="/contact"
                class="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                Contact
              </router-link>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">Contact</h4>
          <ul class="space-y-2">
            <li class="flex items-center text-gray-600 dark:text-gray-400">
              <Icon icon="mdi:email" class="w-5 h-5 mr-2" />
              <a href="mailto:john@example.com"
                class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">ex@gmail.com</a>
            </li>
            <li class="flex items-center text-gray-600 dark:text-gray-400">
              <Icon icon="mdi:cellphone" class="w-5 h-5 mr-2" />
              <a href="tel:+11234567890"
                class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">081234567890</a>
            </li>
            <li class="flex items-center text-gray-600 dark:text-gray-400">
              <Icon icon="mdi:map-marker" class="w-5 h-5 mr-2" />
              <span>Riau, Indonesia</span>
            </li>
          </ul>
        </div>
      </div>

      <hr class="border-gray-200 dark:border-gray-700 my-8" />

      <div class="flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-600 dark:text-gray-400 text-sm">
          © {{ currentYear }} Dafri. All rights reserved.
        </p>
        <p class="text-gray-500 dark:text-gray-500 text-sm mt-2 md:mt-0">
          Designed with <span aria-label="love" role="img"></span> using Vue.js & Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
</template>
