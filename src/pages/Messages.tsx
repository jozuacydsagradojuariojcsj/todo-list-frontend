import Friends from "../components/messsagesComponents/Friends";
import Messaging from "../components/messsagesComponents/Messaging";

const Messages = () => {
  return (
    <div className="flex flex-col w-full overflow-y-scroll">
      <div className="flex flex-row border border-yellow-500">
        <Friends />
        <Messaging />
      </div>
    </div>
  );
};

export default Messages;
