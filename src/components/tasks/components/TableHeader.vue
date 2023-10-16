<script setup lang="ts">
import { computed } from 'vue'

import type { Task } from '@/typings'

const props = defineProps<{
  tasks: Task[]
  open?: ((payload: MouseEvent) => void) | undefined
}>()

const taskCount = computed(() => {
  return props.tasks.length ?? 0
})
</script>

<template>
  <section class="container px-4 mx-auto">
    <div class="sm:flex sm:items-center sm:justify-between">
      <div>
        <div class="flex items-center gap-x-3">
          <h2 class="text-lg font-medium text-gray-800">Tasks</h2>
          <span class="px-3 py-1 text-xs text-teal-600 bg-teal-100 rounded-full">{{
            taskCount
          }}</span>
        </div>

        <p class="mt-1 text-sm text-gray-500">These are a list of tasks that you created.</p>
      </div>

      <div class="flex items-center mt-4 gap-x-3">
        <button
          @click="props.open"
          class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-teal-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-teal-600"
        >
          <font-awesome-icon icon="fa-solid fa-plus" />
          <span>Add task</span>
        </button>
      </div>
    </div>
  </section>
</template>
