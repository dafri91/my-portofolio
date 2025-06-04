import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const usePortfolioStore = defineStore('portfolio', () => {
  // Projects data
  const projects = ref([
    {
      id: 1,
      title: 'Electronics E-commerce',
      description: 'A modern e-commerce frontend prototype built with Vue.js and Tailwind CSS, featuring product listings, cart functionality',
      image: '/images/screencapture-electronics-ecommerce-nine-vercel-app-2025-06-05-03_02_18.png',
      tags: ['Vue.js', 'Tailwind css'],
      category: 'web',
      links: {
        demo: 'https://electronics-ecommerce-nine.vercel.app/',
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
      title: 'Simple Product Management System',
      description: 'A simple full-stack product management system with CRUD operations (add, edit, delete), real-time search/filter, and MongoDB data persistence',
      image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Vue.js', 'Node.js', 'Express', 'MongoDB'],
      category: 'Management System',
      links: {
        demo: 'https://testcrud-test.vercel.app/login',
        github: 'https://github.com'
      }
    },
    {
      id: 4,
      title: 'Coffee Shop',
      description: 'My first HTML & CSS project: a simple coffee shop website. Features a clean design, responsive layout.',
      image: '/images/screencapture-webisite-mycoffee-mine-vercel-app-2025-06-05-03_19_40.png',
      tags: ['Html', 'Css'],
      category: 'web',
      links: {
        demo: 'https://webisite-mycoffee-mine.vercel.app/',
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
    { id: 'web', name: 'Web Development' },
    { id: 'Management System', name: 'Management System' },
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