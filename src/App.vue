<script setup lang="ts">
import { RouterView } from 'vue-router'

import HeaderComponent from '@components/common/HeaderComponent.vue'
</script>

<template>
  <HeaderComponent />

  <main class="container mx-auto">
    <RouterView />
  </main>
</template>
