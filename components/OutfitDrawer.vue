<template>
  <div>
    <!-- Overlay -->
    <Transition name="fade">
      <div 
        v-if="outfits.isOutfitDrawerOpen" 
        @click="outfits.closeOutfitDrawer()"
        class="fixed inset-0 bg-black bg-opacity-50 z-50"
      />
    </Transition>

    <!-- Sidebar -->
    <Transition name="slide">
      <div 
        v-if="outfits.isOutfitDrawerOpen"
        class="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 overflow-y-auto"
      >
        <div class="flex flex-col h-full">
          <!-- Header -->
          <div class="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 class="text-lg font-bold text-black">Shop By The Outfit</h2>
            <button 
              @click="outfits.closeOutfitDrawer()"
              class="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <XMarkIcon class="h-5 w-5" />
            </button>
          </div>
          <!-- Body -->
          <div class="my-10 w-full px-3 flex flex-col space-y-12 font-fira">
            <div v-for="outfitItem in selectedOutfit.outfitItems" class="flex flex-row space-x-2">
              <img :src="outfitItem.images[0]" alt="" class="shrink-0 w-40 h-32">
              <div class="flex flex-col space-y-2 w-full">
                <h4 class="font-bold text-sm">{{ outfitItem.name }}</h4>
                <div class="flex justify-between">
                  <span class="text-xs font-medium">Black</span>
                  <span class="text-xs font-medium">Rp 120.000</span>
                </div>
                <div class="flex justify-between space-x-2">
                  <!-- <input class=" w-[70%] rounded-md">S</input> -->
                  <Dropdown class="w-[70%]" />
                  <button class="bg-black p-2 cursor-pointer grow rounded-md text-white">Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { 
  XMarkIcon, 
  ShoppingBagIcon,
  MinusIcon,
  PlusIcon,
  TrashIcon
} from '@heroicons/vue/24/outline'
import { useOutfits } from '~/stores/outfits'
import { computed } from 'vue'

const outfits = useOutfits()
const selectedOutfit = computed (() => outfits.selectedOutfitWithItems)

const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(price)
}
</script>