<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import { isAxiosError } from 'axios'

import type { Photo } from '@/typings'
import { fetchPhotos } from '@services/photoService'

import LoaderComponent from '@components/common/LoaderComponent.vue'
import PhotoCard from '@components/photos/components/PhotoCard.vue'

const photos: Ref<Photo[]> = ref([])
const isLoading: Ref<boolean> = ref(false)

onMounted(() => {
  isLoading.value = true

  fetchPhotos()
    .then(({ data }) => {
      photos.value = data
    })
    .catch((err) => {
      if (isAxiosError(err)) {
        if (err.code === 'ERR_NETWORK') {
          console.log('An error occured with your internet connection...')
        } else if (err.code === 'ERR_CANCELED') {
          console.log('An error occured, the operation has been canceled...')
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
      <PhotoCard v-for="photo in photos" :key="photo.id" :photo="photo" />
    </div>
  </section>
</template>
