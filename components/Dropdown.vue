<template>
  <div class="relative inline-block text-left">
    <button
      v-if="inStock"
      @click="open = !open"
      class="inline-flex justify-between w-full rounded-md border border-black py-2 px-4 shadow-sm bg-white text-sm font-medium text-black hover:bg-gray-50"
    >
      {{ selectedSizeLabel }}
      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <button
      v-else
      @click="open = !open"
      class="inline-flex justify-between w-full rounded-md border border-gray-700 py-2 px-4 shadow-sm bg-white text-sm font-medium text-gray-700 "
      disabled
    >
      Out of Stock
    </button>

    <div
      v-show="open"
      class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
    >
      <option 
        class="p-2 text-sm font-medium block text-gray-700 hover:bg-gray-100" 
        v-for="option in availableOptions" 
        :key="option.id" 
        :value="option.id"
        @click="selectSize(option)"
        >
        {{ option.size }}
      </option>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  inStock: {
    type: Boolean,
    required: true
  }
})

const open = ref(false)
const selectedSize = ref(null)

const availableOptions = computed(() => {
  return props.options.filter(option => option.stock > 0)
})

watch(availableOptions, (newOptions) => {
  if (newOptions.length > 0 && !selectedSize.value) {
      selectedSize.value = newOptions[0]
  }
}, { immediate: true })

const selectedSizeLabel = computed(() => {
  return `Size: ${selectedSize.value.size}`
})

function selectSize(option) {
  selectedSize.value = option
  open.value = false
}
</script>