import {useState} from "react"
import AccordionItem from "./AccordionItem"
import {getAccordionData} from "../../../utils/accordionData.tsx"
import "./accordion.css"

interface AccordionProps {
  category?: string
}

export default function Accordion({category}: AccordionProps) {
  const [activeId, setActiveId] = useState<number | null>(1)
  const accordionData = getAccordionData(category)

  const handleToggle = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="accordion">
      {accordionData.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={activeId === item.id}
          onToggle={handleToggle}
        />
      ))}
    </div>
  )
}
