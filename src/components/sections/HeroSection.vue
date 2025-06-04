<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const typedText = ref('');
const fullText = 'Informatics Engineering Student';
const typingSpeed = 100;
const cursorVisible = ref(true);

const navigateToContact = () => {
  router.push('/contact');
};

const navigateToPortfolio = () => {
  router.push('/portfolio');
};

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' }
];

// Typing animation
onMounted(() => {
  let currentIndex = 0;
  
  const typeText = () => {
    if (currentIndex < fullText.length) {
      typedText.value += fullText.charAt(currentIndex);
      currentIndex++;
      setTimeout(typeText, typingSpeed);
    } else {
      // Start cursor blinking animation after typing is complete
      setInterval(() => {
        cursorVisible.value = !cursorVisible.value;
      }, 500);
    }
  };
  
  setTimeout(typeText, 500);
});
</script>

<template>
<section class=" mt-4 md:mt-[-35px]  relative min-h-[90vh] flex items-center bg-[#FFFBF5] dark:bg-gray-900 dark:bg-none">
    <div class="absolute inset-0 bg-gradient-to-tr from-primary-50/50 to-secondary-50/20 dark:from-gray-950 dark:to-gray-900 -z-10"></div>
    
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="text-center lg:text-left order-2 lg:order-1">
           <h1 class="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-neutral-800 dark:text-neutral-100 mb-6">
            <span class="block">Hi, I'm </span>
          </h1>
          <h1 class="mb-4 animate-slide-up dark:text-white text-gray-700">Dafri Mulya</h1>
          <div class="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6 h-12 lg:h-16 animate-slide-up flex items-center justify-center lg:justify-start">
            <span>{{ typedText }}</span>
            <span class="ml-1 font-thin text-primary-600 dark:text-primary-400" :class="{ 'opacity-0': !cursorVisible }">|</span>
          </div>
          
          <p class=" text-justify text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto lg:mx-0 animate-slide-up">
              I am an Informatics Engineering student with a strong enthusiasm for technologies like web and application development, as well as Machine Learning. I build simple websites and I’m currently learning backend development and expanding my knowledge in Machine Learning.
          </p>
      <div class="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-4 animate-slide-up">
        <button @click="navigateToPortfolio" class="btn-primary">
          View My Portfolio
        </button>
        <button @click="navigateToContact" class="btn-outline">
          Contact Me
        </button>
      </div>

          
          <div class="mt-12 flex items-center justify-center lg:justify-start space-x-6 animate-slide-up">
            <a 
              v-for="link in socialLinks" 
              :key="link.name"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-all transform hover:-translate-y-1"
              :aria-label="link.name"
            >
              <component :is="link.icon" class="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div class="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
          <div class="relative w-64 h-64  sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-soft-lg">
            <img 
              src="/images/hero2.jpg" 
              alt="John Doe" 
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scroll indicator
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div class="w-8 h-12 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center">
        <div class="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-slide-down"></div>
      </div>
    </div> -->
  </section>
</template>