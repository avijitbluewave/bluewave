<script>
  import ProductCard from './ProductCard.svelte';
  import { products } from '../stores/products.js';
  
  // Helper function to get image URL (handles both server and local images)
  function getImageUrl(imageRef) {
    if (!imageRef) return '';
    
    if (imageRef.startsWith('local:')) {
      const imageId = imageRef.replace('local:', '');
      try {
        const images = JSON.parse(localStorage.getItem('bluewave-images') || '{}');
        return images[imageId]?.data || '';
      } catch (error) {
        console.error('Error retrieving local image:', error);
        return '';
      }
    }
    
    return imageRef; // Regular URL
  }
  
  // Convert store products to the format expected by ProductCard
  $: formattedProducts = $products.map(product => ({
    id: product.id,
    name: product.name,
    image: getImageUrl(product.image),
    description: product.description,
    price: product.price.toString(),
    rating: Math.round(product.rating),
    capacity: `${product.liters}L`,
    flowRate: `${Math.round(product.liters * 1.5)} Ltr`, // Estimated flow rate
    technologies: product.features.slice(0, 4).map((feature, index) => {
      const colors = [
        { color: "border-yellow-400 text-yellow-700", bgColor: "bg-yellow-50" },
        { color: "border-orange-400 text-orange-700", bgColor: "bg-orange-50" },
        { color: "border-purple-400 text-purple-700", bgColor: "bg-purple-50" },
        { color: "border-green-400 text-green-700", bgColor: "bg-green-50" }
      ];
      return {
        name: feature.substring(0, 3).toUpperCase(),
        ...colors[index % colors.length]
      };
    }),
    specialFeature: product.features[0] || "PREMIUM QUALITY"
  }));
  
  // Keep original products as fallback
  const originalProducts = [
    {
      id: 1,
      name: "Blue Wave Pro RO",
      image: "/1.webp",
      description: "Advanced 7-stage RO purification system with UV sterilization for complete water safety.",
      price: "19999",
      rating: 5,
      capacity: "10L",
      flowRate: "15 Ltr",
      technologies: [
        { name: "RO", color: "border-yellow-400 text-yellow-700", bgColor: "bg-yellow-50" },
        { name: "UV", color: "border-orange-400 text-orange-700", bgColor: "bg-orange-50" },
        { name: "UF", color: "border-purple-400 text-purple-700", bgColor: "bg-purple-50" },
        { name: "TDS", color: "border-green-400 text-green-700", bgColor: "bg-green-50" },
        { name: "ALK", color: "border-blue-400 text-blue-700", bgColor: "bg-blue-50" }
      ],
      specialFeature: "MIRACLE ACTIVE COPPER"
    },
    {
      id: 2,
      name: "Blue Wave Ultra UV",
      image: "/2.webp", 
      description: "Compact UV water purifier perfect for small families with advanced filtration technology.",
      price: "12999",
      rating: 4,
      capacity: "6L",
      flowRate: "12 Ltr",
      technologies: [
        { name: "UV", color: "border-orange-400 text-orange-700", bgColor: "bg-orange-50" },
        { name: "UF", color: "border-purple-400 text-purple-700", bgColor: "bg-purple-50" },
        { name: "PCF", color: "border-red-400 text-red-700", bgColor: "bg-red-50" },
        { name: "CF", color: "border-indigo-400 text-indigo-700", bgColor: "bg-indigo-50" }
      ],
      specialFeature: "COMPACT DESIGN"
    },
    {
      id: 3,
      name: "Blue Wave Alkaline Plus",
      image: "/3.webp",
      description: "Premium alkaline water purifier that maintains essential minerals while removing impurities.",
      price: "24999",
      rating: 5,
      capacity: "8L",
      flowRate: "18 Ltr",
      technologies: [
        { name: "RO", color: "border-yellow-400 text-yellow-700", bgColor: "bg-yellow-50" },
        { name: "UV", color: "border-orange-400 text-orange-700", bgColor: "bg-orange-50" },
        { name: "ALK", color: "border-blue-400 text-blue-700", bgColor: "bg-blue-50" },
        { name: "MNL", color: "border-cyan-400 text-cyan-700", bgColor: "bg-cyan-50" },
        { name: "TDS", color: "border-green-400 text-green-700", bgColor: "bg-green-50" }
      ],
      specialFeature: "ALKALINE BOOST TECHNOLOGY"
    },
    {
      id: 4,
      name: "Blue Wave Compact",
      image: "/4.webp",
      description: "Space-saving design with powerful purification for modern kitchens and small spaces.",
      price: "8999",
      rating: 4,
      capacity: "4L",
      flowRate: "10 Ltr",
      technologies: [
        { name: "UV", color: "border-orange-400 text-orange-700", bgColor: "bg-orange-50" },
        { name: "UF", color: "border-purple-400 text-purple-700", bgColor: "bg-purple-50" },
        { name: "CF", color: "border-indigo-400 text-indigo-700", bgColor: "bg-indigo-50" }
      ],
      specialFeature: "SPACE SAVER DESIGN"
    },
    {
      id: 5,
      name: "Blue Wave Commercial",
      image: "/5.webp",
      description: "Heavy-duty water purification system designed for offices, restaurants, and commercial use.",
      price: "45999",
      rating: 5,
      capacity: "20L",
      flowRate: "25 Ltr",
      technologies: [
        { name: "RO", color: "border-yellow-400 text-yellow-700", bgColor: "bg-yellow-50" },
        { name: "UV", color: "border-orange-400 text-orange-700", bgColor: "bg-orange-50" },
        { name: "UF", color: "border-purple-400 text-purple-700", bgColor: "bg-purple-50" },
        { name: "PCF", color: "border-red-400 text-red-700", bgColor: "bg-red-50" },
        { name: "TDS", color: "border-green-400 text-green-700", bgColor: "bg-green-50" },
        { name: "ALK", color: "border-blue-400 text-blue-700", bgColor: "bg-blue-50" }
      ],
      specialFeature: "COMMERCIAL GRADE PERFORMANCE"
    }
  ];
