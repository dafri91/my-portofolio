<script setup>
import { ref, computed, onMounted, onUnmounted , watch} from 'vue'
import { useMotion } from '@vueuse/motion'
import { Icon } from '@iconify/vue'
import { nextTick } from 'vue'
const pageRef = ref(null)
const experienceRef = ref(null)
const educationRef = ref(null)
const skillContainerRef = ref(null)
const isHovering = ref(false) // 👉 kontrol pause saat hover




// Motion animations
useMotion(pageRef, {
  initial: { opacity: 0, y: 10 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 300, easing: 'ease-in-out' },
  },
})
useMotion(experienceRef, {
  initial: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 300, easing: 'ease-in-out' },
  },
  visibleOnce: true,
})
useMotion(educationRef, {
  initial: { opacity: 0, x: 10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 300, easing: 'ease-in-out' },
  },
  visibleOnce: true,
})

// Auto-scroll skills (loop + pause on hover)
onMounted(() => {
  const container = skillContainerRef.value
  if (!container) return

  const scrollSpeed = 0.6
  const resetPoint = container.scrollWidth / 2 // karena digandakan
  const delay = 20 // delay ms, semakin besar semakin pelan scroll-nya

  const scroll = () => {
    if (!isHovering.value) {
      container.scrollLeft += scrollSpeed
      if (container.scrollLeft >= resetPoint) {
        container.scrollLeft = 0
      }
    }
    setTimeout(() => {
      requestAnimationFrame(scroll)
    }, delay)
  }

  scroll()
})

