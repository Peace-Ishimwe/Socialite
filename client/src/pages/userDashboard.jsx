import React from "react";
import { protectRoute } from "../components/auth/protectedRoutes";
import SideBar from "../components/home/sideBar";
import Header from "../components/navBar/header";
import User from "../components/userDashboard/user";

const UserDashboard = () => {
  protectRoute()
  return (
    <div className="bg-gray-200 dark:bg-mainDark flex">
        <SideBar display="hidden md:flex h-fit max-h-[100vh] px-5" />
        <div className="w-full">
            <Header/>
            <User />
        </div>
      </div>
  );
}

export default UserDashboard;