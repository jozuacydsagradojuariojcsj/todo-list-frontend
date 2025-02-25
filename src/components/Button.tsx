import React from 'react'

interface ButtonProps{
    className? : string;
    buttonText? :string;
    icon?: React.ReactNode | string;
    textClass? :string;
    iconClassName? : string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    loading?: boolean;
}

const Button = ({className, buttonText, icon, textClass, iconClassName, onClick, loading = false} : ButtonProps) => {
  return (
    <button disabled={loading} onClick={onClick} className={`flex items-center justify-center font-noto text-base rounded-lg ${className}`}>
      {loading ? (
        <span className={`font-noto ${textClass}`}>Loading...</span>
      ) : (
        <>
          {icon && typeof icon === "string" ? (
            <img src={icon} alt="icon" className={iconClassName} />
          ) : (
            icon
          )}
          <span className={`font-noto ${textClass}`}>{buttonText}</span>
        </>
      )}
    </button>
  )
}

export default Button