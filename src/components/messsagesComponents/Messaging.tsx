import { useEffect, useState } from "react";
import { GetMessage } from "../../types/messageType";
import { getSocket } from "../../services/socket";
import { useGetMessageQuery } from "../../services/messageApi";
import { useLocation } from "react-router"; 


// const messages = [
//   { id: 1, senderId: 1, text: "Hey! How are you?" },
//   { id: 2, senderId: 2, text: "I'm good! What about you?" },
//   { id: 3, senderId: 1, text: "Just working on a project." },
//   { id: 1, senderId: 1, text: "Hey! How are you?" },
//   { id: 2, senderId: 2, text: "I'm good! What about you?" },
//   { id: 3, senderId: 1, text: "Just working on a project." },
//   { id: 1, senderId: 1, text: "Hey! How are you?" },
//   { id: 2, senderId: 2, text: "I'm good! What about you?" },
//   { id: 3, senderId: 1, text: "Just working on a project." },
//   { id: 1, senderId: 1, text: "Hey! How are you?" },
//   { id: 2, senderId: 2, text: "I'm good! What about you?" },
//   { id: 3, senderId: 1, text: "Just working on a project." },
//   { id: 1, senderId: 1, text: "Hey! How are you?" },
//   { id: 2, senderId: 2, text: "I'm good! What about you?" },
//   { id: 3, senderId: 1, text: "Just working on a project." },
//   { id: 1, senderId: 1, text: "Hey! How are you?" },
//   { id: 2, senderId: 2, text: "I'm good! What about you?" },
//   { id: 3, senderId: 1, text: "Just working on a project." },
// ];

const currentUserId = 21;

const Messaging = () => {

  const socket = getSocket();
  const location = useLocation();
  const receiver_id = location.state?.receiver_id;
  const {data, error: messageError, isLoading: messageIsLoading} = useGetMessageQuery(receiver_id);
  
  const [messages, setMessages] = useState<GetMessage[]>([]);

  useEffect(() => {
    const initialMessages = data?.message || [];
    setMessages(initialMessages);
  },[data?.message])

  useEffect(() => {
    if (socket) {
      socket.on("receive_message",(newMessage) => {
        console.log("Receive New Message:", newMessage);
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      })
    }
  });


  return (
    <div className="flex flex-col flex-grow justify-end flex-1 m-1">
      <div className="flex flex-col">
        {messages && messages.length > 0 ? (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex m-2 ${
                message.sender_id === currentUserId
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div className="border border-blue-400 rounded-xl px-2">
                {message.message}
              </div>
            </div>
          ))
        ) : (
          <div className="flex-col">asdasdasd</div>
        )}
      </div>
      
    </div>
  );
};

export default Messaging;
