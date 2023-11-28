<template>
<section class="animate-fade-up">
    <div href="#" class="primary-text relative block overflow-hidden rounded-lg border backdrop-blur-sm border-neutral-300 dark:border-neutral-700 p-4 sm:p-6 lg:p-8">
        <span class="primary-gradient"></span>
        <div class="sm:flex sm:justify-between sm:gap-4">
            <div class="">
                <h3 class=" font-bold sm:text-xl">
                    About me
                </h3>
                <p class="mt-1 text-sm text-secondary">Hello world!</p>
            </div>

            <div class="hidden sm:block sm:shrink-0 hover:animate-wiggle">
                <img alt="Joshua Sarmiento" v-lazy="{ src: profilePic }" :style="imgStyle" class="h-16 w-16 rounded-full object-cover shadow-sm" />
            </div>
        </div>
        <div class=" mt-4">
            <div class="max-w-[60ch] text-sm text-secondary space-y-4">
                <p>{{  title }}</p>
                <p>{{ description }}</p>
            </div>
        </div>
    </div>
</section>
</template>

<script setup>

import profilePic from '../../../assets/img/avatar1.webp';
import { useBorderRadius } from '../../reusable/useBorderRadius.js';

const { imgStyle, startRotation } = useBorderRadius();
// Call startRotation to begin the rotation
startRotation();


const props = defineProps({
    title: String,
    description: String,
})
</script>

<style>

</style>
