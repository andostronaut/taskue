<script setup lang="ts"></script>

<template>
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <slot name="table-header"></slot>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <slot name="table-body"></slot>
    </tbody>
  </table>
</template>
