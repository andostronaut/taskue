<script setup lang="ts"></script>

<template>
  <form>
    <div class="-mx-2 md:items-center md:flex">
      <div class="flex-1 px-2">
        <label class="block mb-2 text-sm text-gray-600">First Name</label>
        <input
          type="text"
          placeholder="John "
          class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-teal-400 focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>

      <div class="flex-1 px-2 mt-4 md:mt-0">
        <label class="block mb-2 text-sm text-gray-600">Last Name</label>
        <input
          type="text"
          placeholder="Doe"
          class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-teal-400 focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
    </div>

    <div class="mt-4">
      <label class="block mb-2 text-sm text-gray-600">Email address</label>
      <input
        type="email"
        placeholder="johndoe@example.com"
        class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-teal-400 focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
      />
    </div>

    <div class="w-full mt-4">
      <label class="block mb-2 text-sm text-gray-600">Message</label>
      <textarea
        class="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 focus:border-teal-400 focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40"
        placeholder="Message"
      ></textarea>
    </div>

    <button
      class="px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-teal-500 rounded-lg hover:bg-teal-400 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-50"
    >
      Send message
    </button>
  </form>
</template>
