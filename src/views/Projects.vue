<template>
<main class="text-primary p-4 mt-16 max-w-screen-sm mx-auto">
    <div class="text-primary flex flex-col gap-16 md:gap-24">
        <div class="flex flex-col gap-8">
            <div>
                <h1 class="animate-fade-up text-2xl font-bold tracking-tight">{{ title }}</h1>
                <p class="text-secondary animate-fade-up animate-delay-[100ms] text-sm">{{ description }}</p>
            </div>
        </div>
        <div class="animate-in">
            <ul class="flex flex-col animated-list">
                <li v-for="item in data" :key="item.id" class="py-3 group">
                    <div :class="item.animateDelay" class="animate-fade-up transition-opacity">
                        <div class="flex justify-between gap-6 items-center">
                            <section class="flex flex-col md:flex-row gap-2 md:gap-9 col-reverse">
                                <h2 class="md:w-28 text-secondary shrink-0">
                                    {{item.date}}
                                </h2>
                                <router-link :to="{
                                    name: 'projectsDetails',
                                    params: {
                                        id: item.id
                                    }
                                }">
                                    <span class="font-medium leading-tight hover:animate-pulse">
                                        {{ item.subject }}
                                    </span>
                                </router-link>
                            </section>
                        </div>
                    </div>

                </li>
            </ul>
        </div>
    </div>
</main>
</template>

<script setup>

import {
    ref
} from 'vue';
import projects from '../data/projects.json';
const title = ref('Projects');
const description = ref("I hope you find these projects interesting and informative. If you have any questions or would like to learn more about my work, please don't hesitate to contact me.");
const data = ref(projects.projectDetails);
</script>

<style></style>
