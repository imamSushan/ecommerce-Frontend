import Navbar from "../../routes/Navbar"
import {IoCloseCircleOutline} from "react-icons/io5"
interface SidebarUIprops {
  isMenuOpen: boolean
  setIsMenuOpen: () => void
}
export function SidebarUI({isMenuOpen, setIsMenuOpen}: SidebarUIprops) {
  return (
    <>
      <aside
        className={`xl:hidden fixed h-full min-w-full bg-(--bg) top-0 left-0 z-1001 transition-all duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className=" min-w-65">
          {/* Close Button */}
          <div className="flex justify-end text-black">
            <button onClick={setIsMenuOpen} className="p-2 cursor-pointer">
              <IoCloseCircleOutline size={24} />
            </button>
          </div>

          {/* Categories */}
          <ul>
            <Navbar onClick={setIsMenuOpen} /> 
          </ul>
        </div>
      </aside>
    </>
  )
}
