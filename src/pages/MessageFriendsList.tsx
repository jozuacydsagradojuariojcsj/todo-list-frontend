import Friends from "../components/messsagesComponents/Friends";

const MessageFriendsList = () => {
  return (
    <div className="flex flex-row w-full overflow-y-scroll">
      <div className="flex flex-col w-full lg:w-1/2 overflow-y-scroll h-full">
        <Friends />
      </div>
      <div className="hidden lg:flex border border-green-500 w-full">Hllo world</div>
    </div>
  );
};

export default MessageFriendsList;
