<template>
  <div class="py-8 min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-8">
        <h1 class="font-fira text-4xl font-bold text-black mb-2">Checkout</h1>
        <p class="text-gray-600">Complete your order</p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Shipping Information -->
        <div class="bg-white p-8 shadow-sm">
          <h2 class="text-2xl font-bold text-black mb-6">Shipping Information</h2>
          
          <form @submit.prevent="processOrder" class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input 
                  type="text" 
                  v-model="shippingInfo.firstName"
                  class="input-field"
                  required
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input 
                  type="text" 
                  v-model="shippingInfo.lastName"
                  class="input-field"
                  required
                />
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                v-model="shippingInfo.email"
                class="input-field"
                required
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input 
                type="tel" 
                v-model="shippingInfo.phone"
                class="input-field"
                required
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Address</label>
              <input 
                type="text" 
                v-model="shippingInfo.address"
                class="input-field"
                placeholder="Street address"
                required
              />
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">City</label>
                <input 
                  type="text" 
                  v-model="shippingInfo.city"
                  class="input-field"
                  required
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
                <input 
                  type="text" 
                  v-model="shippingInfo.postalCode"
                  class="input-field"
                  required
                />
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Country</label>
              <select v-model="shippingInfo.country" class="input-field">
                <option value="Indonesia">Indonesia</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Singapore">Singapore</option>
                <option value="Thailand">Thailand</option>
              </select>
            </div>
            
            <!-- Payment Method -->
            <div class="border-t border-gray-200 pt-6">
              <h3 class="text-lg font-medium text-black mb-4">Payment Method</h3>
              <div class="space-y-3">
                <label class="flex items-center space-x-3">
                  <input type="radio" v-model="paymentMethod" value="card" class="text-black" />
                  <span>Credit/Debit Card</span>
                </label>
                <label class="flex items-center space-x-3">
                  <input type="radio" v-model="paymentMethod" value="bank" class="text-black" />
                  <span>Bank Transfer</span>
                </label>
                <label class="flex items-center space-x-3">
                  <input type="radio" v-model="paymentMethod" value="cod" class="text-black" />
                  <span>Cash on Delivery</span>
                </label>
              </div>
            </div>
          </form>
        </div>
        
        <!-- Order Summary -->
        <div class="bg-white p-8 shadow-sm h-fit sticky top-8">
          <h2 class="text-2xl font-bold text-black mb-6">Order Summary</h2>
          
          <div class="space-y-4 mb-6">
            <div 
              v-for="item in cartStore.items" 
              :key="`${item.id}-${item.selectedSize}`"
              class="flex items-center space-x-4 py-4 border-b border-gray-100 last:border-b-0"
            >
              <img 
                :src="item.images[0]" 
                :alt="item.name"
                class="w-16 h-20 object-cover"
              />
              <div class="flex-1">
                <h3 class="font-medium text-black">{{ item.name }}</h3>
                <p class="text-sm text-gray-500">Size: {{ item.selectedSize.size }}</p>
                <p class="text-sm text-gray-500">Qty: {{ item.quantity }}</p>
              </div>
              <div class="text-right">
                <p class="font-medium text-black">{{ formatPrice(item.price * item.quantity) }}</p>
              </div>
            </div>
          </div>
          
          <div class="space-y-3 border-t border-gray-200 pt-4">
            <div class="flex justify-between">
              <span class="text-gray-600">Subtotal</span>
              <span class="font-medium">{{ cartStore.formattedTotal }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Shipping</span>
              <span class="font-medium">{{ formatPrice(50000) }}</span>
            </div>
            <div class="flex justify-between text-lg font-bold border-t border-gray-200 pt-3">
              <span>Total</span>
              <span>{{ formatPrice(cartStore.orderTotal) }}</span>
            </div>
          </div>
          
          <button 
            @click="processOrder"
            :disabled="!isFormValid || isProcessing"
            class="w-full btn-primary mt-6"
          >
            {{ isProcessing ? 'Processing...' : 'Place Order' }}
          </button>
          
          <p class="text-xs text-gray-500 text-center mt-4">
            By placing your order, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
    
    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div class="bg-white max-w-md w-full p-8 text-center">
        <div class="mb-6">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckIcon class="h-8 w-8 text-green-600" />
          </div>
          <h2 class="text-2xl font-bold text-black mb-2">Order Confirmed!</h2>
          <p class="text-gray-600">Thank you for your purchase. Your order #{{ orderNumber }} has been received.</p>
        </div>
        
        <div class="space-y-3">
          <NuxtLink to="/" class="block w-full btn-primary">
            Continue Shopping
          </NuxtLink>
          <button 
            @click="showSuccessModal = false"
            class="w-full btn-secondary"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/24/outline'
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()

// Redirect if cart is empty
if (cartStore.items.length === 0) {
  await navigateTo('/products')
}

const shippingInfo = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  postalCode: '',
  country: 'Indonesia'
})

const paymentMethod = ref('card')
const isProcessing = ref(false)
const showSuccessModal = ref(false)
const orderNumber = ref('')

const isFormValid = computed(() => {
  return shippingInfo.firstName && 
         shippingInfo.lastName && 
         shippingInfo.email && 
         shippingInfo.phone && 
         shippingInfo.address && 
         shippingInfo.city && 
         shippingInfo.postalCode &&
         paymentMethod.value
})

const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(price)
}

const processOrder = async () => {
  if (!isFormValid.value) return
  
  isProcessing.value = true
  
  // Simulate order processing
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Generate order number
  orderNumber.value = 'LX' + Date.now().toString().slice(-8)
  
  // Update cart store with shipping info
  cartStore.updateShippingInfo(shippingInfo)
  
  // Show success modal
  showSuccessModal.value = true
  isProcessing.value = false
  
  // Clear cart after successful order
  setTimeout(() => {
    cartStore.clearCart()
  }, 1000)
}

// Meta tags
useHead({
  title: 'Checkout - LUXE',
  meta: [
    { name: 'description', content: 'Complete your purchase with our secure checkout process.' }
  ]
})
</script>