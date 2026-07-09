//@ts-nocheck
import {ShopContext} from "../../context/ShopContext"
import {useContext} from "react"
import {FiX} from "react-icons/fi"
import {Button} from "./Button"
import {CartItems} from "./CartItems"
import { Link } from "react-router-dom"
interface CartSidebarUIprops {
  isCartOpen: boolean
  setIsCartOpen: () => void
}
export default function CartSidebarUI({
  isCartOpen,
  setIsCartOpen,
}: CartSidebarUIprops) {
  const {getTotalCartAmount, getTotalCartItems} = useContext(ShopContext)

  return (
    <>
      <div
        className={`fixed inset-0 bg-[#0000006d] z-11110 ${
          isCartOpen ? "block" : "hidden"
        }`}
        onClick={setIsCartOpen}
      />

      <div
        className={`fixed top-0 right-0 h-full bg-(--bg) lg:w-100 md:w-100 w-full z-11111 ${
          isCartOpen ? "block" : "hidden"
        }`}
      >
        <div className="bg-(--button-bg)  ">
          <p className="relative py-3 text-xs font-semibold text-center text-white">
            YOUR CART
            <span className="bg-white text-(--button-bg) px-2.5 py-1.5 rounded-[50%] ml-2 ">
              {getTotalCartItems()}
            </span>
            <FiX
              onClick={setIsCartOpen}
              className="absolute inline-flex text-xl cursor-pointer right-3 "
            />
          </p>
        </div>
        {/* cartContent */}
        <CartItems />
        {/* cart footer */}
        <div className="relative">
          <hr className="text-gray-300" />
          <strong className="inline p-1 ml-4">SubTotal :</strong>
          <p className="absolute right-0 inline-flex p-1 mr-3">
            TK: {getTotalCartAmount()}
          </p>
          <div className="px-4 mt-7">
          <Link to="/cart"><Button variant="addToCart" onClick={setIsCartOpen}>VIEW CART</Button></Link> 
          <Button variant="buy">CHECKOUT</Button>
          </div>
        </div>
      </div>
    </>
  )
}
