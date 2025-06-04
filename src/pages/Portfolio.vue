<script setup>
import { ref, computed } from 'vue';
import { useMotion } from '@vueuse/motion';
import { usePortfolioStore } from '../stores/portfolio';
import ProjectCard from '../components/ui/ProjectCard.vue';

const pageRef = ref(null);
const projectsRef = ref(null);

// Animate main container
useMotion(pageRef, {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 500 } }
});

// Animate project grid
useMotion(projectsRef, {
  initial: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 500, delay: 200 } },
  visibleOnce: true,
});

// Use store
const portfolioStore = usePortfolioStore();
const categories = computed(() => portfolioStore.categories);
const filteredProjects = computed(() => portfolioStore.filteredProjects);
const selectedCategory = computed(() => portfolioStore.selectedCategory);
const setCategory = portfolioStore.setCategory;
</script>

<template>
  <div ref="pageRef">
    <!-- Page Header
    <section class="bg-primary-50 dark:bg-gray-800 py-20">
      <div class="container-custom text-center">
        <h1 class="mb-4">My Portfolio</h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          A collection of my recent projects showcasing my skills and expertise.
        </p>
      </div>
    </section> -->

    <!-- Portfolio Content -->
    <section class="section">
      <div class="container-custom">
        <!-- Category Filter -->
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="() => setCategory(category.id)"
            class="px-5 py-2 rounded-full text-sm font-medium transition-colors"
            :class="selectedCategory === category.id ? 
              'bg-primary-600 text-white' : 
              'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'"
          >
            {{ category.name }}
          </button>
        </div>

        <!-- Projects Grid -->
        <div ref="projectsRef" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            v-for="project in filteredProjects"
            :key="project.id"
            :project="project"
          />
        </div>

        <!-- No Projects -->
        <div v-if="filteredProjects.length === 0" class="text-center py-12">
          <p class="text-lg text-gray-600 dark:text-gray-400">
            No projects found in this category.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
