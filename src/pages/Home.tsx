import NewsLetter from "../components/ui/NewsLetter"
import {HomeCat} from "../components/ui/HomeCat"
import Hero from "../components/ui/Hero"
import "../components/ui/hero.css"
import coverDenim from "../assets/images/cover/denim-shirt-cata.webp"
import coverPanjabi from "../assets/images/cover/cate.webp"
function Home() {
  return (
    <div className="mt-15">
      <div className="hero">
        <Hero />
      </div>

      <HomeCat category="Denim Shirt" cover={coverDenim} />
      <HomeCat category="Luxury Panjabi" cover={coverPanjabi} />
      <NewsLetter />
    </div>
  )
}
export default Home
