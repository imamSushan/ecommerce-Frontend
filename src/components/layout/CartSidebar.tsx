//@ts-nocheck
import {useState} from "react"
import {CiShoppingCart} from "react-icons/ci"
import CartSidebarUI from "../ui/CartSidebarUI"
import {useContext} from "react"
import {ShopContext} from "../../context/ShopContext"
export function CartSidebar() {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
  const {getTotalCartItems} = useContext(ShopContext)

  return (
    <>
      <button onClick={() => setIsCartOpen(true)}>
        <div className="relative">
          <CiShoppingCart className=" text-black p-2 text-[38px]   cursor-pointer " />
          {getTotalCartItems() > 0 && (
            <span className="  text-white text-sm absolute top-0 right-0 bg-(--button-bg) px-1.5 py-0.3 rounded-[50%] ml-2">
              {getTotalCartItems()}
            </span>
          )}
        </div>
      </button>
      {/* CartSidebarUI */}

      <CartSidebarUI
        isCartOpen={isCartOpen}
        setIsCartOpen={() => setIsCartOpen(false)}
      />
    </>
  )
}
