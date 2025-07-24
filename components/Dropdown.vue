<template>
  <div ref="dropdownRef" class="relative inline-block text-left">
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
      class="inline-flex justify-between w-full rounded-md border border-gray-400 py-2 px-4 shadow-sm bg-white text-sm font-medium text-gray-400 "
      disabled
    >
      Sold Out
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
import { ref, onMounted, onBeforeUnmount } from 'vue'

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

const emit = defineEmits(['size'])

const open = ref(false)
const selectedSize = ref(null)
const dropdownRef =  ref(null)

const availableOptions = computed(() => {
  return props.options.filter(option => option.stock > 0)
})

watch(availableOptions, (newOptions) => {
  if (newOptions.length > 0 && !selectedSize.value) {
      selectedSize.value = newOptions[0]
      emit('size', selectedSize.value)
  }
}, { immediate: true })

const selectedSizeLabel = computed(() => {
  return `Size: ${selectedSize.value.size}`
})

function selectSize(option) {
  selectedSize.value = option
  emit('size', option)
  open.value = false
}

function handleClickOutside(event) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    open.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>