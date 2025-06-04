import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  // Check if user has a theme preference in localStorage or prefers dark mode
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // State
  const isDark = ref(storedTheme ? storedTheme === 'dark' : prefersDark);
  
  // Actions
  function toggleTheme() {
    isDark.value = !isDark.value;
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
  }
  
  function setTheme(value) {
    isDark.value = value;
    localStorage.setItem('theme', value ? 'dark' : 'light');
  }
  
  return {
    isDark,
    toggleTheme,
    setTheme
  };
});