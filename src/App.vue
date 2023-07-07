<script setup>
import { RouterView } from "vue-router";
import Header from './views/Header/Header.vue';
import AlertComponent from './views/reusable/AlertComponent.vue';

</script>

<template>
  <Header class="mx-auto max-w-full z-50 bg-white dark:bg-neutral-950 md:sticky md:top-0"></Header>
  <AlertComponent/>
  <router-view v-slot="{ Component }" >
      <component class="component" :is="Component" />
  </router-view>
</template>

<style>
.dark {
  @apply animate-fade animate-duration-[400ms] bg-gradient-to-br from-neutral-950 via-zinc-950 to-stone-950;
}
</style>
