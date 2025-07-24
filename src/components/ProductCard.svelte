<script>
  export let product;
  export const index = 0; // For external reference only
  
  let isHovered = false;
</script>

<div class="group relative max-w-sm mx-auto" 
     role="article"
     on:mouseenter={() => isHovered = true}
     on:mouseleave={() => isHovered = false}>
  
  <!-- Main Card -->
  <div class="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
    
    <!-- Product Image Section -->
    <div class="relative p-8 bg-gradient-to-br from-gray-100 to-gray-200 min-h-[300px] flex items-center justify-center">
      <img 
        src={product.image} 
        alt={product.name}
        class="w-full h-64 object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl"
        loading="lazy"
      />
      
      <!-- Brand Logo Overlay -->
      <div class="absolute top-4 left-4">
        <div class="flex items-center space-x-2 px-3 py-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
          <span class="text-blue-600 text-lg">💧</span>
          <span class="text-sm font-bold text-blue-600">BlueWave</span>
        </div>
      </div>
      
      <!-- Capacity Badge -->
      <div class="absolute top-4 right-4">
        <div class="px-3 py-2 bg-blue-600 text-white text-xs font-bold rounded-xl shadow-lg">
          {product.capacity || '10L'}
        </div>
      </div>
    </div>
    
    <!-- Technology Badges -->
    <div class="px-6 py-4 bg-white">
      <div class="flex flex-wrap gap-2 justify-center">
        {#each product.technologies as tech, i}
          <div class="px-3 py-1 rounded-lg text-xs font-bold border-2 {tech.color} {tech.bgColor} shadow-sm">
            {tech.name}
          </div>
        {/each}
      </div>
    </div>
    
    <!-- Capacity Info -->
    <div class="px-6 py-4 bg-white border-t border-gray-100">
      <div class="text-center">
        <div class="text-3xl font-black text-gray-800">{product.flowRate}</div>
        <div class="text-sm text-gray-600 font-medium">Per Hour</div>
      </div>
    </div>
    
    <!-- Price Section -->
    <div class="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-6">
      <div class="text-3xl font-black">Rs. {product.price}/-</div>
    </div>
    
    <!-- Product Info -->
    <div class="bg-white px-6 py-4 text-center">
      <div class="flex items-center justify-center space-x-1 mb-4">
        {#each Array(5) as _, i}
          <svg class="w-5 h-5 {i < product.rating ? 'text-yellow-400' : 'text-gray-300'}" 
               fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        {/each}
        <span class="text-sm text-gray-600 ml-2">({product.rating}.0)</span>
      </div>
      
      <!-- CTA Button -->
      <a href="https://wa.me/919749553406?text=Hi! I'm interested in your water purifiers. Can you provide more details and pricing?" 
         target="_blank"
         rel="noopener noreferrer"
         class="block w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group/btn">
        <span class="flex items-center justify-center">
          WhatsApp Quote
          <svg class="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" 
               fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
          </svg>
        </span>
      </a>
    </div>
    
    <!-- Special Features Footer -->
    {#if product.specialFeature}
      <div class="bg-gradient-to-r from-orange-100 to-orange-200 px-6 py-4 text-center border-t">
        <div class="flex items-center justify-center space-x-2">
          <span class="text-orange-600 text-lg">✨</span>
          <span class="text-sm font-bold text-orange-800">{product.specialFeature}</span>
        </div>
      </div>
    {/if}
    
    <!-- Hover Glow Effect -->
    <div class="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
  </div>
</div>