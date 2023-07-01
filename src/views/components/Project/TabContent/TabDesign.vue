<template>
<div class="">
    <ul class="flex flex-col animated-list">
        <li v-for="itemDesign in design" :key="itemDesign.id" class="py-3 group">
            <div :class="itemDesign.animateDelay" class="animate-fade-up">
                <div class="flex justify-between gap-6 items-center">
                    <!-- :class="item.id === 1 ? '-z-10 text-secondary' : ''" -->
                    <section class="flex flex-col md:flex-row gap-2 md:gap-9 col-reverse">
                        <h2 class="md:w-40 text-secondary text-sm shrink-0">
                            {{itemDesign.date}}
                        </h2>
                        <router-link :to="{
                                    name: 'projectsDetails',
                                    params: {
                                        id: itemDesign.params,
                                    }
                                }">
                            <span class="font-medium leading-tight hover:animate-pulse">
                                {{ itemDesign.subject }}
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
    design: {
        type: Object
    } 
});
</script>

<style>

</style>
