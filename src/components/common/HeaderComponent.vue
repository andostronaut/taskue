<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="flex items-center justify-between p-6 mb-12 bg-white border-b-2">
    <div class="text-xl font-bold text-teal-600">🌱 TASKUE</div>

    <div class="flex items-center justify-center text-gray-600 capitalize">
      <RouterLink
        to="/"
        class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform hover:border-teal-500 mx-1.5 sm:mx-6"
      >
        Home
      </RouterLink>
      <RouterLink
        to="/about"
        class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform hover:border-teal-500 mx-1.5 sm:mx-6"
      >
        About
      </RouterLink>
      <RouterLink
        to="/contact"
        class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform hover:border-teal-500 mx-1.5 sm:mx-6"
      >
        Contact
      </RouterLink>
    </div>
  </nav>
</template>
