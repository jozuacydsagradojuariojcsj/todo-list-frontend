import React from 'react'


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

const FriendsDesktop = () => {
  return (
    <div className='flex flex-col border border-violet-500 w-[150px] overflow-y-scroll'>
        
        {mockFriends.map(() => (
             <div className='size-[44px] border border-red-500'>
                a
             </div>
        ))}
       
    </div>
  )
}

export default FriendsDesktop
