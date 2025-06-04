<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useMotion } from '@vueuse/motion';
import HeroSection from '../components/sections/HeroSection.vue';
import AboutPreview from '../components/sections/AboutPreview.vue';
import PortfolioPreview from '../components/sections/PortfolioPreview.vue';
import ContactCTA from '../components/sections/ContactCTA.vue';

const router = useRouter();

const heroRef = ref(null);
const aboutRef = ref(null);
const portfolioRef = ref(null);
const contactRef = ref(null);

// Setting up animations
useMotion(heroRef, {
  initial: {
    opacity: 0,
    y: 20
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 500
    }
  }
});

useMotion(aboutRef, {
  initial: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 500,
      delay: 100
    }
  },
  visibleOnce: true,
});

useMotion(portfolioRef, {
  initial: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 500,
      delay: 100
    }
  },
  visibleOnce: true,
});

useMotion(contactRef, {
  initial: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 500,
      delay: 100
    }
  },
  visibleOnce: true,
});
</script>

<template>
  <div class="min-h-screen bg-hero-gradient bg-grid text-white">
    <!-- Hero Section -->
    <div ref="heroRef">
      <HeroSection />
    </div>
    
    <!-- About Preview Section -->
    <div ref="aboutRef">
      <AboutPreview />
    </div>
    
    <!-- Portfolio Preview Section -->
    <div ref="portfolioRef">
      <PortfolioPreview />
    </div>
    
    <!-- Contact CTA Section -->
    <div ref="contactRef">
      <ContactCTA />
    </div>
  </div>
</template>

<style></style>