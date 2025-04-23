import {useState, useEffect} from "react";
import MessageFriendsList from "../../pages/MessageFriendsList";
import Messages from "../../pages/Messages";

const useIsMobile = (breakpoint = 768) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);
  
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);
  
    return isMobile;
  };


const MessageRouter = () => {
  const isMobile = useIsMobile();
  

  if (isMobile) {
    return <MessageFriendsList/>;
  }

  return (
    <Messages/>
  );
};


export default MessageRouter
