// Category-specific accordion content
export const categoryAccordionContent = {
  "Denim Shirt": {
    details: (
      <>
        <p>
          Made of premium grade denim fabric. Stitched with intensive care.
          Slim-fit shirt in woven denim with an easy-iron finish.
        </p>
        <ul>
          <li>100% Cotton Denim (Imported).</li>
          <li>Slim fit design.</li>
          <li>Spread collar, classic button placket.</li>
          <li>Long sleeves with adjustable buttoning at cuffs.</li>
          <li>Gently rounded hem.</li>
          <li>Easy Exchange & Return policy.</li>
        </ul>
        <p>
          <strong>Care:</strong> Wash with similar color. Do not bleach. Line
          dry recommended.
        </p>
        <p>
          <strong>
            Product color may slightly vary due to photographic lighting.
          </strong>
        </p>
      </>
    ),
  },
  "Solid Shirt": {
    details: (
      <>
        <p>
          Premium solid cotton shirt. Crafted with care for everyday comfort.
          Classic fit with superior fabric quality.
        </p>
        <ul>
          <li>100% Premium Grade Cotton.</li>
          <li>Classic fit design.</li>
          <li>Turndown collar, button placket.</li>
          <li>Full-length sleeves with cuff buttons.</li>
          <li>Straight hem.</li>
          <li>Easy Exchange & Return policy.</li>
        </ul>
        <p>
          <strong>Care:</strong> Wash separately or with similar colors. Do not
          bleach. Tumble dry low.
        </p>
        <p>
          <strong>
            Product color may slightly vary due to photographic lighting.
          </strong>
        </p>
      </>
    ),
  },
  "Checked Shirt": {
    details: (
      <>
        <p>
          Stylish checked cotton shirt with intricate pattern. Designed for a
          modern look with comfort. Premium woven fabric.
        </p>
        <ul>
          <li>100% Cotton with checked pattern.</li>
          <li>Slim fit silhouette.</li>
          <li>Classic collar with pattern matching.</li>
          <li>Long sleeves with adjustable cuffs.</li>
          <li>Curved hem.</li>
          <li>Easy Exchange & Return policy.</li>
        </ul>
        <p>
          <strong>Care:</strong> Wash with similar colors. Do not bleach. Iron
          on medium heat.
        </p>
        <p>
          <strong>
            Product color and pattern may slightly vary due to photographic
            lighting.
          </strong>
        </p>
      </>
    ),
  },
  "Luxury Panjabi": {
    details: (
      <>
        <p>
          Luxurious panjabi crafted from finest fabrics. Traditional design with
          modern comfort. Perfect for any occasion.
        </p>
        <ul>
          <li>100% Finest quality fabric.</li>
          <li>Traditional comfortable fit.</li>
          <li>Hand-finished embroidery details.</li>
          <li>Full-length sleeves.</li>
          <li>Authentic traditional design.</li>
          <li>Easy Exchange & Return policy.</li>
        </ul>
        <p>
          <strong>Care:</strong> Dry clean recommended or hand wash gently. Do
          not machine wash. Do not bleach.
        </p>
        <p>
          <strong>
            Product color and embroidery may slightly vary due to handmade
            nature and photographic lighting.
          </strong>
        </p>
      </>
    ),
  },
}

export const getAccordionData = (category: string) => {
  return [
    {
      id: 1,
      title: "Product Details",
      content: categoryAccordionContent[category]?.details,
      // categoryAccordionContent[
      //   category as keyof typeof categoryAccordionContent
      // ]?.details || categoryAccordionContent["Denim Shirt"].details,
    },
    {
      id: 2,
      title: "Delivery",
      content: (
        <p>
          Delivery usually takes 2-5 working days depending on your location.
        </p>
      ),
    },
    {
      id: 3,
      title: "Exchange & Return Policy",
      content: (
        <p>
          Returns are accepted within 7 days. Product must be unused with
          original tags.
        </p>
      ),
    },
  ]
}
