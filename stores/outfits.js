export const useOutfits = defineStore("outfits", {
  state: () => ({
    data: [
      {
        id: 1,
        url: "images/silhouette/1.jpg",
        outfitItems: [1, 2],
      },
      {
        id: 2,
        url: "images/silhouette/2.jpg",
        outfitItems: [3, 4],
      },
      {
        id: 3,
        url: "images/silhouette/3.jpg",
        outfitItems: [5, 6],
      },
      {
        id: 4,
        url: "images/silhouette/4.jpg",
        outfitItems: [1, 2, 3, 4, 5, 6],
      },
    ],
    selectedOutfitId: null,
    isOutfitDrawerOpen: false,
  }),
  getters: {
    selectedOutfitWithItems(state) {
      const productsStore = useProductsStore();
      const outfit = state.data.find(
        (index) => index.id === state.selectedOutfitId
      );
      if (!outfit) return null;

      const data = {
        ...outfit,
        outfitItems: outfit.outfitItems.map((id) =>
          productsStore.products.find((p) => p.id === id)
        ),
      };

      return data;
    },
  },
  actions: {
    setSelectedOutfitId(id) {
      this.selectedOutfitId = id;
      this.isOutfitDrawerOpen = true;
      console.log(id);
    },

    closeOutfitDrawer() {
      this.isOutfitDrawerOpen = false;
    },
  },
});
