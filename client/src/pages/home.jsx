import React from "react";
import protectRoute  from "../components/auth/protectedRoutes";
import SideBar from "../components/home/sideBar";
import Middle from "../components/home/middle";
import RightPart from "../components/home/rightPart";

const Home = () => {
  protectRoute()
  return (
    <div className="bg-gray-200 dark:bg-mainDark flex items-start justify-between w-full h-[100vh] overflow-hidden">
        <SideBar display="hidden md:flex h-fit max-h-[100vh] px-5" isHome={true} addPost={true} />
        <Middle />
        <RightPart />
      </div>
  );
}

export default Home