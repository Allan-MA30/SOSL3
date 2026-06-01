<template>
  <nav class="bg-green-800 text-white flex px-8 py-4 items-center justify-between shadow-lg">
    <div class="flex items-center gap-3">
      <img src="../Assets/GV.jpg" alt="Tembera U Rwanda logo" class="h-10 w-10 rounded-full object-cover border border-white/30" />
      <span class="text-white font-bold uppercase tracking-[0.2em] text-sm">TEMBERA uRWANDA</span>
    </div>
    <ul class="flex gap-8 text-sm font-medium justify-end">
      <li><RouterLink to="/" class="hover:text-yellow-300">Home</RouterLink></li>
      <li><RouterLink to="/about" class="hover:text-yellow-300">About Us</RouterLink></li>
      <li><RouterLink to="/service" class="hover:text-yellow-300">Services</RouterLink></li>

      <li class="relative group">
        <a href="#" class="hover:text-yellow-300 relative-group">Gallery <span>▼</span></a>
        <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-2.5 mt-2 z-50 left">
          <li class="block px-4 py-2 hover:bg-green-200 text-green-900"><RouterLink to="/photos">Photos</RouterLink></li>
          <li class="block px-4 py-2 hover:bg-green-200 text-green-900"><RouterLink to="/videos">Videos</RouterLink></li>
        </ul>
      </li>

      <li class="relative group">
        <a href="#" class="hover:text-yellow-300">Destinations<span>▼</span></a>
        <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded top-2.5 shadow w-48 mt-2 z-50 left">
          <li class="block px-4 py-2 hover:bg-green-200 text-green-900"><RouterLink to="/north">Northern Province</RouterLink></li>
          <li class="block px-4 py-2 hover:bg-green-200 text-green-900"><RouterLink to="/south">Southern Province</RouterLink></li>
          <li class="block px-4 py-2 hover:bg-green-200 text-green-900"><RouterLink to="/west">Western Province</RouterLink></li>
          <li class="block px-4 py-2 hover:bg-green-200 text-green-900"><RouterLink to="/east">Eastern Province</RouterLink></li>
          <li class="block px-4 py-2 hover:bg-green-200 text-green-900"><RouterLink to="/kigali">Kigali City</RouterLink></li>
        </ul>
      </li>
      <li><RouterLink to="/contact" class="hover:text-yellow-300">Contact Us</RouterLink></li>
      <li>
        <button
          @click="toggleLanguage"
          class="bg-white text-green-800 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-green-100 transition"
        >
          {{ locale === 'en' ? 'Kinyarwanda' : 'English' }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { locale, toggleLanguage } from '../translation.js';
</script>