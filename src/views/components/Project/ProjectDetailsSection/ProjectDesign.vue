<template>
<section v-if="dataUIUX" class=" mt-8 md:mt-16">
    <div class="flex flex-col gap-20">
        <article>
            <div class="flex flex-col gap-3">
                <p class="text-secondary animate-fade-up"><time datetime="2023-03-05">{{ dataUIUX.date }}</time></p>
                <h1 class="text-primary animate-fade-up animate-delay-[100ms] text-3xl font-bold tracking-tight leading-tight">{{ dataUIUX.subject }}</h1>
                <p class="text-xl text-secondary animate-fade-up animate-delay-[200ms] ">{{ dataUIUX.titleDesc }}</p>
            </div>
            <div class="h-8"></div>
            <div class="animate-fade-up animate-delay-[300ms]">
                <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" class="w-[calc(100%+48px)] -ml-6 lg:w-[calc(100%+128px)] lg:-ml-16 md:rounded-lg max-w-none" :src="dataUIUX.embedLink" allowfullscreen></iframe>
            </div>
            <!-- <img :src="data.img" :alt="data.subject" loading="lazy" fetchpriority="high" decoding="async" data-nimg="1" class="animate-fade-up animate-delay-[300ms] w-[calc(100%+48px)] -ml-6 lg:w-[calc(100%+128px)] lg:-ml-16 md:rounded-lg max-w-none shadow-md" style="color: transparent;" width="700" height="350"> -->
            <div class="h-16"></div>
            <div class="animate-fade-up animate-delay-[400ms]">
                <h2 class="text-xl font-bold tracking-wide mb-4">Objective</h2>
                <p>{{ dataUIUX.objective }}</p>
            </div>

            <div class="h-10"></div>
            <div class="animate-fade-up animate-delay-[500ms]">
                <h2 class="text-xl font-bold tracking-wide mb-4">Challenge</h2>
                <p v-for="chal in projectUIUX.challenge" :key="chal" class="pb-4">{{ chal }}</p>
            </div>

            <div class="h-8"></div>
            <a class="animate-fade-up animate-delay-[600ms] group relative underline-offset-4 inline-flex items-center overflow-hidden rounded border border-current px-8 py-3" target="_blank" :href="dataUIUX.embedLink">
                <span class="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 group-hover:h-1 group-hover:animate-fade-up group-hover:animate-duration-[200ms]"></span>
                <span class="absolute -end-full transition-all group-hover:end-4">
                    <svg class="h-5 w-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </span>

                <span class="text-sm font-medium transition-all group-hover:me-4">
                    Visit the wireframe
                </span>
            </a>
        </article>
    </div>
</section>
</template>

<script setup>

const props = defineProps({
    dataUIUX: {
        type: Object,
    },
    projectUIUX: {
        type: Object,
    }
})

</script>
