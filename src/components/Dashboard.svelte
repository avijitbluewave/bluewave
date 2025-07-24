<script>
  import { products, productStore } from '../stores/products.js';
  import { onMount } from 'svelte';

  let showAddForm = false;
  let editingProduct = null;
  let searchTerm = '';
  let sortBy = 'name';
  let sortOrder = 'asc';

  // Debug logging
  onMount(() => {
    console.log('Dashboard mounted');
    console.log('Products:', $products);
  });

  // Form data
  let formData = {
    name: '',
    price: '',
    liters: '',
    rating: '',
    image: '',
    description: '',
    features: ['', '', '', '']
  };

  // Form validation
  let errors = {};

  // Filtered and sorted products
  $: filteredProducts = $products
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      let aVal = a[sortBy];
      let bVal = b[sortBy];
      
      if (typeof aVal === 'string') {
        aVal = aVal.toLowerCase();
        bVal = bVal.toLowerCase();
      }
      
      if (sortOrder === 'asc') {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    });

  function resetForm() {
    formData = {
      name: '',
      price: '',
      liters: '',
      rating: '',
      image: '',
      description: '',
      features: ['', '', '', '']
    };
    errors = {};
    editingProduct = null;
  }

  function validateForm() {
    errors = {};
    
    if (!formData.name.trim()) errors.name = 'Product name is required';
    if (!formData.price || formData.price <= 0) errors.price = 'Valid price is required';
    if (!formData.liters || formData.liters <= 0) errors.liters = 'Valid liter capacity is required';
    if (!formData.rating || formData.rating < 1 || formData.rating > 5) errors.rating = 'Rating must be between 1 and 5';
    
    // Validate image (only uploaded files)
    if (!formData.image.trim()) {
      errors.image = 'Please upload a product image';
    }
    
    if (!formData.description.trim()) errors.description = 'Product description is required';
    
    return Object.keys(errors).length === 0;
  }

  function handleSubmit() {
    console.log('Form submitted');
    if (!validateForm()) {
      console.log('Form validation failed:', errors);
      return;
    }

    const productData = {
      name: formData.name.trim(),
      price: parseFloat(formData.price),
      liters: parseFloat(formData.liters),
      rating: parseFloat(formData.rating),
      image: formData.image.trim(),
      description: formData.description.trim(),
      features: formData.features.filter(f => f.trim()).map(f => f.trim())
    };

    console.log('Product data:', productData);

    try {
      if (editingProduct) {
        console.log('Updating product:', editingProduct.id);
        productStore.update(editingProduct.id, productData);
      } else {
        console.log('Adding new product');
        productStore.add(productData);
      }

      resetForm();
      showAddForm = false;
      console.log('Product operation completed');
    } catch (error) {
      console.error('Error saving product:', error);
    }
  }

  function editProduct(product) {
    console.log('Editing product:', product);
    editingProduct = product;
    formData = {
      name: product.name,
      price: product.price.toString(),
      liters: product.liters.toString(),
      rating: product.rating.toString(),
      image: product.image,
      description: product.description,
      features: [...product.features, '', '', '', ''].slice(0, 4)
    };
    showAddForm = true;
  }

  function deleteProduct(id) {
    console.log('Deleting product:', id);
    if (confirm('Are you sure you want to delete this product?')) {
      try {
        productStore.delete(id);
        console.log('Product deleted successfully');
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  }

  function handleAddProduct() {
    console.log('Add product button clicked');
    showAddForm = true;
    resetForm();
  }

  function handleImageError(event) {
    event.target.src = 'https://via.placeholder.com/400x300/e2e8f0/64748b?text=No+Image';
  }

  let uploading = false;

  async function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      return;
    }

    uploading = true;
    
    try {
      // Convert to base64 and store with better organization
      const reader = new FileReader();
      reader.onload = (e) => {
        // Create a unique identifier for the image
        const imageId = `img_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        const imageData = {
          id: imageId,
          data: e.target.result,
          filename: file.name,
          type: file.type,
          size: file.size,
          uploadedAt: new Date().toISOString()
        };

        // Store image data separately
        try {
          const existingImages = JSON.parse(localStorage.getItem('bluewave-images') || '{}');
          existingImages[imageId] = imageData;
          localStorage.setItem('bluewave-images', JSON.stringify(existingImages));
          
          // Use the image ID as reference
          formData.image = `local:${imageId}`;
          console.log('Image stored locally with ID:', imageId);
          uploading = false;
        } catch (storageError) {
          console.error('Error storing image locally:', storageError);
          alert('Failed to store image locally');
          uploading = false;
        }
      };
      
      reader.onerror = () => {
        alert('Failed to read file');
        uploading = false;
      };
      
      reader.readAsDataURL(file);
      
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file: ' + error.message);
      uploading = false;
    }
  }

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

  // Helper function to get local image info
  function getLocalImageInfo(imageRef) {
    if (!imageRef || !imageRef.startsWith('local:')) return '';
    
    const imageId = imageRef.replace('local:', '');
    try {
      const images = JSON.parse(localStorage.getItem('bluewave-images') || '{}');
      const imageData = images[imageId];
      if (imageData) {
        return `${imageData.filename} (${Math.round(imageData.size / 1024)}KB)`;
      }
    } catch (error) {
      console.error('Error retrieving local image info:', error);
    }
    return 'Uploaded file';
  }

  function toggleSort(field) {
    if (sortBy === field) {
      sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      sortBy = field;
      sortOrder = 'asc';
    }
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-white">
  <!-- Header -->
  <div class="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-40">
    <div class="container mx-auto px-4 py-6">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Product Dashboard
          </h1>
          <p class="text-gray-600 mt-1">Manage your water purifier products</p>
        </div>
        
        <div class="flex space-x-4">
          <button
            on:click={handleAddProduct}
            class="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
          >
            <svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
            </svg>
            Add Product
          </button>
          
          <button
            on:click={exportData}
            class="px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:scale-105"
          >
            <svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            Export
          </button>
          
          <label class="px-4 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 cursor-pointer">
            <svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/>
            </svg>
            Import
            <input type="file" accept=".json" on:change={importData} class="hidden" />
          </label>
        </div>
      </div>
    </div>
  </div>

  <div class="container mx-auto px-4 py-8">
    <!-- Search and Filter Bar -->
    <div class="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-6 mb-8">
      <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
        <!-- Search -->
        <div class="relative flex-1 max-w-md">
          <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <input
            type="text"
            bind:value={searchTerm}
            placeholder="Search products..."
            class="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300"
          />
        </div>

        <!-- Sort Options -->
        <div class="flex items-center space-x-4">
          <span class="text-sm font-medium text-gray-700">Sort by:</span>
          <div class="flex space-x-2">
            {#each [
              { key: 'name', label: 'Name' },
              { key: 'price', label: 'Price' },
              { key: 'rating', label: 'Rating' },
              { key: 'liters', label: 'Capacity' }
            ] as sort}
              <button
                on:click={() => toggleSort(sort.key)}
                class="px-3 py-2 text-sm rounded-lg transition-colors duration-200 {sortBy === sort.key ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}"
              >
                {sort.label}
                {#if sortBy === sort.key}
                  <svg class="w-4 h-4 inline-block ml-1 {sortOrder === 'desc' ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
                  </svg>
                {/if}
              </button>
            {/each}
          </div>
        </div>

        <!-- Stats -->
        <div class="text-sm text-gray-600">
          Total: <span class="font-semibold text-blue-600">{$products.length}</span> products
        </div>
      </div>
    </div>

    <!-- Products Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each filteredProducts as product (product.id)}
        <div class="group bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
          <!-- Product Image -->
          <div class="relative h-48 overflow-hidden">
            <img
              src={getImageUrl(product.image)}
              alt={product.name}
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              on:error={handleImageError}
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            
            <!-- Action Buttons -->
            <div class="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                on:click={() => editProduct(product)}
                class="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                title="Edit Product"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                </svg>
              </button>
              <button
                on:click={() => deleteProduct(product.id)}
                class="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
                title="Delete Product"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Product Info -->
          <div class="p-6">
            <div class="flex items-start justify-between mb-3">
              <h3 class="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {product.name}
              </h3>
              <div class="flex items-center space-x-1 text-yellow-500">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span class="text-sm font-medium text-gray-700">{product.rating}</span>
              </div>
            </div>

            <p class="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

            <!-- Product Details -->
            <div class="grid grid-cols-2 gap-4 mb-4">
              <div class="text-center p-3 bg-blue-50 rounded-lg">
                <div class="text-2xl font-bold text-blue-600">₹{product.price.toLocaleString()}</div>
                <div class="text-xs text-gray-600">Price</div>
              </div>
              <div class="text-center p-3 bg-cyan-50 rounded-lg">
                <div class="text-2xl font-bold text-cyan-600">{product.liters}L</div>
                <div class="text-xs text-gray-600">Capacity</div>
              </div>
            </div>

            <!-- Features -->
            <div class="space-y-2">
              <h4 class="text-sm font-semibold text-gray-700">Features:</h4>
              <div class="flex flex-wrap gap-1">
                {#each product.features.slice(0, 3) as feature}
                  <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    {feature}
                  </span>
                {/each}
                {#if product.features.length > 3}
                  <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    +{product.features.length - 3} more
                  </span>
                {/if}
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>

    {#if filteredProducts.length === 0}
      <div class="text-center py-16">
        <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
        </svg>
        <h3 class="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
        <p class="text-gray-500">Try adjusting your search terms or add a new product.</p>
      </div>
    {/if}
  </div>
</div>

<!-- Add/Edit Product Modal -->
{#if showAddForm}
  <div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <div class="p-6 border-b border-gray-200">
        <div class="flex items-center justify-between">
          <h2 class="text-2xl font-bold text-gray-800">
            {editingProduct ? 'Edit Product' : 'Add New Product'}
          </h2>
          <button
            type="button"
            on:click={() => { console.log('Closing modal'); showAddForm = false; resetForm(); }}
            class="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <form on:submit|preventDefault={handleSubmit} class="p-6 space-y-6">
        <!-- Product Name -->
        <div>
          <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">Product Name *</label>
          <input
            type="text"
            id="name"
            bind:value={formData.name}
            class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300 {errors.name ? 'border-red-500' : ''}"
            placeholder="Enter product name"
          />
          {#if errors.name}
            <p class="text-red-500 text-sm mt-1">{errors.name}</p>
          {/if}
        </div>

        <!-- Price and Liters -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="price" class="block text-sm font-semibold text-gray-700 mb-2">Price (₹) *</label>
            <input
              type="number"
              id="price"
              bind:value={formData.price}
              min="0"
              step="0.01"
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300 {errors.price ? 'border-red-500' : ''}"
              placeholder="Enter price"
            />
            {#if errors.price}
              <p class="text-red-500 text-sm mt-1">{errors.price}</p>
            {/if}
          </div>

          <div>
            <label for="liters" class="block text-sm font-semibold text-gray-700 mb-2">Capacity (Liters) *</label>
            <input
              type="number"
              id="liters"
              bind:value={formData.liters}
              min="0"
              step="0.1"
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300 {errors.liters ? 'border-red-500' : ''}"
              placeholder="Enter capacity"
            />
            {#if errors.liters}
              <p class="text-red-500 text-sm mt-1">{errors.liters}</p>
            {/if}
          </div>
        </div>

        <!-- Rating and Image -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="rating" class="block text-sm font-semibold text-gray-700 mb-2">Rating (1-5) *</label>
            <input
              type="number"
              id="rating"
              bind:value={formData.rating}
              min="1"
              max="5"
              step="0.1"
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300 {errors.rating ? 'border-red-500' : ''}"
              placeholder="Enter rating"
            />
            {#if errors.rating}
              <p class="text-red-500 text-sm mt-1">{errors.rating}</p>
            {/if}
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Product Image *</label>
            <div class="space-y-4">
              <!-- File Upload -->
              <div>
                <label for="imageFile" class="block text-xs text-gray-600 mb-2">Upload Image File</label>
                <input
                  type="file"
                  id="imageFile"
                  accept="image/*"
                  on:change={handleFileUpload}
                  disabled={uploading}
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <p class="text-xs text-gray-500 mt-1">
                  {#if uploading}
                    <span class="text-blue-600">Processing image...</span>
                  {:else}
                    Supported formats: JPG, PNG, GIF, WEBP (Max 5MB) - Images stored locally in browser
                  {/if}
                </p>
              </div>
              

              
              <!-- Image Preview -->
              {#if uploading}
                <div class="mt-3">
                  <p class="text-xs text-gray-600 mb-2">Uploading...</p>
                  <div class="w-32 h-24 bg-gray-200 rounded-lg border-2 border-gray-300 flex items-center justify-center">
                    <svg class="animate-spin h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                </div>
              {:else if formData.image}
                <div class="mt-3">
                  <p class="text-xs text-gray-600 mb-2">Preview:</p>
                  <div class="relative inline-block">
                    <img 
                      src={getImageUrl(formData.image)} 
                      alt="Product preview" 
                      class="w-32 h-24 object-cover rounded-lg border-2 border-gray-200"
                      on:error={() => {
                        formData.image = '';
                        alert('Invalid image URL or file');
                      }}
                    />
                    <button
                      type="button"
                      on:click={() => formData.image = ''}
                      class="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors duration-200"
                    >
                      ×
                    </button>
                  </div>
                </div>
              {/if}
            </div>
            {#if errors.image}
              <p class="text-red-500 text-sm mt-1">{errors.image}</p>
            {/if}
          </div>
        </div>

        <!-- Description -->
        <div>
          <label for="description" class="block text-sm font-semibold text-gray-700 mb-2">Description *</label>
          <textarea
            id="description"
            bind:value={formData.description}
            rows="3"
            class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none {errors.description ? 'border-red-500' : ''}"
            placeholder="Enter product description"
          ></textarea>
          {#if errors.description}
            <p class="text-red-500 text-sm mt-1">{errors.description}</p>
          {/if}
        </div>

        <!-- Features -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Features</label>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            {#each formData.features as feature, index}
              <input
                type="text"
                bind:value={formData.features[index]}
                class="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300"
                placeholder="Feature {index + 1}"
              />
            {/each}
          </div>
        </div>

        <!-- Form Actions -->
        <div class="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
          <button
            type="button"
            on:click={() => { console.log('Cancel clicked'); showAddForm = false; resetForm(); }}
            class="px-6 py-3 text-gray-700 bg-gray-100 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
          >
            {editingProduct ? 'Update Product' : 'Add Product'}
          </button>
        </div>
      </form>
    </div>
  </div>
{/if}

<style>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>