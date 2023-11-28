<template>
<section>
    <div class="flex flex-col gap-8 animate-in mt-4 md:mt-16 p-4">
        <!-- Name & Subject -->
        <div class="">
            <h1 class="animate-fade-up text-3xl font-bold tracking-tight text-primary mb-2">{{  name  }}</h1>
            <p class="text-secondary animate-fd-1">{{  subject }}</p>
        </div>
        <div class="animate-fd-2 flex flex-col md:flex-row gap-6 text-secondary md:items-center">
            <img alt="avatar" loading="lazy" decoding="async" data-nimg="1" :style="imgStyle" class="rounded-full object-cover w-24 h-24" v-lazy="{ src: profilePic }">
            <ul class="space-y-2">
                <div class="sm:pl-8 text-xs">Coding Activity Over All Time <span class="text-xs">(Wakatime)</span></div>
                <li class="">
                    <div v-for="(stat, index) in stats" :key="index" class="text-secondary animate-shake animate-delay-[3000ms] underline-offset-4 flex gap-3 items-center no-underline" target="_blank">
                        <svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                            <path fill-rule="evenodd" d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z" clip-rule="evenodd"></path>
                        </svg>                        
                        <span class="animate-shake animate-delay-[3000ms]">{{stat.text}}</span>
                        <span class="text-xs">{{ stat.subtext }}</span>
                    </div>
                </li>
            </ul>
        </div>
        <!-- Description -->
        <p class="text-primary max-w-xl animate-fd-3">
            {{ description }}
        </p>
        <!-- Links -->
        <LinksSection/>
        <!-- WakaTime -->
        <Charts/>
    </div>
</section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import profilePic from '../../../assets/img/avatar1.webp';
import LinksSection from './Links.vue';
import Charts from './Charts.vue'
import { useBorderRadius } from '../../reusable/useBorderRadius.js';

const name = ref('Joshua Sarmiento');
const subject = ref('I design and write code.');
const description = ref("I'm Joshua Sarmiento, a Web Developer currently working at Vista Lifescapes, Inc., with over 1 year of experience.")

const dailyAvarageCode = ref('');
const totalAverageCode = ref('');

const { imgStyle, startRotation } = useBorderRadius();
// Call startRotation to begin the rotation
startRotation();


const fetchData = async () => {
    const response = await fetch('https://wakatime.com/share/@returnjosh/aff1ace3-b7c8-4679-a851-29ab57dcb42e.json');
    const data = await response.json();
    // humanReadableDailyAverageIncludingOtherLanguage.value = data.data.grand_total.human_readable_daily_average_including_other_language;
    dailyAvarageCode.value = data.data.grand_total.human_readable_daily_average;
    totalAverageCode.value = data.data.grand_total.human_readable_total;
};

onMounted(fetchData);

const animate = ref(false);
onMounted(() => {
    setInterval(animate.value = !animate.value, 5000);
});

const stats = ref([
    {
        id: 1,
        text: totalAverageCode,
        subtext: 'Total Average'
    },
    {
        id: 2,
        text: dailyAvarageCode,
        subtext: 'Daily Average'
    }
])
</script>