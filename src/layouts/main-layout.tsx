import NavBar from "@/components/nav-bar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-50 ">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
