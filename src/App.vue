<script setup>
import { RouterView, useRoute } from 'vue-router';
import Navbar from './View/Navbar.vue';
import Footer from './components/Footer.vue';
import { computed } from 'vue';


const route = useRoute()
const hidelayout=computed(()=>['Dashboard'].includes(route.name))
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar v-if="!hidelayout" />
    <main class="flex-grow">
      <RouterView />
    </main>
    <Footer  v-if="!hidelayout"/>
  </div>
</template>