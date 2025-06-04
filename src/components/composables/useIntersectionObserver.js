import { ref, onMounted, onUnmounted } from 'vue'

export function useIntersectionObserver(options = {}) {
  const isVisible = ref(false)
  const targetRef = ref(null)
  let observer = null

  const defaultOptions = {
    threshold: 0.1,
    root: null,
    rootMargin: '0px',
    ...options
  }

  onMounted(() => {
    observer = new IntersectionObserver(([entry]) => {
      isVisible.value = entry.isIntersecting
    }, defaultOptions)
    
    if (targetRef.value) {
      observer.observe(targetRef.value)
    }
  })

  onUnmounted(() => {
    if (observer && targetRef.value) {
      observer.unobserve(targetRef.value)
    }
  })

  return { isVisible, targetRef }
}