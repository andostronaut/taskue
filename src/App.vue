<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ModalsContainer } from 'vue-final-modal'

import HeaderComponent from '@components/common/HeaderComponent.vue'
</script>

<template>
  <HeaderComponent />

  <main class="container mx-auto mt-12">
    <RouterView />
  </main>

  <ModalsContainer />
</template>
