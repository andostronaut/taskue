<script setup lang="ts">
import type { Photo } from '@/typings'

const props = defineProps<{
  photo: Photo
}>()
</script>

<template>
  <div class="w-full max-w-xs mx-4 my-4 overflow-hidden bg-teal-500 rounded-lg shadow-lg">
    <img class="object-cover w-full h-56" :src="props.photo.url" alt="avatar" />

    <div class="py-5 text-center">
      <span class="text-sm text-gray-700 dark:text-gray-200">{{ props.photo.title }}</span>
    </div>
  </div>
</template>
