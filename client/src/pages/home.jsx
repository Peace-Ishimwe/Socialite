import React from "react";
import { protectRoute } from "../components/auth/protectedRoutes";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/home/sideBar";
import Middle from "../components/home/middle";
import Switcher from "../components/theme/switcher";
import RightPart from "../components/home/rightPart";

const Home = () => {
  // const navigate = useNavigate()
  // const [cookies, setCookie, removeCookie] = useCookies([]);
  protectRoute()
  // const logOut = () => {
  //   removeCookie("jwt");
  //   navigate("/authenticate");
  // };
  return (
    <div className="bg-gray-200 dark:bg-mainDark flex items-start w-full">
        {/* <Switcher /> */}
        <SideBar />
        <Middle />
        <RightPart />
      </div>
  );
}

export default Home