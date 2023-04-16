import React from "react";
import { protectRoute } from "../components/auth/protectedRoutes";
import SideBar from "../components/home/sideBar";
import Middle from "../components/home/middle";
import RightPart from "../components/home/rightPart";

const Home = () => {
  protectRoute()
  return (
    <div className="bg-gray-200 dark:bg-mainDark flex items-start w-full">
        <SideBar display="hidden md:flex h-[100vh] px-5" />
        <Middle />
        <RightPart />
      </div>
  );
}

export default Home