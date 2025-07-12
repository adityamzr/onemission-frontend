<template>
  <header class="fixed top-0 left-0 z-40 transition-transform duration-300" 
    :class="[
      isBackgroundChange ? 'bg-white' : 'bg-opacity-0',
      isNavbarHidden ? '-translate-y-full' : 'translate-y-0'
    ]"
  >
    <div class="z-40 bg-black flex items-center justify-center h-8">
      <span class="text-white text-xs">FREE SHIPPING. FREE RETURNS.</span>
    </div>
    <div class="w-screen mx-auto px-4 py-2 sm:px-6 sm:py-4 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <NuxtLink to="/" class="font-jaturat-bold text-2xl lg:text-4xl font-bold" :class="isBackgroundChange ? 'text-gray-600' : 'text-white'">
            <img v-if="!isBackgroundChange" src="/public/images/logo/onemission-white-logo.png" class="w-full h-10 md:h-12" alt="">
            <img v-else src="/public/images/logo/onemission-black-logo.png" class="w-full h-10 md:h-12" alt="">
          </NuxtLink>
  
          <!-- Desktop Navigation -->
          <nav class="hidden mx-24 md:flex space-x-8">
            <NuxtLink 
              to="/products" 
              class="hover:text-gray-600 transition-colors duration-200"
              :class="[
                { 'text-black font-medium': $route.path.includes('/products') },
                isBackgroundChange ? 'text-gray-600' : 'text-white'
              ]"
            >
              SHOP
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              class="hover:text-gray-600 transition-colors duration-200"
              :class="[
                { 'text-black font-medium': $route.path === '/contact' },
                isBackgroundChange ? 'text-gray-600' : 'text-white'
              ]"
            >
              CUSTOMER SERVICE
            </NuxtLink>
          </nav>
        </div>

        <div>
          <!-- Right Actions -->
          <div class="flex items-center">
            <!-- Search Button -->
            <button 
              @click="toggleSearch"
              class="p-2 hover:text-gray-600 transition-colors duration-200"
              :class="isBackgroundChange ? 'text-gray-600' : 'text-white'"
            >
              <MagnifyingGlassIcon class="h-5 w-5" />
            </button>
  
            <!-- Wishlist -->
            <button class="p-2 hover:text-gray-600 transition-colors duration-200"
              :class="isBackgroundChange ? 'text-gray-600' : 'text-white'"
            >
              <UserIcon class="h-5 w-5" />
            </button>
  
            <button 
              @click="cartStore.toggleCart()" 
              class="relative p-2  hover:text-gray-600 transition-colors duration-200"
              :class="isBackgroundChange ? 'text-gray-600' : 'text-white'"
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
              class="md:hidden p-2  hover:text-black transition-colors duration-200"
              :class="isBackgroundChange ? 'text-gray-600' : 'text-white'"
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
            to="/about" 
            class="block text-gray-600 hover:text-black transition-colors duration-200"
            @click="toggleMobileMenu"
          >
            About
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="block text-gray-600 hover:text-black transition-colors duration-200"
            @click="toggleMobileMenu"
          >
            Contact
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
import { ref, onMounted, onBeforeUnmount } from 'vue'

const cartStore = useCartStore()

const isSearchOpen = ref(false)
const isMobileMenuOpen = ref(false)
const searchQuery = ref('')
const isBackgroundChange = ref(false)
const isNavbarHidden = ref(false)
const firstSection = ref(null)
let lastScrollY = ref(0)

const handleScroll = () => {
  const currentScrollY = window.scrollY
  const sectionHeight = firstSection.value?.offsetHeight || 0
  console.log(sectionHeight)
  isBackgroundChange.value = window.scrollY > sectionHeight
  isNavbarHidden.value = currentScrollY > lastScrollY && currentScrollY > 50
  lastScrollY = currentScrollY
}

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value
  isBackgroundChange.value = isSearchOpen.value
  if (!isSearchOpen.value) {
    searchQuery.value = ''
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

onMounted(() => {
  lastScrollY.value = window.scrollY
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Close mobile menu on route change
watch(() => useRoute().path, () => {
  isMobileMenuOpen.value = false
})
</script>