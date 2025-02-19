

interface LoginProps {
    buttonText: string,
}

const LoginButton = ({buttonText}: LoginProps) => {
  return (
    <button className='w-full h-11 border border-green-700 font-noto text-base rounded-lg'>{buttonText}</button>
  )
}

export default LoginButton