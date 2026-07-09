interface ActionItemProps {
  icon: React.ReactNode
  label: string
  onclick?: () => void
}

function ActionItem({icon, label}: ActionItemProps): React.ReactElement {
  return (
    <button className="flex flex-col items-center text-[12px] justify-center flex-1 py-2 px-0 transition cursor-pointer bg-(--bg)">
      {icon}
      <span className="mt-1 text-[12px] ">{label}</span>
    </button>
  )
}

export default ActionItem
