<template>
  <div class="w-full min-h-screen mx-auto px-4 py-2 sm:px-6 sm:py-4 lg:px-11 mt-24 md:mt-28">
    <div class="space-x-3 px-4 sm:px-6 md:px-0 my-5">
      <span class="font-fira font-medium text-xs md:text-sm lg:text-base text-black">Home</span>
      <span class="font-fira font-medium text-xs md:text-sm lg:text-base text-black">/</span>
      <span class="font-fira font-medium text-xs md:text-sm lg:text-base text-black">Item</span>
    </div>
    
    
    <div class="flex flex-col md:flex-row">
      <div class="w-full md:w-[75%]">
        <Swiper
        :slides-per-view="1"
        :space-between="1"
        class="mb-6 rounded-lg overflow-hidden"
        >
          <SwiperSlide v-for="(img, i) in product.images" :key="i">
            <img :src="img" alt="Foto Produk" class="w-full" />
          </SwiperSlide>
        </Swiper>
        <div class="mb-10 hidden md:block">
          <div v-for="detail in product.details">
            <h1 class="text-2xl text-black font-fira font-bold mt-16">{{ detail.description }}</h1>
            <img :src="detail.image" class="h-full w-full mt-5" alt="">
          </div>
        </div>
      </div>

      <div class="side-menu w-full md:w-[25%] px-0 md:px-10">
        <div class="md:sticky md:top-20">
          <!-- Nama Produk + Rating -->
          <div class="mb-2 border-b pb-2">
            <h1 class="text-2xl font-bold">{{ product.name }}</h1>
            <div class="flex items-center gap-1 text-sm text-black mt-1">
              <span class="text-yellow-500">★★★★★</span>
              <span>{{ product.reviews }} Reviews</span>
            </div>
          </div>

          <!-- Harga -->
          <div class="flex flex-col mt-2 mb-4">
            <span class="text-xl font-bold">{{ product.price }} EUR</span>
            <span class="text-black text-[10px] text-xs md:text-sm">Taxes and duties included</span>
          </div>

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
            <p class="text-sm font-semibold mb-2">Color</p>
            <div class="flex gap-3">
              <div
                v-for="(color, i) in product.seasonalColors"
                :key="i"
                class="w-6 h-6 rounded-full border border-black"
                :style="{ backgroundColor: color }"
              ></div>
            </div>
          </div>

          <!-- Sizes -->
          <div class="flex flex-col justify-center mt-6">
            <div class="flex justify-between mb-2 w-full">
              <span class="text-sm font-semibold">Size</span>
              <span class="text-xs font-fira underline">Size Guide</span>
            </div>

            <div class="flex flex-wrap flex-row gap-2">
              <div class="relative h-16 w-16 flex justify-center items-center bg-white border border-gray-400 rounded-md">
                <div class="absolute w-[140%] h-px bg-gray-400 -rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                <div class="text-gray-400 z-10 w-fit h-fit bg-white">XS</div>
              </div>
              <div class="h-16 w-16 flex justify-center items-center bg-white border border-black rounded-md">
                <span>S</span>
              </div>
            </div>
          </div>

          <button class="w-full h-fit py-4 rounded-md bg-black text-white text-sm font-medium mt-4 mb-8">Add to bag</button>

          <Accordion title="Shipping & Returns">
            <p>Free shipping worldwide on orders above 6000000 IDR.</p>
            <ul class="list-disc list-inside">
              <li>
                Free returns and exchanges within 14 days of original purchase.
                Items must be unworn, unwashed, and undamaged with original and
                detachable labels intact.
              </li>
            </ul>
            <p>
              Visit our
              <a href="#" class="text-blue-600 underline">Shipping & Return page</a>
              for more info & FAQs.
            </p>
          </Accordion>

          <Accordion title="Need Help?">
            <p>Contact our support team via email or live chat for assistance.</p>
          </Accordion>
        </div>
      </div>
    </div>
    <div class="md:hidden block mb-10">
      <div v-for="detail in product.details" class="mb-10">
        <h1 class="text-2xl text-black font-fira font-bold mt-16">{{ detail.description }}</h1>
        <img :src="detail.image" class="h-full w-full mt-5" alt="">
      </div>

      <Accordion title="Usage">
        <p>Contact our support team via email or live chat for assistance.</p>
      </Accordion>

      <Accordion title="Technology">
        <p>Contact our support team via email or live chat for assistance.</p>
      </Accordion>

      <Accordion title="Features">
        <p>Contact our support team via email or live chat for assistance.</p>
      </Accordion>

      <Accordion title="Warranty">
        <p>Contact our support team via email or live chat for assistance.</p>
      </Accordion>
      
    </div>
  </div>

  <!-- Information -->
  <section class="mb-10 py-0 md:py-20 md:mb-0">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-start">
      <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5">
        <div class="flex">
          <QuestionMarkCircleIcon class="w-8 h-8 md:w-6 md:h-6 shrink-0" />
          <div class="flex flex-col justify-start ml-4">
            <h5 class="text-md lg:text-lg font-bold">Get Help Buying</h5>
            <p>If you have any questions about our gear, get in touch.</p>
            <span class="text-xs underline font-medium">Chat with us</span>
          </div>
        </div>
        <div class="flex">
          <ArrowUturnLeftIcon class="w-8 h-8 md:w-6 md:h-6 shrink-0" />
          <div class="flex flex-col justify-start ml-4">
            <h5 class="text-md lg:text-lg font-bold">Free FedEx® Delivery</h5>
            <p>All prices include customs duties and taxes. Orders above 6000000 IDR ship for free.</p>
            <span class="text-xs underline font-medium">Learn more</span>
          </div>
        </div>
        <div class="flex">
          <ArchiveBoxIcon class="w-8 h-8 md:w-6 md:h-6 shrink-0" />
          <div class="flex flex-col justify-start ml-4">
            <h5 class="text-md lg:text-lg font-bold">Free & Easy Returns</h5>
            <p>Free returns on all orders within 14 days from the delivery date.</p>
            <span class="text-xs underline font-medium">Learn more</span>
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
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { QuestionMarkCircleIcon, ArrowUturnLeftIcon, ArchiveBoxIcon } from '@heroicons/vue/24/outline';

