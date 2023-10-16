<script setup lang="ts">
import { useModal } from 'vue-final-modal'

import TableHeader from '@components/tasks/components/TableHeader.vue'
import TaskTable from '@components/tasks/components/TaskTable.vue'
import TaskModal from '@components/tasks/components/TaskModal.vue'

const { open, close } = useModal({
  component: TaskModal,
  attrs: {
    onConfirm() {
      console.log('Confirm')
    },
    onCancel() {
      close()
    }
  }
})
</script>

<template>
  <section class="container px-4 mx-auto">
    <TableHeader :open="open" />

    <div class="flex flex-col mt-6">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden border border-gray-200 md:rounded-lg">
            <TaskTable />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
