<template>
  <div>
     <!-- Hero Section -->
    <section class="relative h-screen flex items-end md:items-center justify-center md:justify-start overflow-hidden">
      <div class="absolute bottom-0 left-0 right-0 w-full bg-gradient-to-b from-transparent to-white pointer-events-none h-60 z-10"></div>
      <div class="absolute inset-0 z-0">
        <img
          :src="bannerSrc"
          alt="Fashion Hero"
          class="w-full h-full object-cover"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>
      
      <div class="relative flex flex-col h-full justify-center items-center md:items-start z-10 text-center md:text-start text-white px-10 md:px-12">
        <h1 class="font-roco-black text-7xl md:text-9xl font-bold mb-1 animate-fade-in">
          awrahfit
          <!-- <span class="block">Elegance</span> -->
        </h1>
        <span class="text-md w-full flex justify-end md:justify-center text-center tracking-[0.2rem] md:tracking-[0.5rem] md:text-2xl mb-10 animate-slide-up">
          BRING BACK THE VALUE
        </span>
        <div class="flex flex-col md:flex-row flex-wrap justify-center gap-4 animate-slide-up">
          <NuxtLink to="/products/shop-all" class="btn-primary w-fit md:w-44 text-center tracking-wider font-roco-black text-lg md:text-lg rounded-full bg-white text-black hover:bg-gray-100">
            SHOP NOW
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Shop the silhouette -->
    <section class="py-14 md:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 md:mb-20">
          <h2 class="font-roco-black text-5xl md:text-7xl font-bold text-black mb-1">Pick Your Style</h2>
          <h5 class="text-[10px] md:text-xs font-semibold text-black tracking-[0.2rem]">OWN THE OUTFIT CRUSH YOUR LIMIT</h5>
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
            v-for="(outfit) in outfits.data"
            @click="outfits.setSelectedOutfitId(outfit.id)"
            class="group">
            <div class="flex-shrink-0 w-36 md:w-80 text-center aspect-[1/2] rounded-sm">
              <video
                v-if="outfit.url[0].endsWith('.mp4')"
                :src="outfit.url[0]"
                loop
                autoplay
                muted
                playsinline
                class="min-h-96 object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
              />
              <img 
                v-else
                :src="outfit.url[0]"
                alt="Dresses"
                class="min-h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div v-else class="w-full px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div v-for="outfit in outfits.data" @click="outfits.setSelectedOutfitId(outfit.id)" class="group">
            <div class="relative overflow-hidden rounded-sm aspect-[1/2]">
              <video
                v-if="outfit.url[0].endsWith('.mp4')"
                :src="outfit.url[0]"
                loop
                autoplay
                muted
                playsinline
                class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
              />
              <img 
                v-else
                :src="outfit.url[0]" 
                alt="Blazers"
                class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

    </section>

   <!-- Featured Categories 1 -->
    <section class="py-7 md:py-14 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 md:mb-20">
          <h2 class="font-roco-black text-5xl md:text-7xl font-bold text-black mb-1">Values Matter</h2>
          <h5 class="text-[10px] md:text-xs font-semibold text-black tracking-[0.2rem]">FOR EVERY ACTIVITIES</h5>
        </div>
      </div>
      <div class="w-full px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-3 gap-2">
          <div v-for="item in featured" class="group cursor-pointer card-hover">
            <div class="relative overflow-hidden bg-gray-100 aspect-[3/4] rounded-xl">
              <div class="absolute top-0 left-0 bg-black opacity-15 w-full h-full"></div>
              <img 
                :src="item.image" 
                alt="Blazers"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div class="absolute inset-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div class="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                <h3 class="font-roco-black text-xl tracking-wide xl:text-6xl mb-1">{{ item.title }}</h3>
                <!-- <p class="text-lg opacity-90">{{ item.subtitle }}</p> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cover The Awrah -->
    <section class="py-14 md:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-11">
        <div class="text-center mb-0 md:mb-16">
          <h2 class="font-roco-black text-5xl md:text-7xl font-bold text-black mb-1">Cover The Awrah</h2>
          <h5 class="text-[10px] md:text-xs font-semibold text-black tracking-[0.2rem]">DRESSING WITH DIGNITY</h5>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div
          v-for="(product, index) in productsStore.latestProducts"
          :key="index"
          class="flex-shrink-0 text-center relative"
          >
          <NuxtLink :to="`/products/shop-all/item/${product.slug}`">
          <img
            :src="getImage(product, index)"
            :alt="product.name"
            class="mb-10"
            loading="lazy"
            @mouseenter="hoveredVariant[index] = product.slug"
            @mouseleave="hoveredVariant[index] = null"
          />
          <!-- Discount Badge -->
          <div 
            v-if="product.discount" 
            class="absolute top-0 right-0 bg-rose-500 text-white px-2 py-1 text-xs font-medium"
          >
            -{{ product.discount }}%
          </div>
          
          <div class="text-center w-full">
            <h3 class="text-md md:text-lg lg:text-xl font-extrabold text-black mb-1">{{ product.name }}</h3>
            <div class="flex flex-col md:flex-row items-center justify-center space-x-2">
              <span class="text-md font-medium text-black">{{ formatPrice(product.price) }}</span>
              <span 
                v-if="product.originalPrice" 
                class="text-sm text-gray-500 line-through"
              >
                {{ formatPrice(product.originalPrice) }}
              </span>
            </div>
          </div>
          </NuxtLink>
          <!-- COLORS -->
          <div class="flex justify-center space-x-2 mt-2">
            <div class="w-4 h-4 md:w-6 md:h-6 flex items-center justify-center rounded-full border border-gray-400 cursor-pointer">
              <span :style="{ background: product.colorCode }" class="w-2.5 h-2.5 md:w-[18px] md:h-[18px] rounded-full"></span>
            </div>
            <NuxtLink
              v-for="item in product.otherVariants" 
              :key="item.slug"
              :to="`/products/shop-all/item/${item.slug}`"
              @mouseenter="hoveredVariant[index] = item.slug"
              @mouseleave="hoveredVariant[index] = null"
              class="w-4 h-4 md:w-6 md:h-6 flex items-center justify-center rounded-full border border-transparent hover:border-gray-700 cursor-pointer">
              <span
                class="w-3 h-3 md:w-[18px] md:h-[18px] rounded-full"
                :class="{ 'border border-gray-200': item.colorCode === '#fff' || item.colorCode === '#f8f8f8' }"
                :style="{ backgroundColor: item.colorCode }"
              ></span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="text-center">
        <NuxtLink to="/products/shop-all" class="btn-primary w-fit md:w-44 text-center tracking-wider font-roco-black text-lg md:text-lg rounded-full bg-black text-white hover:bg-gray-100">
          Shop All
        </NuxtLink>
      </div>
    </section>

    <!-- GALLERY -->
    <section class="py-7 md:py-14 bg-white">
      <div class="w-full px-4 sm:px-6 lg:px-8">
        <Swiper
        :modules="[Navigation, Pagination]"
        navigation
        :pagination="{ clickable: true }"
        :slides-per-view="3"
        :space-between="32"
        :breakpoints="{
          320: { slidesPerView: 1, spaceBetween: 32 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          1024: { slidesPerView: 3, spaceBetween: 32 }
        }"
        class="mb-6 overflow-hidden swiper"
      >
        <SwiperSlide v-for="(img, idx) in gallery" :key="idx">
          <img :src="img" alt="gallery foto" class="w-full aspect-[2:3]" loading="lazy" />
        </SwiperSlide>
      </Swiper>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="py-20 bg-black text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class=" text-4xl font-bold mb-4">Stay in Style</h2>
        <p class="text-gray-300 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and be the first to know about new collections, exclusive offers, and style insights.
        </p>
        
        <form class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email"
            class="flex-1 px-4 py-3 bg-white text-black focus:outline-none rounded-full"
            v-model="emailSubscription"
          />
          <button 
            type="submit"
            class="px-6 py-3 btn-primary w-full md:w-fit text-center tracking-wider font-roco-black text-lg md:text-lg rounded-full bg-white text-black hover:bg-gray-100"
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
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const slider = ref(null)
const sliderOutfit = ref(null)
const mobileQuery = '(max-width: 768px)'
const isMobile = ref(false)
let bannerSrc = ref('')

