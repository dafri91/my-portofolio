<script setup>
import lottie from 'lottie-web'
import { onMounted, ref } from 'vue'
import laptopAnimation from '../../assets/lottie/laptoplottie.json'

const container = ref(null)

onMounted(() => {
  lottie.loadAnimation({
    container: container.value,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: laptopAnimation
  })
})
</script>

<template>
  <div ref="container" style="width: 300px; height: 400px;"></div>
</template>
