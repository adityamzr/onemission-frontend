<template>
  <div class="py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h1 class="font-fira text-4xl font-bold text-black mb-4">Get in Touch</h1>
        <p class="text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div class="space-y-8">
          <div>
            <h2 class="text-2xl font-bold text-black mb-6">Contact Information</h2>
            <div class="space-y-4">
              <div class="flex items-start space-x-4">
                <div class="w-6 h-6 bg-black rounded-full flex items-center justify-center mt-1">
                  <span class="text-white text-xs">📍</span>
                </div>
                <div>
                  <h3 class="font-medium text-black">Visit Our Store</h3>
                  <p class="text-gray-600">
                    Plaza Indonesia, Level 3<br>
                    Jl. M.H. Thamrin Kav. 28-30<br>
                    Jakarta 10350, Indonesia
                  </p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-6 h-6 bg-black rounded-full flex items-center justify-center mt-1">
                  <span class="text-white text-xs">📞</span>
                </div>
                <div>
                  <h3 class="font-medium text-black">Call Us</h3>
                  <p class="text-gray-600">+62 21 2358 8888</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-6 h-6 bg-black rounded-full flex items-center justify-center mt-1">
                  <span class="text-white text-xs">✉️</span>
                </div>
                <div>
                  <h3 class="font-medium text-black">Email Us</h3>
                  <p class="text-gray-600">hello@luxefashion.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Store Hours -->
          <div>
            <h3 class="font-bold text-black mb-4">Store Hours</h3>
            <div class="space-y-2 text-gray-600">
              <div class="flex justify-between">
                <span>Monday - Thursday</span>
                <span>10:00 AM - 9:00 PM</span>
              </div>
              <div class="flex justify-between">
                <span>Friday - Sunday</span>
                <span>10:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>
          
          <!-- Map Placeholder -->
          <div class="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <p class="text-gray-500">Store Location Map</p>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div class="bg-gray-50 p-8">
          <h2 class="text-2xl font-bold text-black mb-6">Send us a Message</h2>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input 
                  type="text" 
                  v-model="form.firstName"
                  class="input-field"
                  required
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input 
                  type="text" 
                  v-model="form.lastName"
                  class="input-field"
                  required
                />
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                v-model="form.email"
                class="input-field"
                required
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <select v-model="form.subject" class="input-field" required>
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="order">Order Support</option>
                <option value="returns">Returns & Exchanges</option>
                <option value="styling">Personal Styling</option>
                <option value="wholesale">Wholesale Inquiry</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea 
                v-model="form.message"
                rows="5"
                class="input-field resize-none"
                placeholder="Tell us how we can help..."
                required
              ></textarea>
            </div>
            
            <button 
              type="submit"
              :disabled="isSubmitting"
              class="w-full btn-primary"
            >
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>
    </div>
    
    <!-- Success Message -->
    <div v-if="showSuccess" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div class="bg-white max-w-md w-full p-8 text-center">
        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckIcon class="h-8 w-8 text-green-600" />
        </div>
        <h2 class="text-2xl font-bold text-black mb-2">Message Sent!</h2>
        <p class="text-gray-600 mb-6">Thank you for contacting us. We'll get back to you within 24 hours.</p>
        <button 
          @click="showSuccess = false"
          class="btn-primary"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/24/outline'

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // Reset form
  Object.keys(form).forEach(key => {
    form[key] = ''
  })
  
  isSubmitting.value = false
  showSuccess.value = true
}

useHead({
  title: 'Contact Us - LUXE',
  meta: [
    { name: 'description', content: 'Get in touch with LUXE. Visit our store, call us, or send us a message for any inquiries.' }
  ]
})
</script>