<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import { isAxiosError } from 'axios'
import { useNotification } from '@kyvg/vue3-notification'

import type { Photo } from '@/typings'
import { fetchPhotos } from '@services/photoService'

import LoaderComponent from '@components/common/LoaderComponent.vue'
import TodoComponent from '@components/todos/components/TodoComponent.vue'

const photos: Ref<Photo[]> = ref([])
const isLoading: Ref<boolean> = ref(false)

const notification = useNotification()

onMounted(() => {
  isLoading.value = true

  fetchPhotos()
    .then(({ data }) => {
      photos.value = data
    })
    .catch((err) => {
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
      <TodoComponent v-for="photo in photos" :key="photo.id" :photo="photo" />
    </div>
  </section>
</template>
