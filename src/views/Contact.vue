<template>
<main class="text-primary mt-4 md:mt-16 mx-auto max-w-[700px] scroll-smooth">
    <div class="text-primary flex flex-col gap-16 md:gap-24 p-4">
        <div class="flex flex-col gap-8 animate-in">
            <img alt="avatar" loading="lazy" decoding="async" data-nimg="1" class="animate-fade-up rounded-full object-cover bg-secondary mx-auto animate-in" style="color: transparent; --index: 1;" :src="profilePic" :style="imgStyle" width="100" height="100">
            <div class="animate-fade-up animate-delay-[100ms] space-y-1 animate-in">
                <h1 class="text-2xl font-bold tracking-tight text-center">Joshua Sarmiento</h1>
                <p class="max-w-sm text-secondary text-sm mx-auto text-center">Web Developer</p>
            </div>
        </div>
        <ul class="flex-grow grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
            <li v-for="data in connectLinks" :key="data.id" class="col-span-1">
                <a :class="data.animateDelay" class="animate-fade-up text-sm relative underline-offset-4 overflow-hidden no-underline w-full border backdrop-blur-sm border-neutral-300 dark:border-neutral-700 rounded-lg p-4 border-primary inline-grid group" target="_blank" :href="data.link">
                    <span class="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 group-hover:h-2 group-hover:animate-fade-up group-hover:animate-duration-[200ms]"></span>
                    <div class="flex justify-between gap-3">
                        <span class="flex">
                            <span class="text-xl pr-3" v-html="data.svg"></span>
                            {{ data.text }}
                        </span>
                        <span v-html="linkSVG"></span>
                    </div>
                </a>
            </li>   
        </ul>
    </div>
    <GradientBg/>
</main>
</template>

<script setup>
import profilePic from '../assets/img/avatar1.webp'
import GradientBg from './reusable/Gradient-bg.vue'
import { useBorderRadius } from './reusable/useBorderRadius.js'

import {
    ref,
    computed,
    onMounted
} from 'vue';

const { imgStyle, startRotation } = useBorderRadius();
// Call startRotation to begin the rotation
startRotation();


const connectLinks = ref([{
        id: 1,
        text: 'Email',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path>
                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path>
                </svg>`,
        animateDelay: 'animate-delay-[200ms]',
        link: "mailto:sarmientojoshuaalvarez@gmail.com",
    },
    {
        id: 2,
        text: 'Github',
        svg: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                            </svg>`,
        animateDelay: 'animate-delay-[300ms]',
        link: 'https://github.com/joshuasarmiento',
    },
    {
        id: 5,
        text: 'Gitlab',
        svg: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 500 512" height="1em" width="1em"  xmlns="http://www.w3.org/2000/svg">
                        <path d="m510.507 284.678s-27.32-84.143-27.326-84.158l-54.212-166.905c-2.934-8.702-10.746-14.306-19.922-14.306-.038 0-.079.001-.118.001-9.177.048-16.94 5.708-19.78 14.429l-51.569 158.767h-163.066l-51.665-158.775c-2.838-8.713-10.601-14.373-19.78-14.421-.038 0-.078-.001-.118-.001-9.176 0-16.987 5.605-19.964 14.435 0 0-54.078 166.796-54.079 166.801l-27.415 84.134c-4.06 12.506.346 26.098 10.97 33.824 0 0 236.687 171.97 236.688 171.971 2.328 1.691 5.312 2.474 8.168 2.144 1.951-.226 3.892-.98 5.495-2.14l236.728-171.978c10.619-7.723 15.025-21.315 10.965-33.822zm-62.176-68.937-160.886 206.144 67.017-206.143h93.869zm-192.338 227.733-5.832-17.965-68.096-209.767h147.964zm-98.359-227.733 66.923 206.153-160.799-206.153zm251.446-168.145 47.067 144.909h-94.136zm-306.156-.004 47.154 144.913h-94.136zm-76.8 252.116c-2.458-1.788-3.475-4.945-2.534-7.842l20.649-63.369 30.059 38.538 121.828 156.191zm459.756-.004-169.978 123.485 48.211-61.772 103.727-132.905 20.565 63.342c.945 2.909-.072 6.065-2.525 7.85z"/>
                    </svg>`,
        animateDelay: 'animate-delay-[400ms]',
        link: 'https://gitlab.com/jsarmiento22',
    },
    {
        id: 3,
        text: 'LinkedIn',
        svg: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                            </svg>`,
        animateDelay: 'animate-delay-[500ms]',
        link: 'https://www.linkedin.com/in/joshuasarmiento/',
    },
    {
        id: 4,
        text: 'Instagram',
        svg: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                            </svg>`,
        animateDelay: 'animate-delay-[600ms]',
        link: 'https://www.instagram.com/__jossshh/',
    },
    {
        id: 5,
        text: 'Facebook',
        svg: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="m420 36h-328a56 56 0 0 0 -56 56v328a56 56 0 0 0 56 56h160.67v-183.076h-36.615v-73.23h36.312v-33.094c0-29.952 14.268-76.746 77.059-76.746l56.565.227v62.741h-41.078c-6.679 0-16.183 3.326-16.183 17.592v29.285h58.195l-6.68 73.23h-54.345v183.071h94.1a56 56 0 0 0 56-56v-328a56 56 0 0 0 -56-56z"/>
                </svg>
                `,
        animateDelay: 'animate-delay-[700ms]',
        link: 'https://www.facebook.com/joshsarmiento22/',
    },
])

const linkSVG = ref(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 ml-auto text-secondary">
                        <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                    </svg>`)
</script>

<style>
</style>
