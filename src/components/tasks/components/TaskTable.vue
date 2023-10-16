<script setup lang="ts"></script>

<template>
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th
          scope="col"
          class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
        >
          Name
        </th>

        <th
          scope="col"
          class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
        >
          Status
        </th>

        <th
          scope="col"
          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
        >
          Description
        </th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr>
        <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
          <div>
            <h2 class="font-medium text-gray-800">Catalog</h2>
            <p class="text-sm font-normal text-gray-600">catalogapp.io</p>
          </div>
        </td>
        <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
          <div
            class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60"
          >
            To Do
          </div>
        </td>
        <td class="px-4 py-4 text-sm whitespace-nowrap">
          <div>
            <h4 class="text-gray-700">Content curating app</h4>
            <p class="text-gray-500">Brings all your news into one place</p>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
