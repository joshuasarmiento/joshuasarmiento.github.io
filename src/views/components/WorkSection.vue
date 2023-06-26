<template>
<section class="text-primary flex flex-col md:flex-row gap-2 md:gap-9 col-reverse">
    <h2 class="md:w-28 text-secondary shrink-0 animate-fade-up animate-delay-[600ms]">Work Experience</h2>
    <div class="flex flex-col w-full gap-8">    
        <div class="animate-fade-up animate-delay-[600ms] text-sm">
            <p class="mb-2">1+ years of professional development experience.</p>
            <p>I started my career teaching others how to code, which I will always be appreciative of. Then I worked at a few small local companies. Now I am working with systems at a bigger scale with Hines.</p>
        </div>
        <ul class="animate-fade-up animate-delay-[700ms] flex flex-col gap-8 animated-list text-sm">
            <li class="transition-opacity">
                <a class="relative overflow-hidden underline-offset-4 flex justify-between w-full px-3 py-2 -mx-3 -my-2 no-underline" target="_blank" href="#">
                    <div class="flex items-center gap-4">
                        <img alt="Hines" loading="lazy" decoding="async" data-nimg="1" class="rounded-full  opacity-75" style="color: transparent;" :src="BriaLogo" width="48" height="48">
                        <div class="flex flex-col gap-px ">
                            <p class="external-arrow">Frontend Developer</p>
                            <p class="text-secondary">Bria Homes Inc.</p>
                        </div>
                    </div>
                    <p class="text-secondary">Aug 2022 - Present</p>
                </a>    
            </li>
            <li class="transition-opacity">
                <a class=" underline-offset-4 flex justify-between w-full px-3 py-2 -mx-3 -my-2 no-underline" target="_blank" href="#">
                    <div class="flex items-center gap-4">
                        <img alt="PeriShip" loading="lazy" decoding="async" data-nimg="1" class="rounded-full opacity-75" style="color: transparent;" :src="ChedLogo" width="48" height="48">
                        <div class="flex flex-col gap-px">
                            <p class="external-arrow">Software Developer</p>
                            <p class="text-secondary">CHED Regional Office V</p>
                        </div>
                    </div>
                    <p class="text-secondary">Jan 2022 - Jun 2022</p>
                </a>
            </li>
        </ul>
    </div>
</section>
</template>

<script setup>
import BriaLogo from '../../assets/img/BriaLogo.png'
import ChedLogo from '../../assets/img/ched-logo.png'
</script>