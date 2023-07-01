<template>
<div class="">
    <ul class="flex flex-col animated-list">
        <li v-for="item in data" :key="item.id" class="py-3 group">
            <div :class="item.animateDelay" class="animate-fade-up">
                <div class="flex justify-between gap-6 items-center">
                    <!-- :class="item.id === 1 ? '-z-10 text-secondary' : ''" -->
                    <section class="flex flex-col md:flex-row gap-2 md:gap-9 col-reverse">
                        <h2 class="md:w-40 text-secondary text-sm shrink-0">
                            {{item.date}}
                        </h2>
                        <router-link :to="{
                                    name: 'projectsDetails',
                                    params: {
                                        id: item.params,
                                    }
                                }">
                            <span class="font-medium leading-tight hover:animate-pulse">
                                {{ item.subject }}
                            </span>
                        </router-link>
                    </section>
                </div>
            </div>

        </li>
    </ul>
</div>
</template>

<script setup>
const props = defineProps({
    data: {
        type: Object
    } 
});
</script>

<style>

</style>
