import React from 'react'
interface DividerProps{
    className?: string;
    text?: string;
}
const Divider = ({className, text} : DividerProps) => {
  return (
    <div className={`flex items-center w-full ${className}`}>
      <div className="flex-1 border border-gray-500"></div>
      {text && <span className="px-3 text-gray-600 font-noto text-sm">{text}</span>}
      <div className="flex-1 border border-gray-500"></div>
    </div>
  )
}

export default Divider