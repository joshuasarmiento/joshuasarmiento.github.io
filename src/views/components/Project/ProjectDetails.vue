<template>
<main class="text-primary p-4 max-w-[700px] mx-auto">
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
import ProjectDev from "./ProjectDetailsSection/ProjectDev.vue"
import ProjectDesign from "./ProjectDetailsSection/ProjectDesign.vue"
import projects from '../../../data/projects.json';
const route = useRoute();
const projectId = ref(route.params.id);

const data = ref(null);
const dataUIUX = ref(null);
const project = projects.projectDetails.find((item) => item.subject.replace(/\s+/g, '-') === projectId.value);
const projectUIUX = projects.UIUXdesign.find((item) => item.subject.replace(/\s+/g, '-') === projectId.value);

project ? data.value = project : '';
projectUIUX ? dataUIUX.value = projectUIUX : '';
</script>
