import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { HomeAll } from "./homeAll/homeAll";
import Profile from "./rightPart/profile";
import PopularProfiles from "./rightPart/popularProfiles";


const RightPart = (props) => {
  
  return (
    <main className="right-home  bg-white dark:bg-majorDark w-fit p-5 h-[100vh] hidden lg:block lg:w-[30%] xl:w-[16%] xl:min-w-[16rem] xl:max-w-[20rem]">
      <HomeAll />
      <hr className=" border  border-[#cfcdcd] " />
      <Profile />
      <hr className=" border mt-5 mb-5  border-[#cfcdcd] " />
      <PopularProfiles />
    </main>
  );
};

export default RightPart;
