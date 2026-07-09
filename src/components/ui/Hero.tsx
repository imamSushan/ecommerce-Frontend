//@ts-nocheck
import {slides} from "../../utils/HeroSlide"
import {useEffect} from "react"
import {useHero} from "../../hooks/useHero"
import "./hero.css"
export default function Hero() {
  const [current, prevSlide, nextSlide] = useHero()

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000)

    return () => clearInterval(timer)
  })

  return (
    <section>
      <div
        className="hero-track"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div className="hero-slide" key={index}>
            <img src={slide.image} alt="" />
          </div>
        ))}
      </div>

      <button className="nav prev" onClick={prevSlide}>
        &#10094;
      </button>

      <button className="nav next" onClick={nextSlide}>
        &#10095;
      </button>
    </section>
  )
}
