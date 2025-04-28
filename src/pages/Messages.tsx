import Friends from "../components/messsagesComponents/Friends";
import Messaging from "../components/messsagesComponents/Messaging";

const Messages = () => {
  return (
    <div className="flex flex-row w-full overflow-y-scroll flex-grow no-scrollbar">
      <div className="hidden lg:flex flex-col w-full lg:w-1/2 overflow-y-scroll h-full">
        <Friends />
      </div>
      <div className="flex flex-col border border-red-500 w-full overflow-y-scroll">
        <div className="flex flex-row items-center justify-between bg-white border border-green-500 sticky top-0 z-10 w-full min-h-[75px] p-4">
          <div className="flex flex-row items-center">
            <div className="border border-violet-500 rounded-full size-[44px] overflow-hidden m-2"></div>
            Name
          </div>
          info
        </div>
      
        <Messaging />

        


        <div className="flex flex-col sticky bottom-0 z-10 min-w-full px-2 min-h-[78px] justify-center items-center bg-white">
          <input className="border border-yellow-500 w-full h-[44px] rounded-full px-5"></input>
        </div>
      </div>
    </div>
  );
};

export default Messages;
