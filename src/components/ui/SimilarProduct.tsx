import ProductCard from "./ProductCard"

export function SimilarProduct({product}: {product: object[]}) {
  return (
    <>
      <div className="mt-4 flex lg:justify-end md:justify-end justify-start">
        <p className="lg:text-4xl text-2xl w-[350px] ">
          Similar Product
        </p>
      </div>
      <section className="w-full mt-10 grid grid-cols-2 gap-4 mx-auto lg:inline-flex lg:flex-col lg:items-end md:inline-flex md:flex-col md:items-end">
        {product.map((item: any, index) => {
          return (
            <ProductCard
              key={index}
              id={item.id}
              img={item.image}
              title={item.title}
              price={item.price}
              old_Price={item.old_Price}
              variant="similarCard"
            />
          )
        })}
      </section>
    </>
  )
}
