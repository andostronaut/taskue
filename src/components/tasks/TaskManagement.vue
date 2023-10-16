<script setup lang="ts">
import { useModal } from 'vue-final-modal'

import type { Task } from '@/typings'

import TableHeader from '@components/tasks/components/TableHeader.vue'
import TaskTable from '@components/tasks/components/TaskTable.vue'
import TaskModal from '@components/tasks/components/TaskModal.vue'

import { useTaskStore } from '@stores/taskStore'

const taskStore = useTaskStore()

const { open, close } = useModal({
  component: TaskModal,
  attrs: {
    onConfirm(task: Task) {
      taskStore.store(task)
      close()
    },
    onCancel() {
      close()
    }
  }
})

const handleDelete = (task: Task) => {
  taskStore.remove(task)
}
</script>

<template>
  <section class="container px-4 mx-auto">
    <TableHeader :open="open" :tasks="taskStore.tasks" />

    <div class="flex flex-col mt-6">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden border border-gray-200 md:rounded-lg">
            <TaskTable :tasks="taskStore.tasks" @delete="handleDelete" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
@/stores/taskStore @/typings
