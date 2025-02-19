
interface CenterProps{
    className? :string;
    children?: React.ReactNode
}
const Center = ({className, children} : CenterProps) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>{children}</div>
  )
}

export default Center