import { useEffect, useState } from "react";
import { GetMessage } from "../../types/messageType";
import { getSocket } from "../../services/socket";
import { useGetMessageQuery } from "../../services/messageApi";
import { useLocation } from "react-router";

const currentUserId = 21;

const Messaging = () => {
  const socket = getSocket();
  const location = useLocation();
  const receiver_id = location.state?.receiver_id;
  const {
    data,
    error: messageError,
    isLoading: messageIsLoading,
  } = useGetMessageQuery(receiver_id);

  const [messages, setMessages] = useState<GetMessage[]>([]);
  const [receiverID, setReceiverID] = useState("");
  const [chatRoomID, setChatRoomID] = useState("");
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    setMessages([]);
    console.log("data?.message:",data?.message)

    if (data != null) {
      const initialMessages = data?.message || [];
      const chat_room_id = data?.message?.[0]?.chat_room_id;
      setReceiverID(receiver_id);
      setChatRoomID(chat_room_id);
      setMessages(initialMessages);
    }
  }, [data?.message]);

  useEffect(() => {
    console.log("setMessage:",messages)
    if (socket) {
      socket.on("receive_message", (newMessage) => {
        console.log("Receive New Message:", newMessage);
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      });
    }
  });

  return (
    <>
      <div
        className={`flex flex-col flex-grow border border-black flex-1 m-1 ${
          messages && messages.length > 0
            ? "justify-end"
            : "justify-center items-center"
        }`}
      >
        <div className="flex flex-col border border-red-500">
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
            <div className="flex-col">
              <div>Start a message by saying hello</div>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col sticky bottom-0 z-10 min-w-full px-2 min-h-[78px] justify-center items-center bg-white">
        <input className="border border-yellow-500 w-full h-[44px] rounded-full px-5" onChange={(e) => setNewMessage(e.target.value)}></input>
      </div>
    </>
  );
};

export default Messaging;
