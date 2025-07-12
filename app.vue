<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <CartSidebar />
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