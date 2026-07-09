//@ts-nocheck
import styles from "./CartItems.module.css"
import {useContext} from "react"
import {ShopContext} from "../../context/ShopContext"
import {FiTrash2} from "react-icons/fi"

export function CartItems() {
  const {
    all_Product,
    cartItems,
    removeFromCart,
    updateQuantity,
  } = useContext(ShopContext)
  const {container} = styles

  return (
    <div className={container}>
      {cartItems.map((cartItem) => {
        const product = all_Product.find(p => p.id === cartItem.productId)
        if (!product) return null

        const subtotal = product.price * cartItem.quantity

        return (
          <div key={`${cartItem.productId}-${cartItem.size}`}>
            <div className="flex px-2 py-2">
              <img
                src={product.image}
                alt={product.title}
                height="250px"
                width="100px"
                className="rounded-sm"
              />
              <div className="w-full ml-2 ">
                <div className="mt-3">
                  <p className="inline">{product.title}-</p>
                  <span className="">{cartItem.size}</span>
                </div>
                <div className="relative flex items-center mt-3">
                  <p className="font-semibold">
                    TK: {subtotal}
                  </p>
                  <div className="absolute right-0 flex items-center">
                    <FiTrash2
                      onClick={() => removeFromCart(cartItem.productId, cartItem.size)}
                      className="mr-4 text-xl cursor-pointer"
                    />
                    <button
                      className="px-2 py-1.5 bg-gray-200 hover:bg-gray-300 cursor-pointer"
                      onClick={() => updateQuantity(cartItem.productId, cartItem.size, cartItem.quantity + 1)}
                    >
                      +
                    </button>

                    <input
                      type="number"
                      value={cartItem.quantity}
                      min='1'
                      onChange={(event) =>
                        updateQuantity(cartItem.productId, cartItem.size, Number(event.target.value))
                      }
                      // className="w-10 pl-3 border-none outline-none"
                    />
                    <button
                      className="px-2.5 py-1.5 bg-gray-200 hover:bg-gray-300 cursor-pointer"
                      onClick={() => cartItem.quantity > 1 && updateQuantity(cartItem.productId, cartItem.size, cartItem.quantity - 1)}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr className="text-gray-200" />
          </div>
        )
      })}
    </div>
  )
}
