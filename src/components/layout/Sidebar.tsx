import {useState} from "react"
import {FaBars} from "react-icons/fa6"
import {SidebarUI} from "../ui/SidebarUI"

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  return (
    <>
    {/* humburger icon */}
      <button
        className="text-xl cursor-pointer lg:hidden"
        onClick={() => setIsMenuOpen(true)}
      >
        <FaBars />
      </button>
      {/* SidebarUI */}
      <SidebarUI
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={() => setIsMenuOpen(false)}
      />
    </>
  )
}
export default Sidebar
