import {Link} from "react-router-dom"
import style from "./navbar.module.css"
import React from "react"
export default function Navbar({onClick}: {onClick: () => void}) {
  const {categoryList} = style
  return (
    <React.Fragment>
      <div className={categoryList}>
        <p>Shirt</p>
        <ul>
          <li>
            <Link to="/collections/denim-shirt" onClick={onClick}>
              Denim Shirt
            </Link>
            <Link to="/collections/solid-shirt" onClick={onClick}>
              Solid Shirt
            </Link>
            <Link to="/collections/checked-shirt" onClick={onClick}>
              Checked Shirt
            </Link>
            <Link to="/collections/cuban-shirt" onClick={onClick}>
              Cuban Shirt
            </Link>
          </li>
        </ul>
      </div>

      <div className={categoryList}>
        <p>Panjabi</p>
        <ul>
          <li>
            <Link to="">Kabli</Link>
            <Link to="/collections/luxury-panjabi" onClick={onClick}>
              Luxury Panjabi
            </Link>
          </li>
        </ul>
      </div>
      <div className={categoryList}>
        <p>Pant</p>
        <ul>
          <li>
            <Link to="">Formanl Pant</Link>
            <Link to="">Denim Pant</Link>
            <Link to="">Pajama</Link>
            <Link to="">Bootcut Pant</Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}
