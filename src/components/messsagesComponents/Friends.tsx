import { useNavigate } from "react-router";

const mockFriends = [
  {id:22, name:"Wwazza"},
  {id:5, name:"JJuario"},
  {id:21, name:"HelloWorld44"},
  // "Alice",
  // "Bob",
  // "Charlie",
  // "David",
  // "John",
  // "Wazzap",
  // "Mga",
  // "Bugo ",
  // "Naay",
  // "Sakit",
  // "Sa Utok",
  // "Ah",
  // "Samoka",
  // "Sad",
  // "Kayo",
  // "Ani",
  // "Oy",
];
const ProfilePlaceholder = "/assets/profile.webp"

const Friends = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col border border-black min-w-full flex-grow">
        <div className="flex flex-row justify-between min-w-full min-h-[74px] border border-red-500  sticky top-0 z-10 bg-white">
          <div>back</div>
          <div>name</div>
          <div>new message</div>
        </div>
        {/* Scrollable Messages */}
        <div className="lg:flex lg:flex-row">
          <div className="flex-grow overflow-y-auto">
            <div className="flex flex-col divide-y border border-black divide-gray-200">
              {mockFriends.map((friend, index) => (
                <div
                  onClick={() => navigate("/messaging",{state:{receiver_id: friend.id }})}
                  key={index}
                  className="p-4"
                >
                  <span className="flex flex-row justify-start">
                    <img className="hidden lg:inline-block size-[44px] border border-blue-500 rounded-full object-cover" src={ProfilePlaceholder}></img>
                    <div className="flex flex-col px-2">
                      {friend.name}
                      <div>last message</div>
                    </div>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Friends;
