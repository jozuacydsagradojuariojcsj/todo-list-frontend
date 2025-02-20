import React from 'react'

interface TextProps{
    text: string;
    className?: string
}
const Text = ({text, className}:TextProps) => {
  return (
    <p className={`${className}`}>{text}</p>
  )
}

export default Text