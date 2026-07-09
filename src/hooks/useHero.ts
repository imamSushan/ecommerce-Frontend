import {useState} from "react"
import {slides} from "../utils/HeroSlide"
export function useHero() {
  const [current, setCurrent] = useState(0)

  function nextSlide() {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  function prevSlide() {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return [current, nextSlide, prevSlide]
}
