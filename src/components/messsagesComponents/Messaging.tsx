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

  useEffect(() => {
    setMessages([]);

    if (data?.message) {
      const initialMessages = data?.message || [];
      setMessages(initialMessages);
    }
  }, [data?.message]);

  useEffect(() => {
    if (socket) {
      socket.on("receive_message", (newMessage) => {
        console.log("Receive New Message:", newMessage);
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      });
    }
  });

  return (
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
  );
};

export default Messaging;
