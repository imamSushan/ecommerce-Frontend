import {useState} from "react"
import Navbar from "../../routes/Navbar"
import Sidebar from "./Sidebar"
import ActionItem from "./BottomBar"
import logo from "../../assets/images/branding/logo.png"
import {FaUser, FaMagnifyingGlass, FaPhone, FaHouse} from "react-icons/fa6"
import {FaAngleDown} from "react-icons/fa"
import {IoIosSearch} from "react-icons/io"
import {CiUser} from "react-icons/ci"
import {CartSidebar} from "./CartSidebar"
export default function Header() {
  const [isMouseHover, setMouseHover] = useState<boolean>(false)

  return (
    <>
      {/* header */}
      <header className="fixed top-0 left-0 z-50 w-full bg-(--bg)  border-b pl-3 pr-3">
        <div>
          <div className="flex items-center justify-between px-4 py-2">
            {/* sidebar */}
            <Sidebar />

            {/* Logo */}
            <div>
              <img
                src={logo}
                alt="logo"
                className="w-auto h-11 mix-blend-multiply"
              />
            </div>

            <div className="items-center hidden lg:flex">
              {/* shop */}
              <div
                className="items-center hidden h-10 cursor-pointer lg:inline-flex "
                onMouseOver={() => setMouseHover(true)}
                onMouseLeave={() => setMouseHover(false)}
              >
                <p>shop</p>
                <FaAngleDown />
              </div>

              {/* Search */}
              <div className="hidden lg:flex items-center ml-4 w-125 max-w-162.5">
                <input
                  type="search"
                  placeholder="search product"
                  className="w-full px-4 py-2 bg-(--bg) outline-none text-[12px] border-solid border border-(--border-color) text-[#121212"
                />
              </div>

              {/* Search Button */}
              <button className="hidden px-3 py-2 ml-2 text-white rounded-md cursor-pointer lg:block xl:block bg-(--button-bg)">
                <IoIosSearch className="text-[20px]" />
              </button>
            </div>
            {/* Icons */}
            <div className="flex">
              {/* CartSidebarUI */}
              <CartSidebar />

              <CiUser className="hidden lg:block  text-black text-[38px]  p-2 cursor-pointer " />
            </div>
          </div>
        </div>
        <div
          className={` m-auto h-auto shadow-(--shadow) flex justify-center gap-5 w-full absolute py-4 bg-(--bg) top-12 z-1111 ${
            isMouseHover ? "block" : "hidden"
          }`}
          onMouseOver={() => setMouseHover(true)}
          onMouseLeave={() => setMouseHover(false)}
        >
          <Navbar onClick={() => setMouseHover(false)} />
        </div>
      </header>
      {/* shop bar */}

      {/* Mobile Bottom Action Bar */}
      <div className="fixed z-1111 bottom-0 left-0 flex items-center justify-between w-full bg-white border-t lg:hidden ">
        <ActionItem icon={<FaHouse />} label="Home" />
        <ActionItem icon={<FaMagnifyingGlass />} label="Search" />
        <ActionItem icon={<FaUser />} label="User" />
        <ActionItem icon={<FaPhone />} label="Call Us" />
      </div>
    </>
  )
}
