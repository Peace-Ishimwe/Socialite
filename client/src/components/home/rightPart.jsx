import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { HomeAll } from "./homeAll/homeAll";
import Profile from "./rightPart/profile";
const RightPart = (props) => {
  
  const navigate = useNavigate()
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const logOut = () => {
    removeCookie("jwt");
    navigate("/authenticate");
  };
  return (
    <main className="right-home  bg-white dark:bg-majorDark w-fit p-5 h-[100vh] overflow-scroll hidden lg:block lg:w-[30%] xl:w-fit">
      <HomeAll display = "flex" logout= {logOut} />
      <hr className=" border  border-[#cfcdcd] " />
      <Profile />
    </main>
  );
};

export default RightPart;
