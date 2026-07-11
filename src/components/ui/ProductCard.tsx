import React from "react"
import {Link} from "react-router-dom"
import style from "./productCard.module.css"

//self documenting typed
type ImageUrl = string

interface CardProps {
  img: ImageUrl
  title?: string
  price: number
  old_Price: number
  id: number
  variant?: "shopCard" | "homeCard" | "similarCard"
}
const ProductCard: React.FC<CardProps> = (props) => {
  const {img, title, price, old_Price, id, variant} = props
  const {detailsBox, priceBox, productPrice, productOldPrice, productTitle} =style
 
  const articleClass = variant ? (style as any)[variant] : style.shopCard
  return (
    <>
      <article className={articleClass}>
        <Link to={`/product/${id}`}>
          <img
            // onClick={window.scrollTo(0, 0)}
            src={img}
            alt=""
          />
          <div className={detailsBox}>
            <div className={productTitle}>
              <i>{title}</i>
            </div>
            <div className={priceBox}>
              <div className={productPrice}>TK {price.toFixed(2)}</div>
              <div className={productOldPrice}>TK {old_Price.toFixed(2)} </div>
            </div>
          </div>
        </Link>
      </article>
    </>
  )
}
export default ProductCard
