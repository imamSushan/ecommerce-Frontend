import { FaChevronDown } from "react-icons/fa6";
import './accordion.css'
interface AccordionItemProps {
  item: {
    id: number
    title: string
    content: React.ReactNode
  }
  isOpen: boolean
  onToggle: (id: number) => void
}

export default function AccordionItem({
  item,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={() => onToggle(item.id)}>
        <span>{item.title}</span>

        <FaChevronDown size={12} className={`icon ${isOpen ? "rotate" : ""}`} />
      </button>

      <div className={`accordion-body ${isOpen ? "show" : ""}`}>
        <div className="accordion-content">{item.content}</div>
      </div>
    </div>
  )
}
