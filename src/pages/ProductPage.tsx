//@ts-nocheck
import {ProductOverview} from "../components/ui/ProductOverview"
import {useContext} from "react"
import {ShopContext} from "../context/ShopContext"
import {useParams} from "react-router-dom"
import {SizeGuide} from "../utils/sizeGuide"
const ProductPage = function () {
  // const {all_Product}=useContext(ShopContext)
  const context = useContext(ShopContext)
  const all_Product = context?.all_Product || []
  const {productID} = useParams()
  const product = all_Product.find((e: any) => e.id === Number(productID))
  //console.log(product)

  //set size guide image for different categories
  const {filtered} = SizeGuide(product)
  // console.log(filtered)

  return <ProductOverview product={product} src={filtered} />
}
export default ProductPage
