<template>
<main class="text-primary p-4 mt-8 md:mt-16 max-w-screen-sm mx-auto">
    <div class="flex flex-col gap-20">
        <article>
            <div class="flex flex-col gap-3">
                <p class="text-secondary animate-fade-up"><time datetime="2023-03-05">{{ data.date }}</time></p>
                <h1 class="text-primary animate-fade-up animate-delay-[100ms] text-3xl font-bold tracking-tight leading-tight">{{ data.subject }}</h1>
                <p class="text-xl text-secondary animate-fade-up animate-delay-[200ms] ">{{ data.titleDesc }}</p>
            </div>
            <div class="h-8"></div>
            <img :src="data.img" :alt="data.subject" loading="lazy" fetchpriority="high" decoding="async" data-nimg="1" class="animate-fade-up animate-delay-[300ms] w-[calc(100%+48px)] -ml-6 lg:w-[calc(100%+128px)] lg:-ml-16 md:rounded-lg max-w-none shadow-md" style="color: transparent;" width="700" height="350">
            <div class="h-16"></div>
            <div class="animate-fade-up animate-delay-[400ms]">
                <h2 class="text-xl font-bold tracking-wide mb-4">Objective</h2>
                <p>{{ data.objective }}</p>
            </div>
            <div class="h-10"></div>
            <div class="animate-fade-up animate-delay-[500ms]">
                <h2 class="text-xl font-bold tracking-wide  mb-4">Tools and Technologies Used</h2>
                <ul v-for="tool in project.tools" :key="tool" class="inline-flex">
                    <li class="pr-2">{{ tool }} |</li>
                </ul>
            </div>
            <div class="h-10"></div>
            <div class="animate-fade-up animate-delay-[600ms]">
                <h2 class="text-xl font-bold tracking-wide mb-4">Challenge</h2>
                <p v-for="chal in project.challenge" :key="chal" class="pb-4">{{ chal }}</p>
            </div>
            <div v-if="data.liveLink" class="h-8"></div>
            <a v-if="data.liveLink" class="group relative underline-offset-4 inline-flex items-center overflow-hidden rounded border border-current px-8 py-3" target="_blank" :href="data.liveLink">
                <span class="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 group-hover:h-1 group-hover:animate-fade-up group-hover:animate-duration-[200ms]"></span>
                <span class="absolute -end-full transition-all group-hover:end-4">
                    <svg class="h-5 w-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </span>

                <span class="text-sm font-medium transition-all group-hover:me-4">
                    Visit the website
                </span>
            </a>
            <div class="divider py-8"></div>
                <h2 class="text-xl font-bold tracking-wide mb-4">Other Contributors</h2>
            <article v-if="data.contributors" class="border border-gray-500 rounded-md p-4 w-[calc(100%+48px)] -ml-6 lg:w-[calc(100%+128px)] lg:-ml-16">
                <div v-for="contri in project.contributors" :key="contri" class="flex justify-between items-center py-2 gap-4">
                    <div class="flex items-center gap-4">
                        <img alt="Developer" :src="contri.image" class="h-16 w-16 rounded-full object-cover" />
                        <div>
                            <h3 class="text-md font-medium ">{{ contri.name }}</h3>
                            <div class="flow-root">
                                <ul class="-m-1 flex flex-wrap">
                                    <li v-if="contri.link" class="p-1 leading-none">
                                        <a :href="contri.link" class="text-xs font-medium group relative inline-flex overflow-hidden pr-8 py-2"> 
                                        
                                            <span class="absolute -end-full transition-all group-hover:end-4">
                                                <svg class="h-4 w-4 ml-auto text-secondary rtl:rotate-180"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" >
                                                    <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                            <span class="text-xs font-medium group-hover:me-4">
                                                Contact
                                            </span> 
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="hidden md:block text-end">
                        <h3 class="text-sm font-medium text-secondary"> {{ contri.position }} </h3>
                        <span class="text-xs font-medium "> {{ contri.company }} </span>
                    </div>
                </div>
            </article>
        </article>
    </div>
</main>
</template>

<script setup>
import {
    ref,
    computed
} from 'vue';
import {
    useRoute
} from 'vue-router'
import projects from '../../../data/projects.json';
const route = useRoute();
const projectId = ref(route.params.id);

const data = ref(null);

const project = projects.projectDetails.find((item) => item.params === projectId.value);

project ? data.value = project : '';
</script>
