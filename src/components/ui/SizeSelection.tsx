import styles from "./sizeSelection.module.css"
import { useState, useEffect } from "react"

type SizeSelectionProps = {
  sizes?: string[]
  onSizeChange?: (size: string) => void
}

export function SizeSelection({ sizes, onSizeChange }: SizeSelectionProps) {
  const [selectedSize, setSelectedSize] = useState("")

  // Default sizes fallback
  const availableSizes = Array.isArray(sizes) && sizes.length > 0 ? sizes : ["S", "M", "L", "XL"]

  useEffect(() => {
    // reset selection when sizes change
    setSelectedSize("")
  }, [sizes?.join(",")])

  const handleSizeChange = (size: string) => {
    setSelectedSize(size)
    onSizeChange?.(size)
  }

  return (
    <form>
      <div className={styles.size_select}>
        <p>SIZE:</p>
        {availableSizes.map((sz) => {
          const id = `size-${sz}`
          return (
            <label key={sz} htmlFor={id}>
              <input
                type="radio"
                name="size"
                id={id}
                value={sz}
                checked={selectedSize === sz}
                onChange={() => handleSizeChange(sz)}
              />
              <span>{sz}</span>
            </label>
          )
        })}
      </div>
    </form>
  )
}
