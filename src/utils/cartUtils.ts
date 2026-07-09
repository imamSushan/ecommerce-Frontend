import type { CartItem } from '../types'

/**
 * Generate unique key for cart item based on productId + size
 */
export const getCartItemKey = (productId: number, size: string): string => {
  return `${productId}_${size}`
}

/**
 * Check if an item already exists in cart
 */
export const isItemInCart = (
  cartItems: CartItem[],
  productId: number,
  size: string
): boolean => {
  return cartItems.some(
    (item) => item.productId === productId && item.size === size
  )
}

/**
 * Find cart item by productId and size
 */
export const findCartItem = (
  cartItems: CartItem[],
  productId: number,
  size: string
): CartItem | undefined => {
  return cartItems.find(
    (item) => item.productId === productId && item.size === size
  )
}

/**
 * Get all items for a specific product (all sizes)
 */
export const getCartItemsByProduct = (
  cartItems: CartItem[],
  productId: number
): CartItem[] => {
  return cartItems.filter((item) => item.productId === productId)
}

/**
 * Calculate total cart quantity
 */
export const getTotalCartQuantity = (cartItems: CartItem[]): number => {
  return cartItems.reduce((total, item) => total + item.quantity, 0)
}

/**
 * Calculate total number of unique items in cart
 */
export const getTotalCartItems = (cartItems: CartItem[]): number => {
  return cartItems.length
}

/**
 * Validate size is valid (non-empty string)
 */
export const isValidSize = (size: string): boolean => {
  return !!(size && size.trim().length > 0)
}

/**
 * Sync cart items to localStorage
 */
export const syncCartToLocalStorage = (cartItems: CartItem[]): void => {
  try {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  } catch (error) {
    console.error('Failed to save cart to localStorage:', error)
  }
}

/**
 * Load cart items from localStorage
 */
export const loadCartFromLocalStorage = (): CartItem[] => {
  try {
    const cart = localStorage.getItem('cart')
    return cart ? JSON.parse(cart) : []
  } catch (error) {
    console.error('Failed to load cart from localStorage:', error)
    return []
  }
}
