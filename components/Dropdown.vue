<template>
  <div class="relative inline-block text-left">
    <button
      @click="open = !open"
      class="inline-flex justify-between w-full rounded-md border border-black py-2 px-4 shadow-sm bg-white text-sm font-medium text-black hover:bg-gray-50"
    >
      Pilih Size
      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div
      v-show="open"
      class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
    >
      <div class="py-1">
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          S
        </a>
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          M
        </a>
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          L
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(false)
</script>