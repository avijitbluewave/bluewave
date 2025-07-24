<script>
  let isMenuOpen = false;
  let scrollY = 0;
  let mouseX = 0;
  let mouseY = 0;
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
  
  function handleMouseMove(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
  }
  
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      scrollY = window.scrollY;
    });
    window.addEventListener('mousemove', handleMouseMove);
  }
  
  $: isScrolled = scrollY > 50;
</script>

<header class="fixed top-0 w-full z-50 transition-all duration-700 {isScrolled ? 'backdrop-blur-3xl bg-black/20' : 'backdrop-blur-xl bg-black/10'}" 
        style="--mouse-x: {mouseX}px; --mouse-y: {mouseY}px;">
  
  <!-- Futuristic Background Grid -->
  <div class="absolute inset-0 opacity-30">
    <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10"></div>
    <!-- Animated Grid Lines -->
    <svg class="absolute inset-0 w-full h-full" viewBox="0 0 100 20">
      <defs>
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(6, 182, 212, 0.2)" stroke-width="0.5"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
    <!-- Scanning Line -->
    <div class="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
  </div>
  
  <!-- Holographic Border -->
  <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>
  
  <nav class="relative container mx-auto px-6 py-4">
    <div class="flex items-center justify-between">
      
      <!-- Blue Wave Logo -->
      <a href="#home" class="group relative flex items-center space-x-3">
        <!-- Logo SVG -->
        <div class="relative">
          <svg width="60" height="60" viewBox="0 0 120 120" class="group-hover:scale-110 transition-transform duration-500">
            <!-- Outer Wave Circle -->
            <circle cx="60" cy="60" r="55" fill="none" stroke="url(#gradient1)" stroke-width="8" opacity="0.8"/>
            <!-- Middle Wave Circle -->
            <circle cx="60" cy="60" r="45" fill="none" stroke="url(#gradient2)" stroke-width="6" opacity="0.9"/>
            <!-- Inner Wave Circle -->
            <circle cx="60" cy="60" r="35" fill="none" stroke="url(#gradient3)" stroke-width="4"/>
            
            <!-- Wave Pattern -->
            <path d="M 20 60 Q 40 40, 60 60 T 100 60" fill="none" stroke="url(#gradient4)" stroke-width="3" opacity="0.7"/>
            <path d="M 25 65 Q 45 45, 65 65 T 95 65" fill="none" stroke="url(#gradient4)" stroke-width="2" opacity="0.5"/>
            
            <!-- Gradients -->
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#22d3ee;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#0ea5e9;stop-opacity:1" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#06b6d4;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#0891b2;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#1d4ed8;stop-opacity:1" />
              </linearGradient>
              <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#67e8f9;stop-opacity:1" />
                <stop offset="50%" style="stop-color:#22d3ee;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#0ea5e9;stop-opacity:1" />
              </linearGradient>
            </defs>
          </svg>
          
          <!-- Holographic Glow -->
          <div class="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        
        <!-- Brand Text -->
        <div class="space-y-1">
          <div class="text-2xl sm:text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-400 transition-all duration-500">
            BlueWave
          </div>
          <div class="text-xs font-bold text-blue-400/90 tracking-wider uppercase">
            WATER PURIFIER
          </div>
        </div>
      </a>
      
      <!-- Futuristic Navigation -->
      <div class="hidden lg:flex items-center space-x-1">
        {#each [
          { href: '#home', label: 'HOME', code: '01' },
          { href: '#products', label: 'PRODUCTS', code: '02' },
          { href: '#about', label: 'ABOUT', code: '03' },
          { href: '#contact', label: 'CONTACT', code: '04' }
        ] as item, index}
          <a href={item.href} 
             class="group relative px-6 py-3 font-mono text-sm font-bold text-white/80 hover:text-white transition-all duration-300 overflow-hidden">
            
            <!-- Holographic Background -->
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            
            <!-- Border Lines -->
            <div class="absolute inset-0 border border-transparent group-hover:border-cyan-400/30 rounded-xl transition-all duration-300"></div>
            
            <!-- Scanning Line -->
            <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-500"></div>
            
            <!-- Content -->
            <div class="relative z-10 flex items-center space-x-2">
              <span class="text-cyan-400/60 text-xs">{item.code}</span>
              <span class="tracking-wider">{item.label}</span>
            </div>
          </a>
        {/each}
      </div>
      
      <!-- WhatsApp Contact Button -->
      <div class="hidden lg:block">
        <a href="https://wa.me/919749553406?text=Hi! I'm interested in your water purifiers. Can you help me choose the right one?" 
           target="_blank"
           rel="noopener noreferrer"
           class="group relative inline-flex items-center px-6 py-3 font-semibold text-white overflow-hidden rounded-full bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 shadow-lg hover:shadow-green-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5">
          
          <!-- Animated Background Glow -->
          <div class="absolute inset-0 bg-gradient-to-r from-green-400/30 via-green-500/30 to-green-600/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
          
          <!-- WhatsApp Icon Container -->
          <div class="relative flex items-center justify-center w-8 h-8 bg-white/20 rounded-full mr-3 backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
            </svg>
          </div>
          
          <!-- Button Text -->
          <span class="relative z-10 text-sm font-medium tracking-wide">Chat on WhatsApp</span>
          
          <!-- Online Status Indicator -->
          <div class="absolute -top-1 -right-1 flex items-center justify-center">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-green-400 shadow-lg"></span>
            </span>
          </div>
          
          <!-- Ripple Effect -->
          <div class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300"></div>
        </a>
      </div>
      
      <!-- Futuristic Mobile Menu Button -->
      <button 
        class="lg:hidden relative p-3 rounded-xl border border-cyan-400/50 bg-black/20 backdrop-blur-xl hover:border-cyan-300 transition-all duration-300 group overflow-hidden"
        on:click={toggleMenu}
        aria-label="Toggle menu"
      >
        <!-- Holographic Background -->
        <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <!-- Menu Icon -->
        <div class="relative z-10">
          <div class="w-6 h-6 flex flex-col justify-center space-y-1">
            <div class="w-full h-0.5 bg-cyan-400 transition-all duration-300 {isMenuOpen ? 'rotate-45 translate-y-1' : ''}"></div>
            <div class="w-full h-0.5 bg-cyan-400 transition-all duration-300 {isMenuOpen ? 'opacity-0' : ''}"></div>
            <div class="w-full h-0.5 bg-cyan-400 transition-all duration-300 {isMenuOpen ? '-rotate-45 -translate-y-1' : ''}"></div>
          </div>
        </div>
      </button>
    </div>
    
    <!-- Futuristic Mobile Menu -->
    {#if isMenuOpen}
      <div class="lg:hidden mt-6 relative">
        <!-- Holographic Container -->
        <div class="relative p-6 bg-black/40 backdrop-blur-2xl rounded-2xl border border-cyan-400/30 shadow-2xl shadow-cyan-500/20 overflow-hidden">
          
          <!-- Background Grid -->
          <div class="absolute inset-0 opacity-20">
            <svg class="w-full h-full" viewBox="0 0 100 100">
              <defs>
                <pattern id="mobile-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(6, 182, 212, 0.3)" stroke-width="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#mobile-grid)" />
            </svg>
          </div>
          
          <!-- Menu Items -->
          <div class="relative space-y-2">
            {#each [
              { href: '#home', label: 'HOME', code: '01', icon: '⌂' },
              { href: '#products', label: 'PRODUCTS', code: '02', icon: '◈' },
              { href: '#about', label: 'ABOUT', code: '03', icon: '◉' },
              { href: '#contact', label: 'CONTACT', code: '04', icon: '◎' }
            ] as item}
              <a href={item.href} 
                 on:click={toggleMenu}
                 class="group flex items-center space-x-4 p-4 rounded-xl border border-transparent hover:border-cyan-400/30 hover:bg-cyan-500/10 transition-all duration-300 relative overflow-hidden">
                
                <!-- Scanning Line -->
                <div class="absolute left-0 top-0 w-0 h-full bg-gradient-to-r from-cyan-400/50 to-transparent group-hover:w-full transition-all duration-500"></div>
                
                <!-- Icon -->
                <div class="w-10 h-10 rounded-xl border border-cyan-400/30 bg-cyan-500/10 flex items-center justify-center font-mono text-cyan-400 group-hover:border-cyan-300 group-hover:bg-cyan-400/20 transition-all duration-300">
                  {item.icon}
                </div>
                
                <!-- Content -->
                <div class="flex-1 relative z-10">
                  <div class="flex items-center space-x-3">
                    <span class="text-cyan-400/60 text-xs font-mono">{item.code}</span>
                    <span class="font-mono font-bold text-white tracking-wider">{item.label}</span>
                  </div>
                </div>
                
                <!-- Arrow -->
                <svg class="w-5 h-5 text-cyan-400/60 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            {/each}
            
            <!-- Mobile WhatsApp Button -->
            <div class="pt-4 border-t border-cyan-400/20">
              <a href="https://wa.me/919749553406?text=Hi! I'm interested in your water purifiers. Can you help me choose the right one?" 
                 target="_blank"
                 rel="noopener noreferrer"
                 class="group relative w-full py-4 rounded-full bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 shadow-lg hover:shadow-green-500/40 transition-all duration-300 overflow-hidden block">
                
                <!-- Animated Background Glow -->
                <div class="absolute inset-0 bg-gradient-to-r from-green-400/30 via-green-500/30 to-green-600/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                
                <!-- Content -->
                <div class="relative z-10 flex items-center justify-center">
                  <!-- WhatsApp Icon Container -->
                  <div class="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full mr-3 backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                    </svg>
                  </div>
                  
                  <!-- Button Text -->
                  <span class="font-semibold text-white text-base tracking-wide">Chat on WhatsApp</span>
                  
                  <!-- Online Status Indicator -->
                  <div class="absolute -top-1 -right-1 flex items-center justify-center">
                    <span class="relative flex h-3 w-3">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-3 w-3 bg-green-400 shadow-lg"></span>
                    </span>
                  </div>
                </div>
                
                <!-- Ripple Effect -->
                <div class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </nav>
</header>

<style>
  /* Enhanced backdrop blur */
  .backdrop-blur-3xl {
    backdrop-filter: blur(64px);
    -webkit-backdrop-filter: blur(64px);
  }
  
  /* Enhanced backdrop blur */
</style>