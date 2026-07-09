//@ts-nocheck
import {CartItems} from "../components/ui/CartItems"
import {useContext} from "react"
import {ShopContext} from "../context/ShopContext"

export function Cart() {
  const {getTotalCartAmount} = useContext(ShopContext)
  return (
    <div className="m-auto mt-20 max-w-200">
      <div className="px-3">
        <h1 className="text-4xl ">Your cart</h1>
        <div className="relative flex mb-5 text-sm text-gray-400">
          <p>product details</p>
          <p className="absolute right-3 ">Quantity</p>
        </div>
        <hr className="mb-4 text-gray-300" />
      </div>
      <div className="h-auto overflow-scroll scrollbar-none max-h-80">
        <CartItems />
      </div>
      <div className="mt-6 text-center lg:text-end">
        <strong className="inline text-sm">Estimated total</strong>
        <span className="ml-5 text-sm">Tk {getTotalCartAmount()} BDT</span>
        <p className="mt-5 text-xs text-gray-400">
          Taxes,discounts and shipping calculated at checkout
        </p>
        <button className="w-50 bg-(--button-bg) text-white py-2 mt-3 cursor-pointer">
          Checkout
        </button>
      </div>
    </div>
  )
}
