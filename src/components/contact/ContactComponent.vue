<script setup lang="ts">
import ContactForm from '@components/contact/components/ContactForm.vue'
</script>

<template>
  <section class="bg-white">
    <div class="container px-6 py-12 mx-auto">
      <div>
        <p class="font-medium text-teal-500">Contact us</p>
        <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">
          Chat to our friendly team
        </h1>
        <p class="mt-3 text-gray-500">
          We’d love to hear from you. Please fill out this form or shoot us an email.
        </p>
      </div>

      <div class="flex flex-col gap-12 mt-10">
        <div class="p-4 py-6 rounded-lg md:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
</template>
