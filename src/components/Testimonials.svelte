<section class="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
  <!-- Background Pattern -->
  <div class="absolute inset-0 opacity-5">
    <svg class="w-full h-full" viewBox="0 0 100 100">
      <defs>
        <pattern id="testimonial-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="currentColor" class="text-blue-600"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#testimonial-grid)"/>
    </svg>
  </div>

  <div class="container mx-auto px-4 relative">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6">
        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
        </svg>
      </div>
      <h2 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-cyan-900 bg-clip-text text-transparent mb-4">
        What Our Customers Say
      </h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Join thousands of satisfied families enjoying pure, clean water every day with our trusted purification systems
      </p>
    </div>
    
    <!-- Testimonials Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      <!-- Testimonial 1 -->
      <div class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
        <!-- Quote Icon -->
        <div class="absolute -top-4 left-8">
          <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
            </svg>
          </div>
        </div>
        
        <!-- Rating Stars -->
        <div class="flex items-center mb-4">
          {#each Array(5) as _, i}
            <svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          {/each}
        </div>
        
        <!-- Testimonial Text -->
        <p class="text-gray-700 mb-6 leading-relaxed italic">
          "After installing Blue Wave RO, my family stopped getting stomach infections. The water tastes pure 
          and my kids love drinking it. Best investment for our health!"
        </p>
        
        <!-- Customer Info -->
        <div class="flex items-center">
          <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
            S
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">Sarah Johnson</h4>
            <p class="text-sm text-gray-500">Mumbai, Maharashtra</p>
          </div>
        </div>
        
        <!-- Hover Effect -->
        <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      <!-- Testimonial 2 -->
      <div class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
        <!-- Quote Icon -->
        <div class="absolute -top-4 left-8">
          <div class="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
            </svg>
          </div>
        </div>
        
        <!-- Rating Stars -->
        <div class="flex items-center mb-4">
          {#each Array(5) as _, i}
            <svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          {/each}
        </div>
        
        <!-- Testimonial Text -->
        <p class="text-gray-700 mb-6 leading-relaxed italic">
          "Our bore water had high TDS and bad taste. Blue Wave's RO+UV system completely transformed it. 
          Even my tea tastes better now! Highly recommended."
        </p>
        
        <!-- Customer Info -->
        <div class="flex items-center">
          <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
            M
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">Mike Chen</h4>
            <p class="text-sm text-gray-500">Bangalore, Karnataka</p>
          </div>
        </div>
        
        <!-- Hover Effect -->
        <div class="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      <!-- Testimonial 3 -->
      <div class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
        <!-- Quote Icon -->
        <div class="absolute -top-4 left-8">
          <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
            </svg>
          </div>
        </div>
        
        <!-- Rating Stars -->
        <div class="flex items-center mb-4">
          {#each Array(5) as _, i}
            <svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          {/each}
        </div>
        
        <!-- Testimonial Text -->
        <p class="text-gray-700 mb-6 leading-relaxed italic">
          "Living in Mumbai, our water had chlorine smell and bacteria. Blue Wave's UV+UF system 
          solved everything. 3 years, zero problems. Worth every rupee!"
        </p>
        
        <!-- Customer Info -->
        <div class="flex items-center">
          <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
            R
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">Rachel Davis</h4>
            <p class="text-sm text-gray-500">Delhi, NCR</p>
          </div>
        </div>
        
        <!-- Hover Effect -->
        <div class="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
    
    <!-- Statistics Section -->
    <div class="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Stat 1 -->
        <div class="text-center group">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <div class="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">98%</div>
          <div class="text-lg font-semibold text-gray-900 mb-1">Customer Satisfaction</div>
          <div class="text-sm text-gray-500">Based on 5000+ reviews</div>
        </div>
        
        <!-- Stat 2 -->
        <div class="text-center group">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
          </div>
          <div class="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">12,000+</div>
          <div class="text-lg font-semibold text-gray-900 mb-1">Happy Families</div>
          <div class="text-sm text-gray-500">Across the country</div>
        </div>
        
        <!-- Stat 3 -->
        <div class="text-center group">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
            </svg>
          </div>
          <div class="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-2">4.9</div>
          <div class="text-lg font-semibold text-gray-900 mb-1">Average Rating</div>
          <div class="text-sm text-gray-500">Out of 5 stars</div>
        </div>
      </div>
    </div>
  </div>
</section>