import React from "react";
import { Link } from "react-router-dom";
import protectRoute from "../../auth/protectedRoutes";
import { getProfileImage } from "../../profileCover/profileCover";

export const SideComp = (props) => {
  return (
    <main
      className="sidebar-home font-semibold hover:bg-gray-200 dark:hover:bg-mainDark p-2 rounded-md text-gray-800 dark:text-gray-200"
      onClick={props.onClick}
    >
      <div className="flex w-fit items-center gap-2">
        <div className="bg-gray-200 dark:bg-gray-700 rounded-full p-2">
          {props.component}
        </div>
        <span>
          {props.title}
          {props.true && (
            <div className="w-full h-[.188rem] bg-gray-700 dark:bg-gray-200 rounded-full"></div>
          )}
        </span>
      </div>
    </main>
  );
};
import PostShare from "../middle/PostShare";
import { CloseCirled, LogoutIcon } from "../../../assets/icons/icons";
import { useState } from "react";
export const AddPost = (props) => {
  const [showAddPost, setShowAddPost] = useState(false);
  return (
    <main className="sidebar-home text-xs font-semibold hidden md:block text-gray-200 rounded-full bg-blue-500 w-fit px-2 py-1">
      <div
        className="flex w-fit items-center gap-2 p-1 cursor-pointer"
        onClick={() => {
          setShowAddPost(!showAddPost);
        }}
      >
        {props.component}
        <span>{props.title}</span>
      </div>
      {showAddPost && (
        <div className="absolute top-[20%] w-8/12 bg-white p-5 rounded-md shadow-2xl dark:bg-subMajorDark">
          <CloseCirled
            action={() => {
              setShowAddPost(!setShowAddPost);
            }}
            position="h-[2rem] text-red-500 cursor-pointer w-[2rem] absolute left-1/2"
          />
          <PostShare />
        </div>
      )}
    </main>
  );
};

import { useNavigate } from "react-router-dom";

export const UserProfile = () => {
  const [email, firstName, lastName] = protectRoute();
  const profileImageUrl = getProfileImage();
  const navigate = useNavigate();
  const logOut = () => {
    document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    navigate("/authenticate");
  };
  return (
    <div className="flex flex-col gap-5">
      <Link to="/u/user">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-black w-fit overflow-hidden">
            {profileImageUrl && (
              <img
                className="object-cover h-10 w-10"
                src={profileImageUrl}
                alt="the profile image"
              />
            )}
          </div>
          <span className="text-md font-bold text-gray-800 dark:text-gray-200 flex flex-wrap max-w-[8rem] ">
            {firstName} {lastName}
          </span>
        </div>
      </Link>
      <div className="cursor-pointer" onClick={logOut}>
        <SideComp component={<LogoutIcon />} title={"Logout"} />
      </div>
    </div>
  );
};
