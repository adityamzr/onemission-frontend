<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <CartSidebar />
    <OutfitDrawer />
  </div>
</template>

<script setup>
// Global meta
useHead({
  htmlAttrs: {
    lang: 'en'
  }
})
</script>