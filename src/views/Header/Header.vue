<template>
<header class="">
    <div class="p-4 mx-auto max-w-[700px]">
        <div class="flex items-center justify-evenly gap-4">
            <div class="flex lg:w-0 lg:flex-1">
                <router-link to="/" class="px-1 animate-wiggle hover:animate-wiggle-more animate-delay-[200ms]">
                    <span v-if="isDarkmode">🙈</span>
                    <span v-else>🙉</span>
                </router-link> 
            </div>
            <nav aria-label="Global" class="hidden gap-4 lg:ml-16 text-sm sm:flex animate-fade">
                <router-link class="nav-desktop transition-all btn-transition rounded-md text-primary-link px-3 py-2 text-[13px]" to="/about">About</router-link>
                <router-link class="nav-desktop transition-all btn-transition rounded-md text-primary-link px-3 py-2 text-[13px]" to="/projects">Projects</router-link>
                <router-link class="nav-desktop transition-all btn-transition rounded-md text-primary-link px-3 py-2 text-[13px]" to="/contact">Contact</router-link>
            </nav>


            <div class="flex-auto"></div>
            <div class="flex flex-1 items-center justify-end gap-4 sm:flex">
                <div class="animate-fade">
                    <a class="cursor-pointer" @click="toggleDark(); toggleTheme();">
                        <img :src="icon" class="w-5 h-5" :alt="iconAlt" />
                    </a>
                </div>
            </div>
             
            <!-- <label for="AcceptConditions" class=" relative h-6 w-10 cursor-pointer animate-fade">
                <input @click="!toggleDark(); toggleTheme();" type="checkbox" id="AcceptConditions" class="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden" />
                <div class="absolute inset-y-0 start-0 z-10 m-1 inline-flex h-4 w-4 items-center justify-center rounded-full transition-all peer-checked:start-4 peer-checked:text-neutral-600">
                    <img :src="icon" class="w-5 h-5 text-neutral-100" :alt="iconAlt" />
                    <span v-if="isDarkmode" class="">☀️</span>
                    <span v-else class="">🌑</span>
                </div>
                <span class="absolute inset-0 rounded-full transition peer-checked:bg-transparent border dark:border-neutral-700"></span>
            </label> -->
            <div class="block sm:hidden animate-fade">
                <button class="p-2 text-slate-800 dark:text-slate-200" type="button" @click="toggleMentFunc();">
                    <span class="sr-only">Open menu</span>
                    <svg v-if="!toggleMenu" aria-hidden="true" class="h-5 w-5" fill="currentColor" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                    <svg v-else viewBox="0 0 24 24" class="h-5 w-5 animate-rotate-y"  fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
            </div>
            <div v-if="toggleMenu === true" :class="toggleMenu ? 'animate-fade-left animate-duration-[400ms]' : 'animate-fade-right animate-duration-[400ms]' " class="lg:hidden relative z-20">
                <div class="absolute end-0 z-[9999] mt-8 w-56 mr-4 divide-y backdrop-blur-sm divide-neutral-100 border rounded-md border-neutral-800 dark:border-neutral-100 bg-neutral-800/100 dark:bg-neutral-100/100 shadow-lg transition-all" role="menu">
                    <div class="p-2">
                        <router-link to="/" class="nav-mobile block rounded-sm px-4 py-2 text-sm backdrop-blur-sm hover:bg-neutral-100/5 hover:dark:bg-neutral-800/5 text-primary-link" role="menuitem">
                            Home
                        </router-link>
                        <router-link to="/about" class="nav-mobile block rounded-sm px-4 py-2 text-sm backdrop-blur-sm hover:bg-neutral-100/5 hover:dark:bg-neutral-800/5 text-primary-link" role="menuitem">
                            About
                        </router-link>
                        <router-link to="/projects" class="nav-mobile block rounded-sm px-4 py-2 text-sm backdrop-blur-sm hover:bg-neutral-100/5 hover:dark:bg-neutral-800/5 text-primary-link" role="menuitem">
                            Projects
                        </router-link>
                        <router-link to="/contact" class="nav-mobile block rounded-sm px-4 py-2 text-sm backdrop-blur-sm hover:bg-neutral-100/5 hover:dark:bg-neutral-800/5 text-primary-link" role="menuitem">
                            Contact
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
    watchEffect,
    watch,
    onMounted
} from "vue";
import MoonLight from "../../assets/svg/moon-light.svg";
import SunLight from "../../assets/svg/sun-light.svg";
import myLogoWhite from '../../assets/svg/mylogo-white.svg'
import myLogoBlack from '../../assets/svg/mylogo-black.svg'

import {
    useDark,
    useToggle
} from "@vueuse/core";
import {
    useRouter
} from 'vue-router'

const toggleMenu = ref(false);
const toggleMentFunc = () => {
    toggleMenu.value = !toggleMenu.value
}

const logoWhite = myLogoWhite;
const logoBlack = myLogoBlack;
const iconBlack = MoonLight;
const iconWhite = SunLight;
// 🌙 🌑 🌚
// ☀️ 🌞
// ⭐ 🙉 🙈
const isDarkmode = ref(true);

const icon = computed(() => {
    return (!isDarkmode.value ? iconWhite : iconBlack);
});
// const logo = computed(() => (isDarkmode.value ? logoWhite : logoBlack));

const iconAlt = computed(() => {
    return isDarkmode.value ? "Moon Light" : "Sun Light"
});

// Save the value of isDarkmode to local storage whenever it changes
watch(isDarkmode, (newValue) => {
    localStorage.setItem('isDarkmode', newValue);
});

// Load the value of isDarkmode from local storage when the component is created
onMounted(() => {
  const savedIsDarkmode = localStorage.getItem('isDarkmode');
  if (savedIsDarkmode !== null) {
     isDarkmode.value = savedIsDarkmode === 'true';
  }
});

const isDark = useDark();

const toggleDark = useToggle(isDark);
const toggleTheme = () => {
    isDarkmode.value = !isDarkmode.value;
};

const router = useRouter();
router.beforeEach((to, from, next) => {
    if (to.path !== from.path) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    next();
});
</script>

<style scoped>
.nav-desktop.router-link-exact-active {
    @apply bg-neutral-900/10;
    @apply border-neutral-200;
    @apply text-neutral-600;
    @apply dark:text-neutral-300/80;
    @apply dark:bg-neutral-100/10;
    @apply dark:hover:text-neutral-300;
    @apply rounded-md;
    @apply backdrop-blur-lg;
}

.nav-mobile.router-link-exact-active {
    @apply bg-neutral-100/10;
    @apply border-neutral-200;
    @apply text-neutral-200;
    @apply dark:text-neutral-300;
    @apply dark:bg-neutral-800/80;
    @apply dark:hover:text-neutral-200;
    @apply rounded-sm;
    @apply backdrop-blur-sm;
}
</style>
