<template>
<div>
    <div class="text-primary text-sm flex animate-fade">
        <div v-for="(tab, index) in tabs" :key="index" :class="{
            'border w-fit border-gray-500 ': activeTab === index,
            ' border-gray-500': activeTab !== index,
            '': index === 0,
            '': index === tabs.length - 1
          }" class="py-2 px-4 cursor-pointer" @click="changeTab(index)"
          >
            {{ tab }}
        </div>
    </div>

    <!-- Content -->
    <div class="mt-10">
        <div v-show="activeTab === 0">
            <!-- Tab 1 content -->
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
        </div>
        <div v-show="activeTab === 1">
            <!-- Tab 2 content -->
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
        </div>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import projects from '../data/projects.json';
import { useRouter } from 'vue-router'

const activeTab = ref(0);
const tabs = ref(['Application Development', 'UI/UX Design']);
const data = ref(projects.projectDetails);
const design = ref(projects.UIUXdesign);


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

const changeTab = (index) => {
  activeTab.value = index;
  sessionStorage.setItem
  ('activeTab', index.toString()); 
}

</script>

<style>
/* Add custom styles here */
</style>
