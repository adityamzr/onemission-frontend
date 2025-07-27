<template>
  <NuxtLink :to="`/products/${categoryPath}/item/${product.slug}`">
    <div class="flex flex-wrap gap-y-2 md:gap-y-6 mb-5 md:mb-20">
      <div
        class="relative overflow-hidden aspect-auto mb-4 w-full" 
        @mouseenter="hoveredVariant = product.slug"
        @mouseleave="hoveredVariant = null">
        <img 
          :src="getImage()" 
          :alt="product.name"
          class="w-full h-full object-cover transition-transform duration-500"
        />
        
        <!-- Discount Badge -->
        <div 
          v-if="product.discount" 
          class="absolute top-0 right-0 bg-rose-500 text-white px-2 py-1 text-xs font-medium"
        >
          -{{ product.discount }}%
        </div>
        
        <!-- Quick Actions -->
        <!-- <div class="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            @click.prevent="showQuickView = true"
            class="w-full bg-white text-black py-2 px-4 font-medium hover:bg-gray-100 transition-colors duration-200 mb-2"
          >
            Quick View
          </button>
        </div> -->
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
        <!-- COLORS -->
        <div class="flex justify-center space-x-2 mt-2">
          <div class="w-4 h-4 md:w-6 md:h-6 flex items-center justify-center rounded-full border border-gray-400 cursor-pointer">
            <span :style="{ background: product.colorCode }" class="w-2.5 h-2.5 md:w-[18px] md:h-[18px] rounded-full"></span>
          </div>
          <NuxtLink
            v-for="item in product.otherVariants" 
            :key="item.slug"
            :to="`/products/shop-all/item/${item.slug}`"
            @mouseenter="hoveredVariant = item.slug"
            @mouseleave="hoveredVariant = null"
            class="w-4 h-4 md:w-6 md:h-6 flex items-center justify-center rounded-full border border-transparent hover:border-gray-700 cursor-pointer">
            <span
              class="w-3 h-3 md:w-[18px] md:h-[18px] rounded-full cursor-pointer"
              :class="{ 'border border-gray-200': item.colorCode === '#fff' || item.colorCode === '#f8f8f8' }"
              :style="{ backgroundColor: item.colorCode }"
            ></span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  },
  categoryPath: {
    type: String,
    required: true,
    default: 'shop-all'
  }
})

const hoveredVariant = ref(null)

const getImage = () => {
  if (hoveredVariant.value) {
    const variant = props.product.otherVariants.find(v => v.slug === hoveredVariant.value)
    if (variant && variant.images && variant.images[0]) {
      return variant.images[0]
    }else{
      return props.product.images[1] ? props.product.images[1] : props.product.images[0]
    }
  }
  return props.product.images[0]
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(price)
}
</script>