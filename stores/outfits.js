export const useOutfits = defineStore("outfits", {
  state: () => ({
    data: [
      {
        id: 1,
        url: ["images/outfits/1.mp4"],
        outfitItems: [
          {
            id: 1,
            variantId: 1,
            name: "Auralite Shirt",
            slug: "auralite-shirt-pigment-burgundy",
            price: 120000,
            originalPrice: 300000,
            category: "shirts",
            color: "Pigment Burgundy",
            image: "/images/products/auralite-shirt-pigment-burgundy-1.webp",
            inStock: true,
            sizes: [
              { id: 1, size: "XS", stock: 0 },
              { id: 2, size: "S", stock: 5 },
              { id: 3, size: "M", stock: 10 },
              { id: 4, size: "L", stock: 15 },
              { id: 5, size: "XL", stock: 0 },
            ],
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
            image: "/images/products/justice-cordura-off-white-1.webp",
            inStock: true,
            sizes: [
              { id: 1, size: "XS", stock: 2 },
              { id: 2, size: "S", stock: 5 },
              { id: 3, size: "M", stock: 10 },
              { id: 4, size: "L", stock: 15 },
              { id: 5, size: "XL", stock: 0 },
            ],
            isActive: true,
          },
        ],
        isShown: true,
      },
      {
        id: 2,
        url: ["images/outfits/outfit-1.webp"],
        outfitItems: [
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
            image: "/images/products/peaceshell-cap-quicksilver-1.webp",
            inStock: false,
            sizes: [
              { id: 1, size: "S", stock: 0 },
              { id: 2, size: "M", stock: 0 },
              { id: 3, size: "L", stock: 0 },
            ],
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
            image: "/images/products/justice-cordura-off-white-1.webp",
            inStock: true,
            sizes: [
              { id: 1, size: "XS", stock: 2 },
              { id: 2, size: "S", stock: 5 },
              { id: 3, size: "M", stock: 10 },
              { id: 4, size: "L", stock: 15 },
              { id: 5, size: "XL", stock: 0 },
            ],
            isActive: true,
          },
        ],
        isShown: true,
      },
      {
        id: 3,
        url: ["images/outfits/outfit-2.webp"],
        outfitItems: [
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
            image: "/images/products/peaceshell-cap-quicksilver-1.webp",
            inStock: true,
            sizes: [
              { id: 1, size: "S", stock: 5 },
              { id: 2, size: "M", stock: 10 },
              { id: 3, size: "L", stock: 15 },
            ],
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
            image: "/images/products/justice-cordura-off-white-1.webp",
            inStock: true,
            sizes: [
              { id: 1, size: "XS", stock: 2 },
              { id: 2, size: "S", stock: 5 },
              { id: 3, size: "M", stock: 10 },
              { id: 4, size: "L", stock: 15 },
              { id: 5, size: "XL", stock: 0 },
            ],
            isActive: true,
          },
        ],
        isShown: true,
      },
      {
        id: 4,
        url: ["images/outfits/2.webp"],
        outfitItems: [
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
            image: "/images/products/peaceshell-cap-quicksilver-1.webp",
            inStock: false,
            sizes: [
              { id: 1, size: "S", stock: 0 },
              { id: 2, size: "M", stock: 0 },
              { id: 3, size: "L", stock: 0 },
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
            image: "/images/products/softcell-hoodie-aged-black-1.webp",
            inStock: true,
            sizes: [
              { id: 1, size: "XS", stock: 2 },
              { id: 2, size: "S", stock: 5 },
              { id: 3, size: "M", stock: 0 },
              { id: 4, size: "L", stock: 0 },
              { id: 5, size: "XL", stock: 0 },
            ],
            isActive: true,
          },
        ],
        isShown: true,
      },
    ],
    selectedOutfitId: null,
    isOutfitDrawerOpen: false,
  }),
  getters: {
    selectedOutfitWithItems(state) {
      const outfit = state.data.find(
        (index) => index.id === state.selectedOutfitId
      );
      if (!outfit) return null;
      return outfit;
    },
  },
  actions: {
    setSelectedOutfitId(id) {
      this.selectedOutfitId = id;
      this.isOutfitDrawerOpen = true;
    },

    closeOutfitDrawer() {
      this.isOutfitDrawerOpen = false;
    },
  },
});
