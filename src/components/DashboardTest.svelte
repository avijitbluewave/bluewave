<script>
  import { products, productStore } from '../stores/products.js';
  import { onMount } from 'svelte';

  let testMessage = 'Dashboard loading...';

  onMount(() => {
    console.log('Test dashboard mounted');
    console.log('Products store:', $products);
    testMessage = `Dashboard loaded. Found ${$products.length} products.`;
  });

  function testAddProduct() {
    console.log('Test add product clicked');
    const testProduct = {
      name: 'Test Product',
      price: 1000,
      liters: 5,
      rating: 4.5,
      image: 'https://via.placeholder.com/400x300',
      description: 'This is a test product',
      features: ['Test Feature 1', 'Test Feature 2']
    };
    
    try {
      productStore.add(testProduct);
      console.log('Test product added successfully');
      testMessage = `Product added! Total products: ${$products.length}`;
    } catch (error) {
      console.error('Error adding test product:', error);
      testMessage = 'Error adding product: ' + error.message;
    }
  }

  function testDeleteFirst() {
    console.log('Test delete first product');
    if ($products.length > 0) {
      try {
        productStore.delete($products[0].id);
        console.log('First product deleted');
        testMessage = `Product deleted! Total products: ${$products.length}`;
      } catch (error) {
        console.error('Error deleting product:', error);
        testMessage = 'Error deleting product: ' + error.message;
      }
    } else {
      testMessage = 'No products to delete';
    }
  }
</script>

<div class="p-8 bg-gray-100 min-h-screen">
  <h1 class="text-3xl font-bold mb-6">Dashboard Test</h1>
  
  <div class="bg-white p-6 rounded-lg shadow-lg mb-6">
    <p class="text-lg mb-4">{testMessage}</p>
    
    <div class="space-x-4">
      <button 
        on:click={testAddProduct}
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Test Add Product
      </button>
      
      <button 
        on:click={testDeleteFirst}
        class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Test Delete First Product
      </button>
    </div>
  </div>

  <div class="bg-white p-6 rounded-lg shadow-lg">
    <h2 class="text-xl font-bold mb-4">Current Products ({$products.length})</h2>
    <div class="space-y-2">
      {#each $products as product}
        <div class="p-3 bg-gray-50 rounded border">
          <strong>{product.name}</strong> - ₹{product.price} - {product.liters}L - ⭐{product.rating}
        </div>
      {/each}
    </div>
  </div>
</div>
</script>