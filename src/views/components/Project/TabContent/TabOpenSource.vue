<template>
<div class="">
    <ul class="flex flex-col animated-list">
        <li v-for="itemOS in openSouce" :key="itemOS.id" class="py-3 group">
            <div :class="itemOS.animateDelay" class="animate-fade-up">
                <div class="flex justify-between gap-6 items-center">
                    <!-- :class="item.id === 1 ? '-z-10 text-secondary' : ''" -->
                    <section class="flex flex-col md:flex-row gap-2 md:gap-9 col-reverse">
                        <h2 class="md:w-40 text-secondary text-sm shrink-0">
                            {{itemOS.date}}
                        </h2>
                        <a :href="itemOS.link" target="_blank" class="font-medium leading-tight hover:animate-pulse">
                            {{ itemOS.subject }}
                        </a>
                    </section>
                </div>
            </div>
        </li>
    </ul>
</div>
</template>

<script setup>
const props = defineProps({
    openSouce: {
        type: Object
    } 
});
</script>

<style>

</style>
