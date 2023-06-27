<script setup>
import { RouterView } from "vue-router";
import Header from './views/Header/Header.vue';
</script>

<template>
  <Header></Header>
<<<<<<< HEAD
  <router-view v-slot="{ Component }">
      <component :is="Component" />
=======
  <router-view v-slot="{ Component }" >
      <component class="mb-16" :is="Component" />
>>>>>>> b5c174dc69666fc7fb089c0022cb5fd49aaf67c3
  </router-view>
</template>

<style>
.dark {
  background: #000000f2;
}
</style>
