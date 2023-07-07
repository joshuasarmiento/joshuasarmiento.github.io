<template>
<div v-if="showAlert" class="animate-fade-down animate-delay-1000 animate-duration-[500ms] transition-all bg-gradient-to-r opacity-80 from-green-300 via-blue-500 to-purple-600 px-4 py-3 text-neutral-100">
  <p class="text-center text-sm space-x-4">
    🤣
    <span>Please don't refresh the page while on a route. GitHub Pages serves static content, and refreshing a route may result in a 404 error.</span>
    ✌️
    <span>{{ countdown }}</span>
  </p>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showAlert = ref(false);
const countdown = ref(20);

onMounted(() => {
  const alertShown = localStorage.getItem('alertShown');
  if (!alertShown) {
    showAlert.value = true;

    const interval = setInterval(() => {
      countdown.value--;
      if (countdown.value === 0) {
        clearInterval(interval);
        showAlert.value = false;
        localStorage.setItem('alertShown', true);
      }
    }, 1000); // 1 second
  }
});
</script>

<style>

</style>
