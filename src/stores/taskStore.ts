import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

import type { Task } from '@/typings'

export const useTaskStore = defineStore('task', () => {
  const tasks: Ref<Task[]> = ref([])

  function store(task: Task) {
    tasks.value.push(task)
  }

  function update(task: Task) {
    const idx = tasks.value.findIndex((t: Task) => {
      return t.id === task.id
    })

    if (idx !== -1) {
      tasks.value.splice(idx, 1, task)
    }
  }

  function remove(task: Task) {
    const idx = tasks.value.findIndex((t: Task) => {
      return t.id === task.id
    })

    tasks.value.splice(idx, 1)
  }

  return { tasks, store, update, remove }
})
