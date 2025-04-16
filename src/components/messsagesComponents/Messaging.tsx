import React, { useEffect } from 'react'
import Cookies from "js-cookie";

const messages= [
  { id: 1, senderId: 1, text: "Hey! How are you?"},
  { id: 2, senderId: 2, text: "I'm good! What about you?"},
  { id: 3, senderId: 1, text: "Just working on a project."},
  { id: 1, senderId: 1, text: "Hey! How are you?"},
  { id: 2, senderId: 2, text: "I'm good! What about you?"},
  { id: 3, senderId: 1, text: "Just working on a project."},
  { id: 1, senderId: 1, text: "Hey! How are you?"},
  { id: 2, senderId: 2, text: "I'm good! What about you?"},
  { id: 3, senderId: 1, text: "Just working on a project."},
  { id: 1, senderId: 1, text: "Hey! How are you?"},
  { id: 2, senderId: 2, text: "I'm good! What about you?"},
  { id: 3, senderId: 1, text: "Just working on a project."},
  { id: 1, senderId: 1, text: "Hey! How are you?"},
  { id: 2, senderId: 2, text: "I'm good! What about you?"},
  { id: 3, senderId: 1, text: "Just working on a project."},
  { id: 1, senderId: 1, text: "Hey! How are you?"},
  { id: 2, senderId: 2, text: "I'm good! What about you?"},
  { id: 3, senderId: 1, text: "Just working on a project."},
];

const currentUserId = 1;




const Messaging = () => {

  

  useEffect(() => {
    const userInfo = Cookies.get("userInfo");
    console.log(userInfo);
    if (userInfo) {
      const parsedUser = JSON.parse(userInfo); // Parse JSON
      console.log("whwhwhwhw",parsedUser.userid) 
    }
  })

  return (
    <div className='flex flex-col w-full justify-end flex-1 m-1'>
      <div className='flex flex-col justify-end'>
      {messages && messages.length > 1 ? (
        messages.map((message) => (
          <div key={message.id} className={`flex m-2 ${message.senderId === currentUserId ? "justify-end" : "justify-start"}`}>
            <div className='border border-blue-400 rounded-xl px-2'>
              {message.text}
            </div>
          </div>

        ))
      ):(
        <div>
          asdasdasd
        </div>
      )}

      </div>
      <div className=''>
        asdsad
      </div>
      
    </div>
  )
}

export default Messaging
