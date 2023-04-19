import React from "react";
import { protectRoute } from "../components/auth/protectedRoutes";
import SideBar from "../components/home/sideBar";
import Header from "../components/navBar/header";
import User from "../components/userDashboard/user";
import UserInfo from "../components/userDashboard/userInfo";
import UserPost from "../components/userDashboard/userPost";

const UserDashboard = () => {
  protectRoute()
  return (
    <div className="bg-gray-200 dark:bg-mainDark flex h-[100vh] overflow-y-scroll">
        <SideBar display="hidden md:flex h-fit max-h-[100vh] px-5" />
        <div className="w-full h-[100vh] overflow-y-scroll">
            <Header/>
            <User />
            <UserInfo />
            <UserPost />
        </div>
      </div>
  );
}

export default UserDashboard;