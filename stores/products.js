import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [
      {
        id: 1,
        variantId: 1,
        name: "Auralite Shirt",
        slug: "auralite-shirt-pigment-burgundy",
        price: 120000,
        originalPrice: 300000,
        category: "shirts",
        color: "Pigment Burgundy",
        colorCode: "#800020",
        images: [
          "/images/products/auralite-shirt-pigment-burgundy-1.webp",
          "/images/products/auralite-shirt-pigment-burgundy-2.webp",
        ],
        otherVariants: [],
        isActive: true,
      },
      {
        id: 2,
        variantId: 1,
        name: "Justice Cordura",
        slug: "justice-cordura-off-white",
        price: 120000,
        originalPrice: 300000,
        category: "vests",
        color: "Off White",
        colorCode: "#f8f8f8",
        images: [
          "/images/products/justice-cordura-off-white-1.webp",
          "/images/products/justice-cordura-off-white-2.webp",
        ],
        otherVariants: [],
        isActive: true,
      },
      {
        id: 3,
        variantId: 1,
        name: "Merino Socks",
        slug: "merino-socks-black",
        price: 120000,
        originalPrice: 300000,
        category: "socks",
        color: "Black",
        colorCode: "#000000",
        images: [
          "/images/products/merino-socks-black-1.webp",
          "/images/products/merino-socks-black-2.webp",
        ],
        otherVariants: [
          {
            colorCode: "#f8f8f8",
            slug: "merino-socks-off-white",
            images: [
              "/images/products/merino-socks-off-white-1.webp",
              "/images/products/merino-socks-off-white-2.webp",
            ],
          },
        ],
        isActive: true,
      },
      {
        id: 4,
        variantId: 2,
        name: "Merino Socks",
        slug: "merino-socks-off-white",
        price: 120000,
        originalPrice: 300000,
        category: "socks",
        color: "Off White",
        colorCode: "#f8f8f8",
        images: [
          "/images/products/merino-socks-off-white-1.webp",
          "/images/products/merino-socks-off-white-2.webp",
        ],
        otherVariants: [
          {
            colorCode: "#000000",
            slug: "merino-socks-black",
            images: [
              "/images/products/merino-socks-black-1.webp",
              "/images/products/merino-socks-black-2.webp",
            ],
          },
        ],
        isActive: true,
      },
      {
        id: 5,
        variantId: 1,
        name: "Peaceshell Cap",
        slug: "peaceshell-cap-quicksilver",
        price: 120000,
        originalPrice: 300000,
        category: "caps",
        color: "Quicksilver",
        colorCode: "#c0c0c0",
        images: [
          "/images/products/peaceshell-cap-quicksilver-1.webp",
          "/images/products/peaceshell-cap-quicksilver-2.webp",
        ],
        otherVariants: [],
        isActive: true,
      },
      {
        id: 6,
        variantId: 1,
        name: "Repossessed Auralite",
        slug: "repossessed-auralite-dusk",
        price: 120000,
        originalPrice: 300000,
        category: "shirts",
        color: "Dusk",
        colorCode: "#4b4e6d",
        images: [
          "/images/products/repossessed-auralite-dusk-1.webp",
          "/images/products/repossessed-auralite-dusk-2.webp",
        ],
        otherVariants: [
          {
            colorCode: "#808000",
            slug: "repossessed-auralite-olive",
            images: [
              "/images/products/repossessed-auralite-olive-1.webp",
              "/images/products/repossessed-auralite-olive-2.webp",
            ],
          },
        ],
        isActive: true,
      },
      {
        id: 7,
        variantId: 2,
        name: "Repossessed Auralite",
        slug: "repossessed-auralite-olive",
        price: 120000,
        originalPrice: 300000,
        category: "shirts",
        color: "Olive",
        colorCode: "#808000",
        images: [
          "/images/products/repossessed-auralite-olive-1.webp",
          "/images/products/repossessed-auralite-olive-2.webp",
        ],
        otherVariants: [
          {
            colorCode: "#4b4e6d",
            slug: "repossessd-auralite-dusk",
            images: [
              "/images/products/repossessed-auralite-dusk-1.webp",
              "/images/products/repossessed-auralite-dusk-2.webp",
            ],
          },
        ],
        isActive: true,
      },
      {
        id: 8,
        variantId: 1,
        name: "Softcell Hoodie",
        slug: "softcell-hoodie-aged-black",
        price: 120000,
        originalPrice: 300000,
        category: "hoodies",
        color: "Aged Black",
        colorCode: "#1c1c1c",
        images: [
          "/images/products/softcell-hoodie-aged-black-1.webp",
          "/images/products/softcell-hoodie-aged-black-2.webp",
        ],
        otherVariants: [],
        isActive: true,
      },
      {
        id: 9,
        variantId: 1,
        name: "Space O Singlet",
        slug: "space_o-singlet-deep-mahogany",
        price: 120000,
        originalPrice: 300000,
        category: "singlets",
        color: "Deep Mahogany",
        colorCode: "#4a1c1a",
        images: [
          "/images/products/space_o-singlet-deep-mahogany-1.webp",
          "/images/products/space_o-singlet-deep-mahogany-2.webp",
        ],
        otherVariants: [
          {
            colorCode: "#4d473c",
            slug: "space_o-singlet-falcon",
            images: [
              "/images/products/space_o-singlet-falcon-1.webp",
              "/images/products/space_o-singlet-falcon-2.webp",
            ],
          },
        ],
        isActive: true,
      },
      {
        id: 10,
        variantId: 2,
        name: "Space O Singlet",
        slug: "space_o-singlet-falcon",
        price: 120000,
        originalPrice: 300000,
        category: "singlets",
        color: "Falcon",
        colorCode: "#4d473c",
        images: [
          "/images/products/space_o-singlet-falcon-1.webp",
          "/images/products/space_o-singlet-falcon-2.webp",
        ],
        otherVariants: [
          {
            colorCode: "#4a1c1a",
            slug: "space_o-singlet-deep-mahogany",
            images: [
              "/images/products/space_o-singlet-deep-mahogany-1.webp",
              "/images/products/space_o-singlet-deep-mahogany-2.webp",
            ],
          },
        ],
        isActive: true,
      },
      {
        id: 11,
        variantId: 1,
        name: "Techsilk Short",
        slug: "techsilk-short-black-silk",
        price: 120000,
        originalPrice: 300000,
        category: "shorts",
        color: "Black Silk",
        colorCode: "#111111",
        images: [
          "/images/products/techsilk-short-black-silk-1.webp",
          "/images/products/techsilk-short-black-silk-2.webp",
        ],
        otherVariants: [
          {
            colorCode: "#4d473c",
            slug: "techsilk-short-falcon",
            images: [
              "/images/products/techsilk-short-falcon-1.webp",
              "/images/products/techsilk-short-falcon-2.webp",
            ],
          },
        ],
        isActive: true,
      },
      {
        id: 12,
        variantId: 2,
        name: "Techsilk Short",
        slug: "techsilk-short-falcon",
        price: 120000,
        originalPrice: 300000,
        category: "shorts",
        color: "Falcon",
        colorCode: "#4d473c",
        images: [
          "/images/products/techsilk-short-falcon-1.webp",
          "/images/products/techsilk-short-falcon-2.webp",
        ],
        otherVariants: [
          {
            colorCode: "#111111",
            slug: "techsik-short-black-silk",
            images: [
              "/images/products/techsilk-short-black-silk-1.webp",
              "/images/products/techsilk-short-black-silk-2.webp",
            ],
          },
        ],
        isActive: true,
      },
    ],
    categories: [
      { id: "all", name: "All", count: 12, isActive: true },
      { id: "shirts", name: "Shirts", count: 4, isActive: true },
      { id: "socks", name: "Socks", count: 2, isActive: true },
      { id: "caps", name: "Caps", count: 1, isActive: true },
      { id: "hoodies", name: "Hoodies", count: 1, isActive: true },
      { id: "singlets", name: "Singlets", count: 2, isActive: true },
      { id: "shorts", name: "Shorts", count: 2, isActive: true },
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
      return [...state.products].sort((a, b) => b.id - a.id).slice(0, 6);
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
