<template>
<header class="mx-auto max-w-screen-sm">
    <div class="p-4">
        <div class="flex items-center justify-between gap-4 lg:gap-10">
            <div class="flex lg:w-0 lg:flex-1">
                <a href="/" class="animate-fade">
                    <img loading="lazy" decoding="async" :src="logo" class="h-4 w-4" alt="">
                </a>
            </div>  

            <nav aria-label="Global" class="hidden gap-8 text-sm font-medium sm:flex animate-fade">
                <router-link class="text-primary-link rounded-lg px-3 py-2" to="/about">About</router-link>
                <router-link class="text-primary-link rounded-lg px-3 py-2" to="/projects">Projects</router-link>
                <router-link class="text-primary-link rounded-lg px-3 py-2" to="/contact">Contact</router-link>
            </nav>

            <div class="flex-1 items-center justify-end gap-4 sm:flex">
                <div class="animate-fade">
                    <a class="cursor-pointer" @click="toggleDark(); toggleTheme();">
                        <img :src="icon" class="w-5 h-5 text-gray-100" :alt="iconAlt" />
                    </a>
                </div>
            </div>

            <div class="lg:hidden sm:hidden animate-fade">
                <button class="rounded-lg p-2 text-gray-600" type="button"  @click="toggleMentFunc()">
                    <span class="sr-only">Open menu</span>
                    <svg v-if="!toggleMenu" aria-hidden="true" class="h-5 w-5" fill="currentColor" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                    <svg v-else viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_429_11083)"> 
                        <path d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006" stroke="#292929" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11083"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g>
                    </svg>                
                </button>
            </div>

            <div v-if="toggleMenu === true" class="relative animate-fade-left animate-duration-[400ms] z-20">
                <div class="absolute end-0 z-10 mt-8 w-56 mr-4 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white dark:bg-[#000000f2] shadow-lg" role="menu">
                    <div class="p-2">
                        <strong class="block p-2 text-xs font-medium uppercase text-gray-400">
                            🌙✌️😫
                        </strong>
                        <router-link to="/" class="block rounded-lg px-4 py-2 text-sm hover:bg-gray-200 text-primary-link" role="menuitem">
                            Home
                        </router-link>
                        <router-link to="/about" class="block rounded-lg px-4 py-2 text-sm hover:bg-gray-200 text-primary-link" role="menuitem">
                            About
                        </router-link>
                        <router-link to="/projects" class="block rounded-lg px-4 py-2 text-sm hover:bg-gray-200 text-primary-link" role="menuitem">
                            Projects
                        </router-link>
                            
                    </div>
                    <div class="p-2">
                        <router-link to="/contact" class="" role="menuitem">
                            <strong class="block p-2 text-sm font-medium text-gray-400">
                                Contact
                            </strong>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
</template>

<script setup>
import {
    ref,
    computed,
    watchEffect
} from "vue";
import MoonLight from "../../assets/svg/moon-light.svg";
import SunLight from "../../assets/svg/sun-light.svg";
import myLogoWhite from '../../assets/svg/mylogo-white.svg'
import myLogoBlack from '../../assets/svg/mylogo-black.svg'

import {
    useDark,
    useToggle
} from "@vueuse/core";

const toggleMenu = ref(false);
const toggleMentFunc = () => {
    toggleMenu.value = !toggleMenu.value
    console.log(toggleMenu.value)
}

const logoWhite = myLogoWhite;
const logoBlack = myLogoBlack;
const iconBlack = MoonLight;
const iconWhite = SunLight;

const isDarkmode = ref(true);
const icon = computed(() => (!isDarkmode.value ? iconWhite : iconBlack));
const logo = computed(() => (isDarkmode.value ? logoWhite : logoBlack));
const iconAlt = computed(() => (isDarkmode.value ? "Moon Light" : "Sun Light"));


const isDark = useDark();
console.log(isDark.value);

const toggleDark = useToggle(isDark);
const toggleTheme = () => {
    isDarkmode.value = !isDarkmode.value;
};
</script>

<style scoped>
a.router-link-exact-active {
    @apply bg-gray-200 ;
    @apply border-gray-200;
    @apply text-gray-500;
    @apply dark:bg-gray-200;
    @apply rounded-md
}
</style>
