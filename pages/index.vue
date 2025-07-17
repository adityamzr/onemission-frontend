<template>
  <div>
    <!-- Shop the silhouette -->
    <section class="py-7 md:py-14 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28">
        <div class="text-center mb-10">
          <h2 class="font-staatliches text-5xl md:text-7xl font-bold text-black text-start">Shop The Outfit</h2>
          <h4 class="font-fira text-[10px] md:text-xs font-medium text-black text-start">FOR SPORT GYM AND RUN</h4>
        </div>
      </div>

      <div v-if=isMobile class="relative md:py-14">
        <!-- Slider Container -->
        <div
          ref="sliderOutfit"
          class="flex overflow-x-auto scroll-smooth space-x-6"
          style="scrollbar-width: none; -ms-overflow-style: none;"
        >
          <div 
            v-for="(outfit) in outfits"
            class="group cursor-pointer card-hover">
            <div class="flex-shrink-0 w-36 md:w-80 text-center aspect-auto md:aspect-[2/3] rounded-sm">
              <img 
                :src="outfit.url"
                alt="Dresses"
                class="min-h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div v-else class="w-full px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div class="group cursor-pointer card-hover">
            <div class="relative overflow-hidden bg-gray-100 aspect-[2/3] rounded-sm">
              <img 
                src="/public/images/silhouette/1.jpg" 
                alt="Blazers"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          <div class="group cursor-pointer card-hover">
            <div class="relative overflow-hidden bg-gray-100 aspect-[2/3] rounded-sm">
              <img 
                src="/public/images/silhouette/2.jpg" 
                alt="Dresses"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          <div class="group cursor-pointer card-hover">
            <div class="relative overflow-hidden bg-gray-100 aspect-[2/3] rounded-sm">
              <img 
                src="/public/images/silhouette/3.jpg" 
                alt="Outerwear"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          <div class="group cursor-pointer card-hover">
            <div class="relative overflow-hidden bg-gray-100 aspect-[2/3] rounded-sm">
              <img 
                src="/public/images/silhouette/4.jpg" 
                alt="Outerwear"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Hero Section -->
    <section class="relative h-screen flex items-end md:items-center justify-center md:justify-start overflow-hidden">
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
        <div class="flex flex-col md:flex-row flex-wrap justify-between md:justify-start gap-4 animate-slide-up">
          <NuxtLink to="/products/shop-all" class="btn-primary bg-white text-black hover:bg-gray-100">
            Shop Collection
          </NuxtLink>
          <button class="btn-secondary border-white text-white hover:bg-white hover:text-black">
            Explore More
          </button>
        </div>
      </div>
    </section>

    <!-- New Arrivals -->
    <section class="py-7 md:py-14 bg-white md:mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-11">
        <div class="text-center mb-16">
          <h2 class="font-fira text-5xl md:text-7xl font-bold text-black mb-4">New Arrivals</h2>
        </div>
      </div>
      <div class="relative py-10 md:py-14">
        <!-- Slider Container -->
        <div
          ref="slider"
          class="flex overflow-x-auto scroll-smooth space-x-6 pb-4"
          style="scrollbar-width: none; -ms-overflow-style: none;"
        >
          <div
            v-for="(product, index) in products"
            :key="index"
            class="flex-shrink-0 w-60 md:w-80 text-center"
          >
            <img
              :src="product.image"
              :alt="product.title"
              class="mb-10"
            />
            <h3 class="text-sm md:text-lg font-bold">{{ product.title }}</h3>
            <p class="text-xs md:text-md">{{ product.price }} EUR</p>
          </div>
        </div>

        <!-- Left Button -->
        <button
          v-if=!isMobile
          @click="scrollLeft"
          class="absolute left-10 top-1/2 transform -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Right Button -->
        <button
          v-if=!isMobile
          @click="scrollRight"
          class="absolute right-10 top-1/2 transform -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div class="text-center">
        <NuxtLink to="/products/shop-all" class="btn-primary">
          View All
        </NuxtLink>
      </div>
    </section>

    <!-- Featured Categories 1 -->
    <section class="py-7 md:py-14 bg-white">
      <div class="w-full px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="group cursor-pointer card-hover">
            <div class="relative overflow-hidden bg-gray-100 aspect-[3/4] rounded-sm">
              <img 
                src="/public/images/features/1.jpg" 
                alt="Blazers"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div class="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                <h3 class="font-fira text-5xl xl:text-6xl font-bold mb-2">Tops</h3>
                <p class="text-lg opacity-90">Professional elegance</p>
              </div>
            </div>
          </div>
          
          <div class="group cursor-pointer card-hover">
            <div class="relative overflow-hidden bg-gray-100 aspect-[3/4] rounded-sm">
              <img 
                src="/public/images/features/2.jpg" 
                alt="Dresses"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div class="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                <h3 class="font-fira text-5xl xl:text-6xl font-bold mb-2">Shorts</h3>
                <p class="text-lg opacity-90">Effortless sophistication</p>
              </div>
            </div>
          </div>
          
          <div class="group cursor-pointer card-hover">
            <div class="relative overflow-hidden bg-gray-100 aspect-[3/4] rounded-sm">
              <img 
                src="/public/images/features/3.jpg" 
                alt="Outerwear"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div class="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                <h3 class="font-fira text-5xl xl:text-6xl font-bold mb-2">Headwear</h3>
                <p class="text-lg opacity-90">Statement pieces</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Featured Categories 2 -->
    <section class="py-7 md:py-14 bg-white">
      <div class="w-full px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="group cursor-pointer card-hover">
            <div class="relative overflow-hidden bg-gray-100 aspect-[3/4] rounded-sm">
              <img 
                src="/public/images/features/4.jpg" 
                alt="Blazers"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div class="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                <h3 class="font-fira text-5xl xl:text-6xl font-bold mb-2">Tops</h3>
                <p class="text-lg opacity-90">Professional elegance</p>
              </div>
            </div>
          </div>
          
          <div class="group cursor-pointer card-hover">
            <div class="relative overflow-hidden bg-gray-100 aspect-[3/4] rounded-sm">
              <img 
                src="/public/images/features/5.jpg" 
                alt="Dresses"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div class="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                <h3 class="font-fira text-5xl xl:text-6xl font-bold mb-2">Shorts</h3>
                <p class="text-lg opacity-90">Effortless sophistication</p>
              </div>
            </div>
          </div>
          
          <div class="group cursor-pointer card-hover">
            <div class="relative overflow-hidden bg-gray-100 aspect-[3/4] rounded-sm">
              <img 
                src="/public/images/features/6.jpg" 
                alt="Outerwear"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div class="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                <h3 class="font-fira text-5xl xl:text-6xl font-bold mb-2">Headwear</h3>
                <p class="text-lg opacity-90">Statement pieces</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="py-20 bg-black text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-fira text-4xl font-bold mb-4">Stay in Style</h2>
        <p class="text-gray-300 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and be the first to know about new collections, exclusive offers, and style insights.
        </p>
        
        <form class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email"
            class="flex-1 px-4 py-3 bg-white text-black focus:outline-none"
            v-model="emailSubscription"
          />
          <button 
            type="submit"
            class="px-6 py-3 bg-white text-black font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useProductsStore } from '~/stores/products'
