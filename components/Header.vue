<template>
  <header class="fixed top-0 left-0 z-40 transition-transform duration-300 bg-white">
    <div class="z-40 bg-black flex items-center justify-center h-8">
      <span class="text-white text-[9px] md:text-xs font-medium">ALL PRICES INCLUDE TAXES AND CUSTOMS DUTIES.</span>
    </div>
    <div class="w-screen mx-auto px-4 py-2 sm:px-6 sm:py-4 lg:px-11">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="font-jaturat-bold text-2xl lg:text-4xl font-bold text-black">
          <img src="/public/images/logo/onemission-black-logo.png" class="h-5 md:h-8" alt="">
        </NuxtLink>

        <div class="flex items-center justify-between">
          <!-- Desktop Navigation -->
          <nav class="hidden mx-16 md:flex space-x-8">
            <NuxtLink 
              to="/products/shop-all" 
              class="hover:text-gray-600 text-black transition-colors duration-200"
              :class="[
                { 'text-black font-medium': $route.path.includes('/products/shop-all') },
              ]"
            >
              SHOP
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              class="hover:text-gray-600 text-black transition-colors duration-200"
              :class="[
                { 'text-black font-medium': $route.path === '/contact' },
              ]"
            >
              CUSTOMER SERVICE
            </NuxtLink>
          </nav>

          <!-- Right Actions -->
          <div class="flex items-center">
            <!-- Search Button -->
            <button 
              @click="toggleSearch"
              class="p-2 hover:text-gray-600 text-black transition-colors duration-200"
            >
              <MagnifyingGlassIcon class="h-5 w-5" />
            </button>
  
            <!-- Wishlist -->
            <!-- <button class="p-2 hover:text-gray-600 text-black transition-colors duration-200"
            >
              <UserIcon class="h-5 w-5" />
            </button> -->
  
            <button 
              @click="cartStore.toggleCart()" 
              class="relative p-2  hover:text-gray-600 text-black transition-colors duration-200"
            >
              <ShoppingBagIcon class="h-5 w-5" />
              <span 
                v-if="cartStore.itemCount > 0"
                class="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
              >
                {{ cartStore.itemCount }}
              </span>
            </button>
  
            <!-- Mobile Menu Button -->
            <button 
              @click="toggleMobileMenu"
              class="md:hidden p-2 text-black transition-colors duration-200"
            >
              <Bars3Icon v-if="!isMobileMenuOpen" class="h-5 w-5" />
              <XMarkIcon v-else class="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <!-- Search Bar -->
      <Transition name="fade">
        <div v-if="isSearchOpen" class="py-4 border-t border-gray-300">
          <div class="relative">
            <MagnifyingGlassIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              class="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-black transition-colors duration-200"
              v-model="searchQuery"
              @keyup.escape="toggleSearch"
            />
            <button 
              @click="toggleSearch"
              class="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-600"
            >
              <XMarkIcon class="h-5 w-5" />
            </button>
          </div>
        </div>
      </Transition>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide">
      <div v-if="isMobileMenuOpen" class="md:hidden border-t border-gray-100 bg-white">
        <div class="px-4 py-4 space-y-4">
          <NuxtLink 
            to="/" 
            class="block text-gray-600 hover:text-black transition-colors duration-200"
            @click="toggleMobileMenu"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/products" 
            class="block text-gray-600 hover:text-black transition-colors duration-200"
            @click="toggleMobileMenu"
          >
            Shop
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="block text-gray-600 hover:text-black transition-colors duration-200"
            @click="toggleMobileMenu"
          >
            Customer Service
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { 
  MagnifyingGlassIcon, 
  UserIcon, 
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/vue/24/outline'
import { useCartStore } from '~/stores/cart'
import { ref } from 'vue'

const cartStore = useCartStore()

const isSearchOpen = ref(false)
const isMobileMenuOpen = ref(false)
const searchQuery = ref('')

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value
  if (!isSearchOpen.value) {
    searchQuery.value = ''
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Close mobile menu on route change
watch(() => useRoute().path, () => {
  isMobileMenuOpen.value = false
})
</script>