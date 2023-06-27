<script setup>
import { RouterView } from "vue-router";
import Header from './views/Header/Header.vue';
</script>

<template>
  <Header></Header>
  <router-view v-slot="{ Component }" >
      <component class="mb-16" :is="Component" />
  </router-view>
</template>

<style>
.dark {
  background: #000000f2;
}
</style>
