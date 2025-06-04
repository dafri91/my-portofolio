import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import './style.css'
import routes from './router'
import Tilt from '../src/components/composables/tilts'



// Buat instance Pinia
const pinia = createPinia()

// Buat instance Router
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Buat dan mount app
const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(MotionPlugin)
app.directive('tilt', Tilt)
app.mount('#app')
