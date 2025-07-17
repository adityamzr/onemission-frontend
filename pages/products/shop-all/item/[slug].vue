<template>
  <div class="w-full min-h-screen mx-auto px-4 py-2 sm:px-6 sm:py-4 lg:px-11 mt-24 md:mt-28">
    <div class="space-x-3 px-4 sm:px-6 md:px-0 my-5">
      <span class="font-fira font-medium text-xs md:text-sm lg:text-base text-black">Home</span>
      <span class="font-fira font-medium text-xs md:text-sm lg:text-base text-black">/</span>
      <span class="font-fira font-medium text-xs md:text-sm lg:text-base text-black">Item</span>
    </div>
    
    <Swiper
      :slides-per-view="1"
      :space-between="10"
      class="mb-6 rounded-lg overflow-hidden"
    >
      <SwiperSlide v-for="(img, i) in product.images" :key="i">
        <img :src="img" alt="Foto Produk" class="w-full md:w-[70%] aspect-auto" />
      </SwiperSlide>
    </Swiper>
    <div class="flex flex-col md:flex-row">
      <div class="w-[1/3]">
      </div>

      <div class="w-[2/3]">
        <!-- Nama Produk + Rating -->
        <div class="mb-2 border-b pb-2">
          <h1 class="text-2xl font-bold">{{ product.name }}</h1>
          <div class="flex items-center gap-1 text-sm text-black mt-1">
            <span class="text-yellow-500">★★★★★</span>
            <span>{{ product.reviews }} Reviews</span>
          </div>
        </div>

        <!-- Harga -->
        <div class="text-xl font-bold mt-2 mb-4">{{ product.price }} EUR</div>

        <!-- Badge Info -->
        <div class="flex flex-wrap gap-2 mb-4">
          <span
            v-for="badge in product.badges"
            :key="badge"
            class="px-3 py-1 border border-black rounded-full text-xs font-medium"
          >
            {{ badge }}
          </span>
        </div>

        <!-- Seasonal Colors -->
        <div class="mt-6">
          <p class="text-sm font-semibold mb-2">Seasonal</p>
          <div class="flex gap-3">
            <div
              v-for="(color, i) in product.seasonalColors"
              :key="i"
              class="w-6 h-6 rounded-full border border-black"
              :style="{ backgroundColor: color }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const route = useRoute();
const slug = route.params.slug
const product = {
  name: 'MothTech™ T-Shirt',
  reviews: 353,
  price: 120,
  images: [
    "/images/products/shirt1.avif",
    "/images/products/shirt1-1.avif",
    "/images/products/shirt2.avif",
    "/images/products/shirt3.avif",
  ],
  badges: ['175g', 'COOLING', 'NATURAL FIBERS', 'ORGANIC'],
  seasonalColors: ['#bba89e', '#cfc6db']
}

console.log(slug)
</script>