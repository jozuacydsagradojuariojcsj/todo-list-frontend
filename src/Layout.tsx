import { Outlet } from "react-router";
import NavBar from "./components/NavBar";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen md:flex-row-reverse">
      <Outlet />
      <NavBar />
    </div>
  );
};

export default Layout;
