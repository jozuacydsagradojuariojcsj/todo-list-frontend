

interface InputProps {
    placeholder : string;
    className? : string;
    value? : string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
}
const LoginInputComponent = ({placeholder,className, onChange, type}:InputProps) => {

  return (
    <input type={type} onChange={onChange} className={`w-full h-10 rounded-md font-noto text-sm p-2 ${className}`} placeholder={placeholder}/>
  )
}

export default LoginInputComponent