<template>
<div class="">
    <ul class="flex flex-col animated-list">
        <li v-for="itemDesign in design" :key="itemDesign.id" class="py-3 group">
            <div :class="itemDesign.animateDelay" class="animate-fade-up">
                <div class="flex justify-between gap-6 items-center">
                    <!-- :class="item.id === 1 ? '-z-10 text-secondary' : ''" -->
                    <section class="flex flex-col md:flex-row gap-2 md:gap-9 col-reverse">
                        <h2 class="md:w-40 text-secondary text-sm shrink-0">
                            {{itemDesign.date}}
                        </h2>
                        <router-link :to="{
                                    name: 'projectsDetails',
                                    params: {
                                        id: itemDesign.params,
                                    }
                                }">
                            <span class="font-medium leading-tight hover:animate-pulse">
                                {{ itemDesign.subject }}
                            </span>
                        </router-link>
                        <span v-if="itemDesign.isOngoing" class="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700">
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
    design: {
        type: Object
    } 
});
</script>