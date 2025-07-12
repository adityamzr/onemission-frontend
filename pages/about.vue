<template>
  <div class="py-8">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <h1 class="font-fira text-5xl font-bold text-black mb-6">About LUXE</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          We believe that fashion should be an expression of individual style, 
          combining timeless elegance with contemporary design.
        </p>
      </div>
      
      <!-- Story Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 class="font-fira text-3xl font-bold text-black mb-6">Our Story</h2>
          <div class="space-y-4 text-gray-600">
            <p>
              Founded with a vision to redefine modern luxury, LUXE curates premium fashion 
              pieces that transcend seasonal trends. Our journey began with a simple belief: 
              that exceptional quality and timeless design should be accessible to those who 
              appreciate true craftsmanship.
            </p>
            <p>
              Each piece in our collection is carefully selected for its superior materials, 
              impeccable construction, and ability to elevate any wardrobe. We work directly 
              with skilled artisans and renowned designers to bring you fashion that speaks 
              to both style and substance.
            </p>
            <p>
              Today, LUXE continues to evolve while staying true to our founding principles: 
              quality, authenticity, and the pursuit of timeless elegance.
            </p>
          </div>
        </div>
        <div class="aspect-[4/5] bg-gray-100">
          <img 
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="LUXE Fashion"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <!-- Values Section -->
      <div class="mb-20">
        <h2 class="font-fira text-3xl font-bold text-black text-center mb-12">Our Values</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white font-bold text-xl">Q</span>
            </div>
            <h3 class="font-bold text-black mb-3">Quality First</h3>
            <p class="text-gray-600">
              We never compromise on quality. Every piece is crafted from premium materials 
              with meticulous attention to detail.
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white font-bold text-xl">S</span>
            </div>
            <h3 class="font-bold text-black mb-3">Sustainable</h3>
            <p class="text-gray-600">
              We are committed to ethical fashion practices and sustainable production 
              methods that respect both people and planet.
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white font-bold text-xl">T</span>
            </div>
            <h3 class="font-bold text-black mb-3">Timeless</h3>
            <p class="text-gray-600">
              Our designs transcend fleeting trends, offering pieces that remain 
              relevant and stylish season after season.
            </p>
          </div>
        </div>
      </div>
      
      <!-- Team Section -->
      <div class="text-center">
        <h2 class="font-fira text-3xl font-bold text-black mb-6">Meet Our Team</h2>
        <p class="text-gray-600 mb-12 max-w-2xl mx-auto">
          Behind LUXE is a passionate team of fashion enthusiasts, designers, and curators 
          dedicated to bringing you the finest in contemporary luxury.
        </p>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="aspect-square bg-gray-100 mb-4">
              <img 
                src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Sarah Chen"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="font-bold text-black">Sarah Chen</h3>
            <p class="text-gray-600">Creative Director</p>
          </div>
          
          <div class="text-center">
            <div class="aspect-square bg-gray-100 mb-4">
              <img 
                src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Marcus Johnson"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="font-bold text-black">Marcus Johnson</h3>
            <p class="text-gray-600">Head of Operations</p>
          </div>
          
          <div class="text-center">
            <div class="aspect-square bg-gray-100 mb-4">
              <img 
                src="https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Elena Rodriguez"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="font-bold text-black">Elena Rodriguez</h3>
            <p class="text-gray-600">Lead Stylist</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'About Us - LUXE',
  meta: [
    { name: 'description', content: 'Learn about LUXE\'s story, values, and our commitment to premium fashion and timeless elegance.' }
  ]
})
</script>