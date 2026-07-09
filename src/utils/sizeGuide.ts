import shirtSize from "../assets/images/charts/Shirt-Size-CHart.webp"
import cubanShirtSize from "../assets/images/charts/cuban-size-chart.webp"
import panjabiSize from "../assets/images/charts/panjabi-size-chart.webp"

// Returns the appropriate size guide image for a product or category string
export function SizeGuide(productOrCategory: any) {
  const category =
    typeof productOrCategory === "string"
      ? productOrCategory
      : productOrCategory?.category 

  // Use includes for multiple-category matching
  const shirtCategories = ["Denim Shirt", "Checked Shirt", "Solid Shirt"]

  let filtered
  if (shirtCategories.includes(category)) {
    filtered = shirtSize
  } else if (category === "Luxury Panjabi") {
    filtered = panjabiSize
  } else {
    filtered = cubanShirtSize
  }

  return{filtered}
}
