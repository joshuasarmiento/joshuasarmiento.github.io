<template>
    <section v-if="data" class=" mt-8 md:mt-16 scroll-smooth">
        <div class="flex flex-col gap-20">
            <article>
                <div class="flex flex-col gap-3">
                    <div class="flex space-x-4">
                        <p class="text-secondary-content animate-fade-up"><time datetime="2023-03-05">{{ data.date }}</time></p>
                        <span v-if="data.isOngoing" class="animate-fade-up inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="-ms-1 me-1.5 h-4 w-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
                            </svg>
                            <p class="whitespace-nowrap text-sm">Ongoing</p>
                        </span>
                    </div>
                    <h1 class="text-primary animate-fd-1 text-3xl font-bold tracking-tight leading-tight">{{ data.subject }}</h1>
                    <p class="text-xl text-secondary-content animate-fd-2 ">{{ data.titleDesc }}</p>
                </div>
                <div v-if="project.badges != ''">
                    <div class="h-4"></div>
                    <p class="text-secondary-content animate-fd-3">
                        <time datetime="2023-03-05">Time spent in the project:</time>
                    </p>
                    <div class="flex space-x-4 mt-2 animate-fd-4">
                        <div v-for="badge in project.badges" :key="badge">
                            <img  v-lazy="{ src: badge }" alt="">
                        </div>
                    </div>
                </div>
                <div class="h-8"></div>
                <!-- <img :src="data.img" :alt="data.subject" loading="lazy" fetchpriority="high" decoding="async" data-nimg="1" class="animate-fade-up animate-delay-[300ms] w-[calc(100%+48px)] -ml-6 lg:w-[calc(100%+128px)] lg:-ml-16 md:rounded-lg max-w-none shadow-md" style="color: transparent;" width="700" height="350"> -->
                <CarouselSection :project="project.img" class="animate-fd-5"/>

                <div class="h-16"></div>
                <div class="animate-fd-6">
                    <h2 class="text-xl font-bold tracking-wide mb-4">Objective</h2>
                    <p class="text-secondary-content">{{ data.objective }}</p>
                </div>

                <div class="h-10"></div>
                <div class="animate-fd-7">
                    <h2 class="text-xl font-bold tracking-wide  mb-4">Tools and Technologies Used</h2>
                    <div v-for="icon in project.icons" :key="icon" class="inline-flex mr-4">
                        <img :src="icon" alt="Programming Languages" class="w-8 h-8"/>
                    </div>
                    <br>
                    <ul v-for="tool in project.tools" :key="tool" class="inline-flex">
                        <li class="pr-2 text-secondary-content">{{ tool }} |</li>
                    </ul>
                </div>

                <div v-if="data.embedLink" class="h-10"></div>
                <div v-if="data.embedLink" class="animate-fd-8">
                    <iframe loading="lazy" style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" class="w-[calc(100%+48px)] -ml-6 lg:w-[calc(100%+128px)] lg:-ml-16 md:rounded-lg max-w-none" :src="data.embedLink" allowfullscreen></iframe>
                </div>

                <div class="h-10"></div>
                <div class="animate-fd-9">
                    <h2 class="text-xl font-bold tracking-wide mb-4">Challenge</h2>
                    <p v-for="chal in project.challenge" :key="chal" class="pb-4 text-secondary-content">{{ chal }}</p>
                </div>

                <div v-if="project.poster" class="h-10"></div>
                <div v-if="project.poster" class="animate-fd-10">
                    <img  v-lazy="{ src: project.poster }" alt="Poster" class="rounded-lg">
                </div>

                <div v-if="data.liveLink" class="h-8"></div>
                <a v-if="data.liveLink" class="animate-fd-11 group relative underline-offset-4 inline-flex items-center overflow-hidden rounded border border-current px-8 py-3" target="_blank" :href="data.liveLink">
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
                <h2 class="animate-fd-12 text-xl font-bold tracking-wide mb-4">Other Contributors</h2>
                <div v-if="data.contributors" class="animate-fd-12 border border-neutral-500 rounded-md p-4 w-[calc(100%+48px)] -ml-6 lg:w-[calc(100%+128px)] lg:-ml-16 ">
                    <div v-for="contri in project.contributors" :key="contri" class="flex justify-between items-center py-2 gap-4">
                        <div class="flex items-center gap-4">
                            <img v-lazy="{ src: contri.image }" class="h-16 w-16 rounded-full object-cover" />
                            <div>
                                <h3 class="text-md font-medium ">{{ contri.name }}</h3>
                                <div class="flow-root">
                                    <ul class="-m-1 flex flex-wrap">
                                        <li v-if="contri.link" class="p-1 leading-none">
                                            <a :href="contri.link" class="text-xs font-medium group relative inline-flex overflow-hidden pr-8 py-2">
                                                <span class="absolute -end-full transition-all group-hover:end-4">
                                                    <svg class="h-4 w-4 ml-auto text-secondary rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
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
                        <div class="hidden sm:block text-end">
                            <h3 class="text-sm font-medium text-secondary"> {{ contri.position }} </h3>
                            <span class="text-xs font-medium "> {{ contri.company }} </span>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>

    
<script setup>
import CarouselSection from "../CarouselSection.vue";

const props = defineProps({
    data: {
        type: Object,
    },
    project: {
        type: Object,
    }
})
</script>