const visibleProjects = ref([])
onMounted(async () => {
  await nextTick()

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target
        const id = el.getAttribute('data-id')

        if (entry.isIntersecting) {
          if (!visibleProjects.value.includes(id)) {
            visibleProjects.value.push(id)
          }

          // Tambah ulang animasi setiap masuk viewport
          el.classList.remove('animate-slide-in-right')
          void el.offsetWidth // ⬅️ force reflow (trik agar animasi bisa diputar ulang)
          el.classList.add('animate-slide-in-right')
        } else {
          // Reset class kalau keluar dari viewport
          el.classList.remove('animate-slide-in-right')
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll('.project-item').forEach((el) => observer.observe(el))
})
const skills = [
  { name: 'Vue.js', iconUrl: '/icons/vuejs.png' },
  { name: 'JavaScript', iconUrl: '/icons/js.png' },
  { name: 'HTML5', iconUrl: '/icons/html-5.png' },
  { name: 'CSS3', iconUrl: '/icons/css-3.png' },
  { name: 'Tailwind CSS', iconUrl: '/icons/tailwindcss.png' },
  { name: 'Node.js', iconUrl: '/icons/nodejs.png' },
  { name: 'UI/UX Design', iconUrl: '/icons/figma.png' },
  { name: 'PHP', iconUrl: '/icons/PHP.png' }, 
  { name: 'Git', iconUrl: '/icons/git.png' }
]

const projects = [
  {
    id: 1,
    name: 'Bookstore Website',
    description: 'A simple bookstore website built with PHP for backend and HTML/CSS for frontend.'
  },
  {
    id: 2,
    name: 'Simple E-commerce CRUD App',
    description: 'Developed a simple e-commerce CRUD application with full backend and frontend functionality.'
  },
  {
    id: 3,
    name: 'Agricultural E-commerce Application',
    description: 'Built a complete agricultural e-commerce application, including frontend and backend features.'
  },
  {
    id: 4,
    name: 'To-Do List App',
    description: 'Created a functional to-do list application to manage daily tasks efficiently.'
  },
  {
    id: 5,
    name: 'Simple Coffee Shop Website',
    description: 'Designed and developed a simple website for a coffee shop with modern UI and responsive layout.'
  }
]


const education = [
  {
    id: 1,
    degree: 'Bachelor of Informatics Engineering',
    institution: 'Universitas Islam Riau',
    period: '2023 – Present',
    description: 'Currently pursuing a degree focusing on software development and machine learning.'
  }
]

const interests = [
  'Web Development',
  'Software Development',
  'Mobile App Development',
  'Machine Learning',
  'Artificial Intelligence',
  'UI/UX Design',
  'Python Programming'
];



const showModal = ref(false)
const isMobile = ref(false)

const openModal = () => {
  if (isMobile.value) {
    showModal.value = true
    document.body.style.overflow = 'hidden'
  }
}

const closeModal = () => {
  showModal.value = false
  document.body.classList.remove('modal-open')
}


const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

watch(showModal, (val) => {
  const body = document.body
  if (val) {
    body.classList.add('modal-open')
  } else {
    body.classList.remove('modal-open')
  }
})

</script>

<template>
  <div ref="pageRef" class="bg-gray-50 dark:bg-gray-950 min-h-screen py-12 px-4">
    <div class="container mx-auto max-w-6xl">
      <!-- Hero Section -->
      <section class="flex flex-col md:flex-row items-center md:items-center gap-10 mb-5">
        <!-- Profile Info -->
        <div class="w-full md:w-1/3 flex justify-center">
          <div class="flex flex-col items-center">
            <img
              src="/images/hero.png"
              alt="Profile Photo"
              class="w-48 h-48 rounded-full border-4 border-white dark:border-gray-700 shadow-lg object-cover mb-4"
            />
            <h2 class="text-3xl font-bold">Dafri Mulya</h2>
            <p class="text-primary-600 dark:text-primary-400">Informatics Engineering Student</p>
          </div>
        </div>

        

          <div class="w-full md:w-2/3 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 class="text-2xl font-semibold mb-4">About Me</h3>
            <p class="text-gray-700 dark:text-gray-300 text-left md:text-justify" v-if="!isMobile">
              My name is Dafri Mulya. I am currently studying Informatics Engineering and have a strong interest in web development.
              I have experience building front-end interfaces using HTML, CSS, JavaScript, Vue.js, and Tailwind CSS.
              I also explored back-end development with Node.js, Express.js, and MongoDB.
              Some of the projects I have worked on include a simple bookstore website using PHP,
              a MERN stack book management app, and a UI/UX design concept for agricultural e-commerce using Figma.
              I actively learn via online platforms like Dicoding, earning certificates in web, backend, and machine learning development.
              I'm currently diving into AI and Python algorithms/data structures.
            </p>
            <div v-else>
              <p class="text-gray-700 dark:text-gray-300 text-left md:text-justify">
                My name is Dafri Mulya. I am currently studying Informatics Engineering and have a strong interest in technology...
              </p>
              <button @click="openModal" class="mt-4 btn-primary">
                Read More
              </button>
            </div>
          </div>

                    <!-- Modal (Only on Mobile) -->
          <teleport to="body">
            <div v-if="showModal" class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
              <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative">
                <button @click="closeModal" class="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl">&times;</button>
                <h3 class="text-xl font-bold mb-4 text-gray-800 dark:text-white">Full About Me</h3>
                <ul class="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                  <li>My name is Dafri Mulya. I am currently studying Informatics Engineering and have a strong interest in web development.</li>
                  <li>I have experience building front-end interfaces using HTML, CSS, JavaScript, Vue.js, and Tailwind CSS.</li>
                  <li>I also explored back-end development with Node.js, Express.js, and MongoDB.</li>
                  <li>Some of the projects I have worked on:
                    <ul class="list-[circle] ml-5 mt-1 space-y-1">
                      <li>A simple bookstore website using PHP</li>
                      <li>A modern book management application using the MERN Stack</li>
                      <li>UI/UX design for an agricultural e-commerce concept using Figma</li>
                    </ul>
                  </li>
                  <li>I actively learn through online courses and completed several learning paths on Dicoding.</li>
                  <li>Earned certificates in web and backend development and machine learning from Dicoding.</li>
                  <li>Currently studying AI, algorithms, and data structures using Python.</li>
                </ul>
              </div>
            </div>
          </teleport>

      </section>

      <!-- Skills & Personal Info Section -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <!-- Skills -->
        <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
          <h3 class="text-2xl font-semibold mb-4 text-center">Skills & Expertise</h3>
          <div class="flex gap-4 overflow-x-auto no-scrollbar py-2 px-1 scroll-snap-x" ref="skillContainerRef">
            <template v-for="n in 2" :key="n">
              <div
                v-for="skill in skills"
                :key="skill.name + '-' + n"
                class="flex-shrink-0 w-28 h-28 bg-[#11152c] text-white border border-[#1f223c] rounded-lg flex flex-col items-center justify-center transition-transform duration-300 hover:scale-110 shadow-md hover:shadow-violet-500"
                style="scroll-snap-align: start"
              >
                <img :src="skill.iconUrl" :alt="skill.name" class="w-10 h-10 mb-2" />
                <p class="text-sm text-center">{{ skill.name }}</p>
              </div>
            </template>
          </div>
        </div>

        <!-- Personal Info -->
          <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 class="text-2xl font-semibold mb-4">Personal Info</h3>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
              <li class="flex items-center gap-2">
                <Icon icon="mdi:email-outline" class="text-lg text-primary-600 dark:text-primary-400" />
                <strong>Email:</strong> dafrimulya78@gmail.com
              </li>
              <li class="flex items-center gap-2">
                <Icon icon="mdi:phone" class="text-lg text-primary-600 dark:text-primary-400" />
                <strong>Phone:</strong> 081234567890
              </li>
              <li class="flex items-center gap-2">
                <Icon icon="mdi:map-marker" class="text-lg text-primary-600 dark:text-primary-400" />
                <strong>Location:</strong> Riau, Indonesia
              </li>
              <li class="flex items-center gap-2">
                <Icon icon="mdi:web" class="text-lg text-primary-600 dark:text-primary-400" />
                <strong>Website:</strong>
                <a
                  href="https://dafri-portofolio.vercel.app"
                  target="_blank"
                  class="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200 transition-colors duration-200"
                >
                  dafri-portofolio
                </a>
              </li>
            </ul>
          </div>
      </section>

      <!-- Projects Section -->
      <section class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md mb-16">
        <h3 class="text-2xl font-semibold mb-4">Projects</h3>
        <div class="space-y-6">
          <div
            v-for="project in projects"
            :key="project.id"
            :data-id="String(project.id)"
            class="project-item relative pl-6 border-l-2 border-primary-300 dark:border-primary-700 opacity-0 translate-x-10 transition-all duration-700"
          >
            <div class="absolute -left-2 top-1 w-3 h-3 bg-primary-600 rounded-full"></div>
            <h4 class="font-semibold">{{ project.name }}</h4>
            <p class="text-primary-500">Personal Project</p>
            <p class="text-sm text-gray-600 dark:text-gray-300">{{ project.description }}</p>
          </div>

        </div>
      </section>



      <!-- Education Section with Scroll Animation -->
      <section ref="educationRef" class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md mb-16 animate-fade-in">
        <h3 class="text-2xl font-semibold mb-4">Education</h3>
        <div class="space-y-6">
          <div
            v-for="edu in education"
            :key="edu.id"
            class="relative pl-6 border-l-2 border-secondary-300 dark:border-secondary-700"
          >
            <div class="absolute -left-2 top-1 w-3 h-3 bg-secondary-600 rounded-full"></div>
            <h4 class="font-semibold">{{ edu.degree }}</h4>
            <p class="text-secondary-500">{{ edu.institution }}</p>
            <p class="text-xs text-gray-500">{{ edu.period }}</p>
            <p class="text-sm text-gray-600 dark:text-gray-300">{{ edu.description }}</p>
          </div>
        </div>
      </section>

      <!-- Interests -->
      <section class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
        <h3 class="text-2xl font-semibold mb-4">Interests</h3>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="interest in interests"
            :key="interest"
            class="bg-primary-100 dark:bg-primary-800/30 text-primary-700 dark:text-primary-300 rounded-full px-4 py-2 text-sm"
          >
            {{ interest }}
          </span>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@keyframes slide-in-right {
  0% {
    opacity: 0;
    transform: translateX(40px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in-right {
  animation: slide-in-right 0.6s ease-out forwards;
}

body.modal-open {
  overflow: hidden;
  position: fixed;
  width: 100%;
}
</style>
