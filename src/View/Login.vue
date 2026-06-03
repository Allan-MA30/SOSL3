<script setup>
import { ref } from 'vue'; 
import { useRouter } from 'vue-router';


const router=useRouter();
const email = ref('');
const password = ref('');


// this function will handle login 
function handleLogin(){

    router.push('/dashboard')

}
</script>



<template>
<div class="flex items-center justify-center bg-green-100 min-h-screen">
<div class="bg-white p-8 rounded -lg shadow-md w-full max-w-md">
<h2 class="text-2xl font-bold text-green-800 mb-6 text-center ">LOGIN</h2>
<form @submit.prevent="handleLogin" class="flex flex-col gap-4 ">


    <input v-model="email" type="email" placeholder="Please Enter UserEmail" required
    class="border border-gray-300 rounded px-4 py-2 focus:outline-one focus:border-green-600">
    
    <input v-model="password" type="password" placeholder="Please Enter Password" required
    class="border border-gray-300 rounded px-4 py-2 focus:outline-one focus:border-green-600">

   <button type="submit"
   class="bg-green-800 text-white py-2 rounded hover:bg-green-700 font-semibold">Sign in</button>
   </form>

   <p class="text-center text-sm mt-4 text-gray-500">
    Don't have account?Please create it here

   <li> <RouterLink to="/register" class="text-green-700 font-semibold hover:underline">Register</RouterLink></li>
</p>



</div>

</div>



</template>