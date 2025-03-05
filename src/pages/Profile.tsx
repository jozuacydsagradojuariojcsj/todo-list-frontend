import React, { useState } from "react";
import PostTab from "../components/tabComponents/PostTab";
import { Grid,UserSquare2, Videotape } from "lucide-react";

const tabs = [
    { id: "home", label: <Grid/> , content: <PostTab/> },
    { id: "profile", label: <Videotape/>, content: "👤 This is your profile" },
    { id: "settings", label: <UserSquare2/>, content: "⚙️ Adjust your settings" },
  ];

  const ProfilePlaceholder = "/assets/profile.webp"

const Profile = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex flex-col flex-1 border border-red-500 h-screen">
      <div className="flex flex-row justify-between border border-green-600">
        <span>jozuacyd</span>
        <div className="flex flex-row border border-yellow-300">
          threads, asdasda, more
        </div>
      </div>
      <div className="flex flex-row justify-evenly border items-center border-violet-500">
        <img src={ProfilePlaceholder} className="object-cover justify-center rounded-full size-[50px]"/>
        
        <div className="flex flex-col">
          name
          <div className="flex flex-row">0, 66, 99</div>
          <div className="flex flex-row">posts, followers, following</div>
        </div>
      </div>
      threads
      <div className="flex flex-row justify-between">
        <div>edit profile</div>
        <div>share profile</div>
        <div>add</div>
      </div>
      <div className="flex flex-col">

      <div className="flex flex-row max-w-screen border border-green-400">
      {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 px-4 flex justify-center ${
              activeTab === tab.id ? "border-b-2 border-blue-500 font-bold" : "text-gray-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
        

      </div>
      <div className="p-4">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="text-lg">
                {tab.content}
              </div>
            )
        )}
      </div>
      </div>
    </div>
  );
};

export default Profile;
