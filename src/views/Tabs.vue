<template>
<section>
    <div class="text-primary text-sm flex flex-col md:flex-row animate-fade">
        <div v-for="(tab, index) in tabs" :key="index" :class="{
            'mr-2 md:rounded-sm border md:border-x w-1/2 md:w-fit border-neutral-200 dark:border-neutral-900': activeTab === index,
            'mr-2 border-neutral-200 dark:border-neutral-900 w-1/2 md:w-fit': activeTab !== index,
            '': index === 0,
            '': index === tabs.length - 1
          }" class="transition-all py-2 px-4 cursor-pointer relative underline-offset-4 overflow-hidden group" @click="activeTab = index;"
          >
          <span class="primary-gradient"></span>
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
        <div v-show="activeTab === 2">
            <!-- Open Source -->
            <TabOpenSource :openSouce="openSouce" />
        </div>
    </div>
</section>
</template>

<script setup>
import { ref } from 'vue';
import projects from '../data/projects.json';
import { useRouter } from 'vue-router'
import TabDev from './components/Project/TabContent/TabDev.vue'
import TabDesign from './components/Project/TabContent/TabDesign.vue'
import TabOpenSource from './components/Project/TabContent/TabOpenSource.vue'

const activeTab = ref(0);
const tabs = ref(['Application Development', 'UI/UX Design', 'Open Source']);
const data = ref(projects.projectDetails);
const design = ref(projects.UIUXdesign);
const openSouce = ref(projects.OpenSource);


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
</script>