import ProductCard from '~/components/ProductCard.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const slider = ref(null)
const sliderOutfit = ref(null)
const mobileQuery = '(max-width: 768px)'
const isMobile = ref(false)
let bannerSrc = ref('')

const updateBanner = () => {
  isMobile.value = window.matchMedia(mobileQuery).matches
  bannerSrc.value = isMobile.value
    ? '/images/banners/palestine-mobile.webp'
    : '/images/banners/palestine.webp'
}

const scrollLeft = () => {
  slider.value.scrollBy({ left: -300, behavior: 'smooth' })
}

const scrollRight = () => {
  slider.value.scrollBy({ left: 300, behavior: 'smooth' })
}

const products = [
  {
    title: 'MothTech™ T-Shirt',
    price: 120,
    image: 'images/new_arrivals/1.jpg',
  },
  {
    title: 'PeaceShell™ River Shirt',
    price: 290,
    image: 'images/new_arrivals/2.jpg',
  },
  {
    title: 'Justice™ Dyneema® Trail Band',
    price: 160,
    image: 'images/new_arrivals/3.jpg',
  },
  {
    title: 'MothTech™ Muscle Tee',
    price: 120,
    image: 'images/new_arrivals/4.jpg',
  },
  {
    title: 'MothTech™ Muscle Tee',
    price: 120,
    image: 'images/new_arrivals/5.jpg',
  },
  {
    title: 'MothTech™ Muscle Tee',
    price: 120,
    image: 'images/new_arrivals/6.jpg',
  },
  {
    title: 'MothTech™ Muscle Tee',
    price: 120,
    image: 'images/new_arrivals/7.jpg',
  },
  // Add more as needed
]

const outfits = [
  { url: 'images/silhouette/1.jpg' },
  { url: 'images/silhouette/2.jpg' },
  { url: 'images/silhouette/3.jpg' },
  { url: 'images/silhouette/4.jpg' },
]

const productsStore = useProductsStore()
const emailSubscription = ref('')

onMounted(() => {
  updateBanner()
  window.addEventListener('resize', updateBanner)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateBanner)
})
// Meta tags for SEO
useHead({
  title: 'onemission - Muslim Values Matter',
  meta: [
    { name: 'description', content: 'Discover timeless elegance with our curated collection of premium fashion. Shop blazers, dresses, and statement pieces that define contemporary luxury.' }
  ]
})
</script>