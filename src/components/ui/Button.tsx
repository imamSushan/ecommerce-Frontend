import "./button.css"

interface ButtonProps {
  children: React.ReactNode
  // variant: string
  variant: "addToCart" | "buy"

  size?: "md" | "lg"
  onClick?: () => void
  isLoading?: boolean
}
export function Button({children, variant, onClick}: ButtonProps) {
  return (
    <button onClick={onClick} className={`btn btn-${variant}`}>
      {children}
    </button>
  )
}
