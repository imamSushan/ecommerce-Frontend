//@ts-nocheck
import {ProductOverview} from "../components/ui/ProductOverview"
import {useContext} from "react"
import {ShopContext} from "../context/ShopContext"
import {useParams} from "react-router-dom"
import {useLocation} from "react-router-dom"
import {SizeGuide} from "../utils/sizeGuide"
import {SimilarProduct} from "../components/ui/SimilarProduct"
const ProductPage = function () {
  const location = useLocation()
  // const {all_Product}=useContext(ShopContext)
  const context = useContext(ShopContext)
  const all_Product = context?.all_Product || []
  const {productID} = useParams()
  const product = all_Product.find((e: any) => e.id === Number(productID))
  // console.log(product)

  //set size guide image for different categories
  const {filtered} = SizeGuide(product)
  // console.log(filtered)

  //similar product
  const similarCategory = product?.category
  const similarProduct = []
  for (const item of all_Product) {
    if (product.id !== item.id && item.category === similarCategory) {
      similarProduct.push(item)
    }
    if (similarProduct.length === 4) break
  }
  // console.log(similarProduct)
  return (
    <>
      <div className="w-[95%] max-w-375 mx-auto">
        <ProductOverview
          key={location.pathname}
          product={product}
          src={filtered}
        />
        <SimilarProduct product={similarProduct} />
      </div>
    </>
  )
}
export default ProductPage
