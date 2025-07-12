<template>
  <div class="group card-hover">
    <div class="relative overflow-hidden bg-gray-100 aspect-[3/4] mb-4">
      <img 
        :src="product.images[0]" 
        :alt="product.name"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      
      <!-- Discount Badge -->
      <div 
        v-if="product.discount" 
        class="absolute top-4 left-4 bg-black text-white px-2 py-1 text-xs font-medium"
      >
        -{{ product.discount }}%
      </div>
      
      <!-- Wishlist Button -->
      <button 
        @click.prevent="toggleWishlist"
        class="absolute top-4 right-4 p-2 bg-white bg-opacity-80 hover:bg-opacity-100 transition-all duration-200"
        :class="{ 'text-red-500': isWishlisted, 'text-gray-600': !isWishlisted }"
      >
        <HeartIcon 
          class="h-5 w-5" 
          :class="{ 'fill-current': isWishlisted }"
        />
      </button>
      
      <!-- Quick Actions -->
      <div class="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          @click.prevent="showQuickView = true"
          class="w-full bg-white text-black py-2 px-4 font-medium hover:bg-gray-100 transition-colors duration-200 mb-2"
        >
          Quick View
        </button>
      </div>
    </div>
    
    <div class="text-center">
      <h3 class="font-medium text-black mb-1">{{ product.name }}</h3>
      <div class="flex items-center justify-center space-x-2">
        <span class="font-bold text-black">{{ formatPrice(product.price) }}</span>
        <span 
          v-if="product.originalPrice" 
          class="text-sm text-gray-500 line-through"
        >
          {{ formatPrice(product.originalPrice) }}
        </span>
      </div>
    </div>
    
    <!-- Quick View Modal -->
    <QuickViewModal 
      v-if="showQuickView"
      :product="product"
      @close="showQuickView = false"
    />
  </div>
</template>

<script setup>
import { HeartIcon } from '@heroicons/vue/24/outline'
import { useProductsStore } from '~/stores/products'
import QuickViewModal from '~/components/QuickViewModal.vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const productsStore = useProductsStore()
const showQuickView = ref(false)

const isWishlisted = computed(() => productsStore.isInWishlist(props.product.id))

const toggleWishlist = () => {
  productsStore.toggleWishlist(props.product.id)
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(price)
}
</script>