const updateBanner = () => {
  isMobile.value = window.matchMedia(mobileQuery).matches
  bannerSrc.value = isMobile.value
    ? '/images/banners/mobile-banner.webp'
    : '/images/banners/banner.webp'
}

const scrollLeft = () => {
  slider.value.scrollBy({ left: -300, behavior: 'smooth' })
}

const scrollRight = () => {
  slider.value.scrollBy({ left: 300, behavior: 'smooth' })
}

const outfits = useOutfits()
const productsStore = useProductsStore()
const emailSubscription = ref('')
const hoveredVariant = ref({})
const gallery = ref([
  '/images/gallery/gallery-1.webp',
  '/images/gallery/gallery-2.webp',
  '/images/gallery/gallery-3.webp',
  '/images/gallery/gallery-4.webp',
  '/images/gallery/gallery-5.webp',
  '/images/gallery/gallery-6.webp',
])
const featured = ref([
  { title: 'Run', subtitle: '', image: '/images/features/1.webp' },
  { title: 'Pray', subtitle: '', image: '/images/features/2.webp' },
  { title: 'Gym', subtitle: '', image: '/images/features/3.webp' },
  { title: 'Ride', subtitle: '', image: '/images/features/4.webp' },
  { title: 'Sports', subtitle: '', image: '/images/features/5.webp' },
  { title: 'Casual', subtitle: '', image: '/images/features/6.webp' }
])

const getImage = (product, index) => {
  const slug = hoveredVariant.value[index]
  if (slug) {
    const variant = product.otherVariants?.find(v => v.slug === slug)
    if (variant && variant.images && variant.images[0]) {
      return variant.images[0]
    } else {
      return product.images?.[1] ? product.images[1] : product.images?.[0]
    }
  }
  return product.images?.[0]
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(price)
}

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