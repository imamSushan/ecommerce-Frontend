//@ts-nocheck
import ProductCard from "./ProductCard"
import {useContext} from "react"
import {ShopContext} from "../../context/ShopContext"
import {Link} from "react-router-dom"

interface HomeCatProps{
  category: "Denim Shirt" | "Luxury Panjabi",
  cover: string
}
export function HomeCat({category,cover}: HomeCatProps) {
  const context = useContext(ShopContext)
  const all_Product = context?.all_Product

  const filtered = []
  for (const item of all_Product) {
    if (item.category === category) {
      filtered.push(item)
      if (filtered.length === 5) break
    }
  }
  // console.log(filtered)
// Luxury Panjabi to luxury-panjabi
  const toSlung=(category: string)=> {
  return category
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
}

  return (
    <>
      <p className="px-4 py-6 lg:text-3xl text-2xl  text-center capitalize ">
        {category}
      </p>
      <section
        className="mx-auto grid w-[95%] max-w-[1500px] gap-4
                    grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4"
      >
        {/* Featured Card */}
        <div
          className="relative col-span-2 row-span-2 overflow-hidden rounded-md
                  lg:col-span-1 lg:row-span-2"
        >
          <img src={cover} alt="" className="h-full w-full object-cover" />
        </div>

        {filtered.map((item, index) => {
          return (
            <ProductCard
              key={index}
              id={item.id}
              img={item.image}
              price={item.price}
              old_Price={item.old_Price}
              variant="homeCard"
            />
          )
        })}
        <Link to={`collections/${toSlung(category)}`}>
          <div className="cursor-pointer flex items-center justify-center rounded-md lg:h-full h-full  bg-[#0000006d]">
            <span className="text-white lg:text-2xl text-xl">view more</span>
          </div>
        </Link>
      </section>
    </>
  )
}
