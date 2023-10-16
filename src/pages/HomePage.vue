<script setup lang="ts">
import TaskManagement from '@components/tasks/TaskManagement.vue'
import PhotoComponent from '@components/photos/PhotoComponent.vue'
</script>

<template>
  <div class="mb-14">
    <p class="font-medium text-teal-500">Welcome</p>
    <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">
      We are happy to have you with <span class="text-teal-500">us</span>
    </h1>
    <p class="mt-3 text-gray-500">To begin, you can start adding your task below</p>
  </div>

  <hr class="py-4" />
  <TaskManagement />

  <hr class="py-4 mt-14" />

  <div>
    <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">
      In this section you have a sample data we retreive from
      <a href="https://jsonplaceholder.typicode.com/" class="text-teal-500">JSONPlaceholder</a>
    </h1>

    <hr class="py-4 mt-14" />
    <PhotoComponent />
  </div>
</template>
