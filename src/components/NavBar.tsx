import {
  Heart,
  House,
  MenuIcon,
  MessageCircle,
  PlusSquare,
  Search,
} from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
// interface NavbarProps {
//   icon?: React.ReactNode | string;
// }

const navItems = [
  {
    id: "home",
    icon: <House className="size-7" />,
    text: "Home",
    path: "dashboard",
  },
  {
    id: "search",
    icon: <Search className="size-7" />,
    text: "Search",
    path: "search",
  },
  {
    id: "create",
    icon: <PlusSquare className="size-7" />,
    text: "Create",
    path: "create",
  },
  {
    id: "notifications",
    icon: <Heart className="size-7" />,
    text: "Notifications",
    path: "notification",
  },
  {
    id: "profile",
    icon: "/assets/profile.webp",
    text: "Profile",
    path: "profile",
  },
  { id: "message", icon: <MessageCircle />, text: "Message", path: "message" },
  {
    id: "more",
    icon: <MenuIcon className="size-7" />,
    text: "More",
    path: "more",
  },
];
const NavBar = () => {
  const [activeItem, setActiveitem] = useState<string>("home");
  const navigate = useNavigate();
  const location = useLocation();
  const isMessageRoute = location.pathname === "/message" || location.pathname === "/messaging";

  if (isMessageRoute) {
    return (
      <>
        <div className="hidden md:inline-block w-0.5 self-stretch bg-neutral-100 dark:bg-white/10" />
        <div className="flex flex-row items-center justify-evenly position-sticky px-3 min-h-[48px] min-w-[100px] md:min-h-full md:flex-col md:items-start md:justify-start md:gap-y-0 md:py-20">
          {/* <Text className="hidden md:flex pl-3 font-cursive text-4xl" text="Instagram"/> */}
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveitem(item.id);
                navigate(item.path);
              }}
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all ${activeItem === item.id
                  ? "bg-gray-200 text-black"
                  : "text-gray-600"
                }`}
            >
              {typeof item.icon === "string" ? (
                <img
                  src={item.icon}
                  alt={item.text}
                  className="size-7 rounded-full object-cover"
                />
              ) : (
                <item.icon.type
                  className={`size-[24px] ${activeItem === item.id
                      ? "text-black stroke-2 stroke-black"
                      : "text-gray-500"
                    }`}
                />
              )}
              <span className="font-roboto hidden">
                {item.text}
              </span>
            </button>
          ))}
        </div>
      </>
    );
  }
  return (
    <>
      <div className="hidden md:inline-block w-0.5 self-stretch bg-neutral-100 dark:bg-white/10" />
      <div className="flex flex-row items-center justify-evenly position-sticky px-3 min-h-[48px] min-w-[50px] md:min-h-full xl:min-w-[220px] 2xl:min-w-[315px] md:flex-col md:items-start md:justify-start md:gap-y-0 md:py-20">
        {/* <Text className="hidden md:flex pl-3 font-cursive text-4xl" text="Instagram"/> */}
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveitem(item.id);
              navigate(item.path);
            }}
            className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all ${activeItem === item.id
                ? "bg-gray-200 text-black"
                : "text-gray-600"
              }`}
          >
            {typeof item.icon === "string" ? (
              <img
                src={item.icon}
                alt={item.text}
                className="size-7 rounded-full object-cover"
              />
            ) : (
              <item.icon.type
                className={`size-[24px] ${activeItem === item.id
                    ? "text-black stroke-2 stroke-black"
                    : "text-gray-500"
                  }`}
              />
            )}
            <span className="font-roboto hidden xl:flex xl:text-sm">
              {item.text}
            </span>
          </button>
        ))}
      </div>
    </>
  );
};

export default NavBar;
