<template>
<div>
    <div class="text-primary text-sm flex animate-fade">
        <div v-for="(tab, index) in tabs" :key="index" :class="{
            'border w-fit border-gray-500 ': activeTab === index,
            ' border-gray-500 ': activeTab !== index,
            '': index === 0,
            '': index === tabs.length - 1
          }" class="py-2 px-4 cursor-pointer relative underline-offset-4 overflow-hidden group" @click="changeTab(index)"
          >
          <span class="absolute inset-x-0 bottom-0 h-0.5 group-hover:h-1.5 group-hover:animate-fade-up group-hover:animate-duration-[200ms] bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
            {{ tab }}
        </div>
    </div>

    <!-- Content -->
    <div class="mt-10">
        <div v-show="activeTab === 0">
            <!-- Developement Content -->
            <TabDev :data="data"/> 
        </div>
        <div v-show="activeTab === 1">
            <!-- UI/UX Design -->
            <TabDesign :design="design" />
        </div>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import projects from '../data/projects.json';
import { useRouter } from 'vue-router'
import TabDev from './components/Project/TabContent/TabDev.vue'
import TabDesign from './components/Project/TabContent/TabDesign.vue'

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
