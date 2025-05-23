
interface DividerProps{
    className?: string;
    textClassName?: string;
    text?: string;
}
const Divider = ({className, text, textClassName} : DividerProps) => {
  return (
    <div className={`flex items-center w-full md:flex md:flex-col md:justify-start md:w-0`}>
      <div className={`flex-1 ${className}`}></div>
      {text && <span className={`px-3 font-noto text-sm ${textClassName}`}>{text}</span>}
      <div className={`flex-1 ${className}`}></div>
    </div>
  )
}

export default Divider