const route = useRoute();
// const slug = route.params.slug
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
  details: [
    { description: 'The 2.5” Rippy™ ripstop shell provides ultra-lightweight, abrasion resistant and durable coverage. The 3” Justice™ liner is a lightweight, 4-way stretch, anti-chafe technical silk.', image: '/images/details/detail1.webp'},
    { description: 'The 2.5” Rippy™ ripstop shell provides ultra-lightweight, abrasion resistant and durable coverage. The 3” Justice™ liner is a lightweight, 4-way stretch, anti-chafe technical silk.', image: '/images/details/detail2.webp'},
    { description: 'The 2.5” Rippy™ ripstop shell provides ultra-lightweight, abrasion resistant and durable coverage. The 3” Justice™ liner is a lightweight, 4-way stretch, anti-chafe technical silk.', image: '/images/details/detail3.webp'},
    { description: 'The 2.5” Rippy™ ripstop shell provides ultra-lightweight, abrasion resistant and durable coverage. The 3” Justice™ liner is a lightweight, 4-way stretch, anti-chafe technical silk.', image: '/images/details/detail4.webp'},
    { description: 'The 2.5” Rippy™ ripstop shell provides ultra-lightweight, abrasion resistant and durable coverage. The 3” Justice™ liner is a lightweight, 4-way stretch, anti-chafe technical silk.', image: '/images/details/detail5.webp'},
  ],
  badges: ['175g', 'COOLING', 'NATURAL FIBERS', 'ORGANIC'],
  seasonalColors: ['#bba89e', '#cfc6db']
}

</script>