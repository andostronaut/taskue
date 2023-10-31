<script setup lang="ts">
import type { Todo } from '@/typings'

const props = defineProps<{
  todo: Todo
}>()
</script>

<template>
  <div class="w-full max-w-xs mx-4 my-4 overflow-hidden bg-teal-500 rounded-lg shadow-lg">
    <div class="py-5 text-center">
      <span class="text-sm text-gray-700 dark:text-gray-200">{{ props.todo.title }}</span>
    </div>
  </div>
</template>
