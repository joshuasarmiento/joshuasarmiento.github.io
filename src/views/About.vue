<template>
<main class="text-primary p-4 mt-4 md:mt-16 max-w-[700px] mx-auto">
    <div class="flex flex-col gap-16 md:gap-24 scroll-smooth">
        <CardProfile :title="title" :description="description" />
        <ConnectLinks/>
        <WorkSection />
    </div>
</main>
</template>

<script setup>
import { ref } from 'vue';
import WorkSection from '../views/components/About/WorkSection.vue';
import CardProfile from '../views/components/About/Card.vue';
import ConnectLinks from '../views/components/About/Connect.vue';

const title = ref(`I\'m Joshua Sarmiento!`);
const description = ref("My enthusiasm for web development and UI/UX design led me to work on projects where I acquired valuable experience in user research and coding.");
</script>

<style>

</style>