</script>

<section id="products" class="relative py-32 overflow-hidden">
  <!-- Background -->
  <div class="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white">
    <!-- Decorative Elements -->
    <div class="absolute top-20 -left-20 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 -right-20 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl"></div>
  </div>
  
  <div class="relative z-10 container mx-auto px-4">
    <!-- Section Header -->
    <div class="text-center mb-20 space-y-6">
      <div class="inline-block">
        <div class="px-6 py-3 bg-blue-100/80 backdrop-blur-sm text-blue-600 rounded-full font-semibold text-sm border border-blue-200/50">
          💧 Premium Collection
        </div>
      </div>
      
      <h2 class="text-5xl md:text-6xl font-black leading-tight">
        <span class="bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
          Our Premium
        </span>
        <br>
        <span class="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
          Water Purifiers
        </span>
      </h2>
      
      <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Discover our range of advanced water purification systems designed to provide 
        <span class="font-semibold text-blue-600">pure, safe, and healthy water</span> for every need.
      </p>
    </div>
    
    <!-- Products Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
      {#each formattedProducts as product, index}
        <div style="animation-delay: {index * 100}ms" class="animate-fade-in-up">
          <ProductCard {product} {index} />
        </div>
      {/each}
    </div>
    
    <!-- Features Banner -->
    <div class="relative">
      <div class="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-500/25 overflow-hidden">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-0 left-0 w-full h-full">
            <div class="w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
          </div>
        </div>
        
        <div class="relative z-10 text-center text-white space-y-6">
          <div class="flex items-center justify-center space-x-4 mb-6">
            <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-3xl font-bold">Premium Benefits</h3>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {#each [
              { icon: '🔧', title: 'Free Installation', desc: 'Professional setup included' },
              { icon: '🛡️', title: '2-Year Warranty', desc: 'Comprehensive coverage' },
              { icon: '📞', title: '24/7 Support', desc: 'Always here to help' }
            ] as benefit}
              <div class="text-center space-y-3">
                <div class="text-4xl mb-2">{benefit.icon}</div>
                <h4 class="text-xl font-bold">{benefit.title}</h4>
                <p class="text-blue-100">{benefit.desc}</p>
              </div>
            {/each}
          </div>
          
          <div class="pt-8">
            <a href="https://wa.me/919749553406?text=Hi! I'm interested in your water purifiers. Can you help me choose the right one?" 
               target="_blank"
               rel="noopener noreferrer"
               class="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              Get Your Quote on WhatsApp
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

<style>
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
    opacity: 0;
  }
</style>