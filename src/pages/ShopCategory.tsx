//@ts-nocheck
import {useContext} from "react"
import {ShopContext} from "../context/ShopContext"
import ProductCard from "../components/ui/ProductCard"
import style from "../components/ui/productCard.module.css"

const ShopCategory = (props: {category: string}) => {
  const context = useContext(ShopContext)
  const all_Product = context?.all_Product || []

  // Check if there are products in this category
  const categoryProducts = all_Product.filter(
    (item: any) => props.category === item.category,
  )
  const {product_grid} = style
  return (
    <div className="mt-15">
      {categoryProducts.length > 0 && (
        <p className="px-4 py-6 lg:text-3xl text-2xl  text-center text-[#B36D67] capitalize ">
          {props.category}
        </p>
      )}
      <div className={product_grid}>
        {categoryProducts.map((item: any, index) => (
          <ProductCard
            key={index}
            id={item.id}
            img={item.image}
            title={item.title}
            price={item.price}
            old_Price={item.old_Price}
            variant="shopCard"
          />
        ))}
      </div>
    </div>
  )
}
export default ShopCategory
