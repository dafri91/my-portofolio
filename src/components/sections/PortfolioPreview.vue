<script setup>
import { useRouter } from 'vue-router';
import { usePortfolioStore } from '../../stores/portfolio';
import ProjectCard from '../ui/ProjectCard.vue';

const router = useRouter();
const portfolioStore = usePortfolioStore();

const navigateToPortfolio = () => {
  router.push('/portfolio');
};

// Get only the first 3 projects for the preview
const previewProjects = portfolioStore.projects.slice(0, 3);
</script>

<template>
  <section class="section bg-gray-900">
    <div class="container-custom">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h2 class="mb-4 dark:text-white text-black">Featured Projects</h2>
        <div class="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          A selection of my recent work, showcasing my skills and expertise in web development.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard 
          v-for="project in previewProjects"
          :key="project.id"
          :project="project"
        />
      </div>
      
      <div class="mt-12 text-center">
        <button @click="navigateToPortfolio" class="btn-outline">
          View All Projects
        </button>
      </div>
    </div>
  </section>
</template>