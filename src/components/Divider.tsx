
interface DividerProps{
    className?: string;
    textClassName?: string;
    text?: string;
}
const Divider = ({className, text, textClassName} : DividerProps) => {
  return (
    <div className={`flex items-center w-full ${className}`}>
      <div className="flex-1 border border-gray-500"></div>
      {text && <span className={`px-3 font-noto text-sm ${textClassName}`}>{text}</span>}
      <div className="flex-1 border border-gray-500"></div>
    </div>
  )
}

export default Divider