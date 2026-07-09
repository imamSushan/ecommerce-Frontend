export interface Product {
  id: number
  image: string
  featureImage: string
  title: string
  price: number
  old_Price: number
  category: string
  sizes?: string[]
}

export interface CartItem {
  productId: number
  quantity: number
  size: string
}

export interface CartState {
  [key: string]: CartItem
}

export interface ShopContextType {
  all_Product: Product[]
  cartItems: CartItem[]
  addToCartWithSize: (productId: number, size: string, quantity?: number) => boolean
  removeFromCart: (productId: number, size: string) => void
  updateQuantity: (productId: number, size: string, quantity: number) => void
  getTotalCartAmount: () => number
  getTotalCartItems: () => number
  getCartItemsByProduct: (productId: number) => CartItem[]
  clearCart: () => void

}
