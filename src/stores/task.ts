import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

import type { Task } from '@typings/task'

export const useTaskStore = defineStore('task', () => {
  const tasks: Ref<Task[]> = ref([])

  function store(task: Task) {
    tasks.value.push(task)
  }

  function remove(task: Task) {}

  return { tasks, store, remove }
})
