<template>
<div class="">
    <ul class="flex flex-col">
        <li v-for="itemOS in openSouce" :key="itemOS.id" class="py-3 group">
            <div :class="itemOS.animateDelay" class="animate-fade-up">
                <div class="flex justify-between gap-6 items-center">
                    <!-- :class="item.id === 1 ? '-z-10 text-secondary' : ''" -->
                    <section class="flex flex-col md:flex-row gap-2 md:gap-9 col-reverse">
                        <h2 class="md:w-40 text-secondary text-sm shrink-0">
                            <span>{{itemOS.date}}</span>
                        </h2>

                        <a :href="itemOS.link" target="_blank" class="-ml-4 md:-ml-0 font-medium leading-tight hover:animate-pulse group relative inline-flex overflow-hidden pr-8 py-2 space-x-4">
                            <span class="absolute -end-full transition-all group-hover:end-1">
                                <svg class="h-4 w-4 ml-auto text-secondary rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                </svg>
                            </span>
                            <span>{{ itemOS.subject }}</span>
                            <div v-for="icon in itemOS.icons" :key="icon" class="justify-end">
                                <img :src="icon" alt="Programming Languages" class="h-4 w-full">
                            </div>
                        </a>

                        <span v-if="itemOS.isOngoing" class="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="-ms-1 me-1.5 h-4 w-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
                            </svg>
                            <p class="whitespace-nowrap text-sm">Ongoing</p>
                        </span>
                    </section>
                </div>
            </div>
        </li>
    </ul>
</div>
</template>

<script setup>
const props = defineProps({
    openSouce: {
        type: Object
    } 
});
</script>

<style>

</style>
