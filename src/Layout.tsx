import { Outlet, useLocation } from "react-router";
import NavBar from "./components/NavBar";

const Layout = () => {

  const location = useLocation();
  const isMessageRoute = location.pathname === "/message" || location.pathname === "/messaging";

  if(isMessageRoute) {
    return (
      <div className="flex flex-col h-screen md:flex-row-reverse">
      <Outlet />
      <NavBar />
      
    </div>
    );
  }
  return (
    <div className="flex flex-col h-screen md:flex-row-reverse">
      <Outlet />
      <NavBar />
      
    </div>
  );
};

export default Layout;
