<script setup lang="ts">
import { ref } from 'vue'
import { VueFinalModal } from 'vue-final-modal'
import { v4 as uuidv4 } from 'uuid'

import type { Task } from '@typings/task'

const name = ref('')
const description = ref('')

const emit = defineEmits<{
  (e: 'confirm', params: Task): void
  (e: 'cancel'): void
}>()

const handleSubmit = () => {
  const task: Task = {
    id: uuidv4(),
    name: name.value,
    description: description.value,
    status: 'to-do'
  }

  emit('confirm', task)

  name.value = ''
  description.value = ''
}
</script>

<template>
  <VueFinalModal
    class="confirm-modal"
    content-class="confirm-modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <section class="w-full h-full p-6 mx-auto bg-white rounded-md shadow-md">
      <h2 class="text-lg font-semibold text-gray-700 capitalize">Add Task</h2>

      <form @submit.prevent="handleSubmit">
        <div class="flex flex-col gap-6 mt-4">
          <div>
            <label class="text-gray-700" for="name">Name</label>
            <input
              v-model="name"
              id="name"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700" for="description">Description</label>
            <textarea
              v-model="description"
              id="description"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div class="flex justify-end mt-12">
          <button
            @click="emit('cancel')"
            type="button"
            class="flex items-center justify-center w-1/2 px-5 py-2 mr-2 text-sm tracking-wide text-white transition-colors duration-200 bg-teal-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-teal-600"
          >
            <font-awesome-icon icon="fa-solid fa-xmark" />
            Cancel
          </button>

          <button
            type="submit"
            class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-teal-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-teal-600"
          >
            <font-awesome-icon icon="fa-solid fa-check" />
            Save
          </button>
        </div>
      </form>
    </section>
  </VueFinalModal>
</template>

<style>
.confirm-modal {
  display: flex;
  justify-content: center;
  align-items: center;
}
.confirm-modal-content {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 80%;
  height: 50%;
}
</style>
