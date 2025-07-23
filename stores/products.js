import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [
      {
        id: 1,
        name: "Minimalist Blazer",
        slug: "minimalist-blazer",
        price: 120000,
        originalPrice: 300000,
        discount: 21,
        images: [
          "/images/products/shirt1.avif",
          "/images/products/shirt1-1.avif",
        ],
        category: "blazers",
        description:
          "A timeless blazer with clean lines and modern tailoring. Perfect for both professional and casual settings.",
        sizes: [
          { id: 1, size: "XS", stock: 0 },
          { id: 2, size: "S", stock: 5 },
          { id: 3, size: "M", stock: 10 },
          { id: 4, size: "L", stock: 15 },
          { id: 5, size: "XL", stock: 0 },
        ],
        colors: ["Black", "Navy", "Camel"],
        featured: true,
        inStock: true,
      },
      {
        id: 2,
        name: "Silk Midi Dress",
        slug: "silk-midi-dress",
        price: 90000,
        images: [
          "/images/products/shirt2.avif",
          "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=800",
        ],
        category: "dresses",
        description:
          "Elegant silk midi dress with delicate draping and sophisticated silhouette.",
        sizes: [
          { id: 1, size: "XS", stock: 1 },
          { id: 2, size: "S", stock: 5 },
          { id: 3, size: "M", stock: 0 },
          { id: 4, size: "L", stock: 15 },
          { id: 5, size: "XL", stock: 0 },
        ],
        colors: ["Black", "Emerald", "Champagne"],
        featured: true,
        inStock: true,
      },
      {
        id: 3,
        name: "High-Waist Trousers",
        slug: "high-waist-trousers",
        price: 78000,
        images: [
          "/images/products/shirt3.avif",
          "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800",
        ],
        category: "trousers",
        description:
          "Classic high-waist trousers with tailored fit and elegant drape.",
        sizes: [
          { id: 1, size: "XS", stock: 0 },
          { id: 2, size: "S", stock: 0 },
          { id: 3, size: "M", stock: 0 },
          { id: 4, size: "L", stock: 0 },
          { id: 5, size: "XL", stock: 0 },
        ],
        colors: ["Black", "Navy", "Beige"],
        featured: false,
        inStock: false,
      },
      {
        id: 4,
        name: "Cashmere Sweater",
        slug: "cashmere-sweater",
        price: 168000,
        images: [
          "/images/products/short.avif",
          "https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=800",
        ],
        category: "knitwear",
        description:
          "Luxurious cashmere sweater with ribbed details and relaxed fit.",
        sizes: [
          { id: 1, size: "XS", stock: 0 },
          { id: 2, size: "S", stock: 0 },
          { id: 3, size: "M", stock: 10 },
          { id: 4, size: "L", stock: 15 },
          { id: 5, size: "XL", stock: 10 },
        ],
        colors: ["Cream", "Camel", "Grey"],
        featured: true,
        inStock: true,
      },
      {
        id: 5,
        name: "Statement Coat",
        slug: "statement-coat",
        price: 225000,
        originalPrice: 285000,
        discount: 21,
        images: [
          "/images/products/belt.avif",
          "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=800",
        ],
        category: "outerwear",
        description:
          "Bold statement coat with architectural silhouette and premium construction.",
        sizes: [
          { id: 1, size: "XS", stock: 5 },
          { id: 2, size: "S", stock: 5 },
          { id: 3, size: "M", stock: 10 },
        ],
        colors: ["Black", "Camel"],
        featured: true,
        inStock: true,
      },
      {
        id: 6,
        name: "Pleated Skirt",
        slug: "plated-skirt",
        price: 65000,
        images: [
          "/images/products/hoodie.avif",
          "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800",
        ],
        category: "skirts",
        description:
          "Classic pleated skirt with modern proportions and versatile styling options.",
        sizes: [
          { id: 1, size: "M", stock: 10 },
          { id: 2, size: "L", stock: 0 },
          { id: 3, size: "XL", stock: 20 },
        ],
        colors: ["Black", "Navy", "Burgundy"],
        featured: false,
        inStock: true,
      },
    ],
    categories: [
      { id: "all", name: "All", count: 6, isActive: true },
      { id: "blazers", name: "Blazers", count: 1, isActive: true },
      { id: "dresses", name: "Dresses", count: 1, isActive: true },
      { id: "trousers", name: "Trousers", count: 1, isActive: true },
      { id: "knitwear", name: "Knitwear", count: 1, isActive: true },
      { id: "outerwear", name: "Outerwear", count: 1, isActive: false },
      { id: "skirts", name: "Skirts", count: 1, isActive: false },
    ],
    selectedCategory: "all",
    wishlist: [],
  }),

  getters: {
    filteredProducts: (state) => {
      if (state.selectedCategory === "all") {
        return state.products;
      }
      return state.products.filter(
        (product) => product.category === state.selectedCategory
      );
    },

    latestProducts: (state) => {
      return [...state.products].sort((a, b) => b.id - a.id).slice(0, 5);
    },

    featuredProducts: (state) =>
      state.products.filter((product) => product.featured),

    formatPrice: () => (price) => {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(price);
    },

    getProductById: (state) => (id) => {
      return state.products.find((product) => product.id === parseInt(id));
    },
  },

  actions: {
    setCategory(categoryId) {
      this.selectedCategory = categoryId;
    },

    toggleWishlist(productId) {
      const index = this.wishlist.findIndex((id) => id === productId);
      if (index > -1) {
        this.wishlist.splice(index, 1);
      } else {
        this.wishlist.push(productId);
      }
    },

    isInWishlist(productId) {
      return this.wishlist.includes(productId);
    },
  },
});
