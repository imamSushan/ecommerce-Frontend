//@ts-nocheck
import styles from "./productOverview.module.css"
import {SizeSelection} from "./SizeSelection"
import {Button} from "./Button"
import {CiShoppingCart} from "react-icons/ci"
import {useState, useContext} from "react"
import {ShopContext} from "../../context/ShopContext"
import Accordion from "./accordion/Accordion"
export function ProductOverview({product, src}: {product: any; src: string}) {
  const [largeImage, setLargeImage] = useState(product.image)
  const [selectedSize, setSelectedSize] = useState("")
  const {addToCartWithSize} = useContext(ShopContext)

  const handleSmallImageClick = (imageSrc: string) => {
    setLargeImage(imageSrc)
  }

  const handleSizeChange = (size: string) => {
    setSelectedSize(size)
  }

  const handleAddToCart = () => {
    addToCartWithSize(product.id, selectedSize, 1)
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.left_section}>
            <div className={styles.small_images_box}>
              <img
                src={product.image}
                alt=""
                onClick={() => handleSmallImageClick(product.image)}
                className="cursor-pointer"
              />
              <img
                src={product.featureImage}
                alt=" "
                onClick={() => handleSmallImageClick(product.featureImage)}
                className="cursor-pointer"
              />
              <img
                src={src}
                alt=" "
                onClick={() => handleSmallImageClick(src)}
                className="cursor-pointer"
              />
            </div>
            <div className={styles.large_image_box}>
              <img src={largeImage} alt=" " />
            </div>
          </div>
          <div className={styles.right_section}>
            <p className={styles.title}>{product.title}</p>
            <p className={styles.review}>no reviews yet</p>
            <div className={styles.priceBox}>
              <p className={styles.price}>Tk {product.price.toFixed(2)}</p>
              <del className={styles.oldPrice}>
                Tk{product.old_Price.toFixed(2)}
              </del>
            </div>
            <SizeSelection
              sizes={product?.sizes}
              onSizeChange={handleSizeChange}
            />
            <div className="m-auto mt-7">
              <Button onClick={handleAddToCart} variant="addToCart">
                <CiShoppingCart className="mr-2 text-xl" />
                <span className="text-sm">ADD TO CART</span>
              </Button>

              <Button
                variant="buy"
                children="buy now"
                onClick={() => alert("functionality might add later")}
              />
            </div>
            <Accordion category={product?.category} />
          </div>
        </div>
      </div>
    </>
  )
}
