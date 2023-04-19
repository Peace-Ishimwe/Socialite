import React from "react";
import { protectRoute } from "../components/auth/protectedRoutes";
import SideBar from "../components/home/sideBar";
import Header from "../components/navBar/header";

const UserDashboard = () => {
  protectRoute()
  return (
    <div className="bg-gray-200 dark:bg-mainDark flex items-start w-full h-[100vh] overflow-hidden">
        <SideBar display="hidden md:flex h-fit max-h-[100vh] px-5" />
        <Header/>
        
      </div>
  );
}

export default UserDashboard;