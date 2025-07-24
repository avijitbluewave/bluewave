<script>
  let formData = {
    name: '',
    email: '',
    phone: '',
    product: '',
    message: ''
  };
  
  let isSubmitting = false;
  let showSuccess = false;
  let focusedField = '';
  
  function handleSubmit(event) {
    event.preventDefault();
    isSubmitting = true;
    
    // Simulate form submission
    setTimeout(() => {
      isSubmitting = false;
      showSuccess = true;
      formData = { name: '', email: '', phone: '', product: '', message: '' };
      
      setTimeout(() => {
        showSuccess = false;
      }, 5000);
    }, 1000);
  }
  
  function handleFocus(field) {
    focusedField = field;
  }
  
  function handleBlur() {
    focusedField = '';
  }
</script>

<section id="contact" class="relative py-24 overflow-hidden">
  <!-- Background -->
  <div class="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white">
    <!-- Animated Background Elements -->
    <div class="absolute top-0 left-0 w-full h-full opacity-20">
      <div class="absolute top-20 -left-20 w-80 h-80 bg-gradient-to-r from-blue-200/40 to-blue-300/40 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-blue-100/30 to-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
  </div>
  
  <div class="relative z-10 container mx-auto px-4">
    <!-- Section Header -->
    <div class="text-center mb-16 space-y-6">
      <!-- Badge -->
      <div class="inline-flex items-center space-x-2">
        <div class="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm text-blue-600 rounded-full font-semibold text-sm border border-blue-200/50 shadow-lg">
          <span class="flex items-center space-x-2">
            <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>📞 Get In Touch</span>
          </span>
        </div>
      </div>
      
      <!-- Main Heading -->
      <div class="space-y-4">
        <h2 class="text-4xl md:text-6xl font-black leading-tight tracking-tight">
          <span class="bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent">
            Ready to Get
          </span>
          <br>
          <span class="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent relative">
            Pure Water?
            <!-- Decorative underline -->
            <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
          </span>
        </h2>
      </div>
      
      <!-- Subtitle -->
      <div class="max-w-3xl mx-auto space-y-4">
        <p class="text-xl text-gray-600 leading-relaxed">
          Get a <span class="font-bold text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text">FREE water quality test</span> at your home and personalized recommendation.
        </p>
        <p class="text-lg text-gray-500 leading-relaxed">
          Our certified technicians will help you choose the right purifier for your water type.
        </p>
      </div>
      
      <!-- Trust Indicators -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 max-w-4xl mx-auto">
        <div class="flex flex-col items-center space-y-2 text-center">
          <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
          </div>
          <span class="font-semibold text-gray-700 text-sm">FREE Home Testing</span>
        </div>
        
        <div class="flex flex-col items-center space-y-2 text-center">
          <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
          </div>
          <span class="font-semibold text-gray-700 text-sm">Certified Technicians</span>
        </div>
        
        <div class="flex flex-col items-center space-y-2 text-center">
          <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
          </div>
          <span class="font-semibold text-gray-700 text-sm">Professional Installation</span>
        </div>
        
        <div class="flex flex-col items-center space-y-2 text-center">
          <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
            </svg>
          </div>
          <span class="font-semibold text-gray-700 text-sm">24/7 Support</span>
        </div>
      </div>
    </div>
    
    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-12">
      
      <!-- Contact Form Section -->
      <div class="xl:col-span-2">
        <div class="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
          <!-- Decorative Background -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30"></div>
          <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
          <div class="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-100/30 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
          
          <div class="relative z-10 p-8 md:p-12">
            <!-- Form Header -->
            <div class="text-center mb-10">
              <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 rounded-3xl shadow-2xl shadow-blue-500/30 mb-6 transform hover:scale-105 transition-transform duration-300">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </div>
              
              <h3 class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent mb-4">
                Get Your FREE Water Test
              </h3>
              
              <p class="text-lg text-gray-600 mb-6 max-w-md mx-auto">
                Professional water quality testing at your doorstep with personalized purifier recommendations
              </p>
              
              <!-- Trust Badges -->
              <div class="flex items-center justify-center space-x-6 text-sm">
                <div class="flex items-center space-x-2 text-green-600">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="font-medium">100% Free</span>
                </div>
                <div class="flex items-center space-x-2 text-blue-600">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span class="font-medium">Expert Analysis</span>
                </div>
                <div class="flex items-center space-x-2 text-purple-600">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                  </svg>
                  <span class="font-medium">Same Day Service</span>
                </div>
              </div>
            </div>
            
            <!-- Success Message -->
            {#if showSuccess}
              <div class="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-green-800 text-lg">Request Submitted Successfully!</h4>
                    <p class="text-green-700">Our team will contact you within 2 hours to schedule your free water test.</p>
                  </div>
                </div>
              </div>
            {/if}
            
            <!-- Form -->
            <form on:submit={handleSubmit} class="space-y-6">
              <!-- Name & Email Row -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="relative group">
                  <label for="name" class="block text-sm font-semibold text-gray-700 mb-3">Full Name *</label>
                  <div class="relative">
                    <input 
                      type="text" 
                      id="name"
                      bind:value={formData.name}
                      on:focus={() => handleFocus('name')}
                      on:blur={handleBlur}
                      placeholder="John Doe" 
                      class="w-full px-5 py-4 bg-white/70 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-gray-800 placeholder-gray-400 shadow-sm"
                      class:border-blue-500={focusedField === 'name'}
                      required 
                    />
                    <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 transition-opacity duration-300"
                         class:opacity-100={focusedField === 'name'}></div>
                  </div>
                </div>
                
                <div class="relative group">
                  <label for="email" class="block text-sm font-semibold text-gray-700 mb-3">Email Address *</label>
                  <div class="relative">
                    <input 
                      type="email" 
                      id="email"
                      bind:value={formData.email}
                      on:focus={() => handleFocus('email')}
                      on:blur={handleBlur}
                      placeholder="john@example.com" 
                      class="w-full px-5 py-4 bg-white/70 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-gray-800 placeholder-gray-400 shadow-sm"
                      class:border-blue-500={focusedField === 'email'}
                      required 
                    />
                    <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 transition-opacity duration-300"
                         class:opacity-100={focusedField === 'email'}></div>
                  </div>
                </div>
              </div>
              
              <!-- Phone & Product Row -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="relative group">
                  <label for="phone" class="block text-sm font-semibold text-gray-700 mb-3">Phone Number *</label>
                  <div class="relative">
                    <input 
                      type="tel" 
                      id="phone"
                      bind:value={formData.phone}
                      on:focus={() => handleFocus('phone')}
                      on:blur={handleBlur}
                      placeholder="+91 98765 43210" 
                      class="w-full px-5 py-4 bg-white/70 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-gray-800 placeholder-gray-400 shadow-sm"
                      class:border-blue-500={focusedField === 'phone'}
                      required 
                    />
                    <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 transition-opacity duration-300"
                         class:opacity-100={focusedField === 'phone'}></div>
                  </div>
                </div>
                
                <div class="relative group">
                  <label for="product" class="block text-sm font-semibold text-gray-700 mb-3">Interested Product</label>
                  <div class="relative">
                    <select 
                      id="product"
                      bind:value={formData.product}
                      on:focus={() => handleFocus('product')}
                      on:blur={handleBlur}
                      class="w-full px-5 py-4 bg-white/70 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-gray-800 appearance-none cursor-pointer shadow-sm"
                      class:border-blue-500={focusedField === 'product'}
                    >
                      <option value="">Choose a product...</option>
                      <option value="Blue Wave Pro RO">Blue Wave Pro RO - ₹15,999</option>
                      <option value="Blue Wave Ultra UV">Blue Wave Ultra UV - ₹9,999</option>
                      <option value="Blue Wave Alkaline Plus">Blue Wave Alkaline Plus - ₹19,999</option>
                      <option value="Blue Wave Compact">Blue Wave Compact - ₹7,499</option>
                      <option value="Blue Wave Commercial">Blue Wave Commercial - ₹29,999</option>
                    </select>
                    <div class="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </div>
                    <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 transition-opacity duration-300"
                         class:opacity-100={focusedField === 'product'}></div>
                  </div>
                </div>
              </div>
              
              <!-- Message Field -->
              <div class="relative group">
                <label for="message" class="block text-sm font-semibold text-gray-700 mb-3">Additional Requirements</label>
                <div class="relative">
                  <textarea 
                    id="message"
                    bind:value={formData.message}
                    on:focus={() => handleFocus('message')}
                    on:blur={handleBlur}
                    rows="4"
                    class="w-full px-5 py-4 bg-white/70 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-gray-800 placeholder-gray-400 resize-none shadow-sm"
                    class:border-blue-500={focusedField === 'message'}
                    placeholder="Tell us about your water issues, family size, or any specific requirements..."
                  ></textarea>
                  <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 transition-opacity duration-300"
                       class:opacity-100={focusedField === 'message'}></div>
                </div>
              </div>
              
              <!-- Submit Button -->
              <div class="pt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  class="group relative w-full px-8 py-5 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white rounded-xl font-bold text-lg shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                >
                  <span class="relative z-10 flex items-center justify-center">
                    {#if isSubmitting}
                      <svg class="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing Your Request...
                    {:else}
                      <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v10m6-10v10m-6-4h6"/>
                      </svg>
                      Schedule FREE Water Test
                      <svg class="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" 
                           fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                      </svg>
                    {/if}
                  </span>
                  <div class="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
              
              <!-- Form Footer -->
              <div class="text-center pt-4">
                <p class="text-sm text-gray-500">
                  By submitting this form, you agree to our 
                  <span class="text-blue-600 font-medium">Terms of Service</span> and 
                  <span class="text-blue-600 font-medium">Privacy Policy</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <!-- Contact Information -->
      <div class="space-y-8">
        <!-- Contact Cards -->
        
        <!-- Call Us Card -->
        <div class="group relative p-8 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-white/20">
          <!-- Background Gradient -->
          <div class="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-0 group-hover:opacity-50 rounded-3xl transition-opacity duration-500"></div>
          
          <!-- Content -->
          <div class="relative z-10 flex items-start space-x-6">
            <!-- Icon -->
            <div class="flex-shrink-0">
              <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
            </div>
            
            <!-- Text Content -->
            <div class="flex-1 space-y-4">
              <h3 class="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                Call Us Now
              </h3>
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <a href="tel:+919749553406" class="text-lg font-semibold text-gray-700 hover:text-green-600 transition-colors duration-300 group-hover:text-green-700">
                    +91 97495 53406
                  </a>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <a href="tel:+919933377235" class="text-lg font-semibold text-gray-700 hover:text-green-600 transition-colors duration-300 group-hover:text-green-700">
                    +91 99333 77235
                  </a>
                </div>
              </div>
              <p class="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                Available Monday - Saturday, 9 AM - 6 PM
              </p>
            </div>
          </div>
          
          <!-- Hover Glow Effect -->
          <div class="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10"></div>
        </div>
        
        <!-- Visit Our Office Card -->
        <div class="group relative p-8 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-white/20">
          <!-- Background Gradient -->
          <div class="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 opacity-0 group-hover:opacity-50 rounded-3xl transition-opacity duration-500"></div>
          
          <!-- Content -->
          <div class="relative z-10 flex items-start space-x-6">
            <!-- Icon -->
            <div class="flex-shrink-0">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
            </div>
            
            <!-- Text Content -->
            <div class="flex-1 space-y-4">
              <h3 class="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                Visit Our Office
              </h3>
              <div class="space-y-2">
                <p class="text-lg font-semibold text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                  Ano 402, Astra Tower
                </p>
                <p class="text-lg font-semibold text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                  New Town, Kolkata 700135
                </p>
              </div>
              <div class="pt-2">
                <a href="https://maps.google.com/?q=Ano+402+Astra+Tower+New+Town+Kolkata+700135" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300">
                  <span>Get Directions</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <!-- Hover Glow Effect -->
          <div class="absolute -inset-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10"></div>
        </div>
        
        <!-- Support & Service Card -->
        <div class="group relative p-8 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-white/20">
          <!-- Background Gradient -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-50 rounded-3xl transition-opacity duration-500"></div>
          
          <!-- Content -->
          <div class="relative z-10 flex items-start space-x-6">
            <!-- Icon -->
            <div class="flex-shrink-0">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                </svg>
              </div>
            </div>
            
            <!-- Text Content -->
            <div class="flex-1 space-y-4">
              <h3 class="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                Support & Service
              </h3>
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <span class="text-lg font-semibold text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                    24/7 Customer Support
                  </span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <span class="text-lg font-semibold text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                    Free Installation & Service
                  </span>
                </div>
              </div>
              <p class="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                Professional technicians at your service
              </p>
            </div>
          </div>
          
          <!-- Hover Glow Effect -->
          <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10"></div>
        </div>
        
        <!-- WhatsApp Contact Button -->
        <div class="relative group">
          <a 
            href="https://wa.me/919749553406?text=Hi! I'm interested in your water purifiers. Can you help me choose the right one?"
            target="_blank"
            rel="noopener noreferrer"
            class="block relative p-8 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl shadow-2xl shadow-green-500/25 text-white overflow-hidden hover:shadow-green-500/40 transition-all duration-300 hover:scale-[1.02]"
          >
            <!-- Background Pattern -->
            <div class="absolute inset-0 opacity-10">
              <div class="absolute top-0 left-0 w-full h-full">
                <div class="w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
              </div>
            </div>
            
            <div class="relative z-10 text-center space-y-6">
              <div class="flex items-center justify-center space-x-3">
                <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold">Chat on WhatsApp</h3>
              </div>
              
              <div class="space-y-3">
                <p class="text-green-100 font-semibold text-lg">Get Instant Support</p>
                <p class="text-green-100 text-sm">
                  Chat with our experts for quick answers, product recommendations, and instant quotes
                </p>
              </div>
              
              <div class="flex items-center justify-center space-x-2 pt-2">
                <span class="text-sm text-green-100">Click to start chat</span>
                <svg class="w-4 h-4 text-green-100 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </div>
            </div>
            
            <!-- Hover Glow Effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
          </a>
        </div>


      </div>
    </div>
  </div>
</section>