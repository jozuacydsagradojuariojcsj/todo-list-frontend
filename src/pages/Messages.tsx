import Messaging from '../components/messsagesComponents/Messaging'

const Messages = () => {
  return (
    <div className='flex flex-col border border-red-500 w-full overflow-y-scroll'>
        <div className="flex flex-row border border-yellow-500">
            <Messaging />
        </div>
    </div>
  )
}

export default Messages
