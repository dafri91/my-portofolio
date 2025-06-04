<script setup>
import { useIntersectionObserver } from '../composables/useIntersectionObserver'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const { isVisible, targetRef } = useIntersectionObserver({ threshold: 0.1 })
</script>

<template>
<div
  ref="targetRef"
  class="group bg-white dark:bg-neutral-900 rounded-2xl shadow-soft overflow-hidden transition-all duration-700 ease-out"
  :class="{ 'opacity-0 translate-y-8': !isVisible, 'opacity-100 translate-y-0': isVisible }"
>
  <!-- Container gambar -->
  <div class="relative overflow-hidden aspect-[4/3] rounded-t-2xl cursor-pointer">
    <img
      :src="project.image"
      :alt="project.title"
      class="w-full h-full object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
      loading="lazy"
    />

    <!-- Overlay hover -->
    <a
      :href="project.links.demo"
      target="_blank"
      rel="noopener noreferrer"
      class="absolute inset-0 rounded-t-2xl flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-400 text-white font-semibold text-lg space-x-3"
      aria-label="Live Demo"
      @click.stop
      >
      <span class="transform transition-transform duration-300 group-hover:translate-x-2">Live Demo</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 transition-transform duration-300 group-hover:translate-x-4"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        viewBox="0 0 24 24"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </a>
  </div>

  <!-- Info proyek -->
  <div class="p-6 rounded-b-2xl">
    <h3 class="text-xl font-heading font-medium text-neutral-800 dark:text-neutral-100 mb-2">
      {{ project.title }}
    </h3>

    <p class="text-neutral-600 dark:text-neutral-300 line-clamp-3">
      {{ project.description }}
    </p>

    <div class="flex flex-wrap gap-2 mt-4">
      <span
        v-for="tag in project.tags"
        :key="tag"
        class="text-xs bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 rounded-full px-3 py-1"
      >
        {{ tag }}
      </span>
    </div>

    <div class="flex space-x-4 mt-6">
      <a
        :href="project.links.demo"
        target="_blank"
        rel="noopener noreferrer"
        class="group inline-flex items-center space-x-1 text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors duration-300 transform hover:scale-105"
      ></a>

      <a
        :href="project.links.github"
        target="_blank"
        rel="noopener noreferrer"
        class="text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-300"
      >
        GitHub
      </a>
    </div>
  </div>
</div>

</template>
