<template>
    <section class="animate-fd-4 mt-6 rounded-md md:rounded-lg max-w-none">
        <div class="overflow-x-auto">
            <div v-if="isDark" class="whitespace-nowrap">
                <figure class="">
                    <embed loading="lazy" :src="imageUrlD"/>              
                </figure>
            </div>
            <div v-else class="whitespace-nowrap">
                <figure class="">
                    <embed loading="lazy" :src="imageUrlL" />              
                </figure>
            </div>
        </div> 
    </section>
</template>

<script setup>
import { ref } from 'vue';
import {
    useDark,
} from "@vueuse/core";

const isDark = useDark();
const imageUrlD = ref("https://wakatime.com/share/@returnjosh/b177ac30-7c0c-4d6d-a83f-297b4ba07b18.svg");
const imageUrlL = ref("https://wakatime.com/share/@returnjosh/371acd6e-ae29-4ebd-9a02-da7fbb814389.svg")
</script>

<style scoped>

</style>