<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import { AxiosError, isAxiosError } from 'axios'
import { useNotification } from '@kyvg/vue3-notification'

import type { Todo } from '@/typings'
import { fetchTodos } from '@services/todoService'

import LoaderComponent from '@components/common/LoaderComponent.vue'
import TodoComponent from '@components/todos/components/TodoComponent.vue'
import TableComponent from '@components/common/TableComponent.vue'

const todos: Ref<Todo[]> = ref([])
const isLoading: Ref<boolean> = ref(false)

const notification = useNotification()

onMounted(() => {
  isLoading.value = true

  fetchTodos()
    .then(({ data }: { data: Todo[] }) => {
      todos.value = data
    })
    .catch((err: AxiosError) => {
      if (isAxiosError(err)) {
        if (err.code === 'ERR_NETWORK') {
          notification.notify({
            title: 'An error occured with your internet connection...',
            type: 'error'
          })
        } else if (err.code === 'ERR_CANCELED') {
          notification.notify({
            title: 'An error occured, the operation has been canceled...',
            type: 'error'
          })
        } else {
          console.log('An error occured,', err.message)
        }
      }
    })
    .finally(() => {
      isLoading.value = false
    })
})
</script>

<template>
  <section class="container px-4 mx-auto">
    <div v-if="isLoading" class="flex justify-center mx-auto">
      <LoaderComponent />
    </div>
    <div class="flex flex-wrap justify-center mx-auto" v-else>
      <TableComponent>
        <template #table-header></template>
        <template #table-body></template>
      </TableComponent>
      <TodoComponent v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
  </section>
</template>
