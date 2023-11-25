<script setup>
import { RouterView } from "vue-router";
import Header from './views/Header/Header.vue';
// import AlertComponent from './views/reusable/AlertComponent.vue';
</script>
<template>
  <div class="relative">
    <div class="absolute inset-0 overflow-hidden">
        <div class="jumbo absolute -inset-[10px] opacity-50"></div>
    </div>
    <Header class="bg-white/30 dark:bg-neutral-950/30 backdrop-blur-sm mx-auto max-w-full z-50 sticky top-0"></Header>
    <!-- <AlertComponent/> -->
    <router-view v-slot="{ Component }" >
        <component class="component" :is="Component" />
    </router-view>
  </div>  
</template>

<style>
.dark {
  @apply animate-fade animate-duration-[400ms] bg-gradient-to-br from-neutral-950 via-zinc-950 to-stone-950;
}
</style>
