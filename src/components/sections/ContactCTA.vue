<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToContact = () => {
  router.push('/contact');
};
</script>

<template>
  <section class="py-20  bg-[#FFFBF5] dark:bg-primary-700 dark:text-white text-black">
    <div class="container-custom text-center">
      <h2 class="text-3xl sm:text-4xl font-bold mb-6">Let's Work Together</h2>
      <p class="text-lg max-w-2xl mx-auto mb-10 dark:text-white text-black/90">
        Have a project in mind or just want to say hello? I'm always open to discussing new opportunities and interesting projects.
      </p>
      <button 
        @click="navigateToContact"
        class="btn-outline bg-white  text-primary-600 hover:bg-gray-100 focus:ring-white"
  
      >
        Get in Touch
      </button>
    </div>
  </section>
</template>