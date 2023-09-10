<template>
<ul class="flex flex-col md:flex-row gap-2 md:gap-6 text-secondary animate-fd-4" style="--index:2">
    <li class="">
        <a class="text-primary-link underline-offset-4 flex gap-2 items-center" target="_blank" href="mailto:sarmientojoshuaalvarez@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
            </svg>
            <span class="">Email me</span>
        </a>
    </li>
    <!-- <li class="">
        <a class="text-primary-link underline-offset-4 flex gap-2 items-center" target="_blank" href="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FurOY58jE9kccAgKjMBvlFr%2FCV%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DJuxMO5upoRaeakeL-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
            </svg>
            <span class="">Resume</span>
        </a>
    </li> -->
    <li class="">
        <router-link class="text-primary-link flex gap-2 items-center" to="/contact">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
            </svg>
            <span class="">Connect with me</span>
        </router-link>
    </li>
</ul>
</template>

