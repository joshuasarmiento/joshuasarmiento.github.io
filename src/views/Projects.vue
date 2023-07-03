<template>
<main class="text-primary p-4 mt-4 md:mt-16 max-w-[700px] mx-auto">
    <div class="text-primary flex flex-col gap-16 md:gap-12 scroll-smooth">
        <div class="flex flex-col gap-8">
            <div>
                <h1 class="animate-fade-up text-2xl font-bold tracking-tight mb-2">{{ title }}</h1>
                <p class=" text-secondary animate-fade-up animate-delay-[100ms] text-sm">{{ description }}
                    <a href="mailto:sarmientojoshuaalvarez@gmail.com" class="underline"> contact me.</a>
                </p>
            </div>
        </div>
        <Tabs class="animate-fade-up animate-delay-[200ms]"/>
    </div>
</main>
</template>

<script setup>
import {ref} from 'vue';
import Tabs from "./Tabs.vue"

const title = ref('Projects');
const description = ref("If you have any questions or would like to learn more about my work, please don't hesitate to");
</script>

<style></style>
