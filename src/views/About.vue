<template>
<main class="text-primary p-4 mt-4 md:mt-16 max-w-[700px] mx-auto">
    <div class="flex flex-col gap-16 md:gap-24 scroll-smooth">
        <CardProfile :title="title" :description="description" />
        <ConnectLinks/>
        <WorkSection />
        <!-- <ProgLanguages /> -->
    </div>
</main>
</template>

<script setup>
import { ref } from 'vue';
import WorkSection from '../views/components/About/WorkSection.vue';
import CardProfile from '../views/components/About/Card.vue';
import ConnectLinks from '../views/components/About/Connect.vue';
// import ProgLanguages from '../views/components/About/ProgLanguages.vue'

const title = ref(`I\'m Joshua Sarmiento!`);
const description = ref("My passion for web development drove me to undertake projects that provided me with valuable experience in user research and coding.");
</script>

<style>

</style>
