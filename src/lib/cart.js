const CART_KEY = 'mega_enquiry_cart';

/**
 * Get all products from the cart
 * @returns {Array} Array of product objects
 */
export function getCart() {
  if (typeof window === 'undefined') return [];

  try {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.error('Error reading cart:', error);
    return [];
  }
}

/**
 * Add a product to the cart
 * @param {Object} product - Product object with name, description, specs
 * @returns {boolean} True if added, false if already exists
 */
export function addToCart(product) {
  if (typeof window === 'undefined') return false;

  try {
    const cart = getCart();

    // Check if product already exists (by name)
    const exists = cart.some(item => item.name === product.name);

    if (exists) {
      return false; // Product already in cart
    }

    // Add product to cart
    cart.push({
      name: product.name,
      description: product.description,
      specs: product.specs || []
    });

    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    return true;
  } catch (error) {
    console.error('Error adding to cart:', error);
    return false;
  }
}

/**
 * Remove a product from the cart by name
 * @param {string} productName - Name of the product to remove
 * @returns {boolean} True if removed successfully
 */
export function removeFromCart(productName) {
  if (typeof window === 'undefined') return false;

  try {
    let cart = getCart();
    cart = cart.filter(item => item.name !== productName);
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    return true;
  } catch (error) {
    console.error('Error removing from cart:', error);
    return false;
  }
}

/**
 * Clear all products from the cart
 */
export function clearCart() {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(CART_KEY);
  } catch (error) {
    console.error('Error clearing cart:', error);
  }
}

/**
 * Get the number of products in the cart
 * @returns {number} Number of products
 */
export function getCartCount() {
  return getCart().length;
}

/**
 * Format cart products for Requirements field
 * @returns {string} Formatted string with all products
 */
export function formatCartForRequirements() {
  const cart = getCart();

  if (cart.length === 0) return '';

  let formatted = 'Enquire On - [\n';

  cart.forEach((product, index) => {
    formatted += ` - Product ${index + 1}: ${product.name}\n`;
    if (product.description) {
      formatted += `   Description: ${product.description}\n`;
    }
    if (product.specs && product.specs.length > 0) {
      formatted += `   Specifications: ${product.specs.join(', ')}\n`;
    }
    if (index < cart.length - 1) {
      formatted += '\n'; // Add spacing between products
    }
  });

  formatted += ']';
  return formatted;
}
