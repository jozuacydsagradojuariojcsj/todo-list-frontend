import Friends from "../components/messsagesComponents/Friends";
import Messaging from "../components/messsagesComponents/Messaging";

const Messages = () => {
  return (
    <div className="flex flex-col w-full overflow-y-scroll h-full">
        <Friends />
    </div>
  );
};

export default Messages;
