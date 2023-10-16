import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', () => {
  const tasks: Ref<Array<{ id: number; name: string }>> = ref([])

  function store(task: { id: number; name: string }) {
    tasks.value.push(task)
  }

  function remove(task: { id: number; name: string }) {}

  return { tasks, store, remove }
})
