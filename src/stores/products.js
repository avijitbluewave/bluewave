import { writable } from 'svelte/store';

// Check if we're in the browser
const browser = typeof window !== 'undefined';

// Default products
const defaultProducts = [
  {
    id: '1',
    name: 'Blue Wave Pro RO',
    price: 15999,
    liters: 8,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    description: 'Advanced RO + UV + UF purification with mineral retention technology',
    features: ['RO + UV + UF', '8L Storage', 'Mineral Retention', 'Smart Indicators'],
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Blue Wave Ultra UV',
    price: 9999,
    liters: 6,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    description: 'UV sterilization with activated carbon filtration for safe drinking water',
    features: ['UV Sterilization', '6L Storage', 'Carbon Filter', 'Energy Efficient'],
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Blue Wave Alkaline Plus',
    price: 19999,
    liters: 10,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    description: 'Premium alkaline water purifier with pH enhancement and mineral boost',
    features: ['Alkaline Enhancement', '10L Storage', 'pH Balance', 'Mineral Boost'],
    createdAt: new Date().toISOString()
  },
  {
    id: '4',
    name: 'Blue Wave Compact',
    price: 7499,
    liters: 4,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    description: 'Space-saving compact design perfect for small families and apartments',
    features: ['Compact Design', '4L Storage', 'Multi-stage Filter', 'Wall Mountable'],
    createdAt: new Date().toISOString()
  },
  {
    id: '5',
    name: 'Blue Wave Commercial',
    price: 29999,
    liters: 20,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    description: 'High-capacity commercial grade purifier for offices and large families',
    features: ['Commercial Grade', '20L Storage', 'High Flow Rate', 'Durable Build'],
    createdAt: new Date().toISOString()
  }
];

// Load products from localStorage or use defaults
function loadProducts() {
  if (browser) {
    const stored = localStorage.getItem('bluewave-products');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error('Error parsing stored products:', e);
      }
    }
  }
  return defaultProducts;
}

// Create the writable store
export const products = writable(loadProducts());

// Subscribe to changes and save to localStorage
if (browser) {
  products.subscribe(value => {
    try {
      localStorage.setItem('bluewave-products', JSON.stringify(value));
      console.log('Products saved to localStorage:', value.length, 'items');
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  });
}

// Helper functions
export const productStore = {
  // Add a new product
  add: (product) => {
    console.log('Store: Adding product', product);
    const newProduct = {
      ...product,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    
    products.update(items => {
      const newItems = [...items, newProduct];
      console.log('Store: Updated products list, new count:', newItems.length);
      return newItems;
    });
    return newProduct;
  },

  // Update an existing product
  update: (id, updatedProduct) => {
    console.log('Store: Updating product', id, updatedProduct);
    products.update(items => {
      const newItems = items.map(item => 
        item.id === id 
          ? { ...item, ...updatedProduct, updatedAt: new Date().toISOString() }
          : item
      );
      console.log('Store: Product updated');
      return newItems;
    });
  },

  // Delete a product
  delete: (id) => {
    console.log('Store: Deleting product', id);
    products.update(items => {
      const newItems = items.filter(item => item.id !== id);
      console.log('Store: Product deleted, new count:', newItems.length);
      return newItems;
    });
  },

  // Get a product by ID
  getById: (id) => {
    let product = null;
    products.subscribe(items => {
      product = items.find(item => item.id === id);
    })();
    return product;
  },

  // Reset to default products
  reset: () => {
    products.set(defaultProducts);
  }
};