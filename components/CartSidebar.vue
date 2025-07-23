<template>
  <div>
    <!-- Overlay -->
    <Transition name="fade">
      <div 
        v-if="cartStore.isOpen" 
        @click="cartStore.closeCart()"
        class="fixed inset-0 bg-black bg-opacity-50 z-50"
      />
    </Transition>

    <!-- Sidebar -->
    <Transition name="slide">
      <div 
        v-if="cartStore.isOpen"
        class="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 overflow-y-auto"
      >
        <div class="flex flex-col h-full">
          <!-- Header -->
          <div class="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 class="text-lg font-bold text-black">Shopping Cart ({{ cartStore.itemCount }})</h2>
            <button 
              @click="cartStore.closeCart()"
              class="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <XMarkIcon class="h-5 w-5" />
            </button>
          </div>

          <!-- Cart Items -->
          <div class="flex-1 px-6 py-4">
            <div v-if="cartStore.items.length === 0" class="text-center py-12">
              <ShoppingBagIcon class="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p class="text-gray-500 mb-4">Your cart is empty</p>
              <button 
                @click="cartStore.closeCart()"
                class="btn-primary"
              >
                Continue Shopping
              </button>
            </div>

            <div v-else class="space-y-4">
              <div 
                v-for="item in cartStore.items" 
                :key="`${item.id}-${item.selectedSize}`"
                class="flex items-start space-x-4 py-4 border-b border-gray-100 last:border-b-0"
              >
                <img 
                  :src="item.images[0]" 
                  :alt="item.name"
                  class="shrink-0 w-40 h-32 object-cover"
                />
                <div class="flex-1 min-w-0">
                  <h3 class="text-sm font-medium text-black truncate">{{ item.name }}</h3>
                  <p class="text-sm text-gray-500">Size: {{ item.selectedSize.size }}</p>
                  <p class="text-sm font-medium text-black mt-1">
                    {{ formatPrice(item.price) }}
                  </p>
                  
                  <!-- Quantity Controls -->
                  <div class="flex items-center mt-2">
                    <button 
                      @click="cartStore.updateQuantity(item.id, item.selectedSize, item.quantity - 1)"
                      class="p-1 text-gray-400 hover:text-gray-600"
                    >
                      <MinusIcon class="h-4 w-4" />
                    </button>
                    <span class="mx-2 text-sm">{{ item.quantity }}</span>
                    <button 
                      @click="cartStore.updateQuantity(item.id, item.selectedSize, item.quantity + 1)"
                      class="p-1 text-gray-400 hover:text-gray-600"
                    >
                      <PlusIcon class="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <button 
                  @click="cartStore.removeFromCart(item.id, item.selectedSize)"
                  class="p-1 text-gray-400 hover:text-red-600 transition-colors duration-200"
                >
                  <TrashIcon class="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div v-if="cartStore.items.length > 0" class="border-t border-gray-200 p-6">
            <div class="flex justify-between items-center mb-4">
              <span class="text-lg font-medium text-black">Total</span>
              <span class="text-lg font-bold text-black">{{ cartStore.formattedTotal }}</span>
            </div>
            
            <div class="space-y-3">
              <NuxtLink 
                to="/checkout" 
                @click="cartStore.closeCart()"
                class="block w-full btn-primary text-center"
              >
                Pre Order Now
              </NuxtLink>
              <button 
                @click="cartStore.closeCart()"
                class="w-full btn-secondary"
              >
                Continue Shopping
              </button>
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
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()

const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(price)
}
</script>