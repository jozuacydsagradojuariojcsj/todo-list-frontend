import React from 'react'

interface ButtonProps{
    className? : string;
    buttonText? :string;
    icon?: React.ReactNode | string;
    textClass? :string;
    iconClassName? : string;
}

const Button = ({className, buttonText, icon, textClass, iconClassName} : ButtonProps) => {
  return (
    <button className={`flex items-center justify-center font-noto text-base rounded-lg ${className}`}>
      {icon && typeof icon === "string" ? (
        <img src={icon} alt="icon" className={`${iconClassName}`} />
      ) : (
        icon
      )}
      <span className={`font-noto ${textClass}`}>{buttonText}</span>
    </button>
  )
}

export default Button