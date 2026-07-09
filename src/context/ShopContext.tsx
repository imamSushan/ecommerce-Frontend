//@ts-nocheck
import {createContext, useEffect, useState} from "react"
import all_Product from "../utils/AllProduct.ts"
import {
  isItemInCart,
  findCartItem,
  getCartItemsByProduct,
  getTotalCartQuantity,
  getTotalCartItems as getTotalItemsCount,
  syncCartToLocalStorage,
  loadCartFromLocalStorage,
} from "../utils/cartUtils.ts"

export const ShopContext = createContext(null)

const ShopContextProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = loadCartFromLocalStorage()
    setCartItems(savedCart)
    setIsLoaded(true)
  }, [])

  // Sync to localStorage whenever cart changes
  useEffect(() => {
    if (isLoaded) {
      syncCartToLocalStorage(cartItems)
    }
  }, [cartItems, isLoaded])

  /**
   * Add product to cart with selected size
   * Returns true if added, false if duplicate and alert shown
   */
  const addToCartWithSize = (productId, size, quantity = 1) => {
    if (!size || size.trim().length === 0) {
      alert("Please select a size before adding to cart")
      return false
    }

    const exists = isItemInCart(cartItems, productId, size)

    if (exists) {
      alert(`This product is already in your cart with size ${size}`)
      return false
    }

    // Add new item
    const newItem = {
      productId,
      quantity,
      size,
    }

    setCartItems((prev) => [...prev, newItem])
    return true
  }

  /**
   * Remove item from cart by productId and size
   */
  const removeFromCart = (productId, size) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => !(item.productId === productId && item.size === size),
      ),
    )
  }

  /**
   * Update quantity of a specific cart item
   */
  const updateQuantity = (productId, size, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, size)
      return
    }

    setCartItems((prev) =>
      prev.map((item) =>
        item.productId === productId && item.size === size
          ? {...item, quantity}
          : item,
      ),
    )
  }

  /**
   * Calculate total amount for all cart items
   */
  const getTotalCartAmount = () => {
    return cartItems.reduce((total, cartItem) => {
      const product = all_Product.find((p) => p.id === cartItem.productId)
      if (product) {
        total += product.price * cartItem.quantity
      }
      return total
    }, 0)
  }

  /**
   * Get total number of unique items in cart
   */
  const getTotalCartItems = () => {
    return getTotalItemsCount(cartItems)
  }

  /**
   * Get all cart items for a specific product (all sizes)
   */
  const getCartItemsByProductId = (productId) => {
    return getCartItemsByProduct(cartItems, productId)
  }

  /**
   * Clear entire cart
   */
  const clearCart = () => {
    setCartItems([])
  }

  const contextValue = {
    all_Product,
    cartItems,
    addToCartWithSize,
    removeFromCart,
    updateQuantity,
    getTotalCartAmount,
    getTotalCartItems,
    getCartItemsByProduct: getCartItemsByProductId,
    clearCart,
  }

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  )
}
export default ShopContextProvider
