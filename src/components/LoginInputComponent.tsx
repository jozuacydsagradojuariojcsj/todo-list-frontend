import React from 'react'

interface InputProps {
    defaultValue : string,
}
const LoginInputComponent = ({defaultValue}:InputProps) => {

  return (
    <input className='w-full h-10 rounded-md font-noto text-sm border border-black' defaultValue={defaultValue}/>
  )
}

export default LoginInputComponent