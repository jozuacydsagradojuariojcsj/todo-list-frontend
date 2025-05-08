import { useEffect, useState } from "react";
import { GetMessage } from "../../types/messageType";
import { connectSocket, getSocket } from "../../services/socket";
import {
  useGetMessageQuery,
  useCreateMessageMutation,
} from "../../services/messageApi";
import { useLocation } from "react-router";
import { useSelector } from "react-redux"
import { RootState } from "../../store";
// const userInfo = Cookies.get("userInfo");
// console.log(userInfo["userid"])


const Messaging = () => {
  const user2 = useSelector((state: RootState) => state.user);
  const location = useLocation();
  const receiver_id = location.state?.receiver_id;
  const {
    data,
    error: messageError,
    isLoading: messageIsLoading,
  } = useGetMessageQuery(receiver_id);
  const [createMessage, { isLoading, error }] = useCreateMessageMutation();
  const currentUserId = user2.userid;
  const [messages, setMessages] = useState<GetMessage[]>([]);
  const [receiverID, setReceiverID] = useState("");
  const [chatRoomID, setChatRoomID] = useState("");
  const [sendNewMessage, setSendNewMessage] = useState("");

  useEffect(() => {
    console.log(user2);
    connectSocket();
  },[])
  
  useEffect(() => {
    setMessages([]);
    console.log("data?.message:", data?.message);
    
    if (data != null) {
      const initialMessages = data?.message || [];
      const chat_room_id = data?.message?.[0]?.chat_room_id;
      setReceiverID(receiver_id);
      setChatRoomID(chat_room_id);
      setMessages(initialMessages);
    }
  }, [data?.message, receiver_id, data]);

  useEffect(() => {
    const socket = getSocket();
    
    console.log(socket)
    if (socket && chatRoomID) {
      socket.emit("join_room", chatRoomID);
      console.log("room join",chatRoomID)

      const handleReceiveMessages = (newMessage:GetMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        console.log("Receive New Messages:",newMessage);
      };
    
      socket.on("receive_message", handleReceiveMessages);
      return () => {
        socket.off("receive_message", handleReceiveMessages);
        console.log("Cleaned up socket listener");
      };      
    }
  },[chatRoomID]);

  const handleSendNewMessage = async () => {
    try {
      const messagePayload = {
        message: sendNewMessage,
        receiver_id: receiverID,
      };
      const response = await createMessage({post:messagePayload, chatRoomId:chatRoomID}).unwrap();
      console.log("Message Sent successfully:", response);
    } catch (err) {
      console.log("Error sending message", err);
    }
  };

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
        <div className="flex flex-row w-full border border-yellow-500 rounded-full h-[44px] px-5">
          <input
            className="flex flex-row border-none focus:outline-none w-full"
            onChange={(e) => setSendNewMessage(e.target.value)}
          />
          <button className="border border-red-500" onClick={handleSendNewMessage}> Send</button>
        </div>
      </div>
    </>
  );
};

export default Messaging;
