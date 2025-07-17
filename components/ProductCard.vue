<template>
  <NuxtLink :to="`/products/${categoryPath}/item/${product.slug}`">
    <div class="group card-hover flex flex-wrap gap-y-2 md:gap-y-6 mb-5 md:mb-20">
      <div class="relative overflow-hidden aspect-auto mb-4 w-full">
        <img 
          :src="product.images[0]" 
          :alt="product.name"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        <!-- Discount Badge -->
        <div 
          v-if="product.discount" 
          class="absolute top-0 right-0 bg-rose-500 text-white px-2 py-1 text-xs font-medium"
        >
          -{{ product.discount }}%
        </div>
        
        <!-- Quick Actions -->
        <!-- <div class="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            @click.prevent="showQuickView = true"
            class="w-full bg-white text-black py-2 px-4 font-medium hover:bg-gray-100 transition-colors duration-200 mb-2"
          >
            Quick View
          </button>
        </div> -->
      </div>
      
      <div class="text-center w-full">
        <h3 class="text-sm md:text-md font-bold text-black mb-1">{{ product.name }}</h3>
        <div class="flex flex-col md:flex-row items-center justify-center space-x-2">
          <span class="text-sm font-medium text-black">{{ formatPrice(product.price) }}</span>
          <span 
            v-if="product.originalPrice" 
            class="text-xs text-gray-500 line-through"
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
  </NuxtLink>
</template>

<script setup>
import { HeartIcon } from '@heroicons/vue/24/outline'
import { useProductsStore } from '~/stores/products'
import QuickViewModal from '~/components/QuickViewModal.vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  },
  categoryPath: {
    type: String,
    required: true,
    default: 'shop-all'
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