import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      {
        id: 1,
        name: 'Minimalist Blazer',
        price: 1250000,
        originalPrice: 1580000,
        discount: 21,
        images: [
          'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        category: 'blazers',
        description: 'A timeless blazer with clean lines and modern tailoring. Perfect for both professional and casual settings.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Black', 'Navy', 'Camel'],
        featured: true,
        inStock: true
      },
      {
        id: 2,
        name: 'Silk Midi Dress',
        price: 950000,
        images: [
          'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        category: 'dresses',
        description: 'Elegant silk midi dress with delicate draping and sophisticated silhouette.',
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['Black', 'Emerald', 'Champagne'],
        featured: true,
        inStock: true
      },
      {
        id: 3,
        name: 'High-Waist Trousers',
        price: 780000,
        images: [
          'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        category: 'trousers',
        description: 'Classic high-waist trousers with tailored fit and elegant drape.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Black', 'Navy', 'Beige'],
        featured: false,
        inStock: true
      },
      {
        id: 4,
        name: 'Cashmere Sweater',
        price: 1680000,
        images: [
          'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        category: 'knitwear',
        description: 'Luxurious cashmere sweater with ribbed details and relaxed fit.',
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['Cream', 'Camel', 'Grey'],
        featured: true,
        inStock: true
      },
      {
        id: 5,
        name: 'Statement Coat',
        price: 2250000,
        originalPrice: 2850000,
        discount: 21,
        images: [
          'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        category: 'outerwear',
        description: 'Bold statement coat with architectural silhouette and premium construction.',
        sizes: ['S', 'M', 'L'],
        colors: ['Black', 'Camel'],
        featured: true,
        inStock: true
      },
      {
        id: 6,
        name: 'Pleated Skirt',
        price: 650000,
        images: [
          'https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        category: 'skirts',
        description: 'Classic pleated skirt with modern proportions and versatile styling options.',
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['Black', 'Navy', 'Burgundy'],
        featured: false,
        inStock: true
      }
    ],
    categories: [
      { id: 'all', name: 'All Items', count: 6 },
      { id: 'blazers', name: 'Blazers', count: 1 },
      { id: 'dresses', name: 'Dresses', count: 1 },
      { id: 'trousers', name: 'Trousers', count: 1 },
      { id: 'knitwear', name: 'Knitwear', count: 1 },
      { id: 'outerwear', name: 'Outerwear', count: 1 },
      { id: 'skirts', name: 'Skirts', count: 1 }
    ],
    selectedCategory: 'all',
    wishlist: []
  }),

  getters: {
    filteredProducts: (state) => {
      if (state.selectedCategory === 'all') {
        return state.products
      }
      return state.products.filter(product => product.category === state.selectedCategory)
    },

    featuredProducts: (state) => state.products.filter(product => product.featured),

    formatPrice: () => (price) => {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
      }).format(price)
    },

    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === parseInt(id))
    }
  },

  actions: {
    setCategory(categoryId) {
      this.selectedCategory = categoryId
    },

    toggleWishlist(productId) {
      const index = this.wishlist.findIndex(id => id === productId)
      if (index > -1) {
        this.wishlist.splice(index, 1)
      } else {
        this.wishlist.push(productId)
      }
    },

    isInWishlist(productId) {
      return this.wishlist.includes(productId)
    }
  }
})