<template>
<main class="text-primary p-4 max-w-screen-sm mx-auto">
    <ReturnLink/>
    <ProjectDev :data="data" :project="project"/>
    <ProjectDesign :dataUIUX="dataUIUX" :projectUIUX="projectUIUX"/>
</main>
</template>

<script setup>
import {
    ref,
    computed,
    onMounted
} from 'vue';
import {
    useRoute
} from 'vue-router'

import ReturnLink from "../../reusable/Return.vue"
import ProjectDev from "./ProjectDev.vue"
import ProjectDesign from "./ProjectDesign.vue"
import projects from '../../../data/projects.json';
const route = useRoute();
const projectId = ref(route.params.id);
const data = ref(null);
const dataUIUX = ref(null);
const project = projects.projectDetails.find((item) => item.params === projectId.value);
const projectUIUX = projects.UIUXdesign.find((item) => item.params === projectId.value);
project ? data.value = project : '';
projectUIUX ? dataUIUX.value = projectUIUX : '';
</script>
