import { useNavigate } from "react-router";



const mockFriends = [
  'Alice',
  'Bob',
  'Charlie',
  'Diana',
  'Eve',
  'Frank',
  'Grace',
  'Hannah',
  'Ivan',
  'Judy',
  'Kevin',
  'Liam',
  'Mona',
  'Nate',
  'Olivia',
  'Paul',
  'Quincy',
  'Rachel',
  'Steve',
  'Tina',
];

const Friends = () => {

  const navigate = useNavigate();

  return (
    <>
    <div className='flex flex-col border border-black min-w-full flex-grow'>
      <div className="flex flex-row justify-between min-w-full border border-red-500 min-h-[74px] sticky top-0 z-10 bg-white">
        <div>
          back
        </div>
        <div>
          name
        </div>
        <div>
          new message
        </div>
      </div>
      {/* Scrollable Messages */}
      <div className="flex-grow overflow-y-auto">
        <div className="flex flex-col divide-y divide-gray-200">
          {mockFriends.map((friend, index) => (
            <div onClick={() => navigate('/messaging')} key={index} className="p-4">
              {friend}
            </div>
          ))}
        </div>
      </div>
      
    </div>
    </>
    
  )
}

export default Friends
