

interface InputProps {
    placeholder : string;
    className? : string;
}
const LoginInputComponent = ({placeholder,className}:InputProps) => {

  return (
    <input className={`w-full h-10 rounded-md font-noto text-sm p-2 ${className}`} placeholder={placeholder}/>
  )
}

export default LoginInputComponent