import React from 'react'
import NavBar from '../components/NavBar'
import Friends from '../components/messsagesComponents/Friends'
import Messaging from '../components/messsagesComponents/Messaging'

const Messages = () => {
  return (
    <div className='flex flex-col border border-red-500 h-screen w-screen'>
      <div className='flex flex-row h-screen w-screen border border-yellow-500'>
        <Friends/>
        <Messaging/>

      </div>
      <NavBar/>
      
    </div>
  )
}

export default Messages
