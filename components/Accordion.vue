<template>
  <div class="border-t border-gray-300">
    <button
      @click="isOpen = !isOpen"
      class="flex justify-between items-center w-full py-4 text-left font-semibold text-black"
    >
      {{ title }}
      <span class="text-xl transform transition-transform duration-300" :class="{ 'rotate-45': isOpen }">
        +
      </span>
    </button>
    <div v-show="isOpen" class="pb-4 text-sm text-gray-700 space-y-2">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
})
const isOpen = ref(false)
</script>
