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
                <a v-for="item in jobData" :key="item" class="group relative overflow-hidden underline-offset-4 flex flex-col md:flex-row justify-between w-full px-3 py-4 -mx-3 -my-2" target="_blank" :href="item.link">
                    <div class="flex items-center gap-4">
                        <img alt="Hines" loading="lazy" decoding="async" data-nimg="1" class="group-hover:animate-wiggle rounded-full opacity-75" style="color: transparent;" :src="item.companyLogo" width="48" height="48">
                        <div class="flex flex-col gap-px ">
                            <p class="external-arrow">{{ item.position }}</p>
                            <p class="text-secondary">{{ item.companyName }}</p>
                        </div>
                    </div>
                    <p class="text-secondary text-start ml-16">{{ item.startDate }} - {{ item.endDate }}</p>
                </a>
            </li>
        </ul>
    </div>
</section>
</template>

<script setup>
import {
    ref
} from 'vue';
import jobs from '../../../data/job.json'

const title = ref('Work Experience');
const subject = ref('1+ year of professional development experience.');
const description = ref('I am eager to learn new technologies and contribute to the development of innovative applications.');
const jobData = ref(jobs.JobDetails);
</script>
