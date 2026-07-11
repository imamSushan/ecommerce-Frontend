// Category-specific accordion content
export const categoryAccordionContent = {
  "Denim Shirt": {
    details: (
      <>
        <p>
          VOYAGE denim's This shirt can be dressed up or down depending on you
          mood, the Voyage Denim Shirt is sure to turn heads! Pair these Denim
          with your favourite chinos,or jeans for a timeless and versatile look.
        </p>
        <ul>
          <li>152.8 GSM Denim/ Jeans fabrics (Imported).</li>
          <li>Never narrow after wash at home.</li>
          <li>Y Fit/Slim fit collar shirt.</li>
          <li>Turn-down collar, classic button placket.</li>
          <li>
            Long sleeves with adjustable buttoning at cuffs and a sleeve placket
            with a link button.
          </li>
          <li>Gently rounded hem.</li>
          <li>Make Voyage's own factory.</li>
          <li>Easy exchange and return policy.</li>
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
          Made of premium grade cotton. Stitched with intensive care. Slim-fit
          shirt in woven fabric with an easy-iron finish.
        </p>
        <ul>
          <li>Oxford cotton fabrics(Imported).</li>
          <li>Y Fit/Slim fit collar shirt.</li>
          <li>Turn-down collar, classic button placket.</li>
          <li>
            Long sleeves with adjustable buttoning at cuffs and a sleeve placket
            with a link button.
          </li>
          <li>Gently rounded hem.</li>
          <li>Make Voyage's own factory.</li>
          <li>Easy exchange and return policy.</li>
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
  "Checked Shirt": {
    details: (
      <>
        <p>
          Made of premium grade cotton. Stitched with intensive care. Slim-fit
          shirt in woven fabric with an easy-iron finish.
        </p>
        <ul>
          <li>100% cotton fabric (Imported).</li>
          <li>Y Fit/Slim fit collar shirt.</li>
          <li>Turn-down collar, classic button placket.</li>
          <li>
            Long sleeves with adjustable buttoning at cuffs and a sleeve placket
            with a link button.
          </li>
          <li>Gently rounded hem.</li>
          <li>Make Voyage's own factory.</li>
          <li>Easy exchange and return policy.</li>
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
  "Cuban Shirt": {
    details: (
      <>
        <p>
          Made of premium grade cotton. Stitched with intensive care. Slim-fit
          shirt in woven fabric with an easy-iron finish.
        </p>
        <ul>
          <li> 100% cotton fabrics (Imported).</li>
          <li>Y Fit/Slim fit collar shirt.</li>
          <li>Turn-down collar, classic button placket.</li>
          <li>
            Long sleeves with adjustable buttoning at cuffs and a sleeve placket
            with a link button.
          </li>
          <li>Bleached Washed.</li>
          <li>Make Voyage's own factory.</li>
          <li>Easy exchange and return policy.</li>
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
  "Luxury Panjabi": {
    details: (
      <>
        <p>
          <strong> Voyage Panjabis</strong> are perfect for any occasion
          experience the ultimate in comfort, style, and sophistication with
          Voyage Elite. Voyage Indian imported cotton Panjabi for men is the
          epitome of elegance and sophistication.
        </p>
        <ul>
          <li>Indian Soft cotton fabrics.</li>
          <li>Handcuff style.</li>
          <li>Premium Snap Button.</li>
          <li>Best quality embroidery with “Well Embroidery Thread”.</li>
          <li>Yarn count: 26, enzyme and silicone wash.</li>
          <li>Made in own factory in Bangladesh</li>
          <li>Quality controlled(QC) finishing</li>
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
      //@ts-ignore
      content: categoryAccordionContent[category]?.details,
      // categoryAccordionContent[
      //   category as keyof typeof categoryAccordionContent
      // ]?.details || categoryAccordionContent["Denim Shirt"].details,
    },
    {
      id: 2,
      title: "Delivery",
      content: (
        <>
          <ul>
            <li>
              <strong>Inside Dhaka:</strong> Home delivery within 24-48hours &
              delivery charge BDT 70.(COD available)
            </li>
            <li>
              <strong>Sub Dhaka Area:</strong> Home delivery within 24-48hours &
              delivery charge BDT 100.(COD available){" "}
            </li>
            <li>
              <strong>Outside Dhaka:</strong> Home delivery within 24-72hours &
              delivery charge BDT 130.(COD available){" "}
            </li>
          </ul>
          <strong>
            Delivery time may vary due to weather condition or any internel
            disruptions within the country.
          </strong>
        </>
      ),
    },
    {
      id: 3,
      title: "Exchange & Return Policy",
      content: (
        <>
          <p>
            Check the product while the delivery man is at your place. If the
            product does not meet your expectations, please return it by the
            delivery man with delivery charges only.
          </p>
          <br />
          <p>
            <strong>Please note :</strong>Colors may appear slightly different
            due to lighting during photography or variations in your screen
            settings.
          </p>
          <p>
            Thank you for adhering to our policy and helping us maintain a
            seamless shopping experience.
          </p>
        </>
      ),
    },
  ]
}
