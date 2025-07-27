<template>
  <div class="w-full min-h-screen mx-auto py-2 sm:py-4 mt-24 md:mt-28">
    <div class="flex flex-col md:flex-row">
      <div class="w-full md:w-[75%]">
        <Swiper
        :slides-per-view="1"
        :space-between="1"
        class="mb-6 rounded-lg overflow-hidden"
        >
          <SwiperSlide v-for="(img, i) in productDetails.variant.images" :key="i">
            <img :src="img" alt="Foto Produk" class="w-full" />
          </SwiperSlide>
        </Swiper>
        <div class="mb-10 hidden md:block px-4 sm:px-6 md:px-11">
          <div v-for="detail in productDetails.variant.details" :key="detail.id">
            <h1 class="font-inconsolata-extra-bold text-2xl md:text-4xl text-black mt-16">{{ detail.info }}</h1>
            <img :src="detail.image" class="h-full w-full mt-5" alt="">
          </div>
        </div>
      </div>

      <div class="side-menu w-full md:w-[25%] px-4 sm:px-6 md:px-11">
        <div class="md:sticky md:top-20">
          <!-- Nama Produk + Rating -->
          <div class="mb-2 border-b pb-2">
            <h1 class="font-jura-bold text-3xl">{{ productDetails.name }}</h1>
            <div class="flex items-center gap-1 text-sm text-black mt-1">
              <span class="text-yellow-500">★★★★★</span>
              <span>{{ productDetails.reviews.length }} Reviews</span>
            </div>
          </div>

          <!-- Harga -->
          <div class="flex flex-col mt-2 mb-4">
            <span class="text-xl font-bold">{{ useProducts.formatPrice(productDetails.price) }}</span>
            <span class="text-black text-[10px] text-xs md:text-sm">Taxes and duties included</span>
          </div>

          <!-- Badge Info -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="badge in productDetails.tags"
              :key="badge"
              class="px-3 py-1 border border-black rounded-full text-xs font-medium"
            >
              {{ badge.name }}
            </span>
          </div>

          <!-- Seasonal Colors -->
          <div class="mt-6">
            <p class="text-sm font-semibold mb-2">Color</p>
            <div class="flex gap-3">
              <!-- <div class="w-6 h-6 md:w-6 md:h-6 flex items-center justify-center rounded-full border border-gray-700 cursor-pointer">
              </div> -->
              <div :style="{ background: productDetails.variant.colorCode }" class="w-8 h-8 border-4 border-gray-200 rounded-full"></div>
              <NuxtLink :to="`/products/shop-all/item/${item.slug}`"
                v-for="(item) in productDetails.otherVariants"
                :key="item.slug">
                  <div
                    class="w-8 h-8 rounded-full cursor-pointer hover:bg-gray-200 transition-colors duration-200"
                    :style="{ backgroundColor: item.colorCode }"
                  ></div>
              </NuxtLink>
            </div>
          </div>

          <!-- Sizes -->
          <div class="flex flex-col justify-center mt-6">
            <div class="flex justify-between mb-2 w-full">
              <span class="text-sm font-semibold">Size</span>
              <span class="text-xs  underline">Size Guide</span>
            </div>

            <div class="flex flex-wrap flex-row gap-2"
              :class="productDetails.variant.sizes.length < 5 ? 'justify-start' : 'justify-between'">
              <div v-for="size in productDetails.variant.sizes" :key="size.id">
                <div v-if="size.stock === 0" class="relative h-16 w-16 flex justify-center items-center bg-white border border-gray-400 rounded-md">
                  <!-- <div class="absolute w-[140%] h-px bg-gray-400 rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div> -->
                  <div class="absolute w-[140%] h-px bg-gray-400 -rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  <div class="text-gray-400 z-10 w-fit h-fit p-0.5 bg-white">{{ size.size }}</div>
                </div>
                <div v-else class="h-16 w-16 flex justify-center items-center bg-white border border-black rounded-md">
                  <span>{{ size.size }}</span>
                </div>
              </div>
            </div>
          </div>

          <button class="w-full h-fit py-4 rounded-md bg-black text-white text-sm font-medium mt-4 mb-8 disabled:bg-gray-400" :disabled="productDetails.variant.inStock !== true">Add to bag</button>

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
      <div v-for="detail in productDetails.variant.details" class="mb-10">
        <h1 class="font-inconsolata-extra-bold text-3xl text-black mt-16 px-4 sm:px-6 md:px-11">{{ detail.info }}</h1>
        <img :src="detail.image" class="h-full w-full mt-5" alt="">
      </div>
      <div class="px-4 sm:px-6 md:px-11">
        <Accordion title="Usage">
          <p>{{ productDetails.usage }}</p>
        </Accordion>
        <Accordion title="Technology">
          <p>{{ productDetails.technology }}</p>
        </Accordion>
        <Accordion title="Features">
          <p>{{ productDetails.features }}</p>
        </Accordion>
        <Accordion title="Composition">
          <p>{{ productDetails.composition }}</p>
        </Accordion>
        <Accordion title="Sustainability">
          <p>{{ productDetails.sustainability }}</p>
        </Accordion>
        <Accordion title="Warranty">
          <p>{{ productDetails.warranty }}</p>
        </Accordion>
      </div>
      
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
      <h2 class=" text-4xl font-bold mb-4">Stay in Style</h2>
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
const slug = route.params.slug
const useProducts = useProductsStore()
const useProductDetails = useProductDetailsStore()
const productDetails = useProductDetails.getProductBySlug(slug)
const emailSubscription = ref('')

</script>