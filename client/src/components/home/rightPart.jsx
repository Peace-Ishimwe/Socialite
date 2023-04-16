import React, { useState } from "react";
import { ChrevonDown , CloseCirled } from "../../assets/icons/icons";
import ProfileImage from "../../assets/Images/profile.jpeg";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const RightPart = (props) => {
  const [hidden , setHidden] = useState('hidden')
  const toggleMenu = () => {
    if(hidden === 'hidden'){
      setHidden('')
    }else{
      setHidden('hidden')
    }
  }
  
  const navigate = useNavigate()
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const logOut = () => {
    removeCookie("jwt");
    navigate("/authenticate");
  };
  return (
    <main className="right-home  bg-white dark:bg-majorDark w-fit p-5 h-[100vh] overflow-scroll hidden lg:block lg:w-3/12 xl:w-fit">
      <div className="flex md:gap-5 gap-2 items-center mb-8 justify-end">
        <div className="relative">
          <div onClick={toggleMenu} className="bg-gray-200 dark:bg-gray-700 rounded-full p-1 h-10 w-10 flex items-center justify-center">
            <ChrevonDown />
          </div>
          <div className={`p-2 bg-white rounded-md border-2 shadow-md dark:bg-gray-200 dark:border-none absolute z-[1] left-1/2 transform -translate-x-1/2 ${hidden} transition-all duration-1000 moreHome flex flex-col gap-2`}>
            <CloseCirled position="place-self-end" action={toggleMenu} />
            <button className="py-1 px-3 rounded-md text-gray-200 bg-red-500" onClick={logOut}>Logout</button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="rounded-full bg-black w-fit overflow-hidden">
            <img
              className="object-cover h-10 w-10"
              src={ProfileImage}
              alt="the profile image"
            />
          </div>
        </div>
      </div>
      <hr className=" border  border-[#cfcdcd] " />
      <div className="profile-user mt-5 bg-gray-200 dark:bg-subMajorDark rounded-2xl overflow-hidden pb-5">
        <div className="relative w-fit">
          <img className="w-[20rem] h-[8rem] object-cover" src={ProfileImage} alt="the cover image" />
          <img className="object-cover w-28 h-28 rounded-full absolute top-16 left-1/2 transform -translate-x-1/2" src={ProfileImage} alt="the profile image" />
        </div>
        <div className="ProfileName mt-16 flex flex-col items-center justify-center mb-4">
          <span className="dark:text-gray-200 text-gray-700 text-xl font-semibold">Peace Ishimwe</span>
          <span className="dark:text-gray-200 text-gray-700">Junior software developer</span>
        </div>
        <hr className=" w-[85%] border  border-[#cfcdcd] mx-auto" />
        <div className="followStatus flex mt-4 mb-4 items-center justify-evenly">
            <div className="follow flex flex-col justify-center items-center">
              <span className="dark:text-gray-200 text-gray-700 font-bold text-xl">6,890</span>
              <span className="dark:text-gray-200 text-gray-700">Followers</span>
            </div>
            <div className="h-14 w-[.13rem] bg-[#cfcdcd]"></div>
            <div className="follow flex flex-col justify-center items-center">
              <span className="dark:text-gray-200 text-gray-700 font-bold text-xl">1</span>
              <span className="dark:text-gray-200 text-gray-700">Followings</span>
            </div>
        </div>
        <hr className=" w-[85%] border  border-[#cfcdcd] mx-auto" />
        <div className="text-center mt-4 text-blue-500 text-lg font-semibold">
            <a href="#">My Profile</a>
        </div>
      </div>
    </main>
  );
};

export default RightPart;
