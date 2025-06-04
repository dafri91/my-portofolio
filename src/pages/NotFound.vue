<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
  router.push('/');
};
</script>

<template>
  <div class="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
    <h1 class="text-6xl md:text-8xl font-bold text-primary-600 dark:text-primary-400 mb-4">404</h1>
    <h2 class="text-2xl md:text-3xl font-bold mb-6">Page Not Found</h2>
    <p class="text-gray-600 dark:text-gray-400 text-lg max-w-md mb-8">
      The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
    </p>
    <button @click="goHome" class="btn-primary">
      Back to Home
    </button>
  </div>
</template>