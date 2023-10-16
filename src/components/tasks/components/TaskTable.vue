<script setup lang="ts">
import { computed } from 'vue'

import type { Task } from '@/typings'

const props = defineProps<{
  tasks: Task[]
}>()

const emit = defineEmits<{
  (e: 'delete', params: Task): void
}>()

const hasTasks = computed(() => {
  return Array.isArray(props.tasks) && props.tasks.length !== 0
})

const handleDelete = (task: Task) => {
  emit('delete', task)
}
</script>

<template>
  <table class="min-w-full divide-y divide-gray-200" v-if="hasTasks">
    <thead class="bg-gray-50">
      <tr>
        <th
          scope="col"
          class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
        >
          Name
        </th>
        <th
          scope="col"
          class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
        >
          Status
        </th>
        <th
          scope="col"
          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
        >
          Description
        </th>
        <th
          scope="col"
          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
        >
          Actions
        </th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr v-for="task in tasks" :key="task.id">
        <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
          <div>
            <h2 class="font-medium text-gray-800">{{ task.name }}</h2>
          </div>
        </td>
        <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
          <div
            class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60"
          >
            {{ task.status }}
          </div>
        </td>
        <td class="px-4 py-4 text-sm whitespace-nowrap">
          <div>
            <h4 class="text-gray-700">{{ task.description }}</h4>
          </div>
        </td>
        <td class="px-4 py-4 text-sm whitespace-nowrap">
          <div class="flex">
            <button @click="handleDelete(task)" class="px-2 py-2 text-white bg-red-500 rounded-md">
              Delete
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>

  <div v-else>
    <h1 class="flex justify-center w-full py-6 mx-auto text-gray-700">No tasks 😢</h1>
  </div>
</template>
