import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const usePortfolioStore = defineStore('portfolio', () => {
  // Projects data
  const projects = ref([
    {
      id: 1,
      title: 'Electronics E-commerce',
      description: 'E-commerce electronics site with real-time Firebase backend',
      image: '/images/electroshop.png',
      tags: ['Vue.js', 'Tailwind css', 'Firebase'],
      category: 'web',
      links: {
        demo: 'https://myelectroshop.vercel.app/',
        github: 'https://github.com'
      }
    },
    {
      id: 2,
      title: 'To-do List',
      description: 'A to-do list app with add, complete (strikethrough), and delete tasks—no backend, just browser storage ',
      image: '/images/screencapture-233510321-dafri-vercel-app-activity-2025-06-05-03_16_17.png',
      tags: ['Vue.js', 'Tailwind CSS'],
      category: 'web',
      links: {
        demo: 'https://233510321-dafri.vercel.app/activity',
        github: 'https://github.com'
      }
    },
    {
      id: 3,
      title: 'Online Course Platform',
      description: 'online course site with modern layout and course listings',
      image: '/images/myonlinecourse.png',
      tags: ['Vue js', 'Tailwind CSS'],
      category: 'web',
      links: {
        demo: 'https://online-course-platform-edu.vercel.app/',
        github: 'https://github.com'
      }
    },
    {
      id: 4,
      title: 'Bookstore Landing Page',
      description: 'Bookstore landing page built with Vue.js and Tailwind CSS',
      image: '/images/mybookstore.png',
      tags: ['Vue js', 'Tailwind CSS'],
      category: 'web',
      links: {
        demo: 'https://bookstore-eight-ochre.vercel.app/',
        github: 'https://github.com'
      }
    },
    {
      id: 5,
      title: 'Simple Food Order Web',
      description: 'A mobile-first weather application that provides real-time weather information with beautiful visualizations.',
      image: '/images/screencapture-my-simple-food-order-web-vercel-app-home-2025-06-05-03_37_23.png',
      tags: ['Vue.js', 'Tailwind css'],
      category: 'web',
      links: {
        demo: 'https://my-simple-food-order-web.vercel.app/home',
        github: 'https://github.com'
      }
    },
  ]);

  // Categories for filtering
  const categories = ref([
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' }
  ]);

  // Currently selected category for filtering
  const selectedCategory = ref('all');

  // Filtered projects based on selected category
  const filteredProjects = computed(() => {
    if (selectedCategory.value === 'all') {
      return projects.value;
    }
    return projects.value.filter(project => project.category === selectedCategory.value);
  });

  // Function to set selected category
  function setCategory(category) {
    selectedCategory.value = category;
  }

  return {
    projects,
    categories,
    selectedCategory,
    filteredProjects,
    setCategory
  };
});