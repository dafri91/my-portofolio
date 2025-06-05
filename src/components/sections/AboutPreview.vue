<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'

const router = useRouter()

const navigateToAbout = () => {
  router.push('/about')
}

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

const { isVisible, targetRef } = useIntersectionObserver({ threshold: 0.17 })
</script>
<template>
  <section class="section bg-gray-50 dark:bg-gray-800/30">
    <div class="container-custom">
          <div class="max-w-3xl mx-auto text-center mb-16">
            <h2 class="mb-4 text-center text-black dark:text-white">About Me</h2>
            <div class="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p class="text-lg text-gray-600 dark:text-gray-400 text-justify">
              My name is Dafri Mulya. I am currently studying Informatics Engineering and have a strong interest in technology, especially web development. 
            </p>
          </div>

          <!-- Ringkasan About Me di Tengah -->
          <div class="grid grid-cols-1 gap-12 items-start">
            <div class="text-center max-w-3xl mx-auto">
              <p class="text-justify md:text-justify text-gray-600 dark:text-gray-400 mb-6">
                I have experience building front-end interfaces using HTML, CSS, JavaScript, Vue.js, and Tailwind CSS. I also explore back-end development using Node.js, Express.js, and MongoDB.
                I’m also interested in Artificial Intelligence (AI) and Machine Learning, and I’ve started learning their fundamentals using Python.
              </p>
              <button @click="navigateToAbout" class="btn-primary">
                More About Me
              </button>
            </div>
          





        <!-- Skills Section -->
        <div ref="targetRef"
          :class="[ 'transition-all duration-700 ease-out', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8' ]">
          <!-- Judul My Skills di Tengah -->
          <h3 class="text-1xl font-semibold mb-[100px] mt-24 text-center text-black dark:text-white ">My Skills</h3>
          <div class="flex flex-wrap justify-center gap-8">
          <div v-for="(skill, index) in skills" :key="skill.name" v-tilt
            class="bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 p-[1px] rounded-[20px] shadow-card max-w-[250px] w-full sm:w-[220px]">
            <div class="bg-gray-100 dark:bg-[#11152c] rounded-[20px] py-8 px-6 flex flex-col items-center justify-evenly h-[280px]">
              <img :src="skill.iconUrl" :alt="skill.name" class="h-16 w-16 object-contain mb-4" />
              <h3 class="text-[20px] font-bold text-gray-900 dark:text-white text-center">{{ skill.name }}</h3>
            </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>
