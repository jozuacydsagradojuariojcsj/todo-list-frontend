import Messaging from "../components/messsagesComponents/Messaging";
import { useEffect, useState } from "react";


const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};


const Messages = () => {
  const isMobile = useIsMobile();

  if(isMobile){
    return (
      <div className="flex flex-col border border-red-500 w-full overflow-y-scroll ">
      <div className="flex flex-row items-center justify-between bg-white border border-green-500 sticky top-0 z-10 w-full min-h-[75px] p-4">
        <div className="flex flex-row items-center">
          <div className="border border-violet-500 rounded-full size-[44px] overflow-hidden m-2"></div>
          Name
        </div>
        info
      </div>
      <div className="flex flex-row">
        <Messaging />
      </div>
      <div className="flex flex-col sticky bottom-0 z-10 w-full px-2 min-h-[78px] justify-center items-center bg-white">
        <input className="border border-yellow-500 w-full h-[44px] rounded-full px-5"></input>
      </div>
    </div>
    );
  }
  return (
    <div className="flex flex-row w-full">
      <div className="border border-violet-500 w-[150px] overflow-y-scroll">

      </div>
      <div className="flex flex-col border border-red-500 w-full overflow-y-scroll ">
      <div className="flex flex-row items-center justify-between bg-white border border-green-500 sticky top-0 z-10 w-full min-h-[75px] p-4">
        <div className="flex flex-row items-center">
          <div className="border border-violet-500 rounded-full size-[44px] overflow-hidden m-2"></div>
          Name
        </div>
        info
      </div>
      <div className="flex flex-row">
        <Messaging />
      </div>
      <div className="flex flex-col sticky bottom-0 z-10 w-full px-2 min-h-[78px] justify-center items-center bg-white">
        <input className="border border-yellow-500 w-full h-[44px] rounded-full px-5"></input>
      </div>
    </div>

    </div>
    
  );
};

export default Messages;
