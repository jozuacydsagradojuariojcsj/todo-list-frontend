import React from 'react'

interface ButtonProps{
    className? : string;
    buttonText? :string;
    icon?: React.ReactNode;
}

const Button = ({className, buttonText, icon} : ButtonProps) => {
  return (
    <button className={`${className}`}>
        {icon && <span>{icon}</span>}
        <span>{buttonText}</span>
    </button>
  )
}

export default Button