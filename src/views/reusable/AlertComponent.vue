<template>
<div v-if="showAlert" class="flex justify-center items-center animate-fade-down animate-delay-1000 animate-duration-[500ms] transition-all bg-gradient-to-r opacity-80 from-green-300 via-blue-500 to-purple-600 px-4 py-3 text-neutral-100">
    <p class="text-start md:text-center text-sm space-x-4">
        🤣
        <span>Please don't refresh the page while on a route. GitHub Pages serves static content, and refreshing a route may result in a 404 error.</span>
        🤣
    </p>

    <button @click="closeAlert" class="ml-4 rounded-full border border-gray-300 bg-gray-100 p-1">
        <span class="sr-only">Close</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="black">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
    </button>
</div>
</template>

<script setup>
import {
    ref,
    onMounted
} from 'vue';

const showAlert = ref(false);

onMounted(() => {
    const alertShown = localStorage.getItem('alertShown');
    if (!alertShown) {
        showAlert.value = true;
    }
});

const closeAlert = () => {
    showAlert.value = false;
    // const currentDate = new Date();
    // const tomorrow = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);
    // localStorage.setItem('alertShown', tomorrow.toISOString());
};
</script>

<style>
</style>
