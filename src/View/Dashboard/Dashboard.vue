<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Bookings from './Booking.vue';

const router = useRouter();
const activeMenu = ref('overview');

function logout() {
  router.push('/login');
}
</script>


<template>
<div class="flex h-screen bg-green-100">
<!--aside bar which be used to call the items-->
<aside class="w-68 bg-green-800 text-white flex flex-col">

<div class="p-6 text-2xl font-bold border-b border-green-700">Dashboard</div>
<nav class="flex-1 p-4">
    <button @click="activeMenu= 'overview'" :class="activeMenu==='overview'?' bg-green-700':'hover:bg-green-700'"
    class="w-full text-left px-4 py-3 rounded mb-2">Overview</button>
    <button @click="activeMenu= 'booking'" :class="activeMenu==='booking'?' bg-green-700':'hover:bg-green-700'"
    class="w-full text-left px-4 py-3 rounded mb-2">booking</button>
    <button @click="activeMenu= 'users'" :class="activeMenu==='users'?' bg-green-700':'hover:bg-green-700'"
    class="w-full text-left px-4 py-3 rounded mb-2">Users</button>
</nav>

<!--button for logout-->
<div class="p-4 border-1 border-green-700">
    <button @click="logout" class="w-full bf-red-600 hover:bg-red-600">Log out</button>
</div>

</aside>
<!--main content-->
<main class="flex-1 overflow-y-auto p-8">

<div v-if="activeMenu === 'overview'" class="text-3xl">Welcome to the dashboard overview</div>

<!--This will contain Booking-->
<Bookings v-if="activeMenu === 'booking'" />




</main>


</div>


</template>