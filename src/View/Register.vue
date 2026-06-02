<template>
<div class="flex items-center justify-center bg-green-100 min-h-screen">
<div class="bg-white p-8 rounded -lg shadow-md w-full max-w-md">
<h2 class="text-2xl font-bold text-green-800 mb-6 text-center ">REGISTER</h2>
<form class="flex flex-col gap-4 ">


    <input v-model="name" type="name" placeholder="Please Enter Nmae" required
    class="border border-gray-300 rounded px-4 py-2 focus:outline-one focus:border-green-600">
    
    <input v-model="password" type="password" placeholder="Please Enter Password" required
    class="border border-gray-300 rounded px-4 py-2 focus:outline-one focus:border-green-600">
    <input v-model="number" type="number" placeholder="Please Enter Number" required
    class="border border-gray-300 rounded px-4 py-2 focus:outline-one focus:border-green-600">
    <input v-model="age" type="age" placeholder="Please Enter Age" required
    class="border border-gray-300 rounded px-4 py-2 focus:outline-one focus:border-green-600">
   
<select class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black-500">

<option value="">Select gender</option>
    <option>Female</option>
    <option>Male</option>


</select>


    
    <input v-model="email" type="email" placeholder="Please Enter Email" required
    class="border border-gray-300 rounded px-4 py-2 focus:outline-one focus:border-green-600">

   <button type="submit"
   class="bg-green-800 text-white py-2 rounded hover:bg-green-700 font-semibold">Sign in</button>
   </form>

   <p class="text-center text-sm mt-4 text-gray-500">
    Already have an account?

   <li> <RouterLink to="/Login" class="text-green-700 font-semibold hover:underline">Login</RouterLink></li>
</p>
</div>
</div>
</template>