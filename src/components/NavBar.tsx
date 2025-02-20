import { Heart, House, Menu, PlusSquare, Search } from "lucide-react";
interface NavbarProps {
  icon?: React.ReactNode | string;
}

const navItems = [
    {icon: <House className="w-7 h-7"/>, text: "Home"},
    {icon: <Search className="w-7 h-7" />, text: "Search"},
    {icon: <PlusSquare className="w-7 h-7" />, text: "Create"},
    {icon: <Heart className="w-7 h-7" />, text: "Notifications"},
];
const NavBar = ({ icon }: NavbarProps) => {

  return (
    <div className="flex flex-row items-center justify-evenly position-sticky min-h-14 md:flex-col md:items-start md:justify-start md:gap-y-5 md:py-20 md:px-5 md:w-60">

        {navItems.map((item, index)=>(
            <div key={index} className="flex items-center gap-2">
                {item.icon}
                <span className=" font-roboto hidden md:flex text-base">{item.text}</span>
            </div>
        ))}
      
        

      <div className="flex items-center gap-2">
        <button
          className={`flex items-center justify-center font-noto text-base rounded-lg`}
        >
          {icon && typeof icon === "string" ? (
            <img src={icon} alt="icon" className="rounded-full w-7 h-7 " />
          ) : (
            icon
          )}
        </button>
        <span className="font-roboto hidden md:flex text-base">Profile</span>
      </div>

      <div className="flex item-center gap-2">
        <Menu className="w-7 h-7" />
        <span className="font-roboto hidden md:flex text-base">More</span>
      </div>
    </div>
  );
};

export default NavBar;
