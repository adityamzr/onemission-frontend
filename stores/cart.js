import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    isOpen: false,
    shippingInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      postalCode: '',
      country: 'Indonesia'
    },
    orderSummary: {
      subtotal: 0,
      shipping: 50000,
      total: 0
    }
  }),

  getters: {
    itemCount: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
    
    cartTotal: (state) => {
      const subtotal = state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
      return subtotal
    },

    formattedTotal: (state) => {
      const subtotal = state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
      }).format(subtotal)
    },

    orderTotal: (state) => {
      const subtotal = state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
      return subtotal + state.orderSummary.shipping
    }
  },

  actions: {
    addToCart(product) {
      const existingItem = this.items.find(item => 
        item.id === product.id && 
        item.selectedSize === product.selectedSize
      )

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        this.items.push({
          ...product,
          quantity: 1,
          addedAt: new Date()
        })
      }
    },

    removeFromCart(productId, size) {
      this.items = this.items.filter(item => 
        !(item.id === productId && item.selectedSize === size)
      )
    },

    updateQuantity(productId, size, quantity) {
      const item = this.items.find(item => 
        item.id === productId && item.selectedSize === size
      )
      
      if (item) {
        if (quantity <= 0) {
          this.removeFromCart(productId, size)
        } else {
          item.quantity = quantity
        }
      }
    },

    clearCart() {
      this.items = []
    },

    toggleCart() {
      this.isOpen = !this.isOpen
    },

    closeCart() {
      this.isOpen = false
    },

    updateShippingInfo(info) {
      this.shippingInfo = { ...this.shippingInfo, ...info }
    },

    calculateOrderSummary() {
      this.orderSummary.subtotal = this.cartTotal
      this.orderSummary.total = this.orderTotal
    }
  },

  persist: true
})