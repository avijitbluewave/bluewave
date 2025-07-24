<script>
  import { onMount } from 'svelte';
  
  let currentSlide = 0;
  let autoSlideInterval;
  
  const slides = [
    {
      image: '/hero slider/1.webp',
      title: 'Pure Water',
      subtitle: 'Pure Life',
      description: 'Advanced RO Technology removes 99.9% bacteria & chemicals',
      badge: 'RO + UV + UF',
      stats: { purity: '99.9%', tds: '150 PPM', flow: '15L/Hr' }
    },
    {
      image: '/hero slider/2.webp',
      title: 'UV Protection',
      subtitle: 'Germ Free Water',
      description: 'Kill every harmful microorganism with UV sterilization',
      badge: 'UV Sterilization',
      stats: { germs: '0%', safety: '100%', flow: '12L/Hr' }
    },
    {
      image: '/hero slider/3.webp',
      title: 'Alkaline Water',
      subtitle: 'Healthy Living',
      description: 'pH balanced water with essential minerals for immunity',
      badge: 'pH 8.5+',
      stats: { ph: '8.5', minerals: '100%', flow: '10L/Hr' }
    },
    {
      image: '/hero slider/4.webp',
      title: 'Commercial Grade',
      subtitle: '24/7 Ready',
      description: 'High capacity systems for offices and restaurants',
      badge: 'Commercial',
      stats: { capacity: '50L', uptime: '24/7', flow: '25L/Hr' }
    }
  ];
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
  }
  
  function prevSlide() {
    currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
  }
  
  function goToSlide(index) {
    currentSlide = index;
  }
  
  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 6000);
  }
  
  function stopAutoSlide() {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
    }
  }
  
  onMount(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  });
</script>

<section id="home" class="relative h-screen overflow-hidden bg-slate-900">
  <!-- Hero Slider -->
  <div class="relative w-full h-full">
    {#each slides as slide, index}
      <div class="absolute inset-0 transition-all duration-1000 {index === currentSlide ? 'opacity-100' : 'opacity-0'}"
           on:mouseenter={stopAutoSlide}
           on:mouseleave={startAutoSlide}
           role="tabpanel"
           tabindex="0">
        
        <!-- Background with Overlay -->
        <div class="absolute inset-0">
          <img src={slide.image} alt={slide.title} 
               class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/70 to-slate-900/90"></div>
        </div>
        
        <!-- Mobile-First Content Layout -->
        <div class="relative z-10 h-full flex items-center">
          <div class="container mx-auto px-4 sm:px-6">
            
            <!-- Mobile & Desktop Content -->
            <div class="text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
              
              <!-- Badge - Mobile Optimized -->
              <div class="inline-flex items-center space-x-2 px-4 py-2 sm:px-6 sm:py-3 bg-cyan-500 rounded-full text-white font-bold text-xs sm:text-sm shadow-lg mb-6 sm:mb-8">
                <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>{slide.badge}</span>
              </div>
              
              <!-- Main Heading - Responsive -->
              <div class="space-y-2 sm:space-y-4 mb-6 sm:mb-8">
                <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight">
                  {slide.title}
                </h1>
                <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-cyan-400 leading-tight">
                  {slide.subtitle}
                </h2>
              </div>
              
              <!-- Description - Mobile Friendly -->
              <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0">
                {slide.description}
              </p>
              
              <!-- Mobile Stats Cards - Visible on Mobile -->
              <div class="grid grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10 lg:hidden max-w-md mx-auto">
                {#each Object.entries(slide.stats) as [key, value]}
                  <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-white/20 text-center">
                    <div class="text-lg sm:text-xl font-black text-cyan-400">{value}</div>
                    <div class="text-white/80 text-xs sm:text-sm font-medium capitalize">{key}</div>
                  </div>
                {/each}
              </div>
              
              <!-- CTA Buttons - Mobile Optimized -->
              <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 px-4 sm:px-0">
                <a href="#products" 
                   class="group px-6 py-4 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 inline-flex items-center justify-center touch-manipulation">
                  View Products
                  <svg class="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
                
                <a href="https://wa.me/919749553406?text=Hi! I'm interested in your water purifiers. Can you help me choose the right one?" 
                   target="_blank"
                   rel="noopener noreferrer"
                   class="group px-6 py-4 sm:px-8 sm:py-4 border-2 border-white text-white rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 hover:-translate-y-1 inline-flex items-center justify-center touch-manipulation">
                  WhatsApp Us
                  <svg class="w-5 h-5 ml-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                  </svg>
                </a>
              </div>
              
              <!-- Trust Badge - Mobile -->
              <div class="flex items-center justify-center space-x-2 mt-8 sm:mt-10 lg:hidden">
                <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="text-white font-semibold text-sm sm:text-base">ISI Certified Quality</span>
              </div>
            </div>
            
            <!-- Desktop Stats Card - Hidden on Mobile -->
            <div class="hidden lg:block absolute right-8 top-1/2 transform -translate-y-1/2">
              <div class="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl w-80">
                <div class="text-center space-y-6">
                  <!-- Water Drop Icon -->
                  <div class="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  
                  <h3 class="text-xl font-bold text-white">Water Quality</h3>
                  
                  <!-- Stats Grid -->
                  <div class="grid grid-cols-1 gap-3">
                    {#each Object.entries(slide.stats) as [key, value]}
                      <div class="bg-white/5 rounded-2xl p-4 border border-white/10">
                        <div class="text-2xl font-black text-cyan-400">{value}</div>
                        <div class="text-white/80 text-sm font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    {/each}
                  </div>
                  
                  <!-- Trust Badge -->
                  <div class="flex items-center justify-center space-x-2 pt-2">
                    <div class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <span class="text-white font-semibold text-sm">ISI Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
  
  <!-- Mobile-Friendly Navigation -->
  <div class="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
    <div class="flex items-center space-x-3 sm:space-x-4 md:space-x-6 bg-white/10 backdrop-blur-xl rounded-2xl px-4 py-3 sm:px-6 sm:py-4 border border-white/20">
      
      <!-- Previous Button -->
      <button 
        on:click={prevSlide}
        class="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 touch-manipulation"
        aria-label="Previous slide">
        <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      
      <!-- Mobile Slide Dots -->
      <div class="flex items-center space-x-2 sm:hidden">
        {#each slides as _, index}
          <button 
            on:click={() => goToSlide(index)}
            class="w-2 h-2 rounded-full transition-all duration-300 touch-manipulation {index === currentSlide ? 'bg-cyan-400 w-6' : 'bg-white/40'}"
            aria-label="Go to slide {index + 1}">
          </button>
        {/each}
      </div>
      
      <!-- Desktop Slide Progress -->
      <div class="hidden sm:flex items-center space-x-3">
        <span class="text-white/60 text-sm font-medium">{currentSlide + 1}</span>
        <div class="w-16 sm:w-20 md:w-24 h-1 bg-white/20 rounded-full overflow-hidden">
          <div class="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-300" 
               style="width: {((currentSlide + 1) / slides.length) * 100}%"></div>
        </div>
        <span class="text-white/60 text-sm font-medium">{slides.length}</span>
      </div>
      
      <!-- Next Button -->
      <button 
        on:click={nextSlide}
        class="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 touch-manipulation"
        aria-label="Next slide">
        <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
</section>