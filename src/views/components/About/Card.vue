<template>
<section class="animate-fade-up">
    <div href="#" class="primary-text relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
        <span class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
        <div class="sm:flex sm:justify-between sm:gap-4">
            <div class="">
                <h3 class=" font-bold sm:text-xl">
                    About me
                </h3>
                <p class="mt-1 text-sm font-medium text-secondary">Hello world!</p>
            </div>

            <div class="hidden sm:block sm:shrink-0">
                <img alt="Paul Clapton" :src="profilePic" class="h-16 w-16 rounded-full object-cover shadow-sm" />
            </div>
        </div>
        <div class=" mt-4">
            <div class="max-w-[60ch] text-sm text-secondary space-y-4">
                <p>{{  title }}</p>
                <p>{{ description }}}</p>
            </div>
        </div>
    </div>
</section>
</template>

<script setup>

import profilePic from '../../../assets/img/profilePic.jpg';

const props = defineProps({
    title: String,
    description: String,
})
</script>

<style>

</style>
