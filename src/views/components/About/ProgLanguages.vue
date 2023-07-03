<template>
    <section class="animate-fd-4 mt-4 animate-fd-9 rounded-md md:rounded-lg max-w-none">
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
const imageUrlD = ref("https://wakatime.com/share/@returnjosh/33ac2b63-f26e-46d0-b8cc-d4484c5f2691.svg");
const imageUrlL = ref("https://wakatime.com/share/@returnjosh/bfee05c3-a18c-4a10-950a-818af4ec0a93.svg")
</script>

<style scoped>

</style>