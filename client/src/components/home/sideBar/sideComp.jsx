import React from "react";
import { Link } from "react-router-dom";
import protectRoute from "../../auth/protectedRoutes";
import { getProfileImage } from "../../profileCover/profileCover";

export const SideComp = (props) => {
  return (
    <main
      className={`sidebar-home font-semibold ${props.style}  rounded-md text-gray-800 dark:text-gray-200`}
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
import { useState } from "react";
import { Button, Modal } from "@mui/material";

export const AddPost = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <main className="sidebar-home text-xs font-semibold flex  rounded-full bg-blue-500 w-fit px-2 py-1">
      <Button onClick={handleOpen}>
        <div className="flex w-fit items-center gap-2 p-1 cursor-pointer text-gray-200">
          {props.component}
          <span>{props.title}</span>
        </div>
      </Button>
      <Modal open={open} onClose={handleClose}>
        <div className="moreHome absolute top-[40%] left-[5%] sm:left-[15%] w-11/12 sm:w-8/12 bg-white p-5 rounded-md shadow-2xl dark:bg-subMajorDark">
          <PostShare />
        </div>
      </Modal>
    </main>
  );
};

import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { LogoutIcon } from "../../../assets/icons/icons";

export const UserProfile = () => {
  const [email, firstName, lastName] = protectRoute();
  const profileImageUrl = getProfileImage();
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const logOut = () => {
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    removeCookie("jwt");
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
