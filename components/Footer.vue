<template>
  <footer class="bg-gray-50 border-t border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="col-span-1 md:col-span-2">
          <NuxtLink to="/">
            <img src="/public/images/logo/onemission-black-logo.png" class="h-10 md:h-12 mb-4" alt="">
          </NuxtLink>
          <p class="text-gray-600 mb-6 max-w-md">
            Discover timeless elegance with our curated collection of premium fashion. 
            Each piece is carefully selected to embody sophistication and modern style.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-gray-600 transition-colors duration-200">
              <span class="sr-only">Instagram</span>
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297L3.323 16.988C2.426 16.09 1.936 14.939 1.936 13.642s.49-2.448 1.387-3.323l1.803-1.803c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297l1.803 1.803c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323l-1.803 1.803c-.875.807-2.026 1.297-3.323 1.297z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-600 transition-colors duration-200">
              <span class="sr-only">Twitter</span>
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-600 transition-colors duration-200">
              <span class="sr-only">Facebook</span>
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-medium text-black mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/products/shop-all" class="text-gray-600 hover:text-black transition-colors duration-200">Shop All</NuxtLink></li>
            <li><NuxtLink to="" class="text-gray-600 hover:text-black transition-colors duration-200">About Us</NuxtLink></li>
            <li><NuxtLink to="" class="text-gray-600 hover:text-black transition-colors duration-200">Contact</NuxtLink></li>
            <li><a href="#" class="text-gray-600 hover:text-black transition-colors duration-200">Size Guide</a></li>
          </ul>
        </div>

        <!-- Customer Service -->
        <div>
          <h4 class="font-medium text-black mb-4">Customer Service</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-600 hover:text-black transition-colors duration-200">Shipping Info</a></li>
            <li><a href="#" class="text-gray-600 hover:text-black transition-colors duration-200">Returns</a></li>
            <li><a href="#" class="text-gray-600 hover:text-black transition-colors duration-200">Care Guide</a></li>
            <li><a href="#" class="text-gray-600 hover:text-black transition-colors duration-200">FAQ</a></li>
          </ul>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-gray-200">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-600 text-sm">
            © 2025 onemission. All rights reserved.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="text-gray-600 hover:text-black text-sm transition-colors duration-200">Privacy Policy</a>
            <a href="#" class="text-gray-600 hover:text-black text-sm transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>