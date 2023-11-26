<template>
<section class="text-primary flex flex-col md:flex-row gap-2 md:gap-9 col-reverse">
    <h2 class="md:w-28 text-secondary shrink-0 animate-fd-6">{{ title }}</h2>
    <div class="flex flex-col w-full gap-8">
        <div class="animate-fd-7 text-sm">
            <p class="mb-2"> {{ subject }}</p>
            <p>{{ description }}</p>
        </div>
        <ul class="animate-fd-8 flex flex-col gap-8 text-sm">
            <li class="">
                <a v-for="item in jobData" :key="item" class="group relative overflow-hidden underline-offset-4 flex flex-col md:flex-row justify-between w-full px-3 py-4 -mx-3 -my-2" target="_blank" :href="item.link">
                    <div class="flex items-center gap-4">
                        <img :src="item.companyLogo" decoding="async" alt="{{ item.companyName }}" data-nimg="1" class="group-hover:animate-wiggle rounded-full object-cover opacity-75" style="color: transparent;" width="48" height="48">
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
  onMounted,
    ref
} from 'vue';
import jobDataJson from '../../../data/job.json'

const title = ref('Work Experience');
const subject = ref('Over 1 year of professional development experience.');
const description = ref('Highly motivated and results-oriented individual with a passion for learning new technologies.');

const jobData = jobDataJson.JobDetails.map(job => ({
  ...job,
  companyLogo: new URL(`../../../assets/img/${job.companyLogo}`, import.meta.url).href,
}));

</script>
