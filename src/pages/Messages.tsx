import Messaging from "../components/messsagesComponents/Messaging";

const mockFriends = [
  "Alice",
  "Bob",
  "Charlie",
  "Diana",
  "Eve",
  "Frank",
  "Grace",
  "Hannah",
  "Ivan",
  "Judy",
  "Kevin",
  "Liam",
  "Mona",
  "Nate",
  "Olivia",
  "Paul",
  "Quincy",
  "Rachel",
  "Steve",
  "Tina",
];
const ProfilePlaceholder = "/assets/profile.webp"

const Messages = () => {
  return (
    <div className="flex flex-row w-full">
      <div className="hidden lg:flex border flex-col border-violet-500 w-[150px] overflow-y-scroll py-5">
        <div className="flex flex-col items-center gap-y-2">

        {mockFriends.map(() => (
          <img className="rounded-full size-[50px] border border-red-500 object-cover" src={ProfilePlaceholder}>

          </img>
        ))}
        </div>
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
        <div className="flex flex-col sticky bottom-0 z-10 w-full px-2 min-h-[78px] justify-center items-center bg-white">
          <input className="border border-yellow-500 w-full h-[44px] rounded-full px-5"></input>
        </div>
      </div>
    </div>
  );
};

export default Messages;
