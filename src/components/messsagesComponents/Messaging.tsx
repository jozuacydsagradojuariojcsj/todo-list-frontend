import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { CreateMessage, GetMessage } from "../../types/messageType";
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

const currentUserId = 1;

const Messaging = () => {

  const socket = getSocket();
  const location = useLocation();
  const receiver_id = location.state?.receiver_id;
  const {data: initialMessages=[], error: messageError, isLoading: messageIsLoading} = useGetMessageQuery(receiver_id);
  const [messages, setMessages] = useState<GetMessage[]>([]);

  useEffect(() => {
    setMessages(initialMessages);
  },[initialMessages])

  // useEffect(() => {
  //   if (socket) {
  //     socket.on("receive_message",(newMessage) => {
  //       console.log("Receive New Message:", newMessage);
  //       setMessages((prevMessages) => [...prevMessages, newMessage]);
  //     })
  //   }
  //   // const userInfo = Cookies.get("userInfo");
  //   // console.log(userInfo);
  //   // if (userInfo) {
  //   //   const parsedUser = JSON.parse(userInfo); // Parse JSON
  //   //   console.log("whwhwhwhw", parsedUser.userid);
  //   // }
  // });

  // useEffect(() => {
  //   setMessages((prev) => {
  //     const isEqual =
  //       prev.length === initialMessages.length &&
  //       prev.every((msg, i) => msg.id === initialMessages[i]?.id); // or a better equality check
  
  //     return isEqual ? prev : initialMessages;
  //   });
  // }, [initialMessages]);
  

  useEffect(() => {
    setMessages((prev) => {
      const isEqual =
        prev.length === initialMessages.length &&
        prev.every((msg, i) => msg.id === initialMessages[i]?.id); // or a better equality check
  
      return isEqual ? prev : initialMessages;
    });
  }, [initialMessages]);
  

  return (
    <div className="flex flex-col flex-grow justify-center flex-1 m-1">
      <div className="flex flex-col justify-end">
        {messages && messages.length > 1 ? (
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
          <div>asdasdasd</div>
        )}
      </div>
      
    </div>
  );
};

export default Messaging;
