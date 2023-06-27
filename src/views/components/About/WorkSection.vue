<template>
<section class="text-primary flex flex-col md:flex-row gap-2 md:gap-9 col-reverse">
    <h2 class="md:w-28 text-secondary shrink-0 animate-fade-up animate-delay-[600ms]">{{ title }}</h2>
    <div class="flex flex-col w-full gap-8">    
        <div class="animate-fade-up animate-delay-[600ms] text-sm">
            <p class="mb-2"> {{ subject }}</p>
            <p>{{ description }}</p>
        </div>
        <ul class="animate-fade-up animate-delay-[700ms] flex flex-col gap-8 animated-list text-sm">
            <li class="">
                <a v-for="item in jobData" :key="item" class="relative overflow-hidden underline-offset-4 flex justify-between w-full px-3 py-4 -mx-3 -my-2" target="_blank" href="#">
                    <div class="flex items-center gap-4">
                        <img alt="Hines" loading="lazy" decoding="async" data-nimg="1" class="rounded-full  opacity-75" style="color: transparent;" :src="item.companyLogo" width="48" height="48">
                        <div class="flex flex-col gap-px ">
                            <p class="external-arrow">{{ item.position }}</p>
                            <p class="text-secondary">{{ item.companyName }}</p>
                        </div>
                    </div>
                    <p class="text-secondary">{{ item.startDate }} - {{ item.endDate }}</p>
                </a>    
            </li>
        </ul>
    </div>
</section>
</template>

<script setup>
import { ref } from 'vue';
import BriaLogo from '../../../assets/img/BriaLogo.png'
import ChedLogo from '../../../assets/img/ched-logo.png'

const title = ref('Work Experience');
const subject = ref('1+ years of professional development experience.');
const description = ref('I started my career teaching others how to code, which I will always be appreciative of. Then I worked at a few small local companies. Now I am working with systems at a bigger scale with Hines.');

const jobData = ref([
    {
        id: 1,
        position: 'Frontend Developer',
        companyName: 'Bria Homes Inc.',
        companyLogo: BriaLogo,
        startDate: 'Aug 2022',
        endDate: 'Present',
    },
    {
        id: 2,
        position: 'Software Developer',
        companyName: 'CHED Regional Office V.',
        companyLogo: ChedLogo,
        startDate: 'Jan 2022',
        endDate: 'Jun 2022',
    }
])

</script>