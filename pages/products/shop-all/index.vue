<template>
  <div class="py-8">
    <!-- Hero Section -->
  <!-- <section class="relative h-screen flex items-end md:items-center justify-center md:justify-start overflow-hidden">
    <div class="absolute inset-0 z-0">
      <img
        :src="bannerSrc"
        alt="Fashion Hero"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black bg-opacity-30"></div>
    </div>
    
    <div class="relative z-10 text-center md:text-start text-white px-4 md:px-12 mb-5">
      <h1 class="font-fira text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
        Timeless
        <span class="block">Elegance</span>
      </h1>
      <p class="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-slide-up">
        Discover our curated collection of premium fashion that transcends trends
      </p>
    </div>
  </section> -->

    <div class="mx-auto md:px-11 mt-24 md:mt-28">
      <!-- Header -->
      <div class="space-x-3 px-4 sm:px-6 md:px-0">
        <span class="font-fira font-medium text-xs md:text-sm lg:text-base text-black">Home</span>
        <span class="font-fira font-medium text-xs md:text-sm lg:text-base text-black">/</span>
        <span class="font-fira font-medium text-xs md:text-sm lg:text-base text-black">Shop All</span>
      </div>

      <div v-if=isMobile class="relative md:py-14 pl-4 sm:pl-6">
        <!-- Slider Container -->
        <div
          ref="filterSlider"
          class="flex overflow-x-auto scroll-smooth space-x-3 mt-4"
          style="scrollbar-width: none; -ms-overflow-style: none;"
        >
          <div
            v-for="filter in productsStore.categories"
            :key="filter.id"
            @click="productsStore.setCategory(filter.id)"
            class="py-2 px-6 md:px-6 border border-black rounded-full w-fit"
            :class="productsStore.selectedCategory === filter.id
              ? 'bg-black text-white'
              : 'bg-white text-black hover:bg-black hover:text-white'"
          >
            <span class="text-xs md:text-md font-medium">{{ filter.name }}</span>
          </div>
        </div>
      </div>

      <div v-else class="flex flex-wrap py-7 space-x-3">
        <div
          v-for="filter in productsStore.categories"
          :key="filter.id"
          @click="productsStore.setCategory(filter.id)"
          class="py-2 px-6 border border-black rounded-full w-fit"
          :class="productsStore.selectedCategory === filter.id
            ? 'bg-black text-white'
            : 'bg-white text-black hover:bg-black hover:text-white'"
        >
          <span class="font-medium">{{ filter.name }}</span>
        </div>
      </div>
      
      <!-- Products Grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-10 px-4 sm:px-6 md:px-0">
        <ProductCard 
          v-for="product in productsStore.filteredProducts" 
          :key="product.id" 
          :product="product"
          categoryPath="shop-all"
        />
      </div>
      
      <!-- Empty State -->
      <div v-if="productsStore.filteredProducts.length === 0" class="text-center py-12">
        <p class="text-gray-500 mb-4">No products found in this category.</p>
        <button 
          @click="productsStore.setCategory('all')"
          class="btn-primary"
        >
          View All Products
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from '~/stores/products'
import ProductCard from '~/components/ProductCard.vue'

const productsStore = useProductsStore()
const mobileQuery = '(max-width: 768px)'
const isMobile = ref(false)
let bannerSrc = ref('')

const updateBanner = () => {
  isMobile.value = window.matchMedia(mobileQuery).matches
  bannerSrc.value = isMobile.value
    ? '/images/banners/palestine-mobile.webp'
    : '/images/banners/palestine.webp'
}

onMounted(() => {
  updateBanner()
  window.addEventListener('resize', updateBanner)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateBanner)
})

// Meta tags
useHead({
  title: 'Shop All Products - Onemission',
  meta: [
    { name: 'description', content: 'Browse our complete collection of premium fashion including blazers, dresses, trousers, and more.' }
  ]
})
</script>