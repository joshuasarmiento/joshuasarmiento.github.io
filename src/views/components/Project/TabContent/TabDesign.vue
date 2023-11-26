<template>
<div class="">
    <ul class="flex flex-col">
        <li v-for="itemDesign in design" :key="itemDesign.id" class="py-3 group">
            <div class="animate-fade-up">
                <div class="flex justify-between gap-6 items-center">
                    <!-- :class="item.id === 1 ? '-z-10 text-secondary' : ''" -->
                    <section class="flex flex-col items-start md:items-center md:flex-row gap-2 md:gap-9 col-reverse">
                        <h2 class="md:w-40 text-secondary text-sm shrink-0">
                            {{itemDesign.date}}
                        </h2>

                        <span class="cursor-auto text-secondary" v-if="itemDesign.isEmpty" >{{ itemDesign.subject }}</span>
                        <div v-else>
                            <router-link :to="{
                                    name: 'projectsDetails',
                                    params: {
                                        id: itemDesign.subject.replace(/\s+/g, '-'),
                                    }
                                }">
                                <span class="font-medium leading-tight hover:animate-pulse flex space-x-4">
                                    <span>{{ itemDesign.subject }}</span>
                                    <div v-for="icon in itemDesign.icons" :key="icon" class="justify-end">
                                        <img :src="icon" alt="Programming Languages" class="h-4 w-4">
                                    </div>
                                </span>
                            </router-link>
                        </div>

                        <span v-if="itemDesign.isOngoing" class="inline-flex items-center justify-center rounded-full bg-amber-600/30 dark:bg-amber-100/30 backdrop-blur-sm px-2.5 py-0.5 dark:text-amber-100 text-amber-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="-ms-1 me-1.5 h-3 w-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
                            </svg>
                            <p class="whitespace-nowrap text-xs">Ongoing</p>
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