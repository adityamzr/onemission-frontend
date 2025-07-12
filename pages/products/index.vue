<template>
  <div class="py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="font-fira text-4xl font-bold text-black mb-4">Shop All</h1>
        <p class="text-gray-600 max-w-2xl">
          Discover our complete collection of premium fashion pieces, carefully curated for the modern individual.
        </p>
      </div>
      
      <!-- Filters -->
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
        <div class="flex flex-wrap gap-2">
          <button 
            v-for="category in productsStore.categories" 
            :key="category.id"
            @click="productsStore.setCategory(category.id)"
            class="px-4 py-2 text-sm font-medium transition-colors duration-200"
            :class="productsStore.selectedCategory === category.id 
              ? 'bg-black text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
          >
            {{ category.name }} ({{ category.count }})
          </button>
        </div>
        
        <div class="flex items-center space-x-4">
          <select class="input-field text-sm">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
          </select>
        </div>
      </div>
      
      <!-- Products Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <ProductCard 
          v-for="product in productsStore.filteredProducts" 
          :key="product.id" 
          :product="product" 
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

// Meta tags
useHead({
  title: 'Shop All Products - LUXE',
  meta: [
    { name: 'description', content: 'Browse our complete collection of premium fashion including blazers, dresses, trousers, and more.' }
  ]
})
</script>