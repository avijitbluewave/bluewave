<section id="about" class="relative py-32 overflow-hidden">
  <!-- Background -->
  <div class="absolute inset-0 bg-gradient-to-br from-white via-blue-50/20 to-gray-50">
    <!-- Animated Background Elements -->
    <div class="absolute top-0 left-0 w-full h-full opacity-30">
      <div class="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/40 to-blue-300/40 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-100/30 to-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
  </div>
  
  <div class="relative z-10 container mx-auto px-4">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      <!-- Content Side -->
      <div class="space-y-8">
        <!-- Section Badge -->
        <div class="inline-block">
          <div class="px-6 py-3 bg-blue-100/80 backdrop-blur-sm text-blue-600 rounded-full font-semibold text-sm border border-blue-200/50">
            🏢 Our Story
          </div>
        </div>
        
        <!-- Main Heading -->
        <div class="space-y-4">
          <h2 class="text-5xl md:text-6xl font-black leading-tight">
            <span class="bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
              About
            </span>
            <br>
            <span class="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Blue Wave
            </span>
          </h2>
        </div>
        
        <!-- Description -->
        <div class="space-y-6 text-lg leading-relaxed">
          <p class="text-gray-700">
            For over <span class="font-bold text-cyan-600">15 years</span>, Blue Wave has been India's leading water purification company, 
            protecting over <span class="font-bold text-cyan-600">50,000+ families</span> from waterborne diseases with our advanced RO + UV + UF technology.
          </p>
          <p class="text-gray-600">
            Founded by water treatment experts, we understand India's unique water challenges. From high TDS levels in North India 
            to bacterial contamination in coastal areas - our purifiers are designed specifically for Indian water conditions.
          </p>
          <div class="bg-cyan-50 border-l-4 border-cyan-500 p-4 rounded-r-lg">
            <p class="text-cyan-800 font-semibold">
              "Every drop matters. Every life matters. That's why we don't just purify water - we purify lives."
            </p>
            <p class="text-cyan-600 text-sm mt-2">- Founder, Blue Wave Water Systems</p>
          </div>
        </div>
        
        <!-- Stats Grid -->
        <div class="grid grid-cols-2 gap-6 pt-8">
          {#each [
            { value: '15+', label: 'Years Experience', color: 'from-blue-500 to-blue-600', icon: '🏆' },
            { value: '10K+', label: 'Happy Customers', color: 'from-green-500 to-green-600', icon: '👥' },
            { value: '50+', label: 'Service Centers', color: 'from-purple-500 to-purple-600', icon: '🏢' },
            { value: '24/7', label: 'Support', color: 'from-orange-500 to-orange-600', icon: '📞' }
          ] as stat}
            <div class="group relative p-6 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20">
              <!-- Background Gradient -->
              <div class="absolute inset-0 bg-gradient-to-br {stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
              
              <div class="relative z-10 text-center space-y-3">
                <div class="text-2xl">{stat.icon}</div>
                <div class="text-3xl font-black bg-gradient-to-r {stat.color} bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div class="text-sm font-medium text-gray-600">{stat.label}</div>
              </div>
              
              <!-- Hover Glow -->
              <div class="absolute -inset-1 bg-gradient-to-r {stat.color} rounded-2xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10"></div>
            </div>
          {/each}
        </div>
      </div>
      
      <!-- Features Side -->
      <div class="space-y-6">
        {#each [
          {
            title: 'Quality Assurance',
            description: 'Every product undergoes rigorous testing and quality checks to ensure optimal performance and reliability.',
            icon: '✓',
            color: 'from-green-400 to-green-600',
            bgColor: 'from-green-50 to-green-100'
          },
          {
            title: 'Expert Support',
            description: 'Our team of water purification experts provides comprehensive support from installation to maintenance.',
            icon: '👨‍🔧',
            color: 'from-blue-400 to-blue-600',
            bgColor: 'from-blue-50 to-blue-100'
          },
          {
            title: 'Innovation',
            description: 'Continuous research and development to bring you the latest in water purification technology.',
            icon: '🔬',
            color: 'from-purple-400 to-purple-600',
            bgColor: 'from-purple-50 to-purple-100'
          }
        ] as feature, i}
          <div class="group relative p-8 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-white/20"
               style="animation-delay: {i * 200}ms">
            
            <!-- Background Gradient -->
            <div class="absolute inset-0 bg-gradient-to-br {feature.bgColor} opacity-0 group-hover:opacity-50 rounded-3xl transition-opacity duration-500"></div>
            
            <!-- Content -->
            <div class="relative z-10 flex items-start space-x-6">
              <!-- Icon -->
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-gradient-to-br {feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <span class="text-2xl text-white">{feature.icon}</span>
                </div>
              </div>
              
              <!-- Text Content -->
              <div class="flex-1 space-y-3">
                <h3 class="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p class="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
            
            <!-- Hover Glow Effect -->
            <div class="absolute -inset-1 bg-gradient-to-r {feature.color} rounded-3xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10"></div>
          </div>
        {/each}
        
        <!-- CTA Section -->
        <div class="pt-8">
          <div class="p-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl shadow-2xl shadow-blue-500/25 text-white text-center space-y-4">
            <h3 class="text-2xl font-bold">Ready to Experience Pure Water?</h3>
            <p class="text-blue-100">Join thousands of satisfied customers who trust Blue Wave for their water purification needs.</p>
            <a href="https://wa.me/919749553406?text=Hi! I'm interested in your water purifiers. Can you help me choose the right one?" 
               target="_blank"
               rel="noopener noreferrer"
               class="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              Contact Us on WhatsApp
              <svg class="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" 
                   fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>