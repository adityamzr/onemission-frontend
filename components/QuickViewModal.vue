<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
    <div class="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      <div class="flex items-center justify-between p-6 border-b border-gray-200">
        <h2 class="text-xl font-medium text-black">Quick View</h2>
        <button 
          @click="$emit('close')"
          class="p-2 text-gray-400 hover:text-gray-600"
        >
          <XMarkIcon class="h-5 w-5" />
        </button>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        <!-- Product Images -->
        <div>
          <div class="aspect-[3/4] bg-gray-100 mb-4">
            <img 
              :src="selectedImage" 
              :alt="product.name"
              class="w-full h-full object-cover"
            />
          </div>
          
          <div class="grid grid-cols-4 gap-2">
            <button 
              v-for="(image, index) in product.images" 
              :key="index"
              @click="selectedImage = image"
              class="aspect-square bg-gray-100 border-2 transition-colors duration-200"
              :class="selectedImage === image ? 'border-black' : 'border-transparent hover:border-gray-300'"
            >
              <img 
                :src="image" 
                :alt="`${product.name} ${index + 1}`"
                class="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>
        
        <!-- Product Info -->
        <div class="space-y-6">
          <div>
            <h1 class="text-2xl font-bold text-black mb-2">{{ product.name }}</h1>
            <div class="flex items-center space-x-3">
              <span class="text-2xl font-bold text-black">{{ formatPrice(product.price) }}</span>
              <span 
                v-if="product.originalPrice" 
                class="text-lg text-gray-500 line-through"
              >
                {{ formatPrice(product.originalPrice) }}
              </span>
              <span 
                v-if="product.discount" 
                class="bg-red-100 text-red-800 px-2 py-1 text-xs font-medium"
              >
                -{{ product.discount }}%
              </span>
            </div>
          </div>
          
          <p class="text-gray-600">{{ product.description }}</p>
          
          <!-- Size Selection -->
          <div>
            <h3 class="font-medium text-black mb-3">Size</h3>
            <div class="grid grid-cols-5 gap-2">
              <button 
                v-for="size in product.sizes" 
                :key="size"
                @click="selectedSize = size"
                class="py-2 px-3 border text-center transition-colors duration-200"
                :class="selectedSize === size 
                  ? 'border-black bg-black text-white' 
                  : 'border-gray-300 hover:border-gray-400'"
              >
                {{ size }}
              </button>
            </div>
          </div>
          
          <!-- Color Selection -->
          <div>
            <h3 class="font-medium text-black mb-3">Color</h3>
            <div class="flex space-x-2">
              <button 
                v-for="color in product.colors" 
                :key="color"
                @click="selectedColor = color"
                class="px-3 py-1 border text-sm transition-colors duration-200"
                :class="selectedColor === color 
                  ? 'border-black bg-black text-white' 
                  : 'border-gray-300 hover:border-gray-400'"
              >
                {{ color }}
              </button>
            </div>
          </div>
          
          <!-- Actions -->
          <div class="space-y-3 pt-4">
            <button 
              @click="addToCart"
              :disabled="!selectedSize"
              class="w-full btn-primary"
            >
              Add to Cart
            </button>
            <button 
              @click="toggleWishlist"
              class="w-full btn-secondary flex items-center justify-center space-x-2"
            >
              <HeartIcon 
                class="h-5 w-5" 
                :class="{ 'fill-current text-red-500': isWishlisted }"
              />
              <span>{{ isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist' }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { XMarkIcon, HeartIcon } from '@heroicons/vue/24/outline'
import { useCartStore } from '~/stores/cart'
import { useProductsStore } from '~/stores/products'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close'])

const cartStore = useCartStore()
const productsStore = useProductsStore()

const selectedImage = ref(props.product.images[0])
const selectedSize = ref('')
const selectedColor = ref(props.product.colors[0])

const isWishlisted = computed(() => productsStore.isInWishlist(props.product.id))

const addToCart = () => {
  if (!selectedSize.value) return
  
  cartStore.addToCart({
    ...props.product,
    selectedSize: selectedSize.value,
    selectedColor: selectedColor.value
  })
  
  emit('close')
}

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