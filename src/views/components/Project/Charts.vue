<template>
    <section class="animate-fade-up animate-delay-[400ms] mt-6 rounded-md md:rounded-lg max-w-none">
        <div class="overflow-x-auto">
            <div v-if="isDark" class="whitespace-nowrap">
                <figure>
                    <embed src="https://wakatime.com/share/@returnjosh/b177ac30-7c0c-4d6d-a83f-297b4ba07b18.svg"/>
                </figure>
            </div>
            <div v-else class="whitespace-nowrap">
                <figure class="">
                    <embed class="" src="https://wakatime.com/share/@returnjosh/371acd6e-ae29-4ebd-9a02-da7fbb814389.svg"/>
                </figure>
            </div>
        </div> 
    </section>
    <!-- <section class="animate-fade-up animate-delay-[500ms] bg-white px-4 py-2  rounded-md w-[calc(100%+48px)] -ml-6 lg:w-[calc(100%+128px)] lg:-ml-16 md:rounded-lg max-w-none">
    <div class="overflow-x-auto">
        <div class="whitespace-nowrap">
            <figure>
                <figure><embed src="https://wakatime.com/share/@returnjosh/ea6e4a6d-dbec-403a-bffb-855dcd6246a8.svg"/></figure>                    </figure>
        </div>
    </div>
    </section> -->
</template>

<script setup>
import {
    useDark,
} from "@vueuse/core";

const isDark = useDark();
</script